<template>
  <div class="cb-item">
    <p class="cb-item__title">
      {{this.title}}
    </p>
    <p class="cb-item__text" v-html="text"></p>
    <div class="cb-item-marks">
      <mark-item v-for="(mark, index) of marks"
        :mark="mark"
        :key="mark.id"
        @addmark="addMark"
        ></mark-item>
    </div>
  </div>
</template>
 
<script>
  import MarkItem from './cb-marks-item.vue';
  
  export default {
    name: 'CbMarks',
    data: function () {
      return {
        marks: [
          {
            id: 'mark0',
            title: 'BahamaBlue',
            src: './img/marks/BahamaBlue.jpg',
            clr: '#1f50d1',
            checked: false
          },
          {
            id: 'mark1',
            title: 'BambooLeaves',
            src: './img/marks/BambooLeaves.jpg',
            clr: '#6c8b2e',
            checked: false
          },
          {
            id: 'mark2',
            title: 'LilacPosies',
            src: './img/marks/LilacPosies.jpg',
            clr: '#ab288b',
            checked: false
          },
          {
            id: 'mark3',
            title: 'PearTart',
            src: './img/marks/PearTart.jpg',
            clr: '#d5d131',
            checked: false
          },
          {
            id: 'mark4',
            title: 'RhubarbStalk',
            src: './img/marks/RhubarbStalk.jpg',
            clr: '#ad0939',
            checked: false
          },
          {
            id: 'mark5',
            title: 'Tangelo',
            src: './img/marks/Tangelo.jpg',
            clr: '#f46928',
            checked: false
          },
          {
            id: 'mark6',
            title: 'CottageIvy',
            src: './img/marks/CottageIvy.jpg',
            clr: '#0d5f29',
            checked: false
          },
          {
            id: 'mark7',
            title: 'PearTart',
            src: './img/marks/PearTart.jpg',
            clr: '#d5d131',
            checked: false
          },
          {
            id: 'mark8',
            title: 'BahamaBlue',
            src: './img/marks/BahamaBlue.jpg',
            clr: '#1f50d1',
            checked: false
          },
          {
            id: 'mark9',
            title: 'PottersClay',
            src: './img/marks/PottersClay.jpg',
            clr: '#ce712b',
            checked: false
          }
        ],
        title: 'Цвет отпечатков',
        text: `наконец, подберите самые подходящие цвета красок, с помощью которых вы 
               и оставите на картине свой след на память!<br>
               <strong>Обратите внимание: более 2-х цветов увеличат стоимость</strong>`
      }
    },
    components: {
      'mark-item': MarkItem
    },
    methods: {
      addMark () {
        let selectedMarks = this.marks.filter(mark => mark.checked);
        this.$emit('setmarks', selectedMarks);
      }
    }
  }
</script>
