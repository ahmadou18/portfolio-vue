<template>
  <section id="sidebarright">
      <ul>
          <li><a href="#">info@baygulov.com</a></li>
          <li><a href="#">+6  01 01 01 01</a></li>
      </ul>
  </section>
</template>

<script>
import anime from 'animejs'
export default {
  name: 'SideBarRight',
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    #sidebarright {
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        ul{
            margin: 0;
            list-style: none;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            li{
                margin-left: 50px;
                transform: rotate(90deg);
 
                a{
                    position: relative;
                    display: block;
                    font-weight: 700;
                    color: black;
                    overflow: hidden;
                     &:after {
                            content:"";
                            position: absolute;
                            z-index: -1;
                            top: 0;
                            left: 0;
                            width: 0;
                            height: 100%;
                            transform: translate3d(0,70%, 0);
                            background-color: #FB4822;
                            transition: all .3s ease-in-out;
                        }
                          &:hover:after{
                            width: 100%
                        } 
                        @media screen and (max-width: 1023px){
                            color: white;
                    }
                }
            }
        }
    }
</style>

