<template>
  <div class="cb-result__mark" 
    v-bind:style="{ backgroundColor: mark.clr }"></div>
</template>

<script>
  export default {
    name: 'ResultMark',
    props: {
      mark: {
        type: Object,
        required: true
      },
      index: {
        type: Number
      }
    }
  }
</script>
