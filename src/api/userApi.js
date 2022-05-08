import axiosClient from "./axiosClient";

const userAPi = {
    register(data) {
        const url = '/auth/local/register';
        return axiosClient.post(url, data);
    }
};

export default userAPi;