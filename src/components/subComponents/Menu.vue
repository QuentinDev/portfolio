<template>
  <nav class="menu flex-container flex-line">
    <router-link class="elem bg-blue" to="/">Accueil</router-link>
    <router-link class="elem bg-blue" to="projets">Projets</router-link>
    <router-link class="elem bg-blue" to="cv">CV</router-link>
    <router-link class="elem bg-blue" to="contact">Contact</router-link>
  </nav>
</template>

<script>
export default {
  name: 'menu'
}
</script>

<style lang="stylus" scoped>
@import "~assets/variables.styl"

.flex-container
  width: 100%
  box-sizing: border-box

.flex-line
  display:flex
  flex-direction:row
  clear:both
  justify-content: space-around

.elem
  width: 100%
  padding: 15px 0px;
  margin: 0 2px;
  display: flex
  flex-direction: row
  justify-content: space-around
  text-align: center
  min-width: 75px
  text-decoration: none
  color: white
  font-weight: bold
  transition: background-color .2s
  &:nth-child(1)
    background-color: $mainColor1
    &:hover
      background-color: $mainColor1Hover
  &:nth-child(2)
    background-color: $mainColor2
    &:hover
      background-color: $mainColor2Hover
  &:nth-child(3)
    background-color: $mainColor3
    &:hover
      background-color: $mainColor3Hover
  &:nth-child(4)
    background-color: $mainColor4
    &:hover
      background-color: $mainColor4Hover

@media (max-width: 970px)
  .flex-line
    display: block
  .elem
    width: auto
    margin: 0px 0px 3px
</style>
