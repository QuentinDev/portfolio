<template>
  <div class="projectContainer pageContainer">
    <projectsList></projectsList>
  </div>
</template>

<script>
import projectsList from './subComponents/ProjectsList.vue'

export default {
  name: 'projects',
  components: {
    projectsList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
