 <template>
  <div class="cb-item">
    <p class="cb-item__title">
      {{this.title}}
    </p>
    <p class="cb-item__text" v-html="text"></p>
    <div class="cb-item-pics">
      <pic-item v-for="(pic, index) of pics"
        :pic="pic"
        :key="pic.id"
        :index="index"
        @chosenpic="choosePic"
        ></pic-item>
    </div>
  </div>
</template>
 
<script>
  
  import PicItem from './cb-picture-item.vue';
  
  export default {
    name: 'CbPicture',
    data: function () {
      return {
        pics: [
          {
            id: 1,
            title: 'Картинка №1',
            src: './img/pics/01.jpg'
          },
          {
            id: 2,
            title: 'Картинка №2',
            src: './img/pics/02.jpg'
          },
          {
            id: 3,
            title: 'Картинка №3',
            src: './img/pics/03.jpg'
          },
          {
            id: 4,
            title: 'Картинка №4',
            src: './img/pics/04.jpg'
          },
          {
            id: 5,
            title: 'Картинка №5',
            src: './img/pics/05.jpg'
          },
          {
            id: 6,
            title: 'Картинка №6',
            src: './img/pics/06.jpg'
          },
          {
            id: 7,
            title: 'Картинка №7',
            src: './img/pics/07.jpg'
          },
          {
            id: 8,
            title: 'Картинка №8',
            src: './img/pics/08.jpg'
          },
          {
            id: 9,
            title: 'Картинка №9',
            src: './img/pics/09.jpg'
          },
          {
            id: 10,
            title: 'Картинка №10',
            src: './img/pics/10.jpg'
          },
          {
            id: 11,
            title: 'Картинка №11',
            src: './img/pics/11.jpg'
          }
        ],
        title: 'Выберите изображение',
        text: `для начала выберите основу, саму картину, на которую вы и гости вашего 
              праздника будете наносить отпечатки пальцев с пожеланиями`
      }
    },
    components: {
      'pic-item': PicItem
    },
    methods: {
      choosePic (indPic) {
        const pic = this.pics[indPic];
        this.$emit('setpic', pic);
      }
    }
  }
</script>
