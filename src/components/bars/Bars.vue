<template>
    <div class="bars-loader" v-show="loading">
        <div :style="GenerateBarsStyle" 
        v-for="item in 5" 
        :key="item"></div>
    </div>
</template>

<script>
    export default {
        name: 'barsLoader',
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
            GenerateBarsStyle() {
                return {
                    backgroundColor: this.color
                }
            }
        },  
    }
</script>

<style scoped lang="scss">
@keyframes bars-loader {
  from {
    transform: scaleY(2.5);
  }
  to {
    transform: scaleY(1);
  }
}
.bars-loader {
  display: flex;
  justify-content: center;
  div {
    width: .5rem;
    height: 1rem;
    margin: 3rem 0.2rem;
    animation: bars-loader .6s infinite alternate;
    @for $i from 1 through 5{
        &:nth-child(#{$i}){
            animation-delay: ($i - 1) * 0.2s;
        }
    }
  }
}
</style>