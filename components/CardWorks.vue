<script setup lang="ts">
import { Work } from '@/types'

const emit = defineEmits(['work:click'])

function onWorkClick(work: Work) {
  emit('work:click', work)
}
</script>

<template>
  <p id="works-title" :class="$style.subtitle">Selected Works 2015 - 2023</p>
  <ul id="works-list" :class="$style.works">
    <li id="ibm" :class="$style['active-item']" @click="onWorkClick('ibm')">
      IBM
    </li>
    <li id="sabido" @click="onWorkClick('sabido')">Sabido</li>
    <li id="globo" @click="onWorkClick('globo')">Globo</li>
    <li id="talentify" @click="onWorkClick('talentify')">Talentify</li>
    <li id="iphone" @click="onWorkClick('iphone')">iPhone 13 Pro</li>
  </ul>
</template>

<style module>
.subtitle {
  font-weight: 400;
  font-size: 16px;
  margin-top: calc(100vh - 230px - 208px);
  color: #919f96;
}
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
}

.active-item {
  text-decoration: underline;
}
</style>
