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
    borders: [
      {
        id: 0,
        title: 'Багетная №1',
        src: './img/borders/rama-01.png',
        links: null,
        rel: null,
        price: 60
      },
      {
        id: 1,
        title: 'Багетная №2',
        src: './img/borders/rama-02.png',
        links: null,
        rel: null,
        price: 60
      },
      {
        id: 2,
        title: 'Багетная №3',
        src: './img/borders/rama-03.png',
        links: [
          {
            id: 0,
            href: './img/borders/prev.03.jpg'
          },
          {
            id: 1,
            href: './img/borders/prev.03.1.jpg'
          },
          {
            id: 2,
            href: './img/borders/prev.03.2.jpg'
          }
        ],
        rel: 'gal-2',
        price: 60
      },
      {
        id: 3,
        title: 'Багетная №4',
        src: './img/borders/rama-04.png',
        links: [
          {
            id: 0,
            href: './img/borders/prev.04.jpg'
          }
        ],
        rel: 'gal-3',
        price: 60
      },
      {
        id: 4,
        title: 'Багетная №5',
        src: './img/borders/rama-05.png',
        links: [
          {
            id: 0,
            href: './img/borders/prev.05.jpg'
          }
        ],
        rel: 'gal-4',
        price: 60
      },
      {
        id: 5,
        title: 'Багетная №6',
        src: './img/borders/rama-06.png',
        links: [
          {
            id: 0,
            href: './img/borders/prev.06.jpg'
          }
        ],
        rel: 'gal-5',
        price: 60
      },
      {
        id: 6,
        title: 'Багетная №7',
        src: './img/borders/rama-07.png',
        links: [
          {
            id: 0,
            href: './img/borders/prev.07.jpg'
          }
        ],
        rel: 'gal-6',
        price: 60
      },
      {
        id: 7,
        title: 'Багетная №8',
        src: './img/borders/rama-08.png',
        links: [
          {
            id: 0,
            href: './img/borders/prev.08.jpg'
          }
        ],
        rel: 'gal-7',
        price: 60
      },
      {
        id: 8,
        title: 'Багетная №9',
        src: './img/borders/rama-09.png',
        links: [
          {
            id: 0,
            href: './img/borders/prev.09.jpg'
          }
        ],
        rel: 'gal-8',
        price: 60
      },
      {
        id: 9,
        title: 'Багетная №10',
        src: './img/borders/rama-10.png',
        links: [
          {
            id: 0,
            href: './img/borders/prev.10.jpg'
          }
        ],
        rel: 'gal-9',
        price: 60
      },
      {
        id: 10,
        title: 'Багетная №11',
        src: './img/borders/rama-11.png',
        links: [
          {
            href: './img/borders/prev.11.jpg'
          }
        ],
        rel: 'gal-10',
        price: 60
      },
      {
        id: 11,
        title: 'Багетная №12',
        src: './img/borders/rama-12.png',
        links: [
          {
            id: 0,
            href: './img/borders/prev.12.jpg'
          }
        ],
        rel: 'gal-11',
        price: 60
      },
      {
        id: 12,
        title: 'Багетная №13',
        src: './img/borders/rama-13.png',
        links: [
          {
            id: 0,
            href: './img/borders/prev.13.jpg'
          }
        ],
        rel: 'gal-12'
      },
      {
        id: 13,
        title: 'Багетная №14',
        src: './img/borders/rama-14.png',
        links: [
          {
            id: 0,
            href: './img/borders/prev.14.jpg'
          }
        ],
        rel: 'gal-13',
        price: 60
      },
      {
        id: 14,
        title: 'Багетная №15',
        src: './img/borders/rama-15.png',
        links: [
          {
            id: 0,
            href: './img/borders/prev.15.jpg'
          }
        ],
        rel: 'gal-14',
        price: 60
      }
    ],
    marks: [
      {
        id: 'mark0',
        title: 'BahamaBlue',
        src: './img/marks/BahamaBlue.jpg',
        clr: '#1f50d1',
        checked: false,
        price: 10
      },
      {
        id: 'mark1',
        title: 'BambooLeaves',
        src: './img/marks/BambooLeaves.jpg',
        clr: '#6c8b2e',
        checked: false,
        price: 10
      },
      {
        id: 'mark2',
        title: 'LilacPosies',
        src: './img/marks/LilacPosies.jpg',
        clr: '#ab288b',
        checked: false,
        price: 10
      },
      {
        id: 'mark3',
        title: 'PearTart',
        src: './img/marks/PearTart.jpg',
        clr: '#d5d131',
        checked: false,
        price: 10
      },
      {
        id: 'mark4',
        title: 'RhubarbStalk',
        src: './img/marks/RhubarbStalk.jpg',
        clr: '#ad0939',
        checked: false,
        price: 10
      },
      {
        id: 'mark5',
        title: 'Tangelo',
        src: './img/marks/Tangelo.jpg',
        clr: '#f46928',
        checked: false,
        price: 10
      },
      {
        id: 'mark6',
        title: 'CottageIvy',
        src: './img/marks/CottageIvy.jpg',
        clr: '#0d5f29',
        checked: false,
        price: 10
      },
      {
        id: 'mark7',
        title: 'PearTart',
        src: './img/marks/PearTart.jpg',
        clr: '#d5d131',
        checked: false,
        price: 10
      },
      {
        id: 'mark8',
        title: 'BahamaBlue',
        src: './img/marks/BahamaBlue.jpg',
        clr: '#1f50d1',
        checked: false,
        price: 10
      },
      {
        id: 'mark9',
        title: 'PottersClay',
        src: './img/marks/PottersClay.jpg',
        clr: '#ce712b',
        checked: false,
        price: 10
      }
    ],
    pics: [
      {
        id: 0,
        title: 'Картинка №1',
        src: './img/pics/01.jpg',
        price: 50
      },
      {
        id: 1,
        title: 'Картинка №2',
        src: './img/pics/02.jpg',
        price: 50
      },
      {
        id: 2,
        title: 'Картинка №3',
        src: './img/pics/03.jpg',
        price: 50
      },
      {
        id: 3,
        title: 'Картинка №4',
        src: './img/pics/04.jpg',
        price: 50
      },
      {
        id: 4,
        title: 'Картинка №5',
        src: './img/pics/05.jpg',
        price: 50
      },
      {
        id: 5,
        title: 'Картинка №6',
        src: './img/pics/06.jpg',
        price: 50
      },
      {
        id: 6,
        title: 'Картинка №7',
        src: './img/pics/07.jpg',
        price: 50
      },
      {
        id: 7,
        title: 'Картинка №8',
        src: './img/pics/08.jpg',
        price: 50
      },
      {
        id: 8,
        title: 'Картинка №9',
        src: './img/pics/09.jpg',
        price: 50
      },
      {
        id: 9,
        title: 'Картинка №10',
        src: './img/pics/10.jpg',
        price: 50
      },
      {
        id: 10,
        title: 'Картинка №11',
        src: './img/pics/11.jpg',
        price: 50
      }
    ],
    activeStep: 0,
    resultObj: {
      pic: {
        id: null,
        title: '',
        src: '',
        price: 0
      },
      border: {
        id: null,
        title: '',
        src: '',
        price: 0
      },
      marks: [],
      caption: '',
      names: '',
      date: '',
      font: 'ariston',
      textPrice: {
        captionPrice: 0,
        namesPrice: 0,
        datePrice: 0
      }
    },
    initObj: null,
    isNextAllowed: false,
    isSubmitAllowed: false,
    isCaptionSet: null,
    isNamesSet: null,
    isDateSet: null,
    endpoint: 'http://jsonplaceholder.typicode.com/posts'
  },
  created: function () {
    this.initObj = JSON.stringify(this.resultObj);
    this.initObj = JSON.parse(this.initObj);
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
    setChosenPic: function(pic) {
      this.resultObj.pic.id = pic.id;
      this.resultObj.pic.src = pic.src;
      this.resultObj.pic.title = pic.title;
      this.resultObj.pic.price = pic.price;
      this.isNextAllowed = this.$_checkDataForStep(this.currentView);
    },
    setChosenBorder: function(border) {
      this.resultObj.border.id = border.id;
      this.resultObj.border.src = border.src;
      this.resultObj.border.title = border.title;
      this.resultObj.border.price = border.price;
      this.isNextAllowed = this.$_checkDataForStep(this.currentView);
    },
    setCaption: function(caption) {
      this.resultObj.caption = caption;
      this.resultObj.textPrice.captionPrice = 5;
      this.isCaptionSet = caption !== '';
      this.isNextAllowed = this.$_checkDataForStep(this.currentView);
    },
    setNames: function(names) {
      this.resultObj.names = names;
      this.resultObj.textPrice.namesPrice = 5;
      this.isNamesSet = names !== '';
      this.isNextAllowed = this.$_checkDataForStep(this.currentView);
    },
    setDate: function(date) {
      this.resultObj.date = date;
      this.resultObj.textPrice.datePrice = 5;
      this.isDateSet = date !== '';
      this.isNextAllowed = this.$_checkDataForStep(this.currentView);
    },
    setFont: function(font) {
      this.resultObj.font = font;
    },
    setMarks: function(marks) {
      this.resultObj.marks = [].concat(marks);
      this.isSubmitAllowed = this.isNextAllowed = this.$_checkDataForStep(this.currentView);
    },
    moveToNextStep: function () {
      let nextViewId = this.$_getNextViewId(this.currentView);
      this.$_switchView(nextViewId);
    },
    moveToStep: function (indStep) {
      switch (indStep) {
        case 0: 
          this.$_switchView(indStep);
          break;
          
        case 1: 
          if (this.$_isChosenPic()) {
            this.$_switchView(indStep);
          }
          break;
          
        case 2: 
          if (this.$_isChosenPic() && this.$_isChosenBorder()) {
            this.$_switchView(indStep);
          }
          break;
          
        case 3: 
          if (this.$_isChosenPic() && this.$_isChosenBorder() && this.$_isChosenText()) {
            this.$_switchView(indStep);
          }
          break;
          
        default: break;
      }
    },
    postResult: function () {
      let result = JSON.stringify(this.resultObj);
       
      this.resultObj = JSON.stringify(this.initObj);
      this.resultObj = JSON.parse(this.resultObj);
      
      let options = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      
      this.$http.post(this.endpoint, result, options)
      .then(res => {
        this.resultObj.pic.id = res.body.pic.id;
        this.resultObj.pic.title = res.body.pic.title;
        this.resultObj.pic.src = res.body.pic.src;
        this.resultObj.pic.price = res.body.pic.price;
        this.resultObj.border.id = res.body.border.id;
        this.resultObj.border.title = res.body.border.title;
        this.resultObj.border.src= res.body.border.src;
        this.resultObj.border.price= res.body.border.price;
        this.resultObj.marks = res.body.marks;
        this.resultObj.caption = res.body.caption;
        this.resultObj.names = res.body.names;
        this.resultObj.date = res.body.date;
        this.resultObj.textPrice = res.body.textPrice;
        this.resultObj.font = res.body.font;
      })
      .catch(err => {
        console.log(err);
      })
    },
    $_switchView: function (indStep) {
      this.currentView = this.steps[indStep].dataStep;
      this.activeStep = indStep;
      this.isNextAllowed = this.$_checkDataForStep(this.currentView);
    },
    $_checkDataForStep: function (currentStep) {
      switch (currentStep) {
        case this.steps[0].dataStep:
          return this.$_isChosenPic();
          
        case this.steps[1].dataStep: 
          return this.$_isChosenBorder();
          
        case this.steps[2].dataStep: 
          return this.$_isChosenText();
          
        case this.steps[3].dataStep: 
          return this.$_isChosenMarks();
          
        default: return false;
      }
    },
    $_getCurrentViewId: function (currentView) {
      let currentViewId;
      for (let i = 0, len = this.steps.length; i < len; i++) {
        if (this.steps[i].dataStep === currentView) {
          currentViewId = i;
          break;
        }
      }
      return currentViewId;
    },
    $_getNextViewId: function (currentView) {
      let currentViewId = this.$_getCurrentViewId(currentView);
      let nextViewId = (currentViewId !== this.steps.length - 1) ? currentViewId + 1 : this.steps.length - 1;
      return nextViewId;
    },
    $_isChosenPic: function () {
      return this.resultObj.pic.id !== null;
    },
    $_isChosenBorder: function () {
      return this.resultObj.border.id !== null;
    },
    $_isChosenText: function () {
      return this.resultObj.caption !== '' 
          && this.resultObj.names !== '' 
          && this.resultObj.date !== '';
    },
    $_isChosenMarks: function () {
      return this.resultObj.marks.length !== 0;
    },
  }
});
