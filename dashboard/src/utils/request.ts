import axios from 'axios';
import { API_URI } from './constants';
export const API_TIMEOUT = 30000;
const instance = axios.create({
  baseURL: API_URI,
  timeout: API_TIMEOUT,
});

const post = ({ url, params, data }: any) => instance({
  url,
  params,
  data,
  method: 'POST',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
})

const get = ({ url, params, data }: any) => instance({
  url,
  params,
  data,
  method: 'GET',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
})

const ApiList = {
  scan: '/scans'
}

export const addScan = (scan: any) => {
  return post({
    url: ApiList.scan,
    data: scan
  });
};
export const getScan = (query: any) => {
  return get({
    url: ApiList.scan,
    params: query
  });
};
export const getScanId = (id: string) => {
  return get({
    url: `${ApiList.scan}/${id}`,
  });
};


