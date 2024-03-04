/**
 * UserInfo 接口用于描述用户信息
 *
 * @interface
 * @property {number} id - 用户的唯一标识符
 * @property {string} name - 用户的姓名
 * @property {string} [avatar] - 用户的头像地址（可选）
 * @property {number} [age] - 用户的年龄（可选）
 * @property {string} [gender] - 用户的性别（可选）
 * @property {string} [openId] - 用户的 OpenID，用于微信等服务（可选）
 * @property {string} [unionId] - 用户的 UnionID，用于跨多个微信应用的统一标识（可选）
 * @property {string} [mobile] - 用户的手机号码（可选）
 */
interface UserInfo {
  id?: number;
  name?: string;
  avatar?: string;
  age?: number;
  gender?: string;
  openId?: string;
  unionId?: string;
  mobile?: string;
}
