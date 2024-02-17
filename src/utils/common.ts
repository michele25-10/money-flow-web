import axios from "axios";

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

  let headers: object = {};

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
    .then((res) => {
      apiResponse = { error: false, ...res };
    })
    .catch((err: object) => {
      apiResponse = { error: true, ...err };
    });

  return apiResponse;
};
