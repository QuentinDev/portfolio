<template>
  <div id="app">
    <mainMenu></mainMenu>
    <router-view></router-view>
  </div>
</template>

<script>
import mainMenu from 'components/subComponents/Menu'

export default {
  name: 'app',
  components: {
    mainMenu
  }
}

// const opeanWeatherMapApiKey = 'adc6ffa68bd152243b1332aaddbfb453'
</script>

<style lang="stylus">
@import "~assets/variables.styl"

body
  margin: 0
  background: url('~assets/background.jpg') center center fixed

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
</style>
