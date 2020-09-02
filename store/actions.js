import axios from "axios";

//API Danh sách theo danh mục
export function getPostInCategory(payload) {
  // let formData = new FormData();
  // for (let i = 0; i < storedRecentIds.length; i++) {
  //   formData.set(`ProductIds[${i}]`, storedRecentIds[i]);
  // }
  return axios({
    url: `${process.env.baseAPI}v1/search/init`,
    method: 'GET'
    // data: formData
  }).then(res => {
    console.log(res)
    return res
  });
}