<template>
  <div class="cb-item">
    <p class="cb-item__title">
      {{this.title}}
    </p>
    <p class="cb-item__text" v-html="text"></p>
    <div class="cb-item-borders">
      <border-item v-for="(border, index) of borders"
        :border="border"
        :key="border.id"
        :index="index"
        :class="{'current': currentBorder === index}"
        @chosenborder="chooseBorder"
        ></border-item>
    </div>
  </div>
</template>
 
<script>
  import BorderItem from './cb-border-item.vue'; 
  
  export default {
    name: 'CbBorder',
    data: function () {
      return {
        title: 'Рама',
        text: `подберите раму, которая подойдет случаю и впишется в интерьер, ведь вы же не просто
               оставляете "пальчики", а создаете предмет декора для дома и офиса:`
      }
    },
    props: {
      borders: {
        required: true
      },
      currentBorder: {
        required: true
      }
    },
    components: {
      'border-item': BorderItem
    },
    methods: {
      chooseBorder (indBorder) {
        const border = this.borders && this.borders[indBorder];
        if (border) {
          this.$emit('setborder', border);
        }
      }
    }
  }
</script>
