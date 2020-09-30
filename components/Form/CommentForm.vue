<template>
  <form @submit.prevent="handleAddComment" class="comment-form mt-5">
    <textarea
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

    <button class="comment-form__btn mt-5" type="submit">Post Comment</button>
  </form>
</template>

<script>
// libs
import { required, email } from "vuelidate/lib/validators";

// vuex
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      content: null,
    };
  },
  computed: {
    ...mapState(["user"]),
  },

  validations: {
    content: {
      required,
    },
  },

  methods: {
    ...mapMutations(["setActiveSignin", "SET_AUTH_ERROR"]),
    handleAddComment() {
      // check if login in
      if (this.user) {
        this.$v.$touch();
        this.SET_AUTH_ERROR(null);

        // post api here
      } else {
        // show signin
        this.setActiveSignin(true);
        this.SET_AUTH_ERROR("Bạn cần phải đăng nhập trước");
      }
    },
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
}
.comment-form__area:focus,
.comment-form__input:focus {
  border: 1.5px solid rgb(225, 225, 225);
}

.comment-form__area:active,
.comment-form__input:active {
  border: 1.5px solid rgb(225, 225, 225);
}

.comment-form__inputs {
  display: flex;
  justify-content: space-between;
}
.comment-form__inputs > div {
  width: 48%;
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
    margin: 20px 0;
  }

  .comment-form__btn {
    display: block;
    width: 100%;
  }
}
</style>
