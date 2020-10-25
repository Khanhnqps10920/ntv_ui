<template>
  <form @submit.prevent="handleSubmitComment" class="comment-form mt-5">
    <textarea
      ref="commentArea"
      class="comment-form__area"
      placeholder="Comment:"
      cols="45"
      rows="8"
      aria-required="true"
      v-model="content"
    ></textarea>
    <p class="text-red-500 text-xs italic ml-1 mt-1" v-if="$v.content.$error">
      Nội dung comment không được để trống.
    </p>
    <div class="comment-form__inputs mt-3">
      <div>
        <input type="text" v-model="name" class="comment-form__input" required placeholder="Your Name: ">
        <p class="text-red-500 text-xs italic ml-1 mt-3" v-if="$v.name.$error">
          Tên không được để trống và phải nhiều hơn 6 ký tự
        </p>
      </div>
      <div>
        <input type="text" v-model="email" class="comment-form__input" placeholder="Your Email: ">
      </div>
    </div>

    <button class="comment-form__btn mt-5" type="submit">Post Comment</button>
  </form>
</template>

<script>
// libs
import Axios from "axios";
import { required, email, minLength } from "vuelidate/lib/validators";

// vuex
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      content: null,
      name: null,
      email:null
    };
  },
  props: {
    postId: {
      type: String,
    },
    replyData: {
      type: Object,
    },
  },
  computed: {
    ...mapState(["user"]),
  },

  validations: {
    content: {
      required,
    },

    name: {
      required,
      minLength: minLength(6)
    },

    email: {
      required,
      email
    }
  },

  methods: {
    ...mapMutations(["setActiveSignin", "SET_AUTH_ERROR"]),


    // old comment function
    handleAddComment() {
      // check if login in
      if (this.user) {
        const { name, email, userId } = this.user;
        this.$v.$touch();
        this.SET_AUTH_ERROR(null);

        // check if invalid
        if (this.$v.$anyError) {
          return;
        }
        // post api here
        if (this.replyData) {
          // fetch data
          const request = Axios.post(
            `${process.env.BASE_API}/public/news/postReply/${this.replyData.commentId}`,
            {
              commentId: this.replyData.commentId,
              userId,
              email,
              name,
              content: this.content,
            }
          );

          request
            .then((response) => {
              this.$emit("refetchReply");

              // reset form
              this.content = null;
              this.$v.$reset();
            })
            .catch((e) => {
            });
        } else {
          const request = Axios.post(
            `${process.env.BASE_API}/public/news/postComment/${this.postId}`,
            {
              userId,
              email,
              name,
              content: this.content,
            }
          );

          request
            .then((response) => {
              this.$emit("refetchComments");

              // reset form
              this.content = null;
              this.$v.$reset();
            })
            .catch((e) => {
            });
        }
      } else {
        // show signin
        this.setActiveSignin(true);
        this.SET_AUTH_ERROR("Bạn cần phải đăng nhập trước");
      }


    },

    // new comment function
    handleSubmitComment() {
      console.log(this.$v);
      this.$v.$touch();
    }
  },
};
</script>

<style scoped>
.comment-form__area,
.comment-form__input {
  width: 100%;
  padding: 6px 9px;
  border: 1px solid #e1e1e1;
  color: #444;
  line-height: 21px;
  font-size: 15px;
  outline: none;
  transition: 0.4s color ease;
}
.comment-form__area:focus,
.comment-form__input:focus {
  border: 2px solid black;
}

.comment-form__area:active,
.comment-form__input:active {
  border: 2px solid black;
}

.comment-form__inputs {
  display: flex;
  justify-content: space-between;
}
.comment-form__inputs > div {
  width: 49.5%;
}

.comment-form label {
  font-size: 8px;
}

.comment-form__btn {
  padding: 14px 24px;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  background-color: #222;
  border-radius: 0;
  color: #fff;
  border: none;
  font-weight: 500;
  -webkit-transition: background-color 0.4s;
  transition: background-color 0.4s;
}

.comment-form__btn:hover {
  background-color: var(--hovercolor);
}

@media (max-width: 767px) {
  .comment-form__inputs {
    display: block;
  }

  .comment-form__inputs > div {
    width: 100%;
    margin:5px 0;
  }

  .comment-form__btn {
    display: block;
    width: 100%;
  }
}
</style>
