/*
Danh sách danh mục (tối đa 3 cấp)
Method : GET
{baseURL}/categorylist
*/
let data = {
  result: [
    {
      id: 'categoryId*',
      name: 'Thời sự',
      alias: 'thoi-su',
      parentId: 0, //<=> don't have parent
      subs: [
        {
          id: 'categoryId**',
          name: "Tin tức",
          alias: 'tin-tuc',
          parentId: 'categoryId*',
          subs: [
            {
              id: 'categoryId',
              name: "",
              alias: 'trong-nuoc',
              parentId: 'categoryId**',
              subs: []
            }]
        }
      ]
    }
  ],
  status: 0 || 1,  //faild || success
}


/*
Danh sách post list theo danh mục
Method : GET
{BaseURl}/postlist?category=id&page=1
Lấy tất cả bài viết của nó và con của nó
rule sort mới nhất
*/
data = {
  status: 1,
  result: {
    posts: [
      {
        id: 'postId', name: 'PostTitle', image: link, date: 'date published', author: 'author', cate: cateName, description: 'lorem...', alias: 'kinh-te-2020-ngay-cang-....'
      }
    ],
    subCates: [{
      id: 'categoryId',
      name: "",
      alias: 'trong-nuoc',
      parentId: 'categoryId**',
      subs: []
    }]
  },
  page: 1,
  totalPage: 5
}

/*
Danh sách post list theo tag trong post detail
Method : GET
{BaseURl}/postlist?tag=id&page=1
rule sort mới nhất
*/
data = {
  status: 1,
  result: {
    posts: [
      {
        id: 'postId', name: 'PostTitle', image: link, date: 'date published', author: 'author', cate: cateName, description: 'lorem...', alias: 'kinh-te-2020-ngay-cang-....'
      }
    ],
  },
  page: 1,
  totalPage: 5
}


/*
API Search
Method : GET
{BaseURl}/search?keyword=abcxyz&page=1
rule sort mới nhất
*/
data = {
  status: 1,
  result: {
    posts: [
      {
        id: 'postId', name: 'PostTitle', image: link, date: 'date published', author: 'author', cate: cateName, description: 'lorem...', alias: 'kinh-te-2020-ngay-cang-....'
      }
    ],
  },
  page: 1,
  totalPage: 5
}


/*
API post detail
Method : GET
{BaseUrl}/post?id=213
*/
data = {
  status: 1,
  result:
  {
    id: 'postId',
    name: 'PostTitle',
    date: 'date published',
    author: 'author',
    viewCount: 900,
    commentCount: 10,
    meta:  //... for share function
    {
      image: link,
      description: text,
    },
    subcates: [{
      id: 'categoryId',
      name: "Trong nước",
      alias: 'trong-nuoc',
    }],
    postContent: 'rich text html',
    tagList: [{
      id: 'tagId',
      name: "Theme",
      alias: 'theme',
    }],
    comments: [
      {
        name: 'Tâm',
        email: 'abd@gmail.com',
        content: text,
        id: 123,
        reply: [
          {
            name: 'Huy',
            email: 'abd@gmail.com',
            content: text,
            id: 123,
            reply: [
            ]
          }
        ]
      }
    ]
  }
}

/*
API get list relate with current post
limit 4?
{baseURl}/relate-post?postId=123
*/
data = {
  status: 1,
  result: {
    posts: [
      {
        id: 'postId', name: 'PostTitle', image: link, date: 'date published', author: 'author', cate: cateName, description: 'lorem...', alias: 'kinh-te-2020-ngay-cang-....'
      }
    ],
  },
}

/*
Subcribe API Post
Method : POST
{baseURL}/subcribe
params: 
email : abc@gmail.com
*/


/*
Get List (Must Read, Videos, Lasted......)
limit 4?
{baseURl}/{dynamicName}?limit=4
*/
data = {
  status: 1,
  result: {
    posts: [
      {
        id: 'postId', name: 'PostTitle', image: link, date: 'date published', author: 'author', cate: cateName, description: 'lorem...', alias: 'kinh-te-2020-ngay-cang-....'
      }
    ],
  },
}

/*
Comment API Post
Method : POST
{baseURL}/comment
params :
postId : abc
content : text
email : abc@gmail.com
name : Tâm
parentCommentId : 1
*/

/*
API page policy pages list
Method : GET
{BaseURL}/policies
*/
data = {
  status: 1,
  result: [{ id: 1, name: 'About Us', alias: 'about-us' }]
}


/*()
API page policy page content
Method : GET
{BaseURL}/policies?id=abc
*/
data = {
  status: 1,
  result: [{ id: 1, name: 'About Us', content: 'text html' }]
}


//Ads API Get
//API số lượng bài viết theo cates



