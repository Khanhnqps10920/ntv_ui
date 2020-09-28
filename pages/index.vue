<template>
  <div>
    <BlockA
      class="mt-10"
      :News="TopNews"
      :TinNhanh="BlockATinNhanh"
      :ThiTruongTaiChinh="BlockAThiTruongTaiChinh"
    />
    <SocialBlock class="mt-10" />
    <BlockB
      class="mt-10"
      :News="NewsBlockB"
      :Magazine="BlockBMagazine"
      :TheThao="BlockBTheThao"
      :VanHoa="BlockBVanHoa"
    />
    <BlockC class="mt-10" :News="NewsBlockC" />
    <AdsHomeMiddle />
    <BlockB
      class="mt-10"
      :News="NewsBlockBSecond"
      :Magazine="BlockBMagazineSecond"
      :TheThao="BlockBTheThaoSecond"
      :VanHoa="BlockBVanHoaSecond"
    />
    <AdsHomeMiddle />
    <BlockC class="mt-10" :News="NewsBlockCSecond" />
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
  async asyncData(context) {
    // Block A
    let TopNews = [];
    let BlockATinNhanh = [];
    let BlockAThiTruongTaiChinh = [];
    await context.store.dispatch("getTopNewsInHomepage", {
      nextActions: res => {
        TopNews = [...res.result];
      }
    });
    await context.store.dispatch("getLatestNewsCategory", {
      urlQuery: {
        categoryId: "5f5aee09e6caa34e9b9c774f" //to do
      },
      nextActions: res => {
        BlockATinNhanh = [...res.result];
      }
      //change ID follow admin for BlockATinNhanh
    });
    await context.store.dispatch("getLatestNewsCategory", {
      urlQuery: {
        categoryId: "5f5aee09e6caa34e9b9c774f" //to do
      },
      nextActions: res => {
        BlockAThiTruongTaiChinh = [...res.result];
      }
      //change ID follow admin for BlockAThiTruongTaiChinh
    });

    //Block B
    let NewsBlockB = [];
    let BlockBMagazine = [];
    let BlockBTheThao = [];
    let BlockBVanHoa = [];
    await context.store.dispatch("getLatestNewsCategory", {
      urlQuery: {
        categoryId: "5f5aee09e6caa34e9b9c774f" //to do
      },
      nextActions: res => {
        NewsBlockB = [...res.result];
      } //change ID follow admin for Block B
    });
    await context.store.dispatch("getLatestNewsCategory", {
      urlQuery: {
        categoryId: "5f5aee09e6caa34e9b9c774f" //to do
      },
      nextActions: res => {
        BlockBMagazine = [...res.result];
      }
      //change ID follow admin for BlockBMagazine
    });
    await context.store.dispatch("getLatestNewsCategory", {
      urlQuery: {
        categoryId: "5f5aee09e6caa34e9b9c774f" //to do
      },
      nextActions: res => {
        BlockBTheThao = [...res.result];
      }
      //change ID follow admin for BlockBTheThao
    });
    await context.store.dispatch("getLatestNewsCategory", {
      urlQuery: {
        categoryId: "5f5aee09e6caa34e9b9c774f" //to do
      },
      nextActions: res => {
        BlockBVanHoa = [...res.result];
      }
      //change ID follow admin for BlockBVanHoa
    });

    //Block C
    let NewsBlockC = [];
    await context.store.dispatch("getLatestNewsCategory", {
      urlQuery: {
        categoryId: "5f5aee09e6caa34e9b9c774f" //to do
      },
      nextActions: res => {
        NewsBlockC = [...res.result];
      }
      //change ID follow admin for Block C
    });

    //Block B Second
    let NewsBlockBSecond = [];
    let BlockBMagazineSecond = [];
    let BlockBTheThaoSecond = [];
    let BlockBVanHoaSecond = [];
    await context.store.dispatch("getLatestNewsCategory", {
      urlQuery: {
        categoryId: "5f5aee09e6caa34e9b9c774f" //to do
      },
      nextActions: res => {
        NewsBlockBSecond = [...res.result];
      } //change ID follow admin for Block B
    });
    await context.store.dispatch("getLatestNewsCategory", {
      urlQuery: {
        categoryId: "5f5aee09e6caa34e9b9c774f" //to do
      },
      nextActions: res => {
        BlockBMagazineSecond = [...res.result];
      }
      //change ID follow admin for BlockBMagazine
    });
    await context.store.dispatch("getLatestNewsCategory", {
      urlQuery: {
        categoryId: "5f5aee09e6caa34e9b9c774f" //to do
      },
      nextActions: res => {
        BlockBTheThaoSecond = [...res.result];
      }
      //change ID follow admin for BlockBTheThao
    });
    await context.store.dispatch("getLatestNewsCategory", {
      urlQuery: {
        categoryId: "5f5aee09e6caa34e9b9c774f" //to do
      },
      nextActions: res => {
        BlockBVanHoaSecond = [...res.result];
      }
      //change ID follow admin for BlockBVanHoa
    });

    // Block C Second
    let NewsBlockCSecond = [];
    await context.store.dispatch("getLatestNewsCategory", {
      urlQuery: {
        categoryId: "5f5aee09e6caa34e9b9c774f" //to do
      },
      nextActions: res => {
        NewsBlockCSecond = [...res.result];
      }
      //change ID follow admin for Block C
    });

    return {
      TopNews,
      BlockATinNhanh,
      BlockAThiTruongTaiChinh,
      NewsBlockB,
      BlockBMagazine,
      BlockBTheThao,
      BlockBVanHoa,
      NewsBlockC,
      NewsBlockBSecond,
      BlockBMagazineSecond,
      BlockBTheThaoSecond,
      BlockBVanHoaSecond,
      NewsBlockCSecond
    };
  }
};
</script>

<style></style>
