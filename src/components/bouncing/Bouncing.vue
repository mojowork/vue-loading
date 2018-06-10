<template>
    <div class="bouncing-loader" v-show="loading">
        <div :style="GenerateBouncingStyle" 
        v-for="item in 3" 
        :key="item"></div>
    </div>
</template>

<script>
    export default {
        name: 'bouncingLoader',
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
            GenerateBouncingStyle () {
                return {
                    background: this.color
                }
            }
        }
    }
</script>

<style scoped lang="scss">
@keyframes bouncing-loader {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0.1;
    transform: translateY(-1rem);
  }
}
.bouncing-loader {
  display: flex;
  justify-content: center;
  div {
    width: 1rem;
    height: 1rem;
    margin: 3rem 0.2rem;
    border-radius: 50%;
    animation: bouncing-loader 0.6s infinite alternate;
    &:nth-child(2){
        animation-delay: 0.2s;
    }
    &:nth-child(3){
        animation-delay: 0.4s;
    }
  }
}
</style>