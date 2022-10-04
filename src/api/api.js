import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: { "API-KEY": "75df96fc-2097-463c-8954-7ffc74c7a598" },
});

export const UsersAPI = {
    getUsers: async (currentPage, pageSize) => {
        const res = await instance
            .get(`users?page=${currentPage}&count=${pageSize}`);
        return res.data;
    },
    followUser: async (id) => {
        const res = await instance.post(`follow/${id}`);
        return res.data;
    },
    unfollowUser: async (id) => {
        const res = await instance.delete(`follow/${id}`);
        return res.data;
    },
    getProfile: (userId) => {
        return instance.get(`profile/${userId}`);
    },
};

export const AuthAPI = {
    getMe: () => {
        return instance.get("auth/me");
    }
}