<template>
  <section id="portfolio">
    <div class="anime-container">
    <div class="portfolio-container" ref="portfolio">
        <swiper :options="swiperOption">
        <swiper-slide>
          <h1>Title</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti temporibus recusandae reprehenderit voluptatem quas animi laborum tempore, aperiam unde culpa ratione at! Distinctio quo laudantium optio doloribus ratione ex. Repudiandae!</p>
        </swiper-slide>
        <swiper-slide>
          <h1>Title</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti temporibus recusandae reprehenderit voluptatem quas animi laborum tempore, aperiam unde culpa ratione at! Distinctio quo laudantium optio doloribus ratione ex. Repudiandae!</p>
        </swiper-slide>
        <swiper-slide>
          <h1>Title</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti temporibus recusandae reprehenderit voluptatem quas animi laborum tempore, aperiam unde culpa ratione at! Distinctio quo laudantium optio doloribus ratione ex. Repudiandae!</p>
        </swiper-slide>
        <swiper-slide>
          <h1>Title</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti temporibus recusandae reprehenderit voluptatem quas animi laborum tempore, aperiam unde culpa ratione at! Distinctio quo laudantium optio doloribus ratione ex. Repudiandae!</p>
        </swiper-slide>
        <swiper-slide>
          <h1>Title</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti temporibus recusandae reprehenderit voluptatem quas animi laborum tempore, aperiam unde culpa ratione at! Distinctio quo laudantium optio doloribus ratione ex. Repudiandae!</p>
        </swiper-slide>
        <swiper-slide>
          <h1>Title</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti temporibus recusandae reprehenderit voluptatem quas animi laborum tempore, aperiam unde culpa ratione at! Distinctio quo laudantium optio doloribus ratione ex. Repudiandae!</p>
        </swiper-slide>
        
        
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    </div>
  </section>
</template>

<script>
import anime from 'animejs';
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'


export default {
  name: 'Portfolio',
  components: {
        swiper,
        swiperSlide
      },

  data() {
      return {
        swiperOption: {
          effect: 'cube',
          grabCursor: true,
          cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94
          },
          pagination: {
            el: '.swiper-pagination'
          }
        }
      }
    },
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
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
      .swiper-container {
      width: 100%;
      height: 80%;
          .swiper-slide {
            background-image: url('../assets/edrece-stansberry.jpg');
            background-position: center;
            background-size: cover;
            display: flex;
            flex-flow: column;
            justify-content: space-around;
            h1{
              font-size: 40px;
              color: white;
            }
            p{
              text-align: left;
              padding: 90px;
              color: white;
              font-weight: bold;
            }
      }  
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
