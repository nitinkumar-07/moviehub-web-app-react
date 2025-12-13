import axios from "axios";

export default axios.create({
    baseURL:"https://api.themoviedb.org/3",
    params:{
        api_key:"5b69e57381f081c889c38c8ce4d7732d",
    },
});