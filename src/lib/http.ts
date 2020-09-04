/**
 * 请求封装
 */
import { request, RequestParams } from "@tarojs/taro";

/**
 * 返回格式
 */
export interface IResponseData<T = any> {
  code: string;
  msg: string;
  data: T;
}

class HttpRequest {

  static baseOptions = {
    header: {
      "content-type": "application/json"
    },
    dataType: "json"
  };

  static generateFullUrl = (url: string) =>
    `${process.env.BASE_URL}${url.startsWith("/") ? "" : "/"}${url}`;

  static requestSuccessHandler = (res, isCheckResponse, rs, rj) => {
    if (!isCheckResponse) {
      rs(res);
      return;
    }
  };

  static requestFailHandler = (error, rj) => {

  };

  static request(url, method, data = {}, options = {}, isCheckResponse = true) {
    const $options = Object.assign(
      {},
      HttpRequest.baseOptions,
      options,
      { method }
    );
    return new Promise((rs, rj) =>
      request(
        Object.assign({}, $options, {
          url: HttpRequest.generateFullUrl(url),
          data,
          success: () => {

          },
          fail: () => {

          }}) as RequestParams
      )
    ) as Promise<IResponseData>;
  }

  static get = async (url, data = {}, options = {}, isCheckResponse = true) =>
    HttpRequest.request(url, "GET", data, options, isCheckResponse);

  static post = async (url, data = {}, options = {}, isCheckResponse = true) =>
    HttpRequest.request(url, "POST", data, options, isCheckResponse);

  static put = async (url, data = {}, options = {}, isCheckResponse = true) =>
    HttpRequest.request(url, "PUT", data, options, isCheckResponse);

  static delete = async (
    url,
    data = {},
    options = {},
    isCheckResponse = true
  ) => HttpRequest.request(url, "DELETE", data, options, isCheckResponse);
}

export { HttpRequest };
export default HttpRequest;
