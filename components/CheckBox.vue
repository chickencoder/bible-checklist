<template>
  <span class="text-2xl checkbox flex items-center" :class="{
    complete: state === 'complete',
    pending: state === 'in-progress'
  }">{{ label }}</span>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: null
    },
    state: {
      type: String,
      default: 'incomplete'
    }
  }
}
</script>

<style>
.checkbox:before {
  content: " ";
  @apply inline-block bg-gray-200 w-12 h-12 mr-4 rounded-full flex items-center justify-center text-white;
}

.checkbox.pending:before {
  content: " ";
  @apply bg-orange-200;
}

.checkbox.complete:before {
  content: "\2713";
  @apply bg-green-300;
}
</style>