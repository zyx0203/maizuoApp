<template>
    <div>
        <div class="swiper-contain" :class="name">
            <div class="swiper-wrapper">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'
export default({
    props:{
        perview:{
            type:Number,
            default:1,
        },
        name:{
            type:String,
            default:'actor',
        }
    },
    mounted() {
       new Swiper('.'+this.name, {
/*         direction: 'vertical', // 垂直切换选项 */
           slidesPerView:this.perview,
           spaceBetween:10,
           freeMode:true,
        })
    },
})
</script>
<style scoped>
html{
    margin:0;
    padding:0;
}
.swiper-contain{
    position: relative;
    height:7.5rem;
    width:100%;
}
</style>
