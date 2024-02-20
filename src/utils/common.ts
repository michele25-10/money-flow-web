import axios from "axios";
import { setGlobalState } from "./state";

export const ws = async (
  method: string,
  url: string,
  params: any,
  data: any,
  token: boolean
) => {
  if (!method || !url) {
    console.error("Internal Server Error");
    return;
  }

  let headers: any = {};

  if (token) {
    headers.Authorization = "Bearer " + sessionStorage.getItem("accessToken");
  }

  const result = new Promise((resolve, reject): any => {
    axios({
      method,
      url,
      params,
      data,
      headers,
      responseType: "json",
    })
      .then((res) => {
        resolve({ data: res.data, status: res.status });
      })
      .catch((err) => {
        reject({ data: err.response.data, status: err.response.status });
      });
  });

  let apiResponse: any = {};

  await result
    .then((res: any) => {
      apiResponse = { error: false, ...res };
    })
    .catch((err: object) => {
      apiResponse = { error: true, ...err };
    });

  if (apiResponse.status === 401) {
    sessionStorage.removeItem("accessToken");
    location.href = "../login";
    gestioneSnackbar(true, "Token scaduto!", "error");
  }

  return apiResponse;
};

export const gestioneSnackbar = (
  open: boolean,
  message: string,
  type: string
): void => {
  setGlobalState("message", message);
  setGlobalState("type", type);
  setGlobalState("open", open);
  return;
};
