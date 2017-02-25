<template>
  <div class="avatar">
    <h1>Quentin Bettoum <br>
    Développeur Web</h1>
    <figure>
      <img class="homeImg" :src="imageUrl">
      <figcaption>Live status : <span class="liveStatus">{{ liveStatus }}</span></figcaption>
    </figure>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'avatar',
  data () {
    var defaultToken = 'ru5iX15'
    return {
      // Lyon city id = 6454573 or 2996944
      opeanWeatherMapApiKey: 'adc6ffa68bd152243b1332aaddbfb453',
      timeNow: moment().format('H'),
      today: moment().format('E'),
      imageHostUrl: 'http://i.imgur.com/',
      imagesType: '.png',
      imagesTokensByTimeArray: {
        default: defaultToken,
        sleeping: 'Pv9B53w',
        weekend: 'oEwC6hl',
        morning: '9klMjjF',
        working: 'NgIH0DL',
        eating: 'TIo7InU',
        monday: '3YnTXG9',
        friday: 'ynLm1yO'
      },
      imageToken: defaultToken,
      liveStatus: 'loading...'
    }
  },
  watch: {
    timeNow: function () {
      // When timeNow is updated, reset the image
      this.setImageUrl()
    }
  },
  created: function () {
    setTimeout(() => {
      this.updateTimeNow
      this.setImageUrl()
    }, 3000)
    // Update the time every minutes (60 seconds)
    setInterval(this.updateTimeNow, 1000)
  },
  methods: {
    updateTimeNow: function () {
      this.timeNow = moment().format('H')
    },
    getImageForCurrentTime: function () {
      var x = this.timeNow
      var y = this.today

      switch (true) {
        case (x >= 0 && x < 7):
          this.liveStatus = 'sleeping'
          return this.imagesTokensByTimeArray.sleeping

        case (x >= 7 && x < 9):
          this.liveStatus = 'waking up'
          return this.imagesTokensByTimeArray.morning

        case (x >= 9 && x < 12 || x >= 14 && x < 18):
          if (parseInt(y) === 6 || parseInt(y) === 7) {
            this.liveStatus = 'Yeah ! It\'s the weekend !'
            return this.imagesTokensByTimeArray.weekend
          } else {
            this.liveStatus = 'pretending to work'
            return this.imagesTokensByTimeArray.working
          }

        case (x >= 12 && x < 14 || x >= 19 && x < 22):
          this.liveStatus = 'eating'
          return this.imagesTokensByTimeArray.eating

        default:
          this.liveStatus = 'nothing special...'
          return this.imagesTokensByTimeArray.default
      }
    },
    setImageUrl: function () {
      var avatarImage = this.$el.querySelector('.homeImg')

      avatarImage.style.opacity = 0
      setTimeout(() => {
        this.imageToken = this.getImageForCurrentTime()
        avatarImage.style.opacity = 1
      }, 400)
    }
  },
  computed: {
    imageUrl: function () {
      return `${this.imageHostUrl}${this.imageToken}${this.imagesType}`
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~assets/variables.styl"

h1
  margin-bottom: 0
.avatar
  margin-top: 30px
.liveStatus
  animation: glowEffect 1.5s infinite;
  // filter: drop-shadow(0px 0px 5px red)
.homeImg
  // border-bottom-left-radius: 50%;
  // border-bottom-right-radius: 50%;
  transition: $opacityTransition, filter .5s
  filter: drop-shadow(0px 0px 40px $mainColor1)
  &:hover
    cursor: pointer
    filter: drop-shadow(0px 0px 40px $mainColor1Hover)

@keyframes glowEffect {
  0%   {  filter: drop-shadow(0px 0px 4px red)}
  25%  {  filter: drop-shadow(0px 0px 8px red)}
  50%  {  filter: drop-shadow(0px 0px 12px red)}
  75%  {  filter: drop-shadow(0px 0px 8px red)}
  100% {  filter: drop-shadow(0px 0px 4px red)}
}

</style>
