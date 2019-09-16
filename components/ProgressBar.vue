<template>
  <div class="text-center">
    <div class="bg-gray-200 h-8 relative rounded-lg">
      <div
        class="bg-green-300 absolute top-0 left-0 w-12 h-8 rounded-l-lg"
        :style="{ width: percent + '%' }"
        :class="{ 'rounded-r-lg': percent === 100 }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['percent']
}
</script>