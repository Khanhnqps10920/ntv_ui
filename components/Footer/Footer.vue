<template>
  <footer class="footer">
    <Container1440>
      <div class="footer__container">
        <!-- logo -->
        <div class="footer__logo footer__container-item">
          <!-- logo -->
          <nuxt-link to="/">LOGO</nuxt-link>

          <!-- description -->
          <p
            class="footer__logo--description"
          >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, atque?</p>

          <!-- socials -->
          <ul class="footer__logo--socials">
            <li class="footer__logo--socials-item">
              <a href="#" class="footer__link">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li class="footer__logo--socials-item">
              <a href="#" class="footer__link">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li class="footer__logo--socials-item">
              <a href="#" class="footer__link">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li class="footer__logo--socials-item">
              <a href="#" class="footer__link">
                <i class="fab fa-vk"></i>
              </a>
            </li>
            <li class="footer__logo--socials-item">
              <a href="#" class="footer__link">
                <i class="fab fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>

        <!-- empty -->
        <div class="footer__container-item footer__empty"></div>

        <!-- about  -->
        <div class="footer__about footer__container-item">
          <h4 class="footer__block-title">About Us</h4>
          <ul class="footer__about-sections">
            <li>
              <a href="#" class="footer__link">Advertise</a>
            </li>
            <li>
              <a href="#" class="footer__link">About</a>
            </li>
            <li>
              <a href="#" class="footer__link">Event</a>
            </li>
            <li>
              <a href="#" class="footer__link">Write for us</a>
            </li>
            <li>
              <a href="#" class="footer__link">In the press</a>
            </li>
          </ul>
        </div>

        <!-- popuplar category -->
        <div class="footer__category footer__container-item">
          <h4 class="footer__block-title">Popular Category</h4>

          <ul class="footer__category-list">
            <li class="footer__category-list-item">
              <a href="#" class="footer__link">
                <span>culture</span>
                <span class="item-quantity">(6)</span>
              </a>
            </li>
            <li class="footer__category-list-item">
              <a href="#" class="footer__link">
                <span>Politics</span>
                <span class="item-quantity">(6)</span>
              </a>
            </li>
            <li class="footer__category-list-item">
              <a href="#" class="footer__link">
                <span>Travel</span>
                <span class="item-quantity">(6)</span>
              </a>
            </li>
            <li class="footer__category-list-item">
              <a href="#" class="footer__link">
                <span>style</span>
                <span class="item-quantity">(6)</span>
              </a>
            </li>
            <li class="footer__category-list-item">
              <a href="#" class="footer__link">
                <span>arts</span>
                <span class="item-quantity">(6)</span>
              </a>
            </li>
            <li class="footer__category-list-item">
              <a href="#" class="footer__link">
                <span>sports</span>
                <span class="item-quantity">(6)</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- picks -->
        <div class="footer__pick footer__container-item">
          <h4 class="footer__block-title">Editor Picks</h4>

          <ul class="footer__pick-list">
            <li class="footer__pick-item">
              <div class="footer__pick-item--information">
                <a
                  href="#"
                  class="footer__pick-item--information-title footer__link"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, ea.</a>
                <p class="footer__pick-item--information-time">December 10, 2020</p>
              </div>
              <div class="footer__pick-item--img">
                <img src="@/assets/imgs/default.png" alt="pick-img" />
              </div>
            </li>

            <li class="footer__pick-item">
              <div class="footer__pick-item--information">
                <a
                  href="#"
                  class="footer__pick-item--information-title footer__link"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, ea.</a>
                <p class="footer__pick-item--information-time">December 10, 2020</p>
              </div>
              <div class="footer__pick-item--img">
                <img src="@/assets/imgs/default.png" alt="pick-img" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Container1440>
  </footer>
</template>

<script>
// components
import Container1440 from "../containers/Container1440.vue";

export default {
  components: {
    Container1440,
  },
};
</script>

