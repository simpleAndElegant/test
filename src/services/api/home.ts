import http from '../index';

/**
 * 获取自由创作
 */
export function startCreate<T>() {
  return http.get<T, T>('/community/public/project');
}

export function getFreeCreateList<T>(params) {
  return http.get<T, T>('/community/public/creation/template/list', params);
}

export default {};
