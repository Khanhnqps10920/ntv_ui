<template>
  <div>
    <BlockA
      class="mt-10"
      :News="HomeA_Main"
      :TinNhanh="HomeA_Right1"
      :titleHomeA_Right1="titleHomeA_Right1"
      :ThiTruongTaiChinh="HomeA_Right2"
      :titleHomeA_Right2="titleHomeA_Right2"
    />
    <SocialBlock class="mt-10" :ads="homeAdsOne" />
    <BlockB
      class="mt-10"
      :News="HomeB_Main"
      :title_Main="titleHomeB_Main"
      :Magazine="HomeB_Left"
      :title_Left="titleHomeB_Left"
      :viewAll_Left="viewAllHomeB_Left"
      :TheThao="HomeB_Right1"
      :title_Right1="titleHomeB_Right1"
      :viewAll_Right1="viewAllHomeB_Right1"
      :VanHoa="HomeB_Right2"
      :title_Right2="titleHomeB_Right2"
      :viewAll_Right2="viewAllHomeB_Right2"
      :ads="homeAdsTwo"
    />
    <BlockC class="mt-10" :News="HomeC_Main" :title_Main="titleHomeC_Main" />
    <AdsHomeMiddle :ads="homeAdsThree" />
    <BlockB
      class="mt-10"
      :News="HomeD_Main"
      :title_Main="titleHomeD_Main"
      :Magazine="HomeD_Left"
      :title_Left="titleHomeD_Left"
      :viewAll_Left="viewAllHomeD_Left"
      :TheThao="HomeD_Right1"
      :title_Right1="titleHomeD_Right1"
      :viewAll_Right1="viewAllHomeD_Right1"
      :VanHoa="HomeD_Right2"
      :title_Right2="titleHomeD_Right2"
      :viewAll_Right2="viewAllHomeD_Right2"
      :ads="homeAdsFour"
    />
    <AdsHomeMiddle :ads="homeAdsFive" />
    <BlockC class="mt-10" :News="HomeE_Main" :title_Main="titleHomeE_Main" />
    <AdsHomeBottom :ads="homeAdsSix" />
  </div>
</template>

<script>
import BlockA from "@/components/HomePage/BlockA/BlockA";
import SocialBlock from "@/components/HomePage/SocialBlock/SocialBlock";
import BlockB from "@/components/HomePage/BlockB/BlockB";
import BlockC from "@/components/HomePage/BlockC/BlockC.vue";
import AdsHomeMiddle from "@/components/Advertisement/AdsHomeMiddle";
import AdsHomeBottom from "@/components/Advertisement/AdsHomeBottom";

