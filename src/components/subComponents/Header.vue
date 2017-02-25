<template>
  <div class="header">
    <h2>Bienvenue sur mon portfolio</h2>
    <p class="timeDevP" >Je programme depuis</p><br>
    <p class="timeDevP timeDev" @click="changeTimeDevUnit">{{ timeDev }}</p>
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
    // when unitTimeDev change, update the timedev element
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
      // timedev elem
      var timeDevP = this.$el.querySelector('.timeDev')

      // Hide the element before update
      timeDevP.style.opacity = 0

      setTimeout(() => {
        // Change the time unit
        this.unitTimeDev = this.unitsTimeDev[++this.unitTimeDevIncrement]
        // Reset the array if we reach the end of it
        if (this.unitTimeDevIncrement === this.unitsTimeDev.length) {
          this.unitTimeDevIncrement = 0
        }
        // Show the element back
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
