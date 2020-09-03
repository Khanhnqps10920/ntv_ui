<template>
  <form class="comment-form mt-5">
    <textarea
      class="comment-form__area"
      placeholder="Comment:"
      cols="45"
      rows="8"
      aria-required="true"
    ></textarea>
    <p class="text-red-500 text-xs italic hidden">Please add content.</p>

    <div class="comment-form__inputs my-4">
      <div class="name">
        <input
          class="comment-form__input"
          type="text"
          name="name"
          placeholder="Name*"
          aria-required="true"
        />
        <p class="text-red-500 text-xs italic hidden">Please Add Name</p>
      </div>
      <div class="email">
        <input
          class="comment-form__input"
          type="email"
          name="email"
          placeholder="Email*"
          aria-required="true"
        />
        <p class="text-red-500 text-xs italic hidden">Please Add Email</p>
      </div>
      <div class="website">
        <input class="comment-form__input" type="text" name="email" placeholder="website*" />
      </div>
    </div>

    <label class="md:w-2/3 block">
      <input class="mr-2 leading-tight" type="checkbox" />
      <span
        class="text-sm"
      >Save my name, email, and website in this browser for the next time I comment.</span>
    </label>

    <button class="comment-form__btn mt-5" type="submit">Post Comment</button>
  </form>
</template>

<script>
export default {};
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
}
.comment-form__area:focus,
.comment-form__input:focus {
  border: 1px solid rgb(225, 225, 225) !important;
}

.comment-form__area:active,
.comment-form__input:active {
  border: 1px solid rgb(225, 225, 225);
}

.comment-form__inputs {
  display: flex;
  justify-content: space-between;
}
.comment-form__inputs > div {
  width: 32%;
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