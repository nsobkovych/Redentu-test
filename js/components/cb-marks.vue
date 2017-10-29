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
        title: 'Цвет отпечатков',
        text: `наконец, подберите самые подходящие цвета красок, с помощью которых вы 
               и оставите на картине свой след на память!<br>
               <strong>Обратите внимание: более 2-х цветов увеличат стоимость</strong>`
      }
    },
    props: {
      marks: {
        required: true
      }
    },
    components: {
      'mark-item': MarkItem
    },
    methods: {
      addMark () {
        if (Array.isArray(this.marks)) {
          let selectedMarks = this.marks.filter(mark => mark.checked);
          this.$emit('setmarks', selectedMarks);
        }
      }
    }
  }
</script>
