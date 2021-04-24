<template>
  <v-carousel cycle height="350">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      
         ></v-carousel-item>
  </v-carousel>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://i.imgur.com/uqK4mqH.jpg',
          },
          {
            src: 'https://i.imgur.com/pwPh7q5.jpg',
          },
          {
            src: 'https://i.imgur.com/DHQ3A9B.jpg',
          },
          {
            src: 'https://i.imgur.com/7H5eVoG.jpg',
          },
        ],
      }
    },
  }
</script>
