<template>
  <div class="cb-item" v-cloak>
    <p class="cb-item__title">
      {{this.title}}
    </p>
    <p class="cb-item__text" v-html="text"></p>
    <div class="cb-item__line">
      <input id="pic-title" 
        placeholder="Наша Свадьба" 
        maxlength="22" 
        type="text"
        v-model="picTitle"
        :class="{ warning: isCaptionSet === false }"
        @keyup.enter="addPicTitle"
        @blur="addPicTitle">
      <span>Заголовок картины</span>
    </div>
    <div class="cb-item__line">
      <input id="pic-name" 
        placeholder="Анастасия и Константин" 
        maxlength="36" 
        type="text"
        v-model="picNames"
        :class="{ warning: isNamesSet === false }"
        @keyup.enter="addPicName"
        @blur="addPicName">
      <span>Подпись</span>
    </div>
    <div class="cb-item__line">
      <input id="pic-date" 
        placeholder="29 июля 2015" 
        maxlength="26" 
        type="text"
        v-model="picDate"
        :class="{ warning: isDateSet === false }"
        @keyup.enter="addPicDate"
        @blur="addPicDate">
      <span>Дата события</span>
    </div>
    <font-btns :current-font="currentFont"
      @onsetfont="onSetFont"
    ></font-btns>
  </div>
</template>
 
 <script>
  import FontBtns from './cb-title-font-btns.vue'; 
   
  export default {
    name: 'CbTitle',
    data: function () {
      return {
        picTitle: this.caption || '',
        picNames: this.names || '',
        picDate: this.date || '',
        title: 'Заголовок',
        text: `персонализируйте ваше "Дерево пожеланий"; вверху и внизу картины есть специальные поля,
               которые можно заполнить по вашему усмотрению: вписать имена виновников торжества, или
               особые пожелания, добавить дату, или логотип компании, если речь идет о корпоративном
               подарке.`
      }
    },
    props: {
      caption: {
        type: String,
        default: ''
      },
      names: {
        type: String,
        default: ''
      },
      date: {
        type: String,
        default: ''
      },
      currentFont: {
        type: String
      },
      isCaptionSet: {
        default: null
      },
      isNamesSet: {
        default: null
      },
      isDateSet: {
        default: null
      }
    },
    components: {
      'font-btns': FontBtns
    },
    methods: {
      addPicTitle () {
        this.$emit('setcaption', this.picTitle);
      },
      addPicName () {
        this.$emit('setnames', this.picNames);
      },
      addPicDate () {
        this.$emit('setdate', this.picDate);
      },
      onSetFont (font) {
        this.$emit('setfont', font);
      }
    }
  }
</script>
