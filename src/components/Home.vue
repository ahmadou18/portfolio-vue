<template>
  <section id="home">
    <div class="anime-container">
      <div class="portfolio-photo" ref="picture">
    </div>
    </div>
  </section>
</template>

<script>
import anime from 'animejs'
export default {
  name: 'Home',

  methods:{
    animation: function () {
      anime({
        targets: this.$refs.picture,
          translateY: {
          value: ['-100%', 0],
          duration: 700,
          easing: [0.645, 0.045, 0.355, 1]
          },
          opacity: {
          value: [0, 1],
          duration: 800,
          delay: 100,
          easing: 'linear'
          }
        })
    }
  },

  mounted() {
    this.animation();
  },
  
  beforeDestroy() {
   anime({
          targets: this.$refs.picture,
          translateY: {
        value: [0, '-100%'],
        duration: 600,
        delay: function(el, i) { return i * 100 },
        easing: [0.645, 0.045, 0.355, 1]
        },
         opacity: {
          value: [1, 0],
          duration: 500,
          delay: 100,
          easing: 'linear'
          }
    })
      console.log(this.$refs.picture);    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#home {
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .anime-container{
    overflow: hidden;
    width: 60%;
    height: 80%;
    margin: 80px 150px 0 0;
  .portfolio-photo {
    width: 100%;
    height:100%;
    background-image: url("../assets/profile-photo.jpg");
    background-size:cover;
    background-repeat: no-repeat;
    
  }
   }
}
</style>
