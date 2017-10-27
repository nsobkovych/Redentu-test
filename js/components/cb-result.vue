<template>
  <div class="cb-result" v-cloak>
      <div class="cb-result__title">
          <p>Ваша картина</p>
      </div>
      <div class="cb-result__content">
          <p class="cb-result__data">
              <span>Изображение:</span>
              <strong v-show="resultObj.picTitle">{{ resultObj.picTitle }}</strong>
              <strong v-show="!resultObj.picTitle">Не выбрано</strong>
          </p>
          <p class="cb-result__data">
              <span>Рама:</span>
              <strong v-show="resultObj.borderTitle">{{ resultObj.borderTitle }}</strong>
              <strong v-show="!resultObj.borderTitle">Не выбрано</strong>
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
                <img :src="resultObj.pic" 
                  :alt="resultObj.picTitle"
                  :title="resultObj.picTitle"
                  width="240"
                  height="300"
                  v-show="resultObj.pic">
              </div>
              <div class="cb-result__border">
                <img :src="resultObj.border" 
                  :alt="resultObj.borderTitle"
                  width="240"
                  height="300"
                  v-show="resultObj.border">
              </div>
              <p class="cb-result__text__title ariston">{{ resultObj.picCaption }}</p>
              <p class="cb-result__text__name ariston">{{ resultObj.picName }}</p>
              <p class="cb-result__text__date ariston">{{ resultObj.picDate }}</p>
          </div>
      </div>
      
      <div class="cb-result__bottom">
          <form action="" 
             method="POST"
             name="hiddenForm"
             @submit.prevent="onPostResult">
              <p class="cb-next"
                @click="onPostResult">
                Далее
              </p>
<!--              <input type="submit" value="В корзину">-->
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
      }
    },
    components: {
      'result-mark': ResultMark
    },
    methods: {
      onPostResult: function () {
        console.log('Should be sent the result');
        this.$emit('postresult');
      }
    }
  }
</script>
