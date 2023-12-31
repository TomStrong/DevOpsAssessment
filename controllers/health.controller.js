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
import mongoose from 'mongoose';
import { User } from '../models/User.js';

export const check = async (req, res) => {
    const dbHealthy = mongoose.connection.readyState === 1;
    const cpu = process.cpuUsage();
    const uptime = process.uptime();
    const memory = process.memoryUsage();
    const loggedInUsers = (await User.find({ token: { $ne: null } })).length;

    if (!dbHealthy)
        return res.status(500).json({ status: 'Database connection failed' });

    return res.status(200).json({
        status: 'OK',
        stats: {
            cpu,
            uptime,
            memory,
            loggedInUsers,
        },
    });
};
