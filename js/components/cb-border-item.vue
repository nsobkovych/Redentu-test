<template>
  <div class="cb-item-border"
    @click.stop="onChooseBorder">
    <img :src="border.src" 
         :alt="border.title" 
         :title="border.title"
         width="120" 
         height="150">
    <border-item-prev v-for="(link, index) of border.links"
      :link="link"
      :key="link.id"
      :rel="border.rel"
      :title="border.title">
    </border-item-prev>
  </div>
</template>

<script>
  import BorderItemPrev from './cb-border-item-prev.vue';
  
  export default {
    name: 'BorderItem',
    props: {
      border: {
        type: Object,
        required: true
      },
      index: {
        type: Number
      }
    },
    components: {
      'border-item-prev': BorderItemPrev
    },
    methods: {
      onChooseBorder () {
        this.$emit('chosenborder', this.index);
      }
    }
  }
</script>
