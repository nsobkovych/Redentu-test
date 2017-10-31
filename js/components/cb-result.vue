<template>
  <div class="cb-result" v-cloak>
      <div class="cb-result__title">
          <p>Ваша картина</p>
      </div>
      <div class="cb-result__content">
          <p class="cb-result__data">
              <span>Изображение:</span>
              <strong v-show="resultObj.pic.title">{{ resultObj.pic.title }}</strong>
              <strong v-show="!resultObj.pic.title">Не выбрано</strong>
          </p>
          <p class="cb-result__data">
              <span>Рама:</span>
              <strong v-show="resultObj.border.title">{{ resultObj.border.title }}</strong>
              <strong v-show="!resultObj.border.title">Не выбрано</strong>
          </p>
          <div class="cb-result__data">
              <span>Отпечатки:</span>
              <strong v-show="!resultObj.marks.length">Не выбраны</strong>
              
              <div class="cb-result__marks"
                v-show="resultObj.marks.length">
                <result-mark v-for="(mark, index) of resultObj.marks"
                  :mark="mark"
                  :key="mark.id"
                  :index="index">
                </result-mark>
              </div>
              
          </div>
          <div class="cb-result__object">
              <div class="cb-result__img">
                <img :src="resultObj.pic.src" 
                  :alt="resultObj.pic.title"
                  :title="resultObj.pic.title"
                  width="240"
                  height="300"
                  v-show="resultObj.pic.src">
              </div>
              <div class="cb-result__border">
                <img :src="resultObj.border.src" 
                  :alt="resultObj.border.title"
                  width="240"
                  height="300"
                  v-show="resultObj.border.src">
              </div>
              <p class="cb-result__text__title" :class="resultObj.font">{{ resultObj.caption }}</p>
              <p class="cb-result__text__name" :class="resultObj.font">{{ resultObj.names }}</p>
              <p class="cb-result__text__date" :class="resultObj.font">{{ resultObj.date }}</p>
          </div>
      </div>
      
      <div class="cb-result__bottom">
          <form action="" 
             method="POST"
             name="hiddenForm"
             @submit.prevent="checkSubmit">
              <button  type="button" 
                class="cb-next"
                :class="{ 'active': isNextAllowed }"
                v-show="!(currentView === lastStep)"
                @click.stop="checkView">
                Далее
              </button>
              <button type="submit" 
                class="cb-next"
                :class="{ 'active': isSubmitAllowed }"
                v-show="currentView === lastStep">
                Оформить
              </button>
              <input name="result" id="" type="text" hidden="">
          </form>
      </div>
      
  </div>
</template>

<script>
  import ResultMark from './cb-result-mark.vue';
  
  export default {
    name: 'CbResult', 
    props: {
      resultObj: {
        type: Object,
        required: true
      },
      currentView: {
        type: String
      },
      lastStep: {
        type: String
      },
      isNextAllowed: {
        type: Boolean,
        default: false
      },
      isSubmitAllowed: {
        type: Boolean,
        default: false
      }
    },
    components: {
      'result-mark': ResultMark
    },
    methods: {
      checkView: function () {
        if (this.isNextAllowed) {
          this.$emit('movenext');
        }
      },
      checkSubmit: function () {
        if (this.isSubmitAllowed) {
          this.$emit('postresult');
        }
      }
    }
  }
</script>
