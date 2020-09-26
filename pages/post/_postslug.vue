<template>
  <Container1440 class="mt-10 mb-5">
    <div class="post grid grid-cols-12 gap-4 relative">
      <!-- main -->
      <div class="col-span-9 xs:col-span-12 xs:mt-6">
        <div class="post__main">
          <div class="post__main--category mb-5"  v-if="post.subCates && post.subCates.length">
            <nuxt-link
              v-for="cate in post.subCates"
              :key="cate.id"
              :to="`/category/${cate.alias}-id=${cate.id}`"
            >{{ cate.name }}</nuxt-link>
          </div>
          <h1 class="post__main--title">{{ post.title }}</h1>

          <div class="post__main--info my-5">
            <!-- info -->
            <div class="post__main--info-wrapper">
              <div class="post__main--info-name">
                <span>Tác giả</span>
                <nuxt-link to="/author">Nguyễn Tâm</nuxt-link>
              </div>

              <span class="post__main--info-time ml-6">{{post.publishedDate | x2datetime('DD/MM/YYYY')}}</span>

              <div class="post__main--info-icon ml-6" v-if="post.commentCount">
                <i class="far fa-comment-alt"></i>
                <span>{{post.commentCount}}</span>
              </div>
              <div class="post__main--info-icon ml-6" v-if="post.viewCount">
                <i class="fas fa-eye"></i>
                <span>{{ post.viewCount }}</span>
              </div>
            </div>

            <!-- social -->
            <div class="post__main--social-wrapper xs:mt-6">
              <div class="post__main--info-social">
                <ShareFacebook />
              </div>
            </div>
          </div>
          <div class="post__main--img">
            <img :src="post.image || ''" alt="post-img" />
          </div>

          <!-- content -->
          <div class="post__main--content grid grid-cols-12 gap-4 relative mt-6">
            <!-- left side -->
            <div class="col-span-4 sm:hidden xs:hidden">
              <div class="post__main--content-side sticky top-fiftyfive">
                <p class="block-title">
                  <span>Tin Nóng</span>
                </p>

                <SideWrapper>
                  <SideBlockItem v-for="(item,index) in 5" :key="index" :isSquare="true" />
                </SideWrapper>

                <SideWrapper>
                  <Author />
                </SideWrapper>
              </div>
            </div>

            <!-- right side -->
            <div class="col-span-8 xs:col-span-12 sm:col-span-12">
              <div class="post__main--content-main">
                <!-- post content -->
                <div class="post__content mb-5">
                  <div v-html="post.postContent || ''"></div>
                </div>

                <div class="post__share">
                  <ShareFacebook />
                </div>

                <div class="post__other mt-5">
                  <div class="post__other-previous">
                    <span class="block">Bài viết trước</span>
                    <nuxt-link to="/post">Dòng vốn FDI - những câu hỏi chưa lời đáp</nuxt-link>
                  </div>
                  <div class="post__other-next">
                    <span class="block">Bài viết tiếp theo</span>
                    <nuxt-link to="/post">Áp thấp nhiệt đới giật cấp 8 vào Biển Đông</nuxt-link>
                  </div>
                </div>
              </div>
            </div>

            <!-- ads main -->
            <div class="col-span-12">
              <SideWrapper>
                <AdsMain />
              </SideWrapper>
            </div>

            <!-- comment / side section -->
            <div class="col-span-4 xs:col-span-12">
              <p class="block-title">
                <span>Các tin khác</span>
              </p>

              <SideWrapper>
                <SideBlockItem v-for="(item,index) in 5" :key="index" :isSquare="true" />
              </SideWrapper>
            </div>

            <div class="comment-block col-span-8 xs:col-span-12">
              <CommentItem v-for="comment in post.comments" :key="comment.id" :item="comment">
                <CommentChildren v-for="rep in comment.reply" :key="rep.id" :item="rep"></CommentChildren>
              </CommentItem>

              <h3 class="comment-block__title">Leave A reply</h3>
              <CommentForm />
            </div>
          </div>
        </div>
      </div>

      <!-- side -->
      <div class="col-span-3 xs:col-span-12">
        <div class="post__side sticky top-fiftyfive">
          <AdsSide />

          <p class="block-title">
            <span>Tin mới</span>
          </p>

          <SideWrapper>
            <SideBlockItem v-for="(item,index) in 5" :key="index" :isSquare="true" />
          </SideWrapper>
        </div>
      </div>
    </div>
  </Container1440>