<style>
.footer {
  width: 100%;
  position: relative;
  padding: 30px 0;

  /* background */
  background: url("../../assets/imgs/footer-background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top left;
}

.footer__link:hover {
  color: #febe2b;
}

/* before */
.footer::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  background: #000000;
  opacity: 0.9;
  z-index: 1000;
  top: 0;
  left: 0;
}

.footer__block-title {
  font-size: 24px;
  margin-top: 0;
  margin-bottom: 16px;
  line-height: 31px;
  color: #febe2b;
  font-weight: 900;
}

/* container */
.footer__container {
  display: flex;
  flex-flow: column;
  color: #ffffff;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1001;
}

/* logo */
.footer__logo {
  text-align: center;
}

.footer__logo a {
  margin: 10px 0;
  font-size: 34px;
  text-transform: uppercase;
}

.footer__logo--description {
  font-size: 14px;
  line-height: 1.4;
  margin: 10px 0;
}

.footer__logo--socials {
  display: flex;
  margin-top: 10px;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
}

.footer__logo--socials li {
  margin: 0 10px;
}

.footer__logo--socials li a {
  font-size: 13px;
}

/* about */

.footer__about {
  margin-top: 10px;
  margin-bottom: 32px;
}

.footer__about .footer__about-sections {
  text-align: center;
}

.footer__about .footer__about-sections li {
  font-size: 11px;
  line-height: 24px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* popular */
.footer__category {
  width: 100%;
  text-align: center;
}

.footer__category .footer__category-list {
  text-align: center;
}

.footer__category .footer__category-list .footer__category-list-item {
  font-size: 11px;
  line-height: 24px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* picks */

.footer__pick-item {
  display: flex;
  justify-content: space-between;
  margin: 25px 0;
}

/* info */
.footer__pick {
  margin-top: 25px;
}

.footer__pick h4 {
  text-align: center;
}

.footer__pick-item .footer__pick-item--information {
  width: 84%;
}

.footer__pick-item--information .footer__pick-item--information-title {
  font-weight: bold;
  text-transform: capitalize;
}

.footer__pick-item--information .footer__pick-item--information-time {
  margin-top: 10px;
  font-style: italic;
}

/* image */
.footer__pick-item .footer__pick-item--img {
  width: 15%;
}

.footer__pick-item .footer__pick-item--img img {
  width: 100%;
  object-fit: cover;
  object-position: center;
  height: 100%;
}

/* media queries */

@media (min-width: 767px) {
  .footer {
    padding-top: 60px;
    padding-bottom: 40px;
  }

  .footer__container {
    flex-flow: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  .footer__container .footer__container-item {
    width: 23%;
    text-align: left;
  }

  /* logo */
  .footer__logo a {
    font-size: 38px;
    font-weight: 500;
    line-height: 1.1;
  }

  .footer__logo--socials {
    justify-content: flex-start;
  }

  /* about */
  .footer__about {
    margin-top: 0;
  }

  .footer__about .footer__about-sections {
    text-align: left;
  }

  /* popular */
  .footer__category {
    text-align: left;
    margin-right: 40px;
  }

  .footer__category .footer__category-list {
    text-align: left;
  }

  /* pícks */
  .footer__pick {
    margin: 0;
  }

  .footer__pick h4 {
    text-align: left;
  }

  .footer__pick-item .footer__pick-item--information {
    width: 73%;
  }

  .footer__pick-item .footer__pick-item--img {
    width: 25%;
  }
}

/* tablet */
@media (min-width: 767px) and (max-width: 1018px) {
  .footer__container .footer__container-item {
    width: 23%;
    margin-right: 0;
  }

  .footer__container .footer__container-item.footer__empty {
    display: none;
  }

  .footer__block-title {
    font-size: 17px;
  }

  .footer__link {
    font-size: 12px;
  }

  .footer__pick-item .footer__pick-item--img img {
    height: 65%;
  }
}
</style>