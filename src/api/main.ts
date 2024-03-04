/*
 * @Author: 大麦 scxiaoxu0909@163.com
 * @Date: 2024-03-03 11:44:55
 * @LastEditors: 大麦 scxiaoxu0909@163.com
 * @LastEditTime: 2024-03-03 14:10:29
 * @Description:
 *
 * Copyright (c) 2024 by 大麦, All Rights Reserved.
 */
import request from '@/utils/request';
import { AxiosPromise } from 'axios';

export function getUserInfo(data: any): AxiosPromise<UserInfo> {
  return request<UserInfo>({
    url: '/api/user/info',
    method: 'post',
    data
  })
}

// export function test(params: any): AxiosPromise<String> {
//   return request({
//     url: '/user/info',
//     method: 'post',
//     params
//   })
// }
