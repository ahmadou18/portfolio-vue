<template>
  <section id="contact">
    <div class="form-container" >
      <form action="" ref="form">
        <input type="text" placeholder="Entrez Votre prénom">
        <input type="mail" placeholder="Entrez adresse mail">
        <textarea name="" id="" cols="30" rows="10" placeholder="message"></textarea>
        <button type="submit">ENVOYER</button>
      </form>  
    </div>
  </section>
</template>

<script>
import anime from 'animejs'

export default {
  name: 'Contact',
  methods:{

  animation: function () {
      anime({
          targets: this.$refs.form,
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
        targets: this.$refs.form,
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  #contact {
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .form-container {
      overflow: hidden;
      width: 60%;
      height: 80%;
      margin: 80px 150px 0 0;
      form {
        width: 100%;
        height:100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        input{
          height: 50px;
          border: 2px solid
          
        }
       
        textarea{
          border: 2px solid
        }
        button {
          position: relative;
          height: 50px;
          border: none;
          background: transparent;
          font-weight: bold;
          cursor: pointer;
          &:after {
            content:"";
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            width: 0;
            height: 100%;
            background-color: black;
            transition: all .3s ease-in-out;
          }
          &:hover{
              color: white;
          }
          &:hover:after{
              width: 100%
          }
        }
      }
    }
  }
</style>
