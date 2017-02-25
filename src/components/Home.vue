<template>
  <div class="homeContainer pageContainer">
    <avatar></avatar>
    <homeHeader></homeHeader>
  </div>
</template>

<script>
import avatar from './subComponents/Avatar.vue'
import homeHeader from './subComponents/Header.vue'

export default {
  name: 'home',
  components: {
    avatar,
    homeHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
