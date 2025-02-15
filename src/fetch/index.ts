import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

export const getBackEndUrl = () =>
  process.env.BACKEND_URL || process.env.NEXT_PUBLIC_BACKEND_URL;

const client = axios.create({
  timeout: 5000,
  baseURL: getBackEndUrl(),
  headers: {
    "Access-Control-Allow-Origin": "*",
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
      console.log(error.response);
      const errorCode = error.response?.data?.message || "";
      switch (errorCode) {
        case "책을 찾을 수 없습니다.":
          alert("일치하는 책이 없습니다.");
          break;
        case "값이 누락되었습니다.":
          alert("일치하는 책이 없습니다.");
          break;
        case "서버 오류":
          alert("잠시후에 다시 시도해주세요");
          break;
        default:
          alert(
            error.response.data.statusText || "알 수 없는 에러가 발생했습니다."
          );
          break;
      }
    }
  } else {
    console.log(`fetch-index.ts 🚨 [API] | Error ${error.message}`);
  }
  return Promise.reject(error);
};

// 요청 interceptors
client.interceptors.request.use(onRequest);

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
