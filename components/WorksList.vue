<template>
  <ul :class="$style.works">
    <li>IBM</li>
    <li>Sabido</li>
    <li>Globo</li>
    <li>Talentify</li>
    <li>Age of Learning</li>
  </ul>
</template>

<style module>
.works {
  background-color: #181711;
  color: #ebeae6;
  font-size: 2.75rem;
  border-radius: 20px;
  display: flex;
  gap: 3.75rem;
  flex-direction: column;
  padding: 3.875rem 0.8125rem;
  list-style: none;
  margin-top: calc(100vh - 230px);
}
</style>
