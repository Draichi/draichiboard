<script setup>
import { event } from 'vue-gtag'
</script>

<template>
  <div id="CTA" :class="$style['CTA-card']">
    <h2 :class="$style['CTA-card__text']" itemprop="description">
      I make people buy your stuff
    </h2>
    <div :class="$style['CTA-card__button-wrapper']">
      <a
        :class="$style['CTA-card__button']"
        href="#email-tile"
        @click="event('cta_clicked')"
      >
        <svg
          fill="none"
          height="17"
          viewBox="0 0 22 17"
          width="22"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.915039 2.48085C0.915039 1.96113 1.12719 1.46269 1.50481 1.0952C1.88243 0.727698 2.3946 0.52124 2.92864 0.52124H19.0374C19.5714 0.52124 20.0836 0.727698 20.4612 1.0952C20.8389 1.46269 21.051 1.96113 21.051 2.48085V14.2385C21.051 14.7582 20.8389 15.2567 20.4612 15.6242C20.0836 15.9917 19.5714 16.1981 19.0374 16.1981H2.92864C2.3946 16.1981 1.88243 15.9917 1.50481 15.6242C1.12719 15.2567 0.915039 14.7582 0.915039 14.2385V2.48085ZM4.45796 2.48085L10.983 8.03732L17.5081 2.48085H4.45897H4.45796ZM19.0374 3.78301L11.6465 10.0773C11.4629 10.2338 11.2271 10.3201 10.983 10.3201C10.7389 10.3201 10.5031 10.2338 10.3195 10.0773L2.92864 3.78301V14.2385H19.0374V3.78301Z"
            fill="#36A2EB"
          />
        </svg>

        <span :class="$style['CTA-card__button-text']">Contact</span>
      </a>
    </div>
  </div>
</template>

<style module>
.CTA-card {
  border-radius: 20px;
  background-color: #36a2eb;
  color: #1d1d1d;
  padding: 25px;
  grid-area: cta;
}

.CTA-card__text {
  font-weight: 400;
  font-size: 34px;
  text-transform: uppercase;
}

.CTA-card__button-wrapper {
  display: flex;
  justify-content: flex-end;
}

.CTA-card__button {
  background-color: #1d1d1d;
  color: #36a2eb;
  font-size: 16.251px;
  padding: 18px 50px;
  border-radius: 99px;
  margin-top: 1.125rem;
  display: flex;
  align-items: center;
}

.CTA-card__button-text {
  margin-left: 13px;
}

@media (min-width: 600px) {
  .CTA-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>
