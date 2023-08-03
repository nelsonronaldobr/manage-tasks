import axios from 'axios';
import { getEnvVariables } from '../helpers';

const { NEXT_API_URL } = getEnvVariables.client();

export const entriesApi = axios.create({
    baseURL: NEXT_API_URL
});
