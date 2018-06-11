<template>
    <div class="donut-loader" v-show="loading">
        <div class="donut" :style="GenerateDonutStyle"></div>
    </div>
</template>

<script>
    export default {
        name: 'donutLoader',
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
            GenerateDonutStyle () {
                return {
                    borderLeftColor: this.color
                }
            }
        }
    }
</script>

<style scoped lang="scss">
@keyframes donut-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.donut-loader{
    display: flex;
    justify-content: center;
    .donut {
        display: inline-block;
        border: .4rem solid rgba(0, 0, 0, 0.1);
        border-radius: 50%;
        width: 3rem;
        height: 3rem;
        animation: donut-spin 1.2s linear infinite;
    }
}
</style>