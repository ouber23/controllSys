import request from '@/utils/request'

export function listProject (pageNumber, pageSize) {
  return request({
    url: '/api/project/listproject',
    method: 'get',
    params: {
      pageNumber,
      pageSize
    }
  })
}

export function DelectProject (idList) {
  return request({
    url: '/api/project/deleteproject',
    method: 'post',
    data: {
      idList
    }
  })
}

export function listCountry (pageNumber, pageSize) {
  return request({
    url: '/api/project/listcountry',
    method: 'get',
    params: {
      pageNumber,
      pageSize
    }
  })
}

export function listProvince (pageNumber, pageSize) {
  return request({
    url: '/api/project/listprovince',
    method: 'get',
    params: {
      pageNumber,
      pageSize
    }
  })
}

export function listCity (pageNumber, pageSize) {
  return request({
    url: '/api/project/listcity',
    method: 'get',
    params: {
      pageNumber,
      pageSize
    }
  })
}