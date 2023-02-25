<template>
    <div style="padding: 30px;">
        <el-card class="card-list" v-for="(item, index) in cardList" :key="index">
            <div style="display: flex;">
                <div class="content-div">
                    <div class="title-div" :title="item.title">
                        {{ item.title }}
                    </div>
                    <div class="text-div">
                        {{ item.text }}
                    </div>
                    <div class="data-div">
                        {{ item.data }}
                    </div>
                </div>
                <div class="img-div">
                    <el-image :src="require('../assets/' + item.imgSrc)" fit="fill" style="display: block;"></el-image>
                </div>
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
                    title: "上海凯士比泵有限公司匠士评选技能培训在我校举办",
                    text: "2月16日，上海凯士比泵有限公司匠士技能项目培训在我校机械与能源工程学院数控加工技术应用中心举行。来自凯士比公司各分厂21名技术骨干参加了数控车、加工中心项目培训。匠士技能培训项目得到学校的大力支持。",
                    data: "2023/02/20",
                    imgSrc: "new1.jpg"
                },
                {
                    title: "校党委领导班子召开2022年度民主生活会",
                    text: "根据市纪委机关、市委组织部和市教卫工作党委部署要求，2月16日上午，学校党委召开了2022年度领导班子民主生活会。市教卫工作党委第2督导组组长仰颐、督导组成员田罗银、郑斌，以及市纪委监委驻市教卫工作党委纪检监",
                    data: "2023/02/17",
                    imgSrc: "new2.jpg"
                }
            ]
        }
    },
    methods: {}
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