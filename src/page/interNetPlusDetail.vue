<template>
    <div class="overflow-height">
        <el-container class="container-style">
            <el-header class="header-style">
                <div class="title-style">
                    关于举办第九届“互联网+”大学生创新创业大赛校内选拔赛的通知
                </div>
                <!-- <div >
                    <div>
                        发布者
                    </div>
                </div> -->
                <el-row :gutter="20" type="flex" justify="center" class="author-row">
                    <el-col :span="3">
                        发布者：大赛组委会
                    </el-col>
                    <el-col :span="4">
                        发布时间：2022/11/04
                    </el-col>
                    <el-col :span="3">
                        浏览次数：99999
                    </el-col>
                </el-row>
            </el-header>
            <el-main class="main-style">
                <div>
                    为深入贯彻落实全国教育大会精神，全面落实习近平总书记给中国“互联网+”大学生创新创业大赛、
                    “青年红色筑梦之旅”大学生的重要回信精神，
                    按照《国务院办公厅关于深化高等学校创新创业教育改革的实施意见》等文件要求，加快创新创业人才培养，
                    持续激发广大学生创新创业热情，展示创新创业教育成果，搭建学生创新创业项目与社会资源对接平台，
                    教育部已经连续八年开展了“互联网+”大学生创新创业大赛，该项赛事是目前我国覆盖面最广，
                    含金量最高的大学生创新创业比赛。为了更好地组织参赛队伍，发掘优质参赛项目，
                    现将开展我校第九届“互联网+”大学生创新创业大赛校内选拔赛，有关事宜通知如下：
                </div>
                <div class="second-title">
                    一、组织机构
                </div>
                <div>
                    （一）大赛组委会
                </div>
                <div>
                    大赛组委会办公室设在创新创业培训中心，负责组委会日常工作。各二级学院自行成立竞赛办公室，负责各学院赛事的日常组织协调工作。
                </div>
                <div>
                    由学校创业导师、行业企业、投资人及专家学者组成，负责参赛项目的评审工作，指导大学生创新创业。
                </div>
                <div>
                    （二）大赛评审委员会
                </div>
                <div class="second-title">
                    二、参赛项目类型
                </div>
                <div>
                    （一）新工科类项目：大数据、云计算、人工智能、区块链、虚拟现实、智能制造、网络空间安全、机器人工程、工业自动化、新材料等领域，符合新工科建设理念和要求的项目；
                </div>
                <div>
                    （二）新医科类项目：现代医疗技术、智能医疗设备、新药研发、健康康养、食药保健、智能医学、生物技术、生物材料等领域，符合新医科建设理念和要求的项目；
                </div>
                <div>
                    （三）新文科类项目：文化教育、数字经济、金融科技、财经、法务、融媒体、翻译、旅游休闲、动漫、文创设计与开发、电子商务、物流、体育、非物质文化遗产保护、社会工作、家政服务、养老服务等领域，符合新文科建设理念和要求的项目。参赛项目团队应认真了解和把握“四新”发展要求，结合以上分类及项目实际，合理选择参赛项目类别。参赛项目不只限于“互联网+”项目，鼓励各类创新创业项目参赛，根据“四新”建设内涵和产业发展方向选择相应类型。
                </div>
            </el-main>
            <el-footer class="footer-style">
                <div>附件：</div>
                <el-link href="http://www.stiei.edu.cn/main.htm" type="primary" :underline="false" target="_blank">
                    “互联网++”大学生创新创业大赛评审规则.pdf
                </el-link>
            </el-footer>
        </el-container>
    </div>
</template>
<script>
export default {
    data() {
        return {}
    }
}
</script>
<style scoped>
.overflow-height {
    height: calc(100vh - 165px - 61px);
    overflow: visible;
}

.container-style {
    color: black;
    max-width: 70%;
    margin: 0 auto;
}

.header-style {
    margin-top: 20px;
    height: auto !important;
}

.author-row {
    color: #8b8b8b;
    padding-top: 10px;
}

.title-style {
    font-size: 24px;
    font-weight: bold;
    height: 45px;
    border-bottom: 1px solid #c1c1c1;
}

.main-style {
    text-align: left;
    font-size: 20px;
    color: #333;
    padding: 20px 30px;
    text-indent: 2em;
}

.second-title {
    font-weight: bold;
}

.footer-style {
    padding: 0 0 20px 30px;
    text-indent: 2em;
    text-align: left;
    font-size: 20px;
    color: #333;
}
</style>