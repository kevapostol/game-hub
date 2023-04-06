import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: "c1b2104f68274d52bf6832773e4ccf83"
    }
})