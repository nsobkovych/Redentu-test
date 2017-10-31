<template>
  <div class="cb-item__line--btns">
    <font-btns-item v-for="(font, index) of fonts"
      :font="font"
      :key="font.id"
      :index="index"
      :class="{ 'btn-font--active': currentFont === font.id }"
      @chosenfont="chooseFont"
      ></font-btns-item>
  </div>
</template>
 
<script>
  import FontBtnsItem from './cb-title-font-btns-item.vue'; 
  
  export default {
    name: 'FontBtns',
    data: function () {
      return {
        fonts: [ 
          {
            id: 'ariston',
            name: 'Ariston'
          },
          {
            id: 'davinci',
            name: 'DaVinci'
          },
          {
            id: 'brody',
            name: 'Brody'
          }
        ]
      }
    },
    props: {
      currentFont: {
        required: true
      }
    },
    components: {
      'font-btns-item': FontBtnsItem
    },
    methods: {
      chooseFont (fontInd) {
        const font = this.fonts && this.fonts[fontInd].id;
        if (font) {
          this.$emit('onsetfont', font);
        }
      }
    }
  }
</script>
