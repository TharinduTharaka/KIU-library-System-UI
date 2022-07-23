import request from '@/utils/request-eresources'

export function fetchList(query) {
  return request({
    url: '/resource/get-all-info',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: '/vue-element-admin/article/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/vue-element-admin/article/pv',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/resource/save-eresource',
    method: 'post',
    data
  })
}

export function deleteEresource(data, updated_user) {
  return request({
    url: '/resource/delete-eresource',
    method: 'delete',
    params: { data, updated_user }
  })
}

export function updateArticle(data) {
  return request({
    url: '/resource/update-eresource',
    method: 'post',
    data
  })
}
