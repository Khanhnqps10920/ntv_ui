<template>
  <Container1640 class="wrapper">
    <div class="mb-6">
      <div class="title-bar" style="background:var(--maincolor)">
        <Container1440>
          <h1
            class="text-white text-6xl sm:text-3xl sm:mt-3 xs:text-4xl xs:mt-3 font-extrabold font-sans mt-5"
          >Tin Nóng</h1>
          <p
            class="text-white mt-4 sm:mt-2 sm:text-sm xs:mt-2 xs:text-sm"
          >Việt Nam Nêu Các Vấn Đề Của Nông Nghiệp Tại Hội Nghị FAO Khu Vực</p>
        </Container1440>
      </div>
    </div>

    <Container1440 class="wrapper1440">
      <div class="grid grid-cols-12 gap-4">
        <!--Main News-->
        <MainItem class="main-new" />
        <!--Rest News-->
        <div class="xs:col-span-12 sm:col-span-6 col-span-7 rest-new">
          <div class="grid grid-cols-12 gap-4">
            <div v-for="(post,i) in posts" :key="i"  class="col-span-6">
              <BlockItem :post="post" />
            </div>
          </div>
        </div>
      </div>
    </Container1440>
  </Container1640>
</template>

<script>
import Container1640 from "@/components/containers/Container1640";
import Container1440 from "@/components/containers/Container1440";
import BlockItem from "@/components/BlockItem/BlockItem";
import MainItem from "@/components/BlockItem/MainItem";

export default {
  components: {
    Container1640,
    Container1440,
    BlockItem,
    MainItem
  },
  data() {
    return {
      posts: [
        {
          id: "914073",
          alias: "nguoi-di-tat-don-dau-765294",
          image:
            "http://nongthonviet.com.vn//dataimages/202009//original/images1469888_keo_giong.jpg",
          title: 'Người "đi tắt đón đầu"',
          date: "12:54 | 15/09/2020",
          description:
            "Ở xã Yên Than (huyện Tiên Yên, tỉnh Quảng Ninh) anh Bùi Văn Tuấn là một điển hình nông dân năng động, sản xuất, kinh doanh giỏi."
        },
        {
          id: "914073",
          alias: "nguoi-di-tat-don-dau-765294",
          image:
            "http://nongthonviet.com.vn//dataimages/202009//original/images1469888_keo_giong.jpg",
          title: 'Người "đi tắt đón đầu"',
          date: "12:54 | 15/09/2020",
          description:
            "Ở xã Yên Than (huyện Tiên Yên, tỉnh Quảng Ninh) anh Bùi Văn Tuấn là một điển hình nông dân năng động, sản xuất, kinh doanh giỏi."
        },
        {
          id: "913810",
          alias: "duyen-lanh-voi-dai-hong-chung-764950",
          image:
            "http://nongthonviet.com.vn//dataimages/202009//original/images1469558_Anh_7.jpg",
          title: "Duyên lành với đại hồng chung",
          date: "14:23 | 07/09/2020",
          description:
            "Nghệ nhân gắn bó với nghề đúc đồng từ năm 12 tuổi, người có duyên lành đúc các đại hồng chung"
        },
        {
          id: "913120",
          alias: "dep-lam-sa-pa-764366",
          image:
            "http://nongthonviet.com.vn//dataimages/202008//original/images1468704_H__4.jpg",
          title: "Đẹp lắm Sa Pa!",
          date: "14:58 | 24/08/2020",
          description:
            "Nếu bạn đặt chân đến Sa Pa (tỉnh Lào Cai), tôi tin rằng bạn sẽ không khỏi ngỡ ngàng bởi vẻ đẹp hút hồn của cảnh sắc, con người nơi đây."
        }
      ]
    };
  }
};
</script>
<style scoped>
.wrapper1440 {
  padding-left: 0px;
  padding-right: 0px;
}
@media (max-width: 767px) {
  .lastest {
    top: -20px;
    z-index: -1;
  }
  .wrapper {
    padding-left: 0px;
    padding-right: 0px;
  }
  .wrapper1440 {
    padding-left: 10px;
    padding-right: 10px;
  }
  .main-new {
    margin-top: -70px;
  }
  .title-bar {
    height: 200px;
    max-height: 200px;
    padding-top: 50px;
    padding-bottom: 75px;
  }
}
@media (max-width: 1018px) and (min-width: 768px) {
  .rest-new {
    margin-top: -50px;
    height: calc(100% + 50px);
  }
  .main-new {
    margin-top: -50px;
  }
  .title-bar {
    height: 130px;
    max-height: 130px;
    padding-top: 20px;
    padding-bottom: 50px;
  }
}
@media (max-width: 1140px) and (min-width: 1019px) {
  .main-new {
    margin-top: -70px;
  }
  .wrapper {
    padding-left: 0px;
    padding-right: 0px;
  }
  .wrapper1440 {
    padding-left: 20px;
    padding-right: 20px;
  }
  .title-bar {
    height: 200px;
    max-height: 200px;
    padding-top: 20px;
    padding-bottom: 50px;
  }
}
@media (min-width: 1141px) {
  .main-new {
    margin-top: -70px;
  }
  .wrapper {
    padding-left: 20px;
    padding-right: 20px;
  }
  /* .wrapper1440 {
    padding-left: 20px;
    padding-right: 20px;
  } */
  .title-bar {
    height: 200px;
    max-height: 2000px;
    padding-top: 20px;
    padding-bottom: 50px;
  }
}
</style>
