import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

import CbStepItem from './components/cb-step-item.vue';
import CbPicture from './components/cb-picture.vue';
import CbBorder from './components/cb-border.vue';
import CbTitle from './components/cb-title.vue';
import CbMarks from './components/cb-marks.vue';
import CbResult from './components/cb-result.vue';
import CbTotal from './components/cb-total.vue';

//import '../css/style.css';

new Vue({
  el: '#constructor',
  data: {
    currentView: 'cb-item1',
    steps: [
      {
        id: 'cb-step1',
        title: 'Изображение',
        dataStep: 'cb-item1'
      },
      {
        id: 'cb-step2',
        title: 'Рама',
        dataStep: 'cb-item2'
      },
      {
        id: 'cb-step3',
        title: 'Заголовок',
        dataStep: 'cb-item3'
      },
      {
        id: 'cb-step4',
        title: 'Цвет отпечатков',
        dataStep: 'cb-item4'
      }
    ],
    activeStep: 0,
    resultObj: {
      picTitle: '',
      pic: '',
      borderTitle: '',
      border: '',
      marks: [],
      picCaption: '',
      picName: '',
      picDate: ''
    },
    endpoint: 'http://jsonplaceholder.typicode.com/posts'
  },
  computed: {
    result: function () {
      return JSON.stringify(this.resultObj);
    }
  },
  created: function () {
    this.$on('postresult', this.postResult);
  },
  components: {
    'cb-step-item': CbStepItem,
    'cb-item1': CbPicture,
    'cb-item2': CbBorder,
    'cb-item3': CbTitle,
    'cb-item4': CbMarks,
    'cb-result': CbResult,
    'cb-total': CbTotal
  },
  methods: {
    switchView: function (indStep) {
      this.currentView = this.steps[indStep].dataStep;
      this.activeStep = indStep;
    },
    setChosenPic: function(pic) {
      this.resultObj.pic = pic.src;
      this.resultObj.picTitle = pic.title;
    },
    setChosenBorder: function(border) {
      this.resultObj.border = border.src;
      this.resultObj.borderTitle = border.title;
    },
    setCaption: function(caption) {
      this.resultObj.picCaption = caption;
    },
    setName: function(name) {
      this.resultObj.picName = name;
    },
    setDate: function(date) {
      this.resultObj.picDate = date;
    },
    setMarks: function(marks) {
      this.resultObj.marks = [].concat(marks);
    },
    postResult: function () {
      console.log(this.result);
      
      let options = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      
      this.$http.post(this.endpoint, this.result, options)
      .then(res => {
        console.log(res.body);
      })
      .catch(err => {
        console.log(err);
      })
    }
  }
});
