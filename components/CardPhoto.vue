<template>
  <img
    id="profile-photo"
    alt=""
    :class="$style.profilePhoto"
    itemprop="image"
    src="/imgs/profile-photo.png"
  />
</template>

<style module>
.profilePhoto {
  width: 100%;
  grid-area: photo;
}

@media (min-width: 600px) {
  .profilePhoto {
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
}
</style>
