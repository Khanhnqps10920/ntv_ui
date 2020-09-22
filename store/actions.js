import {
  get,
  isEmpty,
  forIn
} from 'lodash'

export function makeRequestAction({
  commit,
  ...rest
}, payload) {


  // if (!process.client) return;
  try {
    const {
      nextActions,
      errorActions,
      ...data
    } = get(payload, 'data', {}) || {};
    return this._vm.$request.makeRequestAPI({
      ...payload,
      data
    }).then(response => {
      if (response && response.data) {
        const responseData = get(response, 'data', null);
        const status = get(responseData, 'status', null);
        if (status === 0 && typeof errorActions === 'function') {
          errorActions(responseData);
        }

        // normal request
        if (status === 1 && typeof nextActions === 'function') {
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
export function getPostInCategory({
  dispatch
}, data) {
  console.log(data, 'data');
  return dispatch('makeRequestAction', {
    url: `${process.env.baseAPI}/v1/search/init`,
    method: 'GET',
    data,
  });
}

//API lấy cái nội dung HomePage
export function getHomeContent(data) {
  return axios({
    url: `${process.env.baseAPI}/public/get_index_json`,
    method: 'GET',
    data
  })
}



// getcategories *
export function getCategories({
  dispatch
}) {
  return dispatch('makeRequestAction', {
    url: `${process.env.BASE_URL}/public/category`,
    method: 'GET',
  })
}

//getTopHotNewsByCategory *
export function getTopHotNewsByCategory({ dispatch }, {id, ...data} ) {
  return dispatch('makeRequestAction', {
    url: `${process.env.BASE_URL}/public/hotNews/${id}`,
    method: 'GET',
    data
  })
}

//getDetailCategory *
export function getDetailCategory({ dispatch }, {id, ...data} ) {
  return dispatch('makeRequestAction', {
    url: `${process.env.BASE_URL}/public/category/${id}`,
    method: 'GET',
    data
  })
}

//getTopNewsInHomepage *
export function getTopNewsInHomepage({ dispatch }) {
  return dispatch('makeRequestAction', {
    url: `${process.env.BASE_URL}/public/homepage`,
    method: 'GET',
  })
}

//getLatestNewsCategory
export function getLatestNewsCategory({ dispatch }, {...data} ) {
  return dispatch('makeRequestAction', {
    url: `${process.env.BASE_URL}/public/homepage`,
    method: 'GET',
    data
  })
}

// get weather api

export function getCurrentWeather({
  dispatch
}, data) {
  return dispatch('makeRequestAction', {
    url: "http://api.openweathermap.org/data/2.5/weather",
    method: "GET",
    data
  })
}

// get gold API

export function getCurrentGoldRate({
  dispatch
}, data) {
  return dispatch('makeRequestAction', {
    url: "https://www.metals-api.com/api/latest",
    method: "GET",
    data
  })
}
getMainNew

export function getMainNew({ dispatch }) {
  return dispatch('makeRequestAction', {
    url: "https://glados.boo.vn/v1/api/portal/news/830175",
    method: "GET",
  })
}

export function getDataHomePage({ dispatch }) {
  return dispatch('makeRequestAction', {
    url: "https://glados.boo.vn/v1/api/portal/homepage",
    method: "GET",
  })
}

export function getPostContent({ dispatch }, id) {
  return dispatch('makeRequestAction', {
    url: `https://glados.boo.vn/v1/api/portal/news/${id}`,
    method: "GET",
  })
}

export function getPostListByCate({ dispatch }, id) {
  return dispatch('makeRequestAction', {
    url: `https://glados.boo.vn/v1/api/portal/category/${id}`,
    method: "GET",
  })
}


// export function getCategories({ dispatch }) {
//   return dispatch('makeRequestAction', {
//     url: `https://glados.boo.vn/v1/api/portal/news/${id}`,
//     method: "GET",
//   })
// }


// export async function getCurrentWeather({
//   commit
// }) {
//   try {
//     const weatherData = await this.$axios.get(
//       "http://api.openweathermap.org/data/2.5/weather?id=1566083&appid=060d473d45f1d22478455e48f344f211"
//     );

//     if (weatherData.status === 200) {
//       console.log(weatherData.data, "data");
//       commit("SET_WEATHER", weatherData.data);
//     } else return;
//   } catch (error) {
//     console.log(e);
//   }
// }


// custom fetch gold api 

export async function getGoldRates({ commit }) {

  try {
    const priceData = await this.$axios.get(
      "https://www.goldapi.io/api/XAU/USD",
      {
        headers: {
          "x-access-token": "goldapi-9kd4ukeqvy6ss-io",
          "Content-Type": "application/json",
        },
      }
    );

    commit("SET_GOLD_RATES", priceData.data);

  } catch (e) {
    console.log(e)
  }

}