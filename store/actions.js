import { get, isEmpty } from 'lodash'

export function makeRequestAction({ commit, ...rest }, payload) {
  // if (!process.client) return;
  try {
    const { nextActions, errorActions, ...data } = get(payload, 'data', {}) || {};
    // commit('clearMessages');
    // make request API
    return this._vm.$request.makeRequestAPI({ ...payload, data }).then(response => {
      if (response && response.data) {
        // udpate state functions
        const responseData = get(response, 'data', null);
        // commit('updateViews', responseData);
        // commit('updateMessages', { payload: responseData, action: get(payload, 'action', '') });
        // Check if module code is existed
        // request false has code
        const status = get(responseData, 'Status', null);
        if (status === false && typeof errorActions === 'function') {
          errorActions(responseData);
        }

        // normal request
        if (status === true && typeof nextActions === 'function') {
          nextActions(responseData);
        }
      }
      return response;
    }, error => {
      if (process.env.NODE_ENV == 'development') {
        console.log('%cerror', 'color: red; font-weight: bold;', error);
        if (get(error, 'response.Status', '') === 401) {
          //place your reentry code
          console.log('Unauthorized');
        }
      }
      return false;
    });
  } catch (ex) {
    if (process.env.NODE_ENV == 'development')
      console.log('%cmakeRequestAction error:', 'color: red; font-weight: bold;', ex)
    // Handle error
    return
  }
}

//API Danh sách theo danh mục
export function getPostInCategory({ dispatch }, data) {
  return dispatch('makeRequestAction', {
    url: `${process.env.baseAPI}/v1/search/init`,
    method: 'GET',
    data,
  });
}

//API lấy cái nội dung HomePage
export function getHomeContent(payload) {
  return axios({
    url: `${process.env.baseAPI}/public/get_index_json`,
    method: 'GET',
    data: payload
  })
}

