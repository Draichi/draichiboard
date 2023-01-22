<template>
  <div id="CTA" :class="$style['CTA-card']">
    <h2 :class="$style['CTA-card__text']">I make people buy your stuff</h2>
    <div :class="$style['CTA-card__button-wrapper']">
      <a :class="$style['CTA-card__button']" href="#email-tile">
        <img alt="" src="/icons/mail.svg" />
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
</style>
