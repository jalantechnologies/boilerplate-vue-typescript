import * as _ from "lodash";
import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";
import { APIService } from "./api.service";

export class APIServiceImpl implements APIService {
  service: AxiosInstance;
  //Todo: Adding Config
  environment: string;
  API_BASE_URL = "http://localhost:8081/api";
  ENVIRONMENT = "develop";
  constructor() {
    this.service = axios.create({
      baseURL: this.API_BASE_URL,
    });
    this.environment = this.ENVIRONMENT;

    this.service.interceptors.response.use(
      (response): AxiosResponse => response,
      (error): Promise<AxiosError> => Promise.reject(error)
    );
  }

  protected static parseError(response: AxiosResponse): string {
    return _.get(response, "response.data.error", "");
  }

  protected async get(path: string): Promise<AxiosResponse> {
    return this.service.get(path);
  }

  protected async post(path: string, payload: any): Promise<AxiosResponse> {
    return this.service.post(path, payload);
  }

  protected async put(path: string, payload: any): Promise<AxiosResponse> {
    return this.service.put(path, payload);
  }

  protected async patch(path: string, payload: any): Promise<AxiosResponse> {
    return this.service.patch(path, payload);
  }

  protected async delete(path: string, payload: any): Promise<AxiosResponse> {
    return this.service.delete(path, payload);
  }
}
