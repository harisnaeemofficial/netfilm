import axios from "axios";
import queryString from "query-string";
import { randomDeviceId } from "utils/helper";

const baseHeaders = {
  lang: "en",
  versioncode: "32",
  clienttype: "android_tem3",
  "Content-Type": "application/json",
  "user-agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.109 Safari/537.36 OPR/84.0.4316.52"
};

const axiosLoklok = axios.create({
  baseURL: "https://ga-mobile-api.loklok.tv/cms/app",
  headers: {
    ...baseHeaders,
    deviceid: randomDeviceId(16)
  }
});

axiosLoklok.interceptors.request.use(
  async (config) => {
    const customConfig = {
      ...config,
      headers: {
        ...baseHeaders,
        deviceid: randomDeviceId(16)
      }
    };
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
    console.log("error: ", JSON.stringify(error, null, 2));
    const { response } = error;
    const errorResult = { ...response?.data, status: response?.status };
    return Promise.reject(errorResult);
  }
);

export default axiosLoklok;
