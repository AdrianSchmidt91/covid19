import axios, { AxiosResponse } from 'axios';

class API {
  get = (url: string): Promise<AxiosResponse> => {
    return axios.get(url);
  };
}

const api = new API();
export default api;
