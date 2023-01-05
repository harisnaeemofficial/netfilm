import axios from "axios";
import { randomDeviceId } from "utils/helper";

const headers = {
  lang: "en",
  versioncode: "11",
  clienttype: "ios_jike_default",
  deviceid: randomDeviceId()
};

const axiosLoklok = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_API,
  headers
});

axiosLoklok.interceptors.request.use(
  async (config) => {
    const customConfig = { ...config, headers };
    console.log("customConfig: ", customConfig);
    return customConfig;
  },
  (err) => {
    return Promise.reject(err);
  }
);

axiosLoklok.interceptors.response.use(
  async (response) => {
    if (response && response.data) return response.data;
    return response;
  },
  async (error) => {
    const { response } = error;
    const errorResult = { ...response.data, status: response.status };
    return Promise.reject(errorResult);
  }
);

export default axiosLoklok;
