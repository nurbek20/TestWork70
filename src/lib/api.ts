import axios from 'axios';

const api = axios.create();

api.interceptors.request.use(async (config) => {
    if (config.url === '/login') {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const { username, password } = config.data;

                if (username === 'admin' && password === 'admin') {
                    resolve({
                        ...config,
                        adapter: () =>
                            Promise.resolve({
                                data: {
                                    firstName: 'Admin',
                                    lastName: 'User',
                                    email: 'admin@site.com',
                                    token: 'mock-jwt-token',
                                },
                                status: 200,
                                statusText: 'OK',
                                headers: {},
                                config,
                            }),
                    });
                } else {
                    reject({
                        response: {
                            data: { message: 'Invalid credentials' },
                            status: 401,
                        },
                    });
                }
            }, 1000);
        });
    }

    return config;
});

export default api;
