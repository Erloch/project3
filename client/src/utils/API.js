import axios from "axios";

export default {
    getBuckets: function () {
        return axios.get('/api/buckets');
    }, 

    getBucket: function (id){
        return axios.delete("/api/buckets/" + id)
    },

    deleteBucket: function (id) {
        console.log(id)
        return axios.delete("/api/buckets/" + id)

    },

    saveBucket : function (bucketData) {
        return axios.post ('/api/buckets', bucketData)
    }

}