import axios from "axios";
import { randomDeviceId } from "utils/helper";

const deviceid = randomDeviceId();
const axiosLoklok = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_API,
  headers: {
    lang: "en",
    versioncode: "11",
    clienttype: "ios_jike_default",
    deviceid: deviceid
  }
});

axiosLoklok.interceptors.response.use(
  async (response) => {
    console.log("deviceid: ", deviceid);
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
