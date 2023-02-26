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
                    title: "关于举办第九届“互联网+”大学生创新创业大赛校内选拔赛的通知",
                    text: "为深入贯彻落实全国教育大会精神，全面落实习近平总书记给中国“互联网+”大学生创新创业大赛、“青年红色筑梦之旅”大学生的重要回信精神，按照《国务院办公厅关于深化高等学校创新创业教育改革的实施意见》等文件要求，加快创新创业人才培养，持续激发广大学生创新创业热情，展示创新创业教育成果，搭建学生创新创业项目与社会资源对接平台，教育部已经连续八年开展了“互联网+”大学生创新创业大赛，该项赛事是目前我国覆盖面最广，含金量最高的大学生创新创业比赛。为了更好地组织参赛队伍，发掘优质参赛项目，现将开展我校第九届“互联网+”大学生创新创业大赛校内选拔赛...",
                    data: "2022/11/04"
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