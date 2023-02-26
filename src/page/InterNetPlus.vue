<template>
    <div style="padding: 30px;">
        <el-card class="card-list" v-for="(item, index) in cardList" :key="index">
            <div style="display: flex;">
                <div class="content-div">
                    <div class="title-div" :title="item.title" @click="toDetail(item)">
                        {{ item.title }}
                    </div>
                    <div class="text-div">
                        {{ item.text }}
                    </div>
                    <div class="data-div">
                        {{ item.data }}
                    </div>
                </div>
                <!-- <div class="img-div">
                    <el-image :src="require('../assets/' + item.imgSrc)" fit="fill" style="display: block;"></el-image>
                </div> -->
            </div>
        </el-card>
    </div>
</template>
<script>
export default {
    data() {
        return {
            cardList: [
                {
                    title: "2023年互联网+比赛通知",
                    text: "根据市教委要求，2023年X月X日将展开比赛",
                    data: "2023/02/20"
                    // imgSrc: "new1.jpg"
                },
                {
                    title: "2022年互联网+比赛通知",
                    text: "根据市教委要求，2022年X月X日将展开比赛",
                    data: "2022/02/17"
                    // imgSrc: "new2.jpg"
                }
            ]
        }
    },
    methods: {
        toDetail(info) {
            this.$router.push("/interNetPlusDetail")
        }
    }
}
</script>
<style scoped>
.card-list {
    color: black;
    margin-bottom: 20px;

}

.content-div {
    width: calc(100% - 300px);
    word-break: break-all;
}

.title-div {
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    margin-bottom: 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.title-div:hover {
    cursor: pointer;
}

.text-div {
    color: #808080;
    font-size: 14px;
    text-align: left;
    height: 136px;
    margin-bottom: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
}

.data-div {
    color: #c2c2c2;
    font-size: 14px;
    text-align: left;
}

.img-div {
    margin-left: 20px;
    width: 300px;
}

.img-div .el-image {
    height: 200px;
}
</style>