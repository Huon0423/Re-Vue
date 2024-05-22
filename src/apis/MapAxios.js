import axios from "axios";

const MapAxios = async () => {
  const SERVER_API = import.meta.env.VITE_SERVER_API;
  try {
    const response = await axios.get(`${SERVER_API}/homes`, {});
    return response.data;
  } catch (e) {
    // 실패 시 처리
    console.error(e);
    return [];
  }
};

export default MapAxios;