export default {
  components: {
    BlockA,
    SocialBlock,
    BlockB,
    BlockC,
    AdsHomeMiddle,
    AdsHomeBottom,
  },

  computed: {
    homeAdsOne() {
      return this.Ads.find((el) => el.section === "HomeAds1");
    },
    homeAdsTwo() {
      return this.Ads.find((el) => el.section === "HomeAds2");
    },
    homeAdsThree() {
      return this.Ads.find((el) => el.section === "HomeAds3");
    },
    homeAdsFour() {
      return this.Ads.find((el) => el.section === "HomeAds4");
    },
    homeAdsFive() {
      return this.Ads.find((el) => el.section === "HomeAds5");
    },
    homeAdsSix() {
      return this.Ads.find((el) => el.section === "HomeAds6");
    },
  },

  async asyncData(context) {
    let layout = [];
    await context.store.dispatch("getLayout", {
      page: "homepage",
      nextActions: (res) => {
        layout = res.result;
      },
    });
    const apiAction = (listType) => {
      let action = "";
      switch (listType) {
        case "Category":
          action = "getNewsInCategoryPage";
          break;
        case "HotNews":
          action = "getTopHotNewsByCategory";
          break;
        default:
          action = "getNewsInCategoryPage";
      }
      return action;
    };

    //HomeA_Main
    let HomeAMainObj = layout.find((e) => {
      return e.section === "HomeA_Main";
    });
    let HomeA_Main = [];
    let HomeA_Right1 = [];
    let HomeA_Right2 = [];
    // await context.store.dispatch(apiAction(HomeAMainObj.listType), {
    //   urlQuery: {
    //     categoryId: HomeAMainObj.cateId,
    //     skip: 1,
    //     limit: 4
    //   },
    //   nextActions: res => {
    //     HomeA_Main = [...res.result];
    //   }
    // });

    //HomeA_Right1
    let HomeARight1Obj = layout.find((e) => {
      return e.section === "HomeA_Right1";
    });
    const titleHomeA_Right1 = HomeARight1Obj.title;
    // await context.store.dispatch(apiAction(HomeARight1Obj.listType), {
    //   urlQuery: {
    //     categoryId: HomeARight1Obj.cateId,
    //     skip: 0,
    //     limit: 1
    //   },
    //   nextActions: res => {
    //     HomeA_Right1 = [...res.result];
    //   }
    // });

    //HomeA_Right2
    let HomeARight2Obj = layout.find((e) => {
      return e.section === "HomeA_Right2";
    });
    const titleHomeA_Right2 = HomeARight2Obj.title;
    // await context.store.dispatch(apiAction(HomeARight2Obj.listType), {
    //   urlQuery: {
    //     categoryId: HomeARight1Obj.cateId,
    //     skip: 0,
    //     limit: 3
    //   },
    //   nextActions: res => {
    //     HomeA_Right2 = [...res.result];
    //   }
    // });

    //HomeB_Main
    let HomeB_Main = [];
    let HomeB_Left = [];
    let HomeB_Right1 = [];
    let HomeB_Right2 = [];

    let HomeBMainObj = layout.find((e) => {
      return e.section === "HomeB_Main";
    });
    const titleHomeB_Main = HomeBMainObj.title;
    // await context.store.dispatch(apiAction(HomeBMainObj.listType), {
    //   urlQuery: {
    //     categoryId: HomeBMainObj.cateId
    //   },
    //   nextActions: res => {
    //     HomeB_Main = [...res.result];
    //   }
    // });

    //HomeB_Left
    let HomeBLeftObj = layout.find((e) => {
      return e.section === "HomeB_Left";
    });
    const titleHomeB_Left = HomeBLeftObj.title;
    const viewAllHomeB_Left =
      HomeBLeftObj.cateAlias && HomeBLeftObj.cateId
        ? `/category/${HomeBLeftObj.cateAlias}-id=${HomeBLeftObj.cateId}`
        : "/";
    // await context.store.dispatch(apiAction(HomeBLeftObj.listType), {
    //   urlQuery: {
    //     categoryId: HomeBLeftObj.cateId
    //   },
    //   nextActions: res => {
    //     HomeB_Left = [...res.result];
    //   }
    // });

    //HomeB_Right1
    let HomeBRight1Obj = layout.find((e) => {
      return e.section === "HomeB_Right1";
    });
    const titleHomeB_Right1 = HomeBRight1Obj.title;
    const viewAllHomeB_Right1 =
      HomeBRight1Obj.cateAlias && HomeBRight1Obj.cateId
        ? `/category/${HomeBRight1Obj.cateAlias}-id=${HomeBRight1Obj.cateId}`
        : "/";
    // await context.store.dispatch(apiAction(HomeBRight1Obj.listType), {
    //   urlQuery: {
    //     categoryId: HomeBRight1Obj.cateId
    //   },
    //   nextActions: res => {
    //     HomeB_Right1 = [...res.result];
    //   }
    // });

    //HomeB_Right2
    let HomeBRight2Obj = layout.find((e) => {
      return e.section === "HomeB_Right2";
    });
    const titleHomeB_Right2 = HomeBRight2Obj.title;
    const viewAllHomeB_Right2 =
      HomeBRight2Obj.cateAlias && HomeBRight2Obj.cateId
        ? `/category/${HomeBRight2Obj.cateAlias}-id=${HomeBRight2Obj.cateId}`
        : "/";
    // await context.store.dispatch(apiAction(HomeBRight2Obj.listType), {
    //   urlQuery: {
    //     categoryId: HomeBRight2Obj.cateId
    //   },
    //   nextActions: res => {
    //     HomeB_Right2 = [...res.result];
    //   }
    // });

    //HomeC_Main
    let HomeCMainObj = layout.find((e) => {
      return e.section === "HomeC_Main";
    });
    let HomeC_Main = [];
    const titleHomeC_Main = HomeCMainObj.title;
    // await context.store.dispatch(apiAction(HomeCMainObj.listType), {
    //   urlQuery: {
    //     categoryId: HomeCMainObj.cateId,
    //     skip: 0,
    //     limit: 5
    //   },
    //   nextActions: res => {
    //     HomeC_Main = [...res.result];
    //   }
    // });

    //HomeD_Main
    let HomeD_Main = [];
    let HomeD_Left = [];
    let HomeD_Right1 = [];
    let HomeD_Right2 = [];

    let HomeDMainObj = layout.find((e) => {
      return e.section === "HomeD_Main";
    });
    const titleHomeD_Main = HomeDMainObj.title;
    // await context.store.dispatch(apiAction(HomeDMainObj.listType), {
    //   urlQuery: {
    //     categoryId: HomeDMainObj.cateId
    //   },
    //   nextActions: res => {
    //     HomeD_Main = [...res.result];
    //   }
    // });

    //HomeD_Left
    let HomeDLeftObj = layout.find((e) => {
      return e.section === "HomeD_Left";
    });
    const titleHomeD_Left = HomeDLeftObj.title;
    const viewAllHomeD_Left =
      HomeDLeftObj.cateAlias && HomeDLeftObj.cateId
        ? `/category/${HomeDLeftObj.cateAlias}-id=${HomeDLeftObj.cateId}`
        : "/";
    // await context.store.dispatch(apiAction(HomeDLeftObj.listType), {
    //   urlQuery: {
    //     categoryId: HomeDLeftObj.cateId
    //   },
    //   nextActions: res => {
    //     HomeD_Left = [...res.result];
    //   }
    // });

    //HomeD_Right1
    let HomeDRight1Obj = layout.find((e) => {
      return e.section === "HomeD_Right1";
    });
    const titleHomeD_Right1 = HomeDRight1Obj.title;
    const viewAllHomeD_Right1 =
      HomeDRight1Obj.cateAlias && HomeDRight1Obj.cateId
        ? `/category/${HomeDRight1Obj.cateAlias}-id=${HomeDRight1Obj.cateId}`
        : "/";
    // await context.store.dispatch(apiAction(HomeDRight1Obj.listType), {
    //   urlQuery: {
    //     categoryId: HomeDRight1Obj.cateId
    //   },
    //   nextActions: res => {
    //     HomeD_Right1 = [...res.result];
    //   }
    // });

    //HomeD_Right2
    let HomeDRight2Obj = layout.find((e) => {
      return e.section === "HomeD_Right2";
    });
    const titleHomeD_Right2 = HomeDRight2Obj.title;
    const viewAllHomeD_Right2 =
      HomeDRight2Obj.cateAlias && HomeDRight2Obj.cateId
        ? `/category/${HomeDRight2Obj.cateAlias}-id=${HomeDRight2Obj.cateId}`
        : "/";
    // await context.store.dispatch(apiAction(HomeDRight2Obj.listType), {
    //   urlQuery: {
    //     categoryId: HomeDRight2Obj.cateId
    //   },
    //   nextActions: res => {
    //     HomeD_Right2 = [...res.result];
    //   }
    // });

    //HomeE_Main
    let HomeEMainObj = layout.find((e) => {
      return e.section === "HomeE_Main";
    });
    let HomeE_Main = [];
    const titleHomeE_Main = HomeEMainObj.title;
    // await context.store.dispatch(apiAction(HomeEMainObj.listType), {
    //   urlQuery: {
    //     categoryId: HomeEMainObj.cateId,
    //     skip: 0,
    //     limit: 5
    //   },
    //   nextActions: res => {
    //     HomeE_Main = [...res.result];
    //   }
    // });

    //  ========= //
    // ads

    let Ads = [];
    // ========= //
    await Promise.all([
      context.store.dispatch(apiAction(HomeAMainObj.listType), {
        urlQuery: {
          categoryId: HomeAMainObj.cateId,
          skip: 1,
          limit: 4,
        },
        nextActions: (res) => {
          HomeA_Main = [...res.result];
        },
      }),
      context.store.dispatch(apiAction(HomeARight1Obj.listType), {
        urlQuery: {
          categoryId: HomeARight1Obj.cateId,
          skip: 0,
          limit: 1,
        },
        nextActions: (res) => {
          HomeA_Right1 = [...res.result];
        },
      }),
      context.store.dispatch(apiAction(HomeARight2Obj.listType), {
        urlQuery: {
          categoryId: HomeARight1Obj.cateId,
          skip: 0,
          limit: 3,
        },
        nextActions: (res) => {
          HomeA_Right2 = [...res.result];
        },
      }),
      context.store.dispatch(apiAction(HomeBMainObj.listType), {
        urlQuery: {
          categoryId: HomeBMainObj.cateId,
        },
        nextActions: (res) => {
          HomeB_Main = [...res.result].splice(0, 10);
        },
      }),
      context.store.dispatch(apiAction(HomeBLeftObj.listType), {
        urlQuery: {
          categoryId: HomeBLeftObj.cateId,
        },
        nextActions: (res) => {
          HomeB_Left = [...res.result].splice(0, 5);
        },
      }),
      context.store.dispatch(apiAction(HomeBRight1Obj.listType), {
        urlQuery: {
          categoryId: HomeBRight1Obj.cateId,
        },
        nextActions: (res) => {
          HomeB_Right1 = [...res.result].splice(0, 5);
        },
      }),
      context.store.dispatch(apiAction(HomeBRight2Obj.listType), {
        urlQuery: {
          categoryId: HomeBRight2Obj.cateId,
        },
        nextActions: (res) => {
          HomeB_Right2 = [...res.result].splice(0, 5);
        },
      }),
      context.store.dispatch(apiAction(HomeCMainObj.listType), {
        urlQuery: {
          categoryId: HomeCMainObj.cateId,
          skip: 0,
          limit: 5,
        },
        nextActions: (res) => {
          HomeC_Main = [...res.result];
        },
      }),
      context.store.dispatch(apiAction(HomeDMainObj.listType), {
        urlQuery: {
          categoryId: HomeDMainObj.cateId,
        },
        nextActions: (res) => {
          HomeD_Main = [...res.result].splice(0, 10);
        },
      }),
      context.store.dispatch(apiAction(HomeDLeftObj.listType), {
        urlQuery: {
          categoryId: HomeDLeftObj.cateId,
        },
        nextActions: (res) => {
          HomeD_Left = [...res.result].splice(0, 5);
        },
      }),
      context.store.dispatch(apiAction(HomeDRight1Obj.listType), {
        urlQuery: {
          categoryId: HomeDRight1Obj.cateId,
        },
        nextActions: (res) => {
          HomeD_Right1 = [...res.result].splice(0, 5);
        },
      }),
      context.store.dispatch(apiAction(HomeDRight2Obj.listType), {
        urlQuery: {
          categoryId: HomeDRight2Obj.cateId,
        },
        nextActions: (res) => {
          HomeD_Right2 = [...res.result].splice(0, 5);
        },
      }),
      context.store.dispatch(apiAction(HomeEMainObj.listType), {
        urlQuery: {
          categoryId: HomeEMainObj.cateId,
          skip: 0,
          limit: 5,
        },
        nextActions: (res) => {
          HomeE_Main = [...res.result];
        },
      }),
      context.store.dispatch("getAds", {
        page: "homepage",
        nextActions: (res) => {
          Ads = [...res.result];
        },
      }),
    ]);

    return {
      HomeA_Main,

      HomeA_Right1,
      titleHomeA_Right1,

      HomeA_Right2,
      titleHomeA_Right2,

      HomeB_Main,
      titleHomeB_Main,
      HomeB_Left,
      titleHomeB_Left,
      viewAllHomeB_Left,

      HomeB_Right1,
      titleHomeB_Right1,
      viewAllHomeB_Right1,

      HomeB_Right2,
      titleHomeB_Right2,
      viewAllHomeB_Right2,

      HomeC_Main,
      titleHomeC_Main,

      HomeD_Main,
      titleHomeD_Main,
      HomeD_Left,
      titleHomeD_Left,
      viewAllHomeD_Left,

      HomeD_Right1,
      titleHomeD_Right1,
      viewAllHomeD_Right1,

      HomeD_Right2,
      titleHomeD_Right2,
      viewAllHomeD_Right2,

      HomeE_Main,
      titleHomeE_Main,

      Ads,
    };
  },
};
</script>

<style></style>
