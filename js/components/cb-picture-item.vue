<template>
  <div class="cb-item-pic"
    @click.stop="onChoosePic">
    <img :src="pic.src"
         :alt="pic.title"
         :title="pic.title"
         width="176"
         height="220">
  </div>
</template>
 
<script>
  export default {
    name: 'PicItem',
    props: {
      pic: {
        type: Object,
        required: true
      },
      index: {
        type: Number
      }
    },
    methods: {
      onChoosePic () {
        this.$emit('chosenpic', this.index);
      }
    }
  }
</script>
