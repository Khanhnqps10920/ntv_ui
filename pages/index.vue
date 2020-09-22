<template>
  <div>
    <BlockA class="mt-10" :News="TopNews" />
    <SocialBlock class="mt-10" />
    <BlockB class="mt-10" :News="NewsBlockB" />
    <BlockC class="mt-10" :News="NewsBlockC" />
    <AdsHomeMiddle />
    <BlockB class="mt-10" :News="NewsBlockB" />
    <AdsHomeMiddle />
    <BlockC class="mt-10" :News="NewsBlockC" />
    <AdsHomeBottom />
  </div>
</template>

<script>
import BlockA from "@/components/HomePage/BlockA/BlockA";
import SocialBlock from "@/components/HomePage/SocialBlock/SocialBlock";
import BlockB from "@/components/HomePage/BlockB/BlockB";
import BlockC from "@/components/HomePage/BlockC/BlockC.vue";
import AdsHomeMiddle from "@/components/Advertisement/AdsHomeMiddle";
import AdsHomeBottom from "@/components/Advertisement/AdsHomeBottom";

// import axios from "axios";
export default {
  components: {
    BlockA,
    SocialBlock,
    BlockB,
    BlockC,
    AdsHomeMiddle,
    AdsHomeBottom
  },
  async asyncData(context, callback) {
    // get TopNewsInHomepage
    // const NewsInHomepage = await context.store.dispatch("getTopNewsInHomepage"); //(2)
    // const NewsBlockB = await context.store.dispatch("getLatestNewsCategory",{
    //   id : 'tintucId',
    // }) //(2)
    //(1)
    setTimeout(() => {
      callback(null, {
        TopNews: [
          {
            id: "1",
            title:
              "Chuẩn bị cho cách ly 10.000 người, tăng chuyến bay cho chuyên gia, nhà đầu tư",
            alias: "chuan-bi-cho-cach-ly-10000-nguoi",
            image:
              "http://nongthonviet.com.vn/dataimages/202009//original/images1470021_photo_1_15991951422081134227344.jpg",
            publishedDate: 1600280653,
            authorId: "1",
            categoryId: "1",
            excerpt:
              "Thủ tướng yêu cầu có phương án cụ thể cho từng chuyến bay thương mại, tăng dần tần suất chuyến bay đón công dân về nước...."
          },
          {
            id: "2",
            title:
              "Chuẩn bị cho cách ly 10.000 người, tăng chuyến bay cho chuyên gia, nhà đầu tư",
            alias: "chuan-bi-cho-cach-ly-10000-nguoi",
            image:
              "http://nongthonviet.com.vn/dataimages/202009//original/images1470021_photo_1_15991951422081134227344.jpg",
            publishedDate: 1600280653,
            authorId: "1",
            categoryId: "1",
            excerpt:
              "Thủ tướng yêu cầu có phương án cụ thể cho từng chuyến bay thương mại, tăng dần tần suất chuyến bay đón công dân về nước...."
          },
          {
            id: "3",
            title:
              "Chuẩn bị cho cách ly 10.000 người, tăng chuyến bay cho chuyên gia, nhà đầu tư",
            alias: "chuan-bi-cho-cach-ly-10000-nguoi",
            image:
              "http://nongthonviet.com.vn/dataimages/202009//original/images1470021_photo_1_15991951422081134227344.jpg",
            publishedDate: 1600280653,
            authorId: "1",
            categoryId: "1",
            excerpt:
              "Thủ tướng yêu cầu có phương án cụ thể cho từng chuyến bay thương mại, tăng dần tần suất chuyến bay đón công dân về nước...."
          },
          {
            id: "4",
            title:
              "Chuẩn bị cho cách ly 10.000 người, tăng chuyến bay cho chuyên gia, nhà đầu tư",
            alias: "chuan-bi-cho-cach-ly-10000-nguoi",
            image:
              "http://nongthonviet.com.vn/dataimages/202009//original/images1470021_photo_1_15991951422081134227344.jpg",
            publishedDate: 1600280653,
            authorId: "1",
            categoryId: "1",
            excerpt:
              "Thủ tướng yêu cầu có phương án cụ thể cho từng chuyến bay thương mại, tăng dần tần suất chuyến bay đón công dân về nước...."
          }
        ],
        NewsBlockB : [
        {
          id: "1",
          title:
            "Chuẩn bị cho cách ly 10.000 người, tăng chuyến bay cho chuyên gia, nhà đầu tư",
          alias: "chuan-bi-cho-cach-ly-10000-nguoi",
          image:
            "http://nongthonviet.com.vn/dataimages/202009//original/images1470021_photo_1_15991951422081134227344.jpg",
          publishedDate: 1600280653,
          authorId: "1",
          categoryId: "1",
          excerpt:
            "Thủ tướng yêu cầu có phương án cụ thể cho từng chuyến bay thương mại, tăng dần tần suất chuyến bay đón công dân về nước...."
        },
        {
          id: "2",
          title:
            "Chuẩn bị cho cách ly 10.000 người, tăng chuyến bay cho chuyên gia, nhà đầu tư",
          alias: "chuan-bi-cho-cach-ly-10000-nguoi",
          image:
            "http://nongthonviet.com.vn/dataimages/202009//original/images1470021_photo_1_15991951422081134227344.jpg",
          publishedDate: 1600280653,
          authorId: "1",
          categoryId: "1",
          excerpt:
            "Thủ tướng yêu cầu có phương án cụ thể cho từng chuyến bay thương mại, tăng dần tần suất chuyến bay đón công dân về nước...."
        },
        {
          id: "3",
          title:
            "Chuẩn bị cho cách ly 10.000 người, tăng chuyến bay cho chuyên gia, nhà đầu tư",
          alias: "chuan-bi-cho-cach-ly-10000-nguoi",
          image:
            "http://nongthonviet.com.vn/dataimages/202009//original/images1470021_photo_1_15991951422081134227344.jpg",
          publishedDate: 1600280653,
          authorId: "1",
          categoryId: "1",
          excerpt:
            "Thủ tướng yêu cầu có phương án cụ thể cho từng chuyến bay thương mại, tăng dần tần suất chuyến bay đón công dân về nước...."
        },
        {
          id: "4",
          title:
            "Chuẩn bị cho cách ly 10.000 người, tăng chuyến bay cho chuyên gia, nhà đầu tư",
          alias: "chuan-bi-cho-cach-ly-10000-nguoi",
          image:
            "http://nongthonviet.com.vn/dataimages/202009//original/images1470021_photo_1_15991951422081134227344.jpg",
          publishedDate: 1600280653,
          authorId: "1",
          categoryId: "1",
          excerpt:
            "Thủ tướng yêu cầu có phương án cụ thể cho từng chuyến bay thương mại, tăng dần tần suất chuyến bay đón công dân về nước...."
        },
        {
          id: "5",
          title:
            "Chuẩn bị cho cách ly 10.000 người, tăng chuyến bay cho chuyên gia, nhà đầu tư",
          alias: "chuan-bi-cho-cach-ly-10000-nguoi",
          image:
            "http://nongthonviet.com.vn/dataimages/202009//original/images1470021_photo_1_15991951422081134227344.jpg",
          publishedDate: 1600280653,
          authorId: "1",
          categoryId: "1",
          excerpt:
            "Thủ tướng yêu cầu có phương án cụ thể cho từng chuyến bay thương mại, tăng dần tần suất chuyến bay đón công dân về nước...."
        },
        {
          id: "6",
          title:
            "Chuẩn bị cho cách ly 10.000 người, tăng chuyến bay cho chuyên gia, nhà đầu tư",
          alias: "chuan-bi-cho-cach-ly-10000-nguoi",
          image:
            "http://nongthonviet.com.vn/dataimages/202009//original/images1470021_photo_1_15991951422081134227344.jpg",
          publishedDate: 1600280653,
          authorId: "1",
          categoryId: "1",
          excerpt:
            "Thủ tướng yêu cầu có phương án cụ thể cho từng chuyến bay thương mại, tăng dần tần suất chuyến bay đón công dân về nước...."
        },
        {
          id: "7",
          title:
            "Chuẩn bị cho cách ly 10.000 người, tăng chuyến bay cho chuyên gia, nhà đầu tư",
          alias: "chuan-bi-cho-cach-ly-10000-nguoi",
          image:
            "http://nongthonviet.com.vn/dataimages/202009//original/images1470021_photo_1_15991951422081134227344.jpg",
          publishedDate: 1600280653,
          authorId: "1",
          categoryId: "1",
          excerpt:
            "Thủ tướng yêu cầu có phương án cụ thể cho từng chuyến bay thương mại, tăng dần tần suất chuyến bay đón công dân về nước...."
        },
        {
          id: "8",
          title:
            "Chuẩn bị cho cách ly 10.000 người, tăng chuyến bay cho chuyên gia, nhà đầu tư",
          alias: "chuan-bi-cho-cach-ly-10000-nguoi",
          image:
            "http://nongthonviet.com.vn/dataimages/202009//original/images1470021_photo_1_15991951422081134227344.jpg",
          publishedDate: 1600280653,
          authorId: "1",
          categoryId: "1",
          excerpt:
            "Thủ tướng yêu cầu có phương án cụ thể cho từng chuyến bay thương mại, tăng dần tần suất chuyến bay đón công dân về nước...."
        },
        {
          id: "9",
          title:
            "Chuẩn bị cho cách ly 10.000 người, tăng chuyến bay cho chuyên gia, nhà đầu tư",
          alias: "chuan-bi-cho-cach-ly-10000-nguoi",
          image:
            "http://nongthonviet.com.vn/dataimages/202009//original/images1470021_photo_1_15991951422081134227344.jpg",
          publishedDate: 1600280653,
          authorId: "1",
          categoryId: "1",
          excerpt:
            "Thủ tướng yêu cầu có phương án cụ thể cho từng chuyến bay thương mại, tăng dần tần suất chuyến bay đón công dân về nước...."
        }
      ],
        NewsBlockC : [
        {
          id: "1",
          title:
            "Chuẩn bị cho cách ly 10.000 người, tăng chuyến bay cho chuyên gia, nhà đầu tư",
          alias: "chuan-bi-cho-cach-ly-10000-nguoi",
          image:
            "http://nongthonviet.com.vn/dataimages/202009//original/images1470021_photo_1_15991951422081134227344.jpg",
          publishedDate: 1600280653,
          authorId: "1",
          categoryId: "1",
          excerpt:
            "Thủ tướng yêu cầu có phương án cụ thể cho từng chuyến bay thương mại, tăng dần tần suất chuyến bay đón công dân về nước...."
        },
        {
          id: "2",
          title:
            "Chuẩn bị cho cách ly 10.000 người, tăng chuyến bay cho chuyên gia, nhà đầu tư",
          alias: "chuan-bi-cho-cach-ly-10000-nguoi",
          image:
            "http://nongthonviet.com.vn/dataimages/202009//original/images1470021_photo_1_15991951422081134227344.jpg",
          publishedDate: 1600280653,
          authorId: "1",
          categoryId: "1",
          excerpt:
            "Thủ tướng yêu cầu có phương án cụ thể cho từng chuyến bay thương mại, tăng dần tần suất chuyến bay đón công dân về nước...."
        },
        {
          id: "3",
          title:
            "Chuẩn bị cho cách ly 10.000 người, tăng chuyến bay cho chuyên gia, nhà đầu tư",
          alias: "chuan-bi-cho-cach-ly-10000-nguoi",
          image:
            "http://nongthonviet.com.vn/dataimages/202009//original/images1470021_photo_1_15991951422081134227344.jpg",
          publishedDate: 1600280653,
          authorId: "1",
          categoryId: "1",
          excerpt:
            "Thủ tướng yêu cầu có phương án cụ thể cho từng chuyến bay thương mại, tăng dần tần suất chuyến bay đón công dân về nước...."
        },
        {
          id: "4",
          title:
            "Chuẩn bị cho cách ly 10.000 người, tăng chuyến bay cho chuyên gia, nhà đầu tư",
          alias: "chuan-bi-cho-cach-ly-10000-nguoi",
          image:
            "http://nongthonviet.com.vn/dataimages/202009//original/images1470021_photo_1_15991951422081134227344.jpg",
          publishedDate: 1600280653,
          authorId: "1",
          categoryId: "1",
          excerpt:
            "Thủ tướng yêu cầu có phương án cụ thể cho từng chuyến bay thương mại, tăng dần tần suất chuyến bay đón công dân về nước...."
        },
        {
          id: "5",
          title:
            "Chuẩn bị cho cách ly 10.000 người, tăng chuyến bay cho chuyên gia, nhà đầu tư",
          alias: "chuan-bi-cho-cach-ly-10000-nguoi",
          image:
            "http://nongthonviet.com.vn/dataimages/202009//original/images1470021_photo_1_15991951422081134227344.jpg",
          publishedDate: 1600280653,
          authorId: "1",
          categoryId: "1",
          excerpt:
            "Thủ tướng yêu cầu có phương án cụ thể cho từng chuyến bay thương mại, tăng dần tần suất chuyến bay đón công dân về nước...."
        }
      ]
      });
    }, 2000);
  }
};
</script>

<style></style>
