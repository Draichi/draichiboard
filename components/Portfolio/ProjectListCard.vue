<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-gray-400">
    <img
      class="w-full"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9BNOsdUwviKyK2X_UVV4-nU3pmPyuWSvuJA&usqp=CAU"
      alt="Sunset in the mountains"
    />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
      <p
        class="text-gray-700 text-base"
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
      >#photography</span>
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
      >#travel</span>
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
      >#winter</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class ProjectListCard extends Vue {}
</script>

<style lang="scss" scoped>
.card-container {
  @apply flex p-10;
  min-width: 100vw;
}
</style>
