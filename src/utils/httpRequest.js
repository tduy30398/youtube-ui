import axios from 'axios';

// Tách phần host_name ra, sử dụng create instance
const httpRequest = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    // Do khi gọi mặc định, axios sẽ trả về dữ liệu mà muốn lấy data phải
    // đi qua 2 lớp (respone.data.data)
    return response.data;
};

export default httpRequest;
