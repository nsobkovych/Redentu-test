<template>
  <div class="cb-total" v-cloak>
    <span class="cb-total__text">Стоимость:</span><span class="cb-total__amount"> {{total}}</span>
    <span class="cb-total__currency"> грн</span>
  </div>
</template>

<script>
  export default {
    name: 'CbTotal',
    props: {
      resultObj: {
        type: Object,
        required: true
      }
    },
    computed: {
      total: function () {
        let textPrice = this.resultObj.textPrice.captionPrice 
                      + this.resultObj.textPrice.namesPrice 
                      + this.resultObj.textPrice.datePrice;
        let marksPrice = 0;
        let len = this.resultObj.marks.length;
        
        for (let i = 0; i < len; i++) {
          marksPrice += this.resultObj.marks[i].price;
        }

        return this.resultObj.pic.price 
             + this.resultObj.border.price 
             + textPrice 
             + marksPrice;
      }
    }
  }
</script>
