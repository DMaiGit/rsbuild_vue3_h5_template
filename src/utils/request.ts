/*
 * @Author: 大麦 scxiaoxu0909@163.com
 * @Date: 2024-03-03 11:44:55
 * @LastEditors: 大麦 scxiaoxu0909@163.com
 * @LastEditTime: 2024-03-03 14:29:04
 * @Description:
 *
 * Copyright (c) 2024 by 大麦, All Rights Reserved.
 */
import axios, { AxiosResponse, AxiosRequestConfig, AxiosPromise } from 'axios';

// 定义服务响应格式，根据实际情况调整
interface ServiceResponse<T = any> {
  code: string;
  message: string;
  data: T;
}

// 创建实例
const service = axios.create({
  baseURL: process.env.PUBLIC_BASE_API, // 设置默认的 baseURL
  timeout: 5000, // 设置默认的 timeout
  headers: { 'Content-Type': 'application/json;charset=utf-8' }
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    if (!config.headers) {
      throw new Error(
        `Expected 'config' and 'config.headers' not to be undefined`
      );
    }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse<ServiceResponse>) => {
    return response
  },
  error => {
    console.log('error: ', error);
    // 统一的错误处理
    return Promise.reject(error.message);
  }
);

// 封装request方法，使其支持泛型
function request<T = any>(config: AxiosRequestConfig): AxiosPromise<T> {
  return service(config).then(response => response.data);
}

// 导出 axios 实例
export default request;
