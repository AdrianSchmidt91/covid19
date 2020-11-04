import axios, { AxiosResponse } from 'axios';

class API {
  get = (url: string): Promise<AxiosResponse> => {
    return axios({
      method: 'get',
      url,
    });
  };
}

const api = new API();
export default api;
