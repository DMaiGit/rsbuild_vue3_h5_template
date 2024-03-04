const userInfo = {
  method: 'post',
  url: '/api/user/info',
  status: 200, // 可以在这里配置响应状态码
  response: { data: 'This is a mock response for post' }
}
export default [
  userInfo
];
