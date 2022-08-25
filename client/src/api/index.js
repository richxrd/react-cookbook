import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000",
});

API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${
            JSON.parse(localStorage.getItem("profile")).token
        }`;
    }

    return req;
});

export const signIn = (formData) => API.post("/users/signin", formData);
export const updateBio = (newBio) => API.patch("/users/updatebio", newBio);
export const fetchUser = (uniqueId) => API.get(`/users/${uniqueId}`);
export const addCollection = (collectionForm) =>
    API.patch(`users/newcollection`, collectionForm);
export const deleteCollection = (collectionForm) =>
    API.patch(`users/deletecollection`, collectionForm);
export const followUser = (form) => API.patch(`users/followuser`, form);

export const newPost = (formData) => API.post("/posts/newpost", formData);
export const fetchPost = (id) => API.get(`/posts/get/${id}`);
