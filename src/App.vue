<template>
  <v-app>
   <TopNavigation/>
    <v-content>
      <router-view></router-view>
    </v-content>
      <FooterFront/>
  </v-app>
</template>

<script>
import FooterFront from './components/shared/footer-front'
import TopNavigation from './components/shared/top-navigation'

export default {
  name: 'app',
  components: {
    FooterFront,
    TopNavigation,
  },
  data () {
    return {
    }
  },
}
</script>


  
