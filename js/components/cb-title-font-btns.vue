<template>
  <div class="cb-item__line--btns">
    <span id="ariston" class="btn-font btn-font--active">
      Ariston
    </span>
    <span id="davinci" class="btn-font">
      DaVinci
    </span>
    <span id="brody" class="btn-font">
      Brody
    </span>
  </div>
</template>
 
<script>
  export default {
    name: 'FontBtns',
    data: function () {
      return {
        fonts: ['Ariston', 'DaVinci', 'Brody']
      }
    },
    props: ['font']
  }
</script>
