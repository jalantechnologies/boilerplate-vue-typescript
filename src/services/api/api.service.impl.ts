import * as _ from "lodash";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import { APIService } from "./api.service";
import { LooseObject } from "@/types";

export class APIServiceImpl implements APIService {
  service: AxiosInstance;
  //Todo: Adding Config
  API_BASE_URL = "http://localhost:8080/api";
  constructor() {
    this.service = axios.create({
      baseURL: this.API_BASE_URL,
    });
  }

  protected static parseError(response: AxiosResponse): string {
    return _.get(response, "response.data.error", "");
  }

  protected async get(path: string): Promise<AxiosResponse> {
    return this.service.get(path);
  }

  protected async post(path: string, payload: LooseObject): Promise<AxiosResponse> {
    return this.service.post(path, payload);
  }

  protected async put(path: string, payload: LooseObject): Promise<AxiosResponse> {
    return this.service.put(path, payload);
  }

  protected async patch(path: string, payload: LooseObject): Promise<AxiosResponse> {
    return this.service.patch(path, payload);
  }

  protected async delete(path: string, payload: LooseObject): Promise<AxiosResponse> {
    return this.service.delete(path, payload);
  }
}
