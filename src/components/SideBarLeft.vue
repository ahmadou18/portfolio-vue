<template>
  <section id="sidebar">
      <div class="slider-txt">
            <p>
                I'm inspired<br> by Nordic style<br> and timeless aesthetics.
            </p>
            <p class="txt">Understanding the importance of<br> light is a key element behind my <br> work</p>
      </div>
  </section>
</template>

<script>
import anime from 'animejs'
export default {
  name: 'SideBarLeft',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    #sidebar {
        position: relative;
        width: 40%;
        height: 100%;
        background-color: black;
        background-image: url("../assets/background-home.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        // &::after {
        //     content: "";
        //     position: absolute;
        //     top: 0;
        //     left: 0;
            
        // }
         @media screen and (max-width: 1023px){
            width: 100%;
        }
    }

    .slider-txt {
        width: 100%;
            height: 100%;
            background-color: black;
            opacity: 0.9;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        p{
            color: white;
            font-size:50px;
            text-align: left;
            @media screen and (max-width: 1440px){
                font-size: 40px;
            }
            @media screen and (max-width: 1440px){
                font-size: 30px;
            }
        }
        p.txt{
            font-size: 23px;
            margin-right: 200px;
            @media screen and (max-width: 1440px){
                margin-right: 75px;
            }

            @media screen and (max-width: 1440px){
                font-size: 16px;
            }
        }
    }
</style>

