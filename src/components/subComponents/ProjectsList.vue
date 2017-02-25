<template>
  <ul class='projectsListContainer'>
    <li class='project' v-for='project in projects' @click="previewProject(project.preview)">
      <div class='projectContent'>
        <h3 class='projectTitle'>{{ project.title }}</h3>
        <p class='projectType'>({{ project.type }})</p>
        <img :src="'static/projects/'+ project.img" alt='Screenshot du projet'>

        <p class='projectDescription'>{{ project.description }}</p>
        <a class='projectGithub'>{{ project.github }}</a>
        <p class="projectTags">
          <span class="projectTag" v-for='tag in project.tags'> {{ tag }} </span>
        </p>
      </div>
    </li>
  </ul>
</template>

<script>
import json from '../../data/projects.json'

export default {
  name: 'projectsList',
  data () {
    return {
      projects: json
    }
  },
  computed: {

  }
}
</script>

<style lang="stylus" scoped>
@import "~assets/variables.styl"

.projectsListContainer
  width: 66%
  box-sizing: border-box
  position: relative
  display: -webkit-box
  display: -ms-flexbox
  display: flex
  -ms-flex-wrap: wrap
  flex-wrap: wrap
  padding: 0 6px
  margin: 20px auto 0

.project
  display: block
  width: 45%
  margin: 15px auto
  background-color: white
  border: 1px solid #e8e8e8
  border-radius: 5px

.projectContent
  display: block
  img
    width: 100%

.projectTag
  display: inline-block
  background-color: #eaeaea
  border-radius: 4px
  border: 1px solid #d4d4d4
  margin: 3px 3px
  padding: 2px 4px
  white-space: nowrap

@media (max-width: 850px)
  .project
    width: 100%;

// @media (min-width: 550px)
//   .project
//     width: 50%;



</style>
