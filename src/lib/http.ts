/**
 * 请求封装
 */
import { request, RequestParams, RequestTask } from "@tarojs/taro";

/**
 * 返回格式
 */
export interface IResponseData<T = any> {
  code: string;
  msg: string;
  data: T;
  success: Boolean;
}

class HttpRequest {

  /**
   * 基础请求参数封装
   */
  static baseOptions = {
    header: {
      "content-type": "application/json"
    },
    dataType: "json"
  };

  /**
   * 生成完整的请求地址
   * @param url 接口地址
   */
  static generateFullUrl = (url: string) =>
    `${process.env.BASE_URL}${url.startsWith("/") ? "" : "/"}${url}`;

  /**
   * 请求success处理
   * @param res 响应体
   * @param isCheckResponse 是否检查响应体
   * @param rs Promise的允许请求
   * @param rj Promise的拒绝请求
   */
  static requestSuccessHandler = (res: IResponseData, isCheckResponse: Boolean, rs, rj) => {
    if (!isCheckResponse) {
      rs(res);
    }
    if (res.success) {
      rs(res.data)
    } else {
      rj(res)
    }
  };

  /**
   * 请求错误处理
   * @param error 错误响应
   * @param rj Promise的拒绝请求
   */
  static requestFailHandler = (error: IResponseData, rj) => {
    // 统一异常处理
  };

  /**
   * 请求方法
   * @param url 接口地址
   * @param method 请求方法
   * @param data 请求数据
   * @param options 自定义参数
   * @param isCheckResponse 是否检查响应体
   */
  static doRequest(url: string, method: string, data = {}, options = {}, isCheckResponse = true) {
    const $options = Object.assign(
      {},
      HttpRequest.baseOptions,
      options,
      { method }
    );
    return new Promise((rs, rj) => {
      Taro.showLoading({
        title: '加载中...',
        mask: true
      })

      return request<IResponseData>(
        Object.assign({}, $options, {
          url: HttpRequest.generateFullUrl(url),
          data,
          success: (res: any) => {
            HttpRequest.requestSuccessHandler(res, isCheckResponse, rs, rj)
          },
          fail: (e: any) => {
            HttpRequest.requestFailHandler(e, rj)
          },
          complete: () => {
            Taro.hideLoading()
          }
        }) as RequestParams
      ) as RequestTask<IResponseData>
    })
  }

  /**
   * get请求
   */
  static get = async (url: any, data = {}, options = {}, isCheckResponse = true) =>
    HttpRequest.doRequest(url, "GET", data, options, isCheckResponse);

  /**
   * post请求
   */
  static post = async (url: any, data = {}, options = {}, isCheckResponse = true) =>
    HttpRequest.doRequest(url, "POST", data, options, isCheckResponse);

  /**
   * put请求
   */
  static put = async (url: any, data = {}, options = {}, isCheckResponse = true) =>
    HttpRequest.doRequest(url, "PUT", data, options, isCheckResponse);

  /**
   * delete请求
   */
  static delete = async (
    url: any,
    data = {},
    options = {},
    isCheckResponse = true
  ) => HttpRequest.doRequest(url, "DELETE", data, options, isCheckResponse);
}

export { HttpRequest };
export default HttpRequest;
