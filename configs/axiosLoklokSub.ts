import axios from "axios";
import { randomDeviceId } from "utils/helper";

const axiosLoklokSub = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_API_SUB,
  headers: {
    lang: "en",
    versioncode: "11",
    clienttype: "ios_jike_default",
    deviceid: randomDeviceId()
  }
});

axiosLoklokSub.interceptors.response.use(
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

export default axiosLoklokSub;
