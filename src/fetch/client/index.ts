import ToastHelperInitializer from "@/utils/toastHelper";
import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

const getBackEndUrl = () => process.env.NEXT_PUBLIC_BACKEND_URL;

const client = axios.create({
  timeout: 3000,
  baseURL: getBackEndUrl(),
  headers: {
    "Content-Type": "application/json",
  },
});

const onRequest = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  if (config.headers === undefined) return config;
  return config;
};

const onResponse = (res: AxiosResponse): AxiosResponse => {
  return res;
};

const onError = (error: AxiosError | Error): Promise<AxiosError> => {
  if (axios.isAxiosError(error)) {
    if (error?.response) {
      const errorCode = error.response?.data?.message || "";
      switch (errorCode) {
        case "책을 찾을 수 없습니다.":
          ToastHelperInitializer().error(errorCode);
          break;
        case "값이 누락되었습니다.":
          ToastHelperInitializer().error(errorCode);
          break;
        case "서버 오류":
          ToastHelperInitializer().error(errorCode);
          break;
        default:
          ToastHelperInitializer().error(
            error.response.data.statusText || "알 수 없는 에러가 발생했습니다."
          );
          break;
      }
    }
  } else {
    ToastHelperInitializer().error(
      `fetch-index.ts 🚨 [API] | Error ${error.message}`
    );
  }
  return Promise.reject(error);
};

// 요청 interceptors
client.interceptors.request.use(onRequest, (error) => {
  return Promise.reject(error);
});

// 응답 interceptors
client.interceptors.response.use(onResponse, onError);

export const Get = async <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  const response = await client.get(url, config);
  return response;
};

export const Post = async <T, P>(
  url: string,
  data?: P,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  const response = await client.post(url, data, config);

  return response;
};

export const Put = async <T, P>(
  url: string,
  data?: P,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  const response = await client.put(url, data, config);
  return response;
};

export const Patch = async <T, P>(
  url: string,
  data?: P,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  const response = await client.patch(url, data, config);

  return response;
};

export const Delete = async <T, P>(
  url: string,
  data?: P,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  const response = await client.delete(url, {
    ...config,
    data,
  });

  return response;
};

export default client;
