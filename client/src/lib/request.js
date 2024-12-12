import axios from "axios";

const requestAPI = axios.create({
    baseURL: "http://localhost:4004/api",
    withCredentials: true,
});

requestAPI.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status === 401 && !error.config._retry) {
            error.config._retry = true;

            try {
                await requestAPI.post("/auth/refresh-token");

                return requestAPI(error.config);
            } catch (err) {
                console.error("Не удалось обновить токен:", err);
                throw err;
            }
        }

        return Promise.reject(error);
    }
);

export default requestAPI;
