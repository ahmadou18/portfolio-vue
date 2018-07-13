<template>
  <section id="portfolio">
    <div class="anime-container">
    <div class="portfolio-container" ref="portfolio">
        <div class="project"></div>
        <div class="project"></div>
        <div class="project"></div>
        <div class="project"></div>
        <div class="project"></div>
        <div class="project"></div>
        </div>
    </div>
  </section>
</template>

<script>
import anime from 'animejs';

export default {
  name: 'Portfolio',
    methods:{
    animation: function () {
      anime({
          targets: this.$refs.portfolio,
          translateY: {
        value: ['-100%', 0],
        duration: 600,
        delay: function(el, i) { return i * 100 },
        easing: [0.645, 0.045, 0.355, 1]
          }
        })
    }
  },

  mounted() {
    this.animation();
  },

   beforeDestroy() {
   anime({
        targets: this.$refs.portfolio,
        translateY: {
        value: [0, '-100%'],
        duration: 600,
        easing: [0.645, 0.045, 0.355, 1]
        },
    })
      console.log(this.$refs.picture);    
  }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#portfolio {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 100%;
  .anime-container{
    overflow: hidden;
    width: 60%;
    height: 80%;
    margin: 80px 150px 0 0;

  .portfolio-container {
    overflow-y: auto;
    width: 100%;
    height: 100%;
    .project {
      height: 300px;
      width: 100%;
      display: flex;
      justify-content: space-around;
      background-image: url("../assets/sabina-ciesielska.jpg");
      background-size:cover;
      margin-bottom: 30px
    }
  }
  }
}

 /* SCROLLBAR */

    ::-webkit-scrollbar {
        width: 5px;
        opacity: 0.5;
    }
    
    /* Track */
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px rgba(128, 128, 128, 0.281); 
        border-radius: 10px;
    }
     
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.623); 
        border-radius: 10px;
    }

</style>
