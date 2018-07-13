<template>
  <header id="header">
    <nav>
        <div class="site-name">
            <h1>Bjorg.co</h1>
        </div>
        <ul class="menu">
            <li>
                <router-link :to="{name:'home'}">Home</router-link>
            </li>
            <li>
                <router-link to="/about">About Me</router-link>
            </li>
            <li>
                <router-link to="/portfolio">Portfolio</router-link>
            </li>
            <li>
                <router-link to="/contact">Contact</router-link>
            </li>
        </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'Header'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    #header {
        position: absolute;
        top: 0;
        z-index: 1;
        height: 100px;
        width: 100%;
        nav{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100%;
            .site-name {
                height: 100%;
                background-color: #FB4822;
                width: 10%;
                h1{
                    color: white;
                    font-size: 14px;
                    letter-spacing: 1px;
                    text-align: right;
                    margin-right: 5px;
                    line-height: 70px;
                }
            }
            ul{
                padding: 0;
                margin: 0;
                list-style: none;
                width: 60%;
                display: flex;
                justify-content: space-around;
                align-items: center;
                li {
                    a{
                        position: relative;
                        color: black;
                        font-weight: 700;
                        font-size: 14px;
                        letter-spacing: 1px;
                        &:after {
                            content:"";
                            position: absolute;
                            z-index: -1;
                            top: 0;
                            left: 0;
                            width: 0;
                            height: 100%;
                            background-color: rgba(151, 151, 151, 0.24);
                            transition: all .3s ease-in-out;
                        }
                        &:hover:after{
                            width: 50%
                        }
                        @media screen and (max-width: 1023px){
                            color: white;
                        }
                    }
                }
            }
        }
    }
</style>


