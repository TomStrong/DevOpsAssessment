/*
 * Copyright [2023] [Coordinated Chaos]
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let userId;
let Lat;
let Lon;
let map;
let watchId;
const geoBtn = document.getElementById('enableGeolocation');
const revokeBtn = document.getElementById('revokeGeolocation');
const customIcon = L.icon({
    iconUrl: './icons/currentlocationicon.png',
    iconSize: [32, 32], // Adjust the size as needed
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
});
document.addEventListener('DOMContentLoaded', function () {
    Logincheck();
    getLocation();

    map = L.map('map1');

    const attrib =
        'Map data copyright OpenStreetMap contributors, Open Database Licence';

    const tileLayer = L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        { attribution: attrib }
    ).addTo(map);

    map.on('click', async (e) => {
        const lat = `${e.latlng.lat}`;
        const lon = `${e.latlng.lng}`;
        if (document.getElementById('poi_results').hidden == false) {
            // Prevent showing the results div on top of the addPoi form!!
            document.getElementById('poi_results').hidden = true;
        }
        const addpoi = document.getElementById('addpoi');
        addpoi.hidden = false;

        document
            .getElementById('ADD POI')
            .addEventListener('click', async (e) => {
                e.preventDefault();

                const form = document.getElementById('addPoiForm');

                const formData = new FormData(form);
                formData.append('lat', lat);
                formData.append('lon', lon);

                try {
                    const token = localStorage.getItem('token');
                    if (!formData.get('name'))
                        return alert('Please enter a name for the POI');
                    if (!formData.get('type'))
                        return alert('Please enter a type for the POI');
                    if (!formData.get('country'))
                        return alert('Please enter a country for the POI');
                    if (!formData.get('region'))
                        return alert('Please enter a region for the POI');
                    if (!formData.get('lat'))
                        return alert('Failed to get latitude for the POI');
                    if (!formData.get('lon'))
                        return alert('Failed to get longitude for the POI');
                    if (!formData.get('description'))
                        return alert('Please enter a description for the POI');

                    const response = await fetch('/pois/addPoi', {
                        method: 'POST',
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                        body: formData,
                    });

                    const data = await responseHandler(response, true);
                    if (data === false) return;
                    addpoi.hidden = true;

                    const pos = [lat, lon];
                    const marker = L.marker(pos).addTo(map);
                    marker
                        .bindPopup(
                            `<b>${data.poi.name}</b><br>${data.poi.description}`
                        )
                        .openPopup();
                } catch (e) {
                    alert(`Error: ${e}`);
                }
            });
    });

    document.getElementById('poi_search').addEventListener('click', (e) => {
        e.preventDefault();
        if (document.getElementById('addpoi').hidden == false) {
            document.getElementById('addpoi').hidden = true;
        } // Don't show this form right now
        const region = document.getElementById('poi_region').value;
        ajaxSearch(region);
    });
});
async function ajaxSearch(region) {
    const resultsDiv = document.getElementById('poi_results');
    const tbody = document.getElementById('TableBody');
    const UpdateBtn = document.getElementById('transUpdate').innerText;
    const DeleteBtn = document.getElementById('transDelete').innerText;
    const ImageBtn = document.getElementById('transImage').innerText;

    tbody.innerHTML = '';

    const token = localStorage.getItem('token');
    const ajaxResponse = await fetch(`/pois/list?search=${region}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    let pois = await ajaxResponse.json();
    if (pois.length == 0) {
        alert('No Pois Found');
        return;
    }

    resultsDiv.hidden = false;

    if (userId) {
        pois = pois.filter((poi) => {
            if (poi.user._id !== userId) return false;
            return true;
        });
    }
    pois.forEach((poi) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${poi.name}</td>
        <td>${poi.type}</td>
        <td>${poi.country}</td>
        <td>${poi.region}</td>
        <td>${poi.lon}</td>
        <td>${poi.lat}</td>
        <td>${poi.description}</td>
        <td>
          <a href="/updatepoi?id=${poi._id}" class="btn btn-primary btn-sm">${UpdateBtn}</a>
        </td>
        <td>
          <button onclick="deletePoi('${poi._id}')" class="btn btn-danger btn-sm">${DeleteBtn}</button>
        </td><td>
        <button onclick="getPoiImage('${poi._id}', '${poi.name}', ${poi.lat}, ${poi.lon})" class="btn btn-info btn-sm">${ImageBtn}</button>
         </td>
      `;
        tr.id = poi._id;
        tbody.appendChild(tr);

        const pos = [poi.lat, poi.lon];
        const marker = L.marker(pos).addTo(map);
        marker
            .bindPopup(`<b>${poi.name}</b><br>${poi.description}`)
            .openPopup();
    });
}

async function deletePoi(id) {
    try {
        const token = localStorage.getItem('token');
        const response = await fetch(`/pois/deletePoi/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const result = await responseHandler(response);
        if (result) {
            document.getElementById(id).remove();
        }
    } catch (e) {
        alert(`Error with POI ID ${id}: ${e}`);
    }
}
async function Logincheck() {
    try {
        const token = localStorage.getItem('token');
        const response = await fetch(`/user/getUser`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const data = await response.json();
        if (response.status !== 200) {
            return alert(data.message);
        }
        if (data.admin === true) {
            const getUsersElement = document.getElementById('get_users');
            const getPoisElement = document.getElementById('get_pois');

            getUsersElement.hidden = false;
            getPoisElement.hidden = false;

            userId = data._id;
        }
    } catch (error) {
        console.error(error);
        alert('Failed to fetch User details');
    }
}
async function getPoiImage(id, name, lat, lon) {
    try {
        const token = localStorage.getItem('token');
        const response = await fetch(`/pois/image/${id}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const image = await response.blob();
        blobToDataURL(image, function (dataurl) {
            const imgsrc = dataurl;
            const pos = [lat, lon];
            const marker = L.marker(pos).addTo(map);
            marker
                .bindPopup(
                    `<b>${name}</b><br><img src=${imgsrc} style="max-width: 100%; max-height: 100%;"/>`
                )
                .openPopup();
        });
    } catch (e) {
        alert(`Error with POI ID ${id}: ${e}`);
    }
}
function blobToDataURL(blob, callback) {
    var a = new FileReader();
    a.onload = function (e) {
        callback(e.target.result);
    };
    a.readAsDataURL(blob);
}
function getLocation() {
    if (navigator.geolocation) {
        watchId = navigator.geolocation.watchPosition(showPosition, showError);
    } else {
        alert('Geolocation is not supported by this browser.');
    }
}
function showPosition(position) {
    Lat = position.coords.latitude;
    Lon = position.coords.longitude;
    map.setView([Lat, Lon], 14);
    L.marker([Lat, Lon], { icon: customIcon }).addTo(map);
    geoBtn.style.display = 'none';
}
function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert('Permission denied for Geolocation.');
            const currrentLocation = [51.51, -0.1];
            map.setView(currrentLocation, 14);
            revokeBtn.style.display = 'none';
            geoBtn.style.display = 'inline';
            break;
        case error.POSITION_UNAVAILABLE:
            alert('Location information is unavailable.');
            break;
        case error.TIMEOUT:
            alert('The request to get user location timed out.');
            break;
        case error.UNKNOWN_ERROR:
            alert('An unknown error occurred.');
            break;
    }
}

function revokePermission() {
    if (watchId !== null) {
        navigator.geolocation.clearWatch(watchId);
    }
    alert('Geolocation permission revoked.');
    geoBtn.style.display = 'inline-block';
    revokeBtn.style.display = 'none';
}

geoBtn.onclick = function () {
    requestLocation();
};
revokeBtn.onclick = function () {
    revokePermission();
};
function requestLocation() {
    if (navigator.permissions) {
        navigator.permissions
            .query({ name: 'geolocation' })
            .then((permissionStatus) => {
                if (permissionStatus.state === 'denied') {
                    alert(
                        'Geolocation permission is denied. Please enable it in your browser settings.'
                    );
                } else {
                    alert('Geolocation permission is already granted.');
                    geoBtn.style.display = 'none';
                    revokeBtn.style.display = 'inline-block';
                }
            })
            .catch((error) => {
                console.error('Error querying geolocation permission:', error);
            });
    } else if (navigator.geolocation) {
        getLocation();
    } else {
        alert('Geolocation is not supported by this browser.');
    }
}
