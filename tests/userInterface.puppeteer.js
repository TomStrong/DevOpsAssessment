import puppeteer from 'puppeteer';
try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    const timeout = 60000;
    page.setDefaultTimeout(timeout);
    page.on('dialog', async (dialog) => {
        console.log(dialog.message());
        await dialog.dismiss();
    });

    {
        const targetPage = page;
        await targetPage.setViewport({
            width: 1295,
            height: 976,
        });
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        await targetPage.goto('http://localhost:3000/login');
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        const target = await Promise.race([
            targetPage.locator('::-p-aria(Email)'),
            targetPage.locator('#email'),
            targetPage.locator('::-p-xpath(//*[@id=\\"email\\"])'),
            targetPage.locator(':scope >>> #email'),
        ]);
        target.setTimeout(timeout);
        await target.click({
            offset: {
                x: 169.5,
                y: 11.40625,
            },
        });
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('::-p-aria(Email)'),
            targetPage.locator('#email'),
            targetPage.locator('::-p-xpath(//*[@id=\\"email\\"])'),
            targetPage.locator(':scope >>> #email'),
        ]);
        target.setTimeout(timeout);
        await target.fill('A');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('a');
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('::-p-aria(Email)'),
            targetPage.locator('#email'),
            targetPage.locator('::-p-xpath(//*[@id=\\"email\\"])'),
            targetPage.locator(':scope >>> #email'),
        ]);
        target.setTimeout(timeout);
        await target.fill('Ali@gmail.com');
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('::-p-aria(Password)'),
            targetPage.locator('#password'),
            targetPage.locator('::-p-xpath(//*[@id=\\"password\\"])'),
            targetPage.locator(':scope >>> #password'),
        ]);
        target.setTimeout(timeout);
        await target.click({
            offset: {
                x: 133.5,
                y: 23.40625,
            },
        });
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('::-p-aria(Password)'),
            targetPage.locator('#password'),
            targetPage.locator('::-p-xpath(//*[@id=\\"password\\"])'),
            targetPage.locator(':scope >>> #password'),
        ]);
        target.setTimeout(timeout);
        await target.fill('1');
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        const target = await Promise.race([
            targetPage.locator('::-p-aria(Login)'),
            targetPage.locator('#login'),
            targetPage.locator('::-p-xpath(//*[@id=\\"login\\"])'),
            targetPage.locator(':scope >>> #login'),
        ]);
        target.setTimeout(timeout);
        target.on('action', () => startWaitingForEvents());
        await target.click({
            offset: {
                x: 35.5,
                y: 17.40625,
            },
        });
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        const target = await Promise.race([
            targetPage.locator('::-p-aria(Add POI)'),
            targetPage.locator('nav > a:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(/html/body/nav/a[2])'),
            targetPage.locator(':scope >>> nav > a:nth-of-type(2)'),
            targetPage.locator('::-p-text(Add POI)'),
        ]);
        target.setTimeout(timeout);
        target.on('action', () => startWaitingForEvents());
        await target.click({
            offset: {
                x: 48.640625,
                y: 16,
            },
        });
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('::-p-aria(Name)'),
            targetPage.locator('#name'),
            targetPage.locator('::-p-xpath(//*[@id=\\"name\\"])'),
            targetPage.locator(':scope >>> #name'),
        ]);
        target.setTimeout(timeout);
        await target.click({
            offset: {
                x: 107.5,
                y: 36.40625,
            },
        });
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('::-p-aria(Name)'),
            targetPage.locator('#name'),
            targetPage.locator('::-p-xpath(//*[@id=\\"name\\"])'),
            targetPage.locator(':scope >>> #name'),
        ]);
        target.setTimeout(timeout);
        await target.fill('T');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('t');
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('::-p-aria(Name)'),
            targetPage.locator('#name'),
            targetPage.locator('::-p-xpath(//*[@id=\\"name\\"])'),
            targetPage.locator(':scope >>> #name'),
        ]);
        target.setTimeout(timeout);
        await target.fill('Testing');
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('::-p-aria(Type)'),
            targetPage.locator('#type'),
            targetPage.locator('::-p-xpath(//*[@id=\\"type\\"])'),
            targetPage.locator(':scope >>> #type'),
        ]);
        target.setTimeout(timeout);
        await target.click({
            offset: {
                x: 86.5,
                y: 23.40625,
            },
        });
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('::-p-aria(Type)'),
            targetPage.locator('#type'),
            targetPage.locator('::-p-xpath(//*[@id=\\"type\\"])'),
            targetPage.locator(':scope >>> #type'),
        ]);
        target.setTimeout(timeout);
        await target.fill('T');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('t');
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('::-p-aria(Type)'),
            targetPage.locator('#type'),
            targetPage.locator('::-p-xpath(//*[@id=\\"type\\"])'),
            targetPage.locator(':scope >>> #type'),
        ]);
        target.setTimeout(timeout);
        await target.fill('Test');
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('::-p-aria(Country)'),
            targetPage.locator('#country'),
            targetPage.locator('::-p-xpath(//*[@id=\\"country\\"])'),
            targetPage.locator(':scope >>> #country'),
        ]);
        target.setTimeout(timeout);
        target.click({
            offset: {
                x: 69.5,
                y: 9.40625,
            },
        });
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('::-p-aria(Country)'),
            targetPage.locator('#country'),
            targetPage.locator('::-p-xpath(//*[@id=\\"country\\"])'),
            targetPage.locator(':scope >>> #country'),
        ]);
        target.setTimeout(timeout);
        await target.fill('T');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('t');
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('::-p-aria(Country)'),
            targetPage.locator('#country'),
            targetPage.locator('::-p-xpath(//*[@id=\\"country\\"])'),
            targetPage.locator(':scope >>> #country'),
        ]);
        target.setTimeout(timeout);
        await target.fill('Test');
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('::-p-aria(Region)'),
            targetPage.locator('#region'),
            targetPage.locator('::-p-xpath(//*[@id=\\"region\\"])'),
            targetPage.locator(':scope >>> #region'),
        ]);
        target.setTimeout(timeout);
        await target.click({
            offset: {
                x: 81.5,
                y: 22.40625,
            },
        });
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('::-p-aria(Region)'),
            targetPage.locator('#region'),
            targetPage.locator('::-p-xpath(//*[@id=\\"region\\"])'),
            targetPage.locator(':scope >>> #region'),
        ]);
        target.setTimeout(timeout);
        await target.fill('Test');
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('::-p-aria(Latitude)'),
            targetPage.locator('#lat'),
            targetPage.locator('::-p-xpath(//*[@id=\\"lat\\"])'),
            targetPage.locator(':scope >>> #lat'),
        ]);
        target.setTimeout(timeout);
        await target.click({
            offset: {
                x: 71.5,
                y: 18.40625,
            },
        });
    }
    {
        const targetPage = page;

        const target = await Promise.race([
            targetPage.locator('::-p-aria(Latitude)'),
            targetPage.locator('#lat'),
            targetPage.locator('::-p-xpath(//*[@id=\\"lat\\"])'),
            targetPage.locator(':scope >>> #lat'),
        ]);
        target.setTimeout(timeout);
        await target.fill('16.00');
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('::-p-aria(Longitude)'),
            targetPage.locator('#lon'),
            targetPage.locator('::-p-xpath(//*[@id=\\"lon\\"])'),
            targetPage.locator(':scope >>> #lon'),
        ]);
        target.setTimeout(timeout);
        await target.click({
            offset: {
                x: 61.5,
                y: 21.40625,
            },
        });
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('::-p-aria(Longitude)'),
            targetPage.locator('#lon'),
            targetPage.locator('::-p-xpath(//*[@id=\\"lon\\"])'),
            targetPage.locator(':scope >>> #lon'),
        ]);
        target.setTimeout(timeout);
        await target.fill('45.00');
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('::-p-aria(Description)'),
            targetPage.locator('#description'),
            targetPage.locator('::-p-xpath(//*[@id=\\"description\\"])'),
            targetPage.locator(':scope >>> #description'),
        ]);
        target.setTimeout(timeout);
        target.click({
            offset: {
                x: 307.5,
                y: 23.40625,
            },
        });
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('::-p-aria(Description)'),
            targetPage.locator('#description'),
            targetPage.locator('::-p-xpath(//*[@id=\\"description\\"])'),
            targetPage.locator(':scope >>> #description'),
        ]);
        target.setTimeout(timeout);
        await target.fill('T');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('t');
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('::-p-aria(Description)'),
            targetPage.locator('#description'),
            targetPage.locator('::-p-xpath(//*[@id=\\"description\\"])'),
            targetPage.locator(':scope >>> #description'),
        ]);
        target.setTimeout(timeout);
        await target.fill('Testing');
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        const target = await Promise.race([
            targetPage.locator('::-p-aria(Add)'),
            targetPage.locator('#ADD\\ POI'),
            targetPage.locator('::-p-xpath(//*[@id=\\"ADD POI\\"])'),
            targetPage.locator(':scope >>> #ADD\\ POI'),
        ]);
        target.setTimeout(timeout);
        target.on('action', () => startWaitingForEvents());
        await target.click({
            offset: {
                x: 33.734375,
                y: 23.40625,
            },
        });
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('::-p-aria(Search[role=\\"button\\"])'),
            targetPage.locator('#poi_search'),
            targetPage.locator('::-p-xpath(//*[@id=\\"poi_search\\"])'),
            targetPage.locator(':scope >>> #poi_search'),
            targetPage.locator('::-p-text(Search)'),
        ]);
        target.setTimeout(timeout);
        await target.click({
            offset: {
                x: 59.890625,
                y: 15,
            },
        });
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        const target = await Promise.race([
            targetPage.locator('#\\36 56756c39aac31e51b7d6103 a'),
            targetPage.locator(
                '::-p-xpath(//*[@id=\\"656756c39aac31e51b7d6103\\"]/td[8]/a)'
            ),
            targetPage.locator(':scope >>> #\\36 56756c39aac31e51b7d6103 a'),
        ]);
        target.setTimeout(timeout);
        target.on('action', () => startWaitingForEvents());
        await target.click({
            offset: {
                x: 42.203125,
                y: 13,
            },
        });
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('::-p-aria(Name)'),
            targetPage.locator('#name'),
            targetPage.locator('::-p-xpath(//*[@id=\\"name\\"])'),
            targetPage.locator(':scope >>> #name'),
            targetPage.locator('::-p-text(test update)'),
        ]);
        target.setTimeout(timeout);
        await target.click({
            offset: {
                x: 122.5,
                y: 20.40625,
            },
        });
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('::-p-aria(Name)'),
            targetPage.locator('#name'),
            targetPage.locator('::-p-xpath(//*[@id=\\"name\\"])'),
            targetPage.locator(':scope >>> #name'),
            targetPage.locator('::-p-text(test update)'),
        ]);
        target.setTimeout(timeout);
        await target.fill('test updated');
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('::-p-aria(Type)'),
            targetPage.locator('#type'),
            targetPage.locator('::-p-xpath(//*[@id=\\"type\\"])'),
            targetPage.locator(':scope >>> #type'),
            targetPage.locator('::-p-text(testing update)'),
        ]);
        target.setTimeout(timeout);
        await target.click({
            offset: {
                x: 150.5,
                y: 7.40625,
            },
        });
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('::-p-aria(Type)'),
            targetPage.locator('#type'),
            targetPage.locator('::-p-xpath(//*[@id=\\"type\\"])'),
            targetPage.locator(':scope >>> #type'),
            targetPage.locator('::-p-text(testing update)'),
        ]);
        target.setTimeout(timeout);
        await target.click({
            offset: {
                x: 148.5,
                y: 21.40625,
            },
        });
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('::-p-aria(Type)'),
            targetPage.locator('#type'),
            targetPage.locator('::-p-xpath(//*[@id=\\"type\\"])'),
            targetPage.locator(':scope >>> #type'),
            targetPage.locator('::-p-text(testing update)'),
        ]);
        target.setTimeout(timeout);
        await target.fill('testing updated');
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        const target = await Promise.race([
            targetPage.locator('::-p-aria(UPDATE)'),
            targetPage.locator('#UPDATE\\ POI'),
            targetPage.locator('::-p-xpath(//*[@id=\\"UPDATE POI\\"])'),
            targetPage.locator(':scope >>> #UPDATE\\ POI'),
            targetPage.locator('::-p-text(UPDATE)'),
        ]);
        target.setTimeout(timeout);
        target.on('action', () => startWaitingForEvents());
        await target.click({
            offset: {
                x: 77.359375,
                y: 28.40625,
            },
        });
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        const target = await Promise.race([
            targetPage.locator('::-p-aria(Users)'),
            targetPage.locator('#get_users'),
            targetPage.locator('::-p-xpath(//*[@id=\\"get_users\\"])'),
            targetPage.locator(':scope >>> #get_users'),
            targetPage.locator('::-p-text(Users)'),
        ]);
        target.setTimeout(timeout);
        target.on('action', () => startWaitingForEvents());
        await target.click({
            offset: {
                x: 34.03125,
                y: 23,
            },
        });
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator(
                '#\\36 56233d238f941aeb3cb07b1 > td:nth-of-type(5) > button'
            ),
            targetPage.locator(
                '::-p-xpath(//*[@id=\\"656233d238f941aeb3cb07b1\\"]/td[5]/button)'
            ),
            targetPage.locator(
                ':scope >>> #\\36 56233d238f941aeb3cb07b1 > td:nth-of-type(5) > button'
            ),
        ]);
        target.setTimeout(timeout);
        await target.click({
            offset: {
                x: 23.390625,
                y: 9.125,
            },
        });
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator(
                '#\\36 56234e32b4f80eeebab00b9 > td:nth-of-type(4) > button'
            ),
            targetPage.locator(
                '::-p-xpath(//*[@id=\\"656234e32b4f80eeebab00b9\\"]/td[4]/button)'
            ),
            targetPage.locator(
                ':scope >>> #\\36 56234e32b4f80eeebab00b9 > td:nth-of-type(4) > button'
            ),
        ]);
        target.setTimeout(timeout);
        await target.click({
            offset: {
                x: 20.171875,
                y: 12.125,
            },
        });
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        await targetPage.goto('http://localhost:3000/');
        await Promise.all(promises);
    }
    await browser.close();
} catch (err) {
    console.error(err);
    process.exit(1);
}

