import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: { "API-KEY": "75df96fc-2097-463c-8954-7ffc74c7a598" },
});

export const UsersAPI = {
    getUsers: (currentPage, pageSize) => {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then((res) => res.data);
    },
    followUser: (id) => {
        return instance.post(`follow/${id}`).then((res) => res.data);
    },
    unfollowUser: (id) => {
        return instance.delete(`follow/${id}`).then((res) => res.data);
    },
};