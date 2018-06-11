<template>
    <div class="spokes-loader" v-show="loading">
        <div class="spokes" :style="GenerateSpokesStyle" 
        v-for="item in 8" 
        :key="item"></div>
    </div>
</template>

<script>
    export default {
        name: 'spokesLoader',
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
            GenerateSpokesStyle() {
                return{
                    backgroundColor: this.color
                }
            }
        }
    }
</script>

<style scoped lang="scss">
@keyframes spokes-loader{
    0%{
        opacity: 1;
    }
    100%{
        opacity: .1;
    }
}
.spokes-loader{
    margin: 0 auto;
    width: 4rem;
    height: 4rem;
    // background-color: lime;
    position: relative;
    div {
        width: .5rem;
        height: 1rem;
        position: absolute; 
        top: calc(50% - .5rem);
        left: calc(50% - .25rem);
        animation: spokes-loader 0.875s infinite alternate;

        // @for $i from 1 through 8{
        //     &:nth-child(#{$i}){
        //         animation-delay: ($i - 1) * 0.125s;
        //         transform: translate()  rotate(($i - 1) * 45deg);
        //     }
        // }
        &:nth-child(1){
            animation-delay: 0;
            transform: translate(0, -1.5rem)  rotate(0);
        }
        &:nth-child(2){
            animation-delay: 0.125s;
            transform: translate(1rem, -1rem)  rotate(45deg);
        }
        &:nth-child(3){
            animation-delay: 0.25s;
            transform: translate(1.5rem, 0)  rotate(90deg);
        }
        &:nth-child(4){
            animation-delay: 0.375s;
            transform: translate(1rem, 1rem)  rotate(135deg);
        }
        &:nth-child(5){
            animation-delay: 0.5s;
            transform: translate(0, 1.5rem)  rotate(180deg);
        }
        &:nth-child(6){
            animation-delay: 0.625s;
            transform: translate(-1rem, 1rem)  rotate(225deg);
        }
        &:nth-child(7){
            animation-delay: 0.75s;
            transform: translate(-1.5rem, 0)  rotate(270deg);
        }
        &:nth-child(8){
            animation-delay: 0.875s;
            transform: translate(-1rem, -1rem)  rotate(315deg);
        }
    }
}

</style>