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
                    title: "2023年挑战杯比赛通知",
                    text: "各相关单位：“挑战杯”全国大学生课外学术科技作品竞赛历史久、规格高，影响广泛，体现了鲜明的导向性、示范性和群众性，在高校和社会上产生了广泛、良好的影响，展示了高校的育人成果，更是培养高素质创新型人才的重要载体。为进一步引导和激励我校大学生刻苦钻研、勇于创新，活跃校园学术气氛，推动学生参与学术科技实践，培养青年学生的创新精神、创业意识和实践能力，积极备战2023年第十八届“挑战杯”全国大学生课外学术科技作品竞赛（以下简称“挑战杯”）。经研究，决定举办2023年第十八届“挑战杯”全国大学生课外学术科技作品竞赛校内选拔赛。现将有关事项通知如下：",
                    data: "2023/02/20",
                    // imgSrc: "new1.jpg"
                },
                {
                    title: "2022年挑战杯比赛通知",
                    text: "根据市纪委机关、市委组织部和市教卫工作党委部署要求，2月16日上午，学校党委召开了2022年度领导班子民主生活会。市教卫工作党委第2督导组组长仰颐、督导组成员田罗银、郑斌，以及市纪委监委驻市教卫工作党委纪检监",
                    data: "2023/02/17",
                    // imgSrc: "new2.jpg"
                }
            ]
        }
    },
    methods: {
        toDetail(info) {
            this.$router.push("/challengeCupDetail")
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