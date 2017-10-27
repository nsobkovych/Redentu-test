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
        borders: [
          {
            id: 1,
            title: 'Багетная №1',
            src: './img/borders/rama-01.png',
            links: null,
            rel: null
          },
          {
            id: 2,
            title: 'Багетная №2',
            src: './img/borders/rama-02.png',
            links: null,
            rel: null
          },
          {
            id: 3,
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
            rel: 'gal-2'
          },
          {
            id: 4,
            title: 'Багетная №4',
            src: './img/borders/rama-04.png',
            links: [
              {
                id: 0,
                href: './img/borders/prev.04.jpg'
              }
            ],
            rel: 'gal-3'
          },
          {
            id: 5,
            title: 'Багетная №5',
            src: './img/borders/rama-05.png',
            links: [
              {
                id: 0,
                href: './img/borders/prev.05.jpg'
              }
            ],
            rel: 'gal-4'
          },
          {
            id: 6,
            title: 'Багетная №6',
            src: './img/borders/rama-06.png',
            links: [
              {
                id: 0,
                href: './img/borders/prev.06.jpg'
              }
            ],
            rel: 'gal-5'
          },
          {
            id: 7,
            title: 'Багетная №7',
            src: './img/borders/rama-07.png',
            links: [
              {
                id: 0,
                href: './img/borders/prev.07.jpg'
              }
            ],
            rel: 'gal-6'
          },
          {
            id: 8,
            title: 'Багетная №8',
            src: './img/borders/rama-08.png',
            links: [
              {
                id: 0,
                href: './img/borders/prev.08.jpg'
              }
            ],
            rel: 'gal-7'
          },
          {
            id: 9,
            title: 'Багетная №9',
            src: './img/borders/rama-09.png',
            links: [
              {
                id: 0,
                href: './img/borders/prev.09.jpg'
              }
            ],
            rel: 'gal-8'
          },
          {
            id: 10,
            title: 'Багетная №10',
            src: './img/borders/rama-10.png',
            links: [
              {
                id: 0,
                href: './img/borders/prev.10.jpg'
              }
            ],
            rel: 'gal-9'
          },
          {
            id: 11,
            title: 'Багетная №11',
            src: './img/borders/rama-11.png',
            links: [
              {
                href: './img/borders/prev.11.jpg'
              }
            ],
            rel: 'gal-10'
          },
          {
            id: 12,
            title: 'Багетная №12',
            src: './img/borders/rama-12.png',
            links: [
              {
                id: 0,
                href: './img/borders/prev.12.jpg'
              }
            ],
            rel: 'gal-11'
          },
          {
            id: 13,
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
            id: 14,
            title: 'Багетная №14',
            src: './img/borders/rama-14.png',
            links: [
              {
                id: 0,
                href: './img/borders/prev.14.jpg'
              }
            ],
            rel: 'gal-13'
          },
          {
            id: 15,
            title: 'Багетная №15',
            src: './img/borders/rama-15.png',
            links: [
              {
                id: 0,
                href: './img/borders/prev.15.jpg'
              }
            ],
            rel: 'gal-14'
          }
        ],
        title: 'Рама',
        text: `подберите раму, которая подойдет случаю и впишется в интерьер, ведь вы же не просто
               оставляете "пальчики", а создаете предмет декора для дома и офиса:`
      }
    },
    components: {
      'border-item': BorderItem
    },
    methods: {
      chooseBorder (indBorder) {
        const border = this.borders[indBorder];
        this.$emit('setborder', border);
      }
    }
  }
</script>
