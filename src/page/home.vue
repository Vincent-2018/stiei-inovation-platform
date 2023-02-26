<template>
    <el-carousel :interval="4000" type="card" height="550px">
        <el-carousel-item v-for="(img, index) in imgList" :key="index">
            <img :src="img.url" width="100%" height="100%">
        </el-carousel-item>
    </el-carousel>
</template>
<script>
export default {
    data() {
        return {
            imgList: [
                {
                    url: require('../assets/1.jpeg') //url: '../assets/lake.jpg'      
                },
                {
                    url: require('../assets/2.jpeg') //url: '../assets/build.jpg' 
                },
                {
                    url: require('../assets/3.jpeg') //url: '../assets/road.jpg' 
                },
                {
                    url: require('../assets/4.jpeg') //url: '../assets/sea.jpg' 
                },
                {
                    url: require('../assets/5.jpeg') //url: '../assets/sea.jpg' 
                }
            ]
        }
    }
}

</script>
<style scoped></style>