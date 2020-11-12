import http from '../index';

/**
 * 校区列表
 */
export function getCityList() {
  return http.get('core/course/findCityList');
}

/**
 * 学生登录
 * @param {object} params
 * @param {string} params.username 登录名
 * @param {string} params.password 登录密码
 */
export function studentLogin(params) {
  return http.post('/core/students/login', params);
}

/**
 * 教师登录
 * @param {object} params
 * @param {string} params.type 教师类型【0-主讲，1-辅导，2-班主任】（非必传）
 * @param {string} params.username 教师登录名
 * @param {string} params.password 教师登录密码
 * @param {string} params.schoolCode 登陆城市编码 010
 */
export function teacherLogin(params) {
  return http({
    url: '/core/teachers/login',
    method: 'post',
    data: params,
  });
}

/**
 * 学生用户中心验证码登录
 * @param {object} params
 * @param {string} params.code 验证码
 */
export function studentLoginByCode(params) {
  return http.post('/core/students/exchange/token', {
    clientId: window.clientId,
    deviceId: window.deviceId,
    ...params,
  });
}

/**
 * 新用户完善信息
 * @param {string} areaCode* 分校编码
 * @param {string} clientId* clientId
 * @param {string} code* 集团code
 * @param {string} deviceId* deviceId
 * @param {string} grid* 年级
 * @param {string} realname* 用户名
 * @param {integer($int32)} sex* 性别，0-女，1-男
 * @param {string} pCode 手机号
*/
export function studentsRegComplete(params) {
  return http.post('/core/students/reg/complete', {
    clientId: window.clientId,
    deviceId: window.deviceId,
    ...params,
  });
}

export function getDeleteAccountCode(params) {
  return http.get('/core/students/account/cancel/captcha', { params });
}

export function deleteAccount(params) {
  return http.post('/core/students/account/cancel', params);
}

/**
 * 获取年级
 */
export function getGrid() {
  return http.get('/core/students/reg/grids');
}

/**
 * 生成登录教师的超级密码
 * No parameters
 */
export function getSuperPower() {
  return http({
    url: '/core/teachers/generateSuperPwd',
    method: 'POST',
  });
}

export function saveAvatar(params) {
  return http({
    url: '/core/image/user/avatar',
    method: 'post',
    data: params,
  });
}

export function getAvatar() {
  return http({
    url: '/core/image/avatar',
    method: 'get',
  });
}

export default {};
