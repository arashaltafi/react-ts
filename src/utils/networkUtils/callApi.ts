import { customLog } from "../CustomConsole";
import customAxios from "./customAxios";

interface IAxios {
  method: string;
  url: string;
  data?: any;
  headers?: any;
  callBack: any;
}

export async function callApi({
  method,
  url,
  data = null,
  headers = null,
  callBack = () => { },
}: IAxios) {
  const response = await customAxios(url, {
    method: method,
    data: data,
    headers: headers
  })
    .then((response) => {
      customLog("response", response);
      callBack(response.data);
      return response.data;
    })
    .catch((error) => {
      customLog("error", error);
      throw error;
    }).finally(() => {
      customLog('finally');
    });


  return response;
}
