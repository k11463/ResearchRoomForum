<template>
  <v-app>
    <Nav></Nav>
    <router-view></router-view>
  </v-app>
</template>

<script>
import Nav from './components/Nav'

export default {
  name: 'App',
  components: {
    Nav
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
