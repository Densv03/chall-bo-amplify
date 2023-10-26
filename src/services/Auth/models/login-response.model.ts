import { AxiosResponse } from 'axios/index';

export type LoginResponseModel = AxiosResponse<{ access_token: string }>;
