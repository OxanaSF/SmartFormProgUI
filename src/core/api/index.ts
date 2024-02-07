import axios from 'axios';
import { PostContactInput } from '../../types';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

class API {
  client = axios.create({
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  initializeInterceptors = (getToken: () => Promise<string>) => {
    this.client.interceptors.request.use(
      async (config) => {
        const token = await getToken();

        config.headers['Authorization'] = `Bearer ${token}`;

        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  };
}

export const api = new API();
const { client } = api;

export const fetchContactData = async (email: string) => {
  const res = await client.get(`/api/contact/${email}`);
  return res.data;
};

export const submitUpdateContact = async (
  email: string,
  data: PostContactInput
) => {
  const res = await client.post<PostContactInput>(
    `/api/contact/update/${email}`,
    data
  );
  return res.data;
};

export const postTaxstatusRequest = async (data: any) => {
  const res = await client.post(`/api/taxstatus/request`, data);
  return res.data;
};
