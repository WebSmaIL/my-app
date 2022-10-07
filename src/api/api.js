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
        console.warn("Please use a ProfileAPI for this request");
        return ProfileAPI.getProfile(userId);
    },
};

export const ProfileAPI = {
    getProfile: (userId) => {
        return instance.get(`profile/${userId}`);
    },
    getStatus: (userId) => {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus: (status) => {
        return instance.put(`profile/status/`, {status}); // interpretative status: status
    },
};

export const AuthAPI = {
    getMe: () => {
        return instance.get("auth/me");
    }
}