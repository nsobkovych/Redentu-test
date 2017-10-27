<template>
  <a class="cb-item-border__prev fancybox gallery" 
     :href="link.href"
     :title="title" 
     :rel="rel">
  </a>
</template>

<script>
  export default {
    name: 'BorderItemPrev',
    props: {
      link: {
        type: Object,
        required: true
      },
      rel: {
        type: String
      },
      title: {
        type: String
      }
    }
  }
</script>
