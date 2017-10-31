<template>
  <span id="font.id" 
    class="btn-font"
    @click.stop="onChooseFont">
    {{font.name}}
  </span>
</template>

<script>
  export default {
    name: 'FontBtnsItem',
    props: {
      font: {
        type: Object,
        required: true
      },
      index: {
        type: Number
      }
    },
    methods: {
      onChooseFont () {
        this.$emit('chosenfont', this.index);
      }
    }
  }
</script>
