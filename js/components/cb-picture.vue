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
        :class="{'current': currentPic === index}"
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
        title: 'Выберите изображение',
        text: `для начала выберите основу, саму картину, на которую вы и гости вашего 
              праздника будете наносить отпечатки пальцев с пожеланиями`
      }
    },
    props: {
      pics: {
        required: true
      },
      currentPic: {
        required: true
      }
    },
    components: {
      'pic-item': PicItem
    },
    methods: {
      choosePic (indPic) {
        const pic = this.pics && this.pics[indPic];
        if (pic) {
          this.$emit('setpic', pic);
        }
      }
    }
  }
</script>
