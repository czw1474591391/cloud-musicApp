import axios from "axios";
let baseUrl = "http://localhost:8848";
export function getBanner(type) {
  //获得轮播图
  return axios.get(`${baseUrl}/banner?type=${type}`).then((res) => {
    return res;
  });
}

//获取每日推荐歌单,limit取出数量，默认10
export function getPlayList(limit = 10) {
  return axios.get(`${baseUrl}/personalized?limit=${limit}`).then((res) => {
    return res;
  });
}

//获取歌单详情
export function getSongList(id) {
  return axios.get(`${baseUrl}/playlist/detail?id=${id}`).then((res) => {
    return res;
  });
}
//获取歌曲搜索建议
export function getSearchSuggest(name = "林俊杰") {
  return axios.get(`${baseUrl}/search/suggest?keywords=${name}&type=mobile`).then((res) => {
    return res;
  });
}

export function getSearchResult(name = "林俊杰") {
  return axios.get(`${baseUrl}/search?keywords=${name}`).then((res) => {
    return res;
  });
}
