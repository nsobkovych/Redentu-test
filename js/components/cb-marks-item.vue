<template>
  <div class="cb-item-mark">
    <input :id="mark.id" 
      type="checkbox"
      :value="mark.clr"
      v-model="mark.checked"
      @change="$emit('addmark')">
    <label :for="mark.id" 
      :title="mark.title"
      ></label>
    <img :src="mark.src" 
         :alt="mark.title" 
         width="136"
         height="136">
  </div>
</template>
 
<script>
  export default {
    name: 'MarkItem',
    props: {
      mark: {
        type: Object,
        required: true
      }
    }
  }
</script>
