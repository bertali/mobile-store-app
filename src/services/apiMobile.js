import axios from "axios";

export const apiMobile = () => {

    const url = "https://itx-frontend-test.onrender.com/api/product";

    const urlCart = "https://itx-frontend-test.onrender.com/api/cart";

    const getList = async () => {
        const res = await axios.get(url);
        return res;
    };

    const getDetails = async (id) => {
        const res = await axios.get(`${url}/${id}`);
        return res;
    };

    const post = async (itemData) => {
        const res = await axios.post(urlCart, itemData);
        console.log(res);
        return res.data.count;
    }; 

    return {
        getList,
        getDetails,
        post,
    }
}