<template>
  <div class="header">
    <h2>Bienvenue sur mon portfolio</h2>
    <p class="timeDevP" >Je programme depuis</p><br>
    <p class="timeDevP timeDev" @click="changeTimeDevUnit">{{ timeDev }}</p>
    <!-- <button @click='unitTimeDev = "seconds"'>Secondes</button>
    <button @click='unitTimeDev = "minutes"'>Minutes</button>
    <button @click='unitTimeDev = "hours"'>Heures</button>
    <button @click='unitTimeDev = "days"'>Jours</button>
    <button @click='unitTimeDev = "months"'>Mois</button>
    <button @click='unitTimeDev = "years"'>Années</button>
    <button @click='unitTimeDev = null'>Tout</button> -->
  </div>
</template>

<script type="text/javascript">
import moment from 'moment'
moment.locale('fr')

export default {
  name: 'header',
  data () {
    return {
      timeDev: '',
      unitTimeDev: null,
      unitTimeDevIncrement: 0,
      duration: '04/07/2014 9:00:00',
      unitsTimeDev: [null, 'years', 'months', 'days', 'hours']
    }
  },
  watch: {
    unitTimeDev: function () {
      this.updateTimeDev(this.unitTimeDev)
    }
  },
  created: function () {
    this.updateTimeDev()
    setInterval(this.updateTimeDev, 1000)
    setInterval(this.changeTimeDevUnit, 4000)
  },
  methods: {
    updateTimeDev: function () {
      this.timeDev = this.setMomentFormat(this.unitTimeDev)
    },
    changeTimeDevUnit: function () {
      var timeDevP = this.$el.querySelector('.timeDev')

      // Hide timeDev before update
      timeDevP.style.opacity = 0

      setTimeout(() => {
        // Change the time unit
        this.unitTimeDev = this.unitsTimeDev[++this.unitTimeDevIncrement]
        // If we reach the end of the array
        if (this.unitTimeDevIncrement === this.unitsTimeDev.length) {
          this.unitTimeDevIncrement = 0
        }
        // Show timeDev
        timeDevP.style.opacity = 1
      }, 350)
    },
    setMomentFormat: function (unit = null) {
      var formattedDuration, durationDiff
      var duration = this.duration

      durationDiff = Math.ceil(moment().locale('fr').diff(moment(duration), unit, true))
      formattedDuration = `environ ${durationDiff}`
      switch (unit) {
        case 'years':
          formattedDuration += ' ans'
          break
        case 'months':
          formattedDuration += ' mois'
          break
        case 'days':
          formattedDuration += ' jours'
          break
        case 'hours':
          formattedDuration += ' heures'
          break
        // case 'minutes':
        //   formattedDuration += ' minutes'
        //   break
        // case 'seconds':
        //   formattedDuration += ' secondes'
        //   break
        case null:
        default:
          durationDiff = moment.duration(moment().diff(moment(duration)))
          formattedDuration = `
          ${durationDiff.years()} ans
          ${durationDiff.months()} mois
          ${durationDiff.days()} jours
          ${durationDiff.hours()} heures
          ${durationDiff.minutes()} minutes et
          ${durationDiff.seconds()} secondes`
          break
      }

      return formattedDuration
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import "~assets/variables.styl"

h2
  font-weight: normal
  font-size: 30px
  margin-bottom: 20px

.timeDevP
  font-size: 20px !important
  text-shadow: 0px 0px 1px $mainColor
  display: inline-block
  transition: $textShadowTransition
  margin: 0px

.timeDev
  transition: $opacityTransition

.timeDevP:hover
  cursor: pointer
  text-shadow: 0px 0px 18px $mainColorHover
</style>
