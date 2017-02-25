import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// import Hello from 'components/Hello'
import Home from 'components/Home'
import Projects from 'components/Projects'
import Cv from 'components/CV'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/projets',
      name: 'projects',
      component: Projects
    },
    {
      path: '/cv',
      name: 'cv',
      component: Cv
    }
  ]
})
