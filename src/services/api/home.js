import http from '../index';

/**
 * 获取自由创作
 */
export function startCreate() {
  return http.get('/community/public/project');
}

export function getFreeCreateList(params) {
  return http({
    url: '/community/public/creation/template/list',
    method: 'GET',
    params,
  });
}

/**
 * 获取精选作品
 * @param {object} params
 * @param {int} params.category 类型  2-Scratch 3-Python 4-C++
 */
export function getHandPick(params) {
  const { category } = params;
  return http({
    url: `/community/public/works/especially/${category}`,
    method: 'GET',
    params,
  });
}

export function getDetail(params) {
  const { id } = params;
  return http({
    url: `/community/public/works/${id}/detail`,
    method: 'GET',
  });
}

export function handleLike(params) {
  const { id } = params;
  return http({
    url: `/community/public/works/${id}/like`,
    method: 'POST',
  });
}

export function getThemeList(params) {
  return http({
    url: '/community/public/works/theme',
    method: 'GET',
    params,
  });
}
export function getIsLike(params) {
  return http({
    url: '/community/public/works/is-like',
    method: 'GET',
    params,
  });
}
export function getShare(params) {
  const { id } = params;
  return http({
    url: `/community/share/${id}`,
    method: 'POST',
    params,
  });
}
export function getAdaptId(params) {
  const { id } = params;
  return http({
    url: `/community/works/fork/${id}`,
    method: 'POST',
    params,
  });
}

export default {};
