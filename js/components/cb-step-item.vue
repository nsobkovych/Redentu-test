<template>
  <div class="cb-step" 
     :data-step="step.dataStep" 
     :id="step.id"
     @click.stop="onSwitchView">
    <p>
      <span>{{index + 1}}</span>
      {{step.title}}
    </p>
  </div>
</template>

<script>
  export default {
    name: 'CbStepItem',
    props: {
      step: {
        type: Object,
        required: true
      },
      index: {
        type: Number
      }
    },
    methods: {
      onSwitchView () {
        this.$emit('switched', this.index);
      }
    }
  }
</script>