try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    const timeout = 60000;
    page.setDefaultTimeout(timeout);
    page.on('dialog', async (dialog) => {
        console.log(dialog.message());
        await dialog.dismiss();
    });

    {
        const targetPage = page;
        await targetPage.setViewport({
            width: 1381,
            height: 976,
        });
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        await targetPage.goto('http://localhost:3000/register');
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('#username'),
            targetPage.locator('::-p-xpath(//*[@id=\\"username\\"])'),
        ]);
        target.setTimeout(timeout);
        await target.fill('Testing');
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('#email'),
            targetPage.locator('::-p-xpath(//*[@id=\\"email\\"])'),
        ]);
        target.setTimeout(timeout);
        await target.click({
            offset: {
                x: 35.5,
                y: 15.40625,
            },
        });
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('#email'),
            targetPage.locator('::-p-xpath(//*[@id=\\"email\\"])'),
        ]);
        target.setTimeout(timeout);
        await target.fill('test@gmail.com');
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('#password'),
            targetPage.locator('::-p-xpath(//*[@id=\\"password\\"])'),
        ]);
        target.setTimeout(timeout);
        await target.click({
            offset: {
                x: 133.5,
                y: 18.40625,
            },
        });
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('#password'),
            targetPage.locator('::-p-xpath(//*[@id=\\"password\\"])'),
        ]);
        target.setTimeout(timeout);
        await target.fill('1');
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('#register'),
            targetPage.locator('::-p-xpath(//*[@id=\\"register\\"])'),
        ]);
        target.setTimeout(timeout);
        target.on('action', () => startWaitingForEvents());
        await target.click({
            offset: {
                x: 58.5,
                y: 19.40625,
            },
        });
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('nav > a:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(/html/body/nav/a[2])'),
            targetPage.locator('::-p-text(Add POI)'),
        ]);
        target.setTimeout(timeout);
        target.on('action', () => startWaitingForEvents());
        await target.click({
            offset: {
                x: 35.640625,
                y: 15,
            },
        });
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('#name'),
            targetPage.locator('::-p-xpath(//*[@id=\\"name\\"])'),
        ]);
        target.setTimeout(timeout);
        await target.click({
            offset: {
                x: 128.5,
                y: 24.40625,
            },
        });
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('#name'),
            targetPage.locator('::-p-xpath(//*[@id=\\"name\\"])'),
        ]);
        target.setTimeout(timeout);
        await target.fill('T');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('t');
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('#name'),
            targetPage.locator('::-p-xpath(//*[@id=\\"name\\"])'),
        ]);
        target.setTimeout(timeout);
        await target.fill('Test');
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('#type'),
            targetPage.locator('::-p-xpath(//*[@id=\\"type\\"])'),
        ]);
        target.setTimeout(timeout);
        await target.click({
            offset: {
                x: 45.5,
                y: 18.40625,
            },
        });
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('#type'),
            targetPage.locator('::-p-xpath(//*[@id=\\"type\\"])'),
        ]);
        target.setTimeout(timeout);
        await target.fill('testing');
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('#country'),
            targetPage.locator('::-p-xpath(//*[@id=\\"country\\"])'),
        ]);
        target.setTimeout(timeout);
        await target.click({
            offset: {
                x: 27.5,
                y: 17.40625,
            },
        });
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('#country'),
            targetPage.locator('::-p-xpath(//*[@id=\\"country\\"])'),
        ]);
        target.setTimeout(timeout);
        await target.fill('testing');
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('#region'),
            targetPage.locator('::-p-xpath(//*[@id=\\"region\\"])'),
        ]);
        target.setTimeout(timeout);
        await target.click({
            offset: {
                x: 48.5,
                y: 34.40625,
            },
        });
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('#region'),
            targetPage.locator('::-p-xpath(//*[@id=\\"region\\"])'),
        ]);
        target.setTimeout(timeout);
        await target.fill('testing');
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('#lat'),
            targetPage.locator('::-p-xpath(//*[@id=\\"lat\\"])'),
        ]);
        target.setTimeout(timeout);
        await target.click({
            offset: {
                x: 35.5,
                y: 25.40625,
            },
        });
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('#lat'),
            targetPage.locator('::-p-xpath(//*[@id=\\"lat\\"])'),
        ]);
        target.setTimeout(timeout);
        await target.fill('45.9');
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('#lon'),
            targetPage.locator('::-p-xpath(//*[@id=\\"lon\\"])'),
        ]);
        target.setTimeout(timeout);
        await target.click({
            offset: {
                x: 57.5,
                y: 17.40625,
            },
        });
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('#lon'),
            targetPage.locator('::-p-xpath(//*[@id=\\"lon\\"])'),
        ]);
        target.setTimeout(timeout);
        await target.fill('64.9');
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('#description'),
            targetPage.locator('::-p-xpath(//*[@id=\\"description\\"])'),
        ]);
        target.setTimeout(timeout);
        await target.click({
            offset: {
                x: 232.5,
                y: 40.40625,
            },
        });
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('#description'),
            targetPage.locator('::-p-xpath(//*[@id=\\"description\\"])'),
        ]);
        target.setTimeout(timeout);
        await target.fill('Ui testing');
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('#ADD\\ POI'),
            targetPage.locator('::-p-xpath(//*[@id=\\"ADD POI\\"])'),
        ]);
        target.setTimeout(timeout);
        target.on('action', () => startWaitingForEvents());
        await target.click({
            offset: {
                x: 39.734375,
                y: 18.40625,
            },
        });
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('#poi_search'),
            targetPage.locator('::-p-xpath(//*[@id=\\"poi_search\\"])'),
            targetPage.locator('::-p-text(Search)'),
        ]);
        target.setTimeout(timeout);
        await target.click({
            offset: {
                x: 40.03125,
                y: 20,
            },
        });
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('#poi_results a'),
            targetPage.locator(
                '::-p-xpath(//*[@id=\\"656f1c4e3ee0ea31bacb2654\\"]/td[8]/a)'
            ),
        ]);
        target.setTimeout(timeout);
        target.on('action', () => startWaitingForEvents());
        await target.click({
            offset: {
                x: 28.1875,
                y: 9,
            },
        });
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('#name'),
            targetPage.locator('::-p-xpath(//*[@id=\\"name\\"])'),
            targetPage.locator('::-p-text(Test)'),
        ]);
        target.setTimeout(timeout);
        await target.click({
            offset: {
                x: 10.5,
                y: 14.40625,
            },
        });
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('#name'),
            targetPage.locator('::-p-xpath(//*[@id=\\"name\\"])'),
            targetPage.locator('::-p-text(Test)'),
        ]);
        target.setTimeout(timeout);
        await target.fill('Updated Test');
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('#type'),
            targetPage.locator('::-p-xpath(//*[@id=\\"type\\"])'),
        ]);
        target.setTimeout(timeout);
        await target.click({
            offset: {
                x: 66.5,
                y: 22.40625,
            },
        });
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('#type'),
            targetPage.locator('::-p-xpath(//*[@id=\\"type\\"])'),
        ]);
        target.setTimeout(timeout);
        await target.fill('testing Update');
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('#description'),
            targetPage.locator('::-p-xpath(//*[@id=\\"description\\"])'),
            targetPage.locator('::-p-text(Ui testing)'),
        ]);
        target.setTimeout(timeout);
        await target.click({
            offset: {
                x: 90.5,
                y: 30.40625,
            },
        });
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('#description'),
            targetPage.locator('::-p-xpath(//*[@id=\\"description\\"])'),
            targetPage.locator('::-p-text(Ui testing)'),
        ]);
        target.setTimeout(timeout);
        await target.fill('Ui testing updated');
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('#UPDATE\\ POI'),
            targetPage.locator('::-p-xpath(//*[@id=\\"UPDATE POI\\"])'),
            targetPage.locator('::-p-text(UPDATE)'),
        ]);
        target.setTimeout(timeout);
        target.on('action', () => startWaitingForEvents());
        await target.click({
            offset: {
                x: 58.359375,
                y: 31.40625,
            },
        });
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('#poi_search'),
            targetPage.locator('::-p-xpath(//*[@id=\\"poi_search\\"])'),
            targetPage.locator('::-p-text(Search)'),
        ]);
        target.setTimeout(timeout);
        await target.click({
            offset: {
                x: 53.03125,
                y: 19,
            },
        });
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('#poi_results button'),
            targetPage.locator(
                '::-p-xpath(//*[@id=\\"656f1c4e3ee0ea31bacb2654\\"]/td[9]/button)'
            ),
        ]);
        target.setTimeout(timeout);
        await target.click({
            offset: {
                x: 33.515625,
                y: 9,
            },
        });
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('a.btn'),
            targetPage.locator('::-p-xpath(/html/body/nav/a[5])'),
            targetPage.locator('::-p-text(Profile)'),
        ]);
        target.setTimeout(timeout);
        target.on('action', () => startWaitingForEvents());
        await target.click({
            offset: {
                x: 30.359375,
                y: 17,
            },
        });
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        };
        startWaitingForEvents();
        const target = await Promise.race([
            targetPage.locator('#LOGOUT\\ USER'),
            targetPage.locator('::-p-xpath(//*[@id=\\"LOGOUT USER\\"])'),
            targetPage.locator('::-p-text(Logout)'),
        ]);
        target.setTimeout(timeout);
        target.on('action', () => startWaitingForEvents());
        await target.click({
            offset: {
                x: 44.015625,
                y: 21.40625,
            },
        });
        await Promise.all(promises);
    }

    await browser.close();
} catch (err) {
    console.error(err);
    process.exit(1);
}