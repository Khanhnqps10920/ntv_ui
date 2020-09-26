<template>
  <container1240>
    <div class="main-block flex xs:block mb-5">
      <!-- main block -->
      <div class="main-block__main flex-grow">
        <MainBlockItem  v-for="(post,index) in posts" :key="index" :post="post" :is1240="true" />
        <Pagination />
      </div>

      <!-- right block -->
      <div class="main-block__right sticky top-fiftyfive xs:static xs:mt-5">
        <div class="main-block__right-block">
          <h4 class="block-title">Latest News</h4>

          <SideBlockItem v-for="(item,index) in 8" :key="index" :isSquare="true" />
        </div>

        <AdsSide class="mt-5" />
      </div>

      <!--  -->
    </div>
  </container1240>
</template>

<script>
// components
import SideBlockItem from "../../SideBlockItem/SideBlockItem.vue";
import Container1240 from "../../containers/Container1240.vue";
import AdsSide from "../../Advertisement/AdsSide.vue";
import MainBlockItem from "../../MainBlockItem/MainBlockItem.vue";
import Pagination from "../../Pagination/Pagination.vue";

export default {
  components: {
    Container1240,
    SideBlockItem,
    MainBlockItem,
    AdsSide,
    Pagination,
  },
  props: {
    posts: {
      type: Array,
      default: () => [
        {
          id: "1",
          title:
            "Chuẩn bị cho cách ly 10.000 người, tăng chuyến bay cho chuyên gia, nhà đầu tư",
          image:
            "http://nongthonviet.com.vn/dataimages/202009//original/images1470021_photo_1_15991951422081134227344.jpg",
          date: "14-09-2020",
          author: "khánh",
          cateName: "Thời sự",
          cateAlias: "thoi-su",
          cateId: "1",
          description:
            "Thủ tướng yêu cầu có phương án cụ thể cho từng chuyến bay thương mại, tăng dần tần suất chuyến bay đón công dân về nước....",
          alias: "chuan-bi-cho-cach-ly-10000-nguoi",
        },
        {
          id: "2",
          title:
            "Thêm một bệnh nhi ung thư được ghép tế bào gốc tự thân thành công",
          image:
            "http://nongthonviet.com.vn/dataimages/202009//original/images1470044_119473384_3576771489000835_6568052006031374559_n.jpg",
          date: "14-09-2020",
          author: "khánh",
          cateName: "Thời sự",
          cateAlias: "thoi-su",
          cateId: "1",
          description:
            "Thủ tướng yêu cầu có phương án cụ thể cho từng chuyến bay thương mại, tăng dần tần suất chuyến bay đón công dân về nước....",
          alias: "them-mot-benh-nhi",
        },
        {
          id: "3",
          title: "Ngăn chặn bánh bẩn tuồn ra thị trường",
          image:
            "http://nongthonviet.com.vn/dataimages/202009//normal/images1470016_1.jpg",
          date: "14-09-2020",
          author: "khánh",
          cateName: "Thời sự",
          cateAlias: "thoi-su",
          cateId: "1",
          description:
            "Thủ tướng yêu cầu có phương án cụ thể cho từng chuyến bay thương mại, tăng dần tần suất chuyến bay đón công dân về nước....",
          alias: "ngan-chan-banh-ban",
        },
        {
          id: "4",
          title: "ĐBSCL trữ nước ngọt để tránh hạn",
          image:
            "http://nongthonviet.com.vn/dataimages/202009//normal/images1470004_1.png",
          date: "14-09-2020",
          author: "khánh",
          cateName: "Thời sự",
          cateAlias: "thoi-su",
          cateId: "1",
          description:
            "Thủ tướng yêu cầu có phương án cụ thể cho từng chuyến bay thương mại, tăng dần tần suất chuyến bay đón công dân về nước....",
          alias: "dbscl-tru-nuoc-ngot-de-tranh-han",
        },
        {
          id: "5",
          title:
            "Chuẩn bị cho cách ly 10.000 người, tăng chuyến bay cho chuyên gia, nhà đầu tư",
          image:
            "http://nongthonviet.com.vn/dataimages/202009//original/images1470021_photo_1_15991951422081134227344.jpg",
          date: "14-09-2020",
          author: "khánh",
          cateName: "Thời sự",
          cateAlias: "thoi-su",
          cateId: "1",
          description: "test 1",
          alias: "chuan-bi-cho-cach-ly-10000-nguoi",
        },
        {
          id: "6",
          title:
            "Thêm một bệnh nhi ung thư được ghép tế bào gốc tự thân thành công",
          image:
            "http://nongthonviet.com.vn/dataimages/202009//original/images1470044_119473384_3576771489000835_6568052006031374559_n.jpg",
          date: "14-09-2020",
          author: "khánh",
          cateName: "Thời sự",
          cateAlias: "thoi-su",
          cateId: "1",
          description: "test2",
          alias: "them-mot-benh-nhi",
        },
        {
          id: "7",
          title: "Ngăn chặn bánh bẩn tuồn ra thị trường",
          image:
            "http://nongthonviet.com.vn/dataimages/202009//normal/images1470016_1.jpg",
          date: "14-09-2020",
          author: "khánh",
          cateName: "Thời sự",
          cateAlias: "thoi-su",
          cateId: "1",
          description: "test 3",
          alias: "ngan-chan-banh-ban",
        },
        {
          id: "8",
          title: "ĐBSCL trữ nước ngọt để tránh hạn",
          image:
            "http://nongthonviet.com.vn/dataimages/202009//normal/images1470004_1.png",
          date: "14-09-2020",
          author: "khánh",
          cateName: "Thời sự",
          cateAlias: "thoi-su",
          cateId: "1",
          description: "test 4",
          alias: "dbscl-tru-nuoc-ngot-de-tranh-han",
        },
        {
          id: "9",
          title: "ĐBSCL trữ nước ngọt để tránh hạn",
          image:
            "http://nongthonviet.com.vn/dataimages/202009//normal/images1470004_1.png",
          date: "14-09-2020",
          author: "khánh",
          cateName: "Thời sự",
          cateAlias: "thoi-su",
          cateId: "1",
          description: "test 4",
          alias: "dbscl-tru-nuoc-ngot-de-tranh-han",
        },
      ],
    },
  },
};
</script>

<style scoped>
/* main block */
.main-block {
  align-items: flex-start;
}

/* end main block */

/* main block main content */

.main-block__main {
  padding-right: 24px;
  padding-left: 24px;
}

/* end main block main */

/* main block right */

.main-block__right {
  padding-right: 24px;
  padding-left: 24px;
}

.main-block__right-block {
  width: auto;
  border: 1px solid #eaeaea;
  padding-right: 19px;
  padding-left: 19px;
  padding-top: 15px;
  padding-bottom: 20px;
}

/* end main block right */

/* responsive */

/* tablet */

@media (max-width: 1018px) and (min-width: 768px) {
  .main-block__right {
    min-width: 250px;
    padding-right: 14px;
    padding-left: 14px;
  }

  /* main block */
  .main-block__main {
    padding-right: 14px;
    padding-left: 14px;
  }
}

/* mobile */

/* other */

@media (max-width: 1140px) and (min-width: 1019px) {
  .main-block__right {
    min-width: 250px;
    max-width: 290px;
    padding-right: 20px;
    padding-left: 20px;
  }

  .main-block__main {
    padding-right: 20px;
    padding-left: 20px;
  }
}

@media (min-width: 1141px) {
  .main-block__right {
    min-width: 350px;
    max-width: 370px;
  }
}
</style>