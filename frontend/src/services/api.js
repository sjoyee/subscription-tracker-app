import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
api.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
// api.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     const originalRequest = error.config;
//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       const refreshToken = localStorage.getItem('refreshToken');
//       try {
//         const response = await axios.post('http://localhost:5000/api/refresh-token', { token: refreshToken });
//         if (response.status === 200) {
//           localStorage.setItem('accessToken', response.data.accessToken);
//           axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.accessToken;
//           return axiosInstance(originalRequest);
//         }
//       } catch (error) {
//         // Handle refresh token failure (e.g., logout user)
//         console.error('Token refresh failed:', error);
//       }
//     }
//     return Promise.reject(error);
//   }
// );

export default api;
