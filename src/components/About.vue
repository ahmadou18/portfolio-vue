<template>
  <section id="about">
    <div class="anime-container">
      <div class="about-container" ref="text">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde non exercitationem <span>accusantium enim eum consectetur ut id odio</span> 
          Saepe molestiae aspernatur illum expedita debitis, totam autem voluptas.</p>
          <p class="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam modi aperiam, sequi unde ut voluptatum harum perferendis, quasi ratione officiis minus totam quidem, porro ipsam perspiciatis vero eum. Explicabo harum nemo facilis amet mollitia cumque ipsam dolorem blanditiis id ducimus autem voluptates velit fugit vitae quis odio, eius quas iste laboriosam. Impedit quibusdam molestias quasi facilis quidem soluta nobis ipsam sequi eius, sed mollitia at cupiditate odio consequuntur maiores dolor beatae vel quae architecto ipsa. Quod suscipit vero iure necessitatibus facilis. Saepe laudantium minima odio temporibus aspernatur magni expedita, sed id excepturi? Nostrum accusantium, repellendus hic adipisci ab qui impedit.</p>
      </div>
    </div>
  </section>
</template>

<script>
import anime from 'animejs'

export default {
  name: 'About',
  methods:{
    animation: function () {
      anime({
          targets: this.$refs.text,
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
        targets: this.$refs.text,
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
  #about {
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

  .about-container {
    margin-top: 80px;
    width: 100%;
    height: 100%;
    overflow: auto;
    p{
      text-align: left;
      font-family: 'Lora', serif;
      font-size: 25px;
      width: 50%;
      color: black;
      @media screen and (max-width:1440px){
            width: 100%;
      }
      @media screen and (max-width: 1250px){
            font-size: 19px;
      }
      span{
        border-bottom: 2px solid;
      }
      
    }
    .txt{
        font-size: 14px;
        font-family: 'Lato', sans-serif;
        line-height: 25px;
          @media screen and (max-width: 1250px){
              font-size: 12px;
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
        box-shadow: inset 0 0 5px rgba(128, 128, 128, 0.24); 
        border-radius: 10px;
    }
     
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.24); 
        border-radius: 10px;
    }
</style>
