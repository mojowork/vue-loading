<template>
    <div class="bubbles-loader" v-show="loading">
        <div :style="GenerateBubblesStyle" 
        v-for="item in 3" 
        :key="item"></div>
    </div>
</template>

<script>
    export default {
        name: 'bubblesLoader',
        props: {
            loading: {
                type: Boolean,
                default: true
            },
            color: { 
                type: String,
                default: '#8385aa'
            },
        },
        computed: {
            GenerateBubblesStyle() {
                console.log(this.color)
                return {
                    backgroundColor: this.color
                }
            }
        },  
    }
</script>

<style scoped lang="scss">
@keyframes bubbles-loader {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0);
  }
}
.bubbles-loader {
  display: flex;
  justify-content: center;
  div {
    width: 1rem;
    height: 1rem;
    margin: 3rem 0.2rem;
    // background-color: #8385aa;
    border-radius: 50%;
    animation: bubbles-loader 0.6s infinite alternate;
    &:nth-child(2){
        animation-delay: 0.2s;
    }
    &:nth-child(3){
        animation-delay: 0.4s;
    }
  }
}
</style>