</template>

<script>
// data
import Container1440 from "@/components/containers/Container1440.vue";
import AdsSide from "@/components/Advertisement/AdsSide.vue";
import SideWrapper from "@/components/SideWrapper/SideWrapper.vue";
import SideBlockItem from "@/components/SideBlockItem/SideBlockItem.vue";
import ShareFacebook from "@/components/SocialShareButton/ShareFacebook.vue";
import Author from "@/components/Author/Author.vue";
import AdsMain from "@/components/Advertisement/AdsMain.vue";
import CommentForm from "@/components/Form/CommentForm.vue";
import CommentItem from "@/components/Comment/CommentItem.vue";
import CommentChildren from "@/components/Comment/CommentChildren.vue";

export default {
  components: {
    Container1440,
    AdsSide,
    SideWrapper,
    SideBlockItem,
    ShareFacebook,
    Author,
    AdsMain,
    CommentForm,
    CommentItem,
    CommentChildren
  },
  async asyncData(context) {
    const id = context.route.params.postslug.slice(
      context.route.params.postslug.indexOf("=") + 1
    );
    const postContent = await context.store.dispatch("getDetailNew", { id });
    const post = postContent.data.result;
    console.log(post)
    return {
      post
    };
  }
};
</script>

<style>
/* main */

.post__main {
  padding-left: 15px;
  padding-right: 15px;
}

/* category */
.post__main--category a {
  padding: 3px 4px 2px;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  background: #000000;
  color: #ffffff;
  transition: 0.4s ease;
}

.post__main--category a:hover {
  opacity: 0.9;
}

/* title */

.post__main--title {
  font-size: 41px;
  font-weight: 700;
  line-height: 1.1;
}

/* info */
.post__main--info {
  display: flex;
  align-items: center;
  width: 100%;
}

.post__main--info > div {
  width: 50%;
}

.post__main--info .post__main--info-wrapper {
  display: flex;
  font-size: 13px;
  font-style: italic;
  color: #444;
}

.post__main--info-name a {
  font-weight: bold;
}

/* social */

.post__main--social-wrapper {
  text-align: right;
}

/* img */

.post__main--img {
  width: 100%;
  height: auto;
}

.post__main--img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/*  */

/* other post */

.post__other {
  display: flex;
  justify-content: space-between;
}

.post__other div {
  width: 45%;
}

.post__other-previous {
  text-align: left;
}

.post__other-next {
  text-align: right;
}

.post__other span {
  font-size: 14px;
  color: #c1c1c1;
  margin-bottom: 7px;
}

.post__other a {
  font-size: 16px;
  line-height: 1.2;
  font-weight: 600;
  color: #222;
}

.post__other a:hover {
  color: var(--hovercolor);
}

/* comment-block */

.comment-block__title {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 7px;
  margin-top: 10px;
  font-weight: 600;
  text-transform: uppercase;
  color: #111;
}

/* responsice  */

@media (max-width: 767px) {
  .post__main--title {
    font-size: 24px;
  }

  .post__main--info {
    display: block;
  }

  .post__main--info > div {
    width: 100%;
    text-align: left;
  }
}

@media (max-width: 1018px) and (min-width: 768px) {
  .post__main--title {
    font-size: 24px;
  }

  .post__main--info {
    display: block;
  }

  .post__main--info > div {
    width: 100%;
    text-align: left;
  }
}
</style>