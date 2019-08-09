import axios from "axios";

export default {
    // logs in user
    login: function (loginInfo) {
        return axios.post("/api/users/login", loginInfo);
    },

    // signs up user, then logs them in
    signup: function (signupInfo) {
        return axios.post("/api/users/signup", signupInfo);
    },

    // checks to see if user is logged in, then returns the user
    isLoggedIn: function () {
        return axios.get("/api/users/profile");
    },

    // checks to see if the user is logged in and and admin, then returns the user
    isAdmin: function () {
        return axios.get("/api/users/logout")
    },

    // logs out the user
    logout: function () {
        return axios.get("/api/users/logout")
    },

    getBuckets: function () {
        return axios.get('/api/buckets');
    }, 
    getBucket: function (id){
        return axios.get("/api/buckets/" + id)
    },
    deleteBucket: function (id) {
        return axios.delete("/api/buckets/" + id)
    },
    updateBucket: function (id, key, value){
        return axios.put(`/api/buckets/${id}?type=${key}&value=${value}`)
    },
    updateBucket: function (id){
        return axios.put("api/buckets/" + id)
    },
    saveBucket : function (bucketData) {
        return axios.post ('/api/buckets', bucketData)
    },
    getAllBuckets: function (bucketData) {
        return axios.post ("/api/buckets")
    }
}