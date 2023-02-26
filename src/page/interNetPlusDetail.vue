<template>
    <div class="overflow-height">
        <el-container class="container-style">
            <el-header class="header-style">
                <div class="title-style">
                    标题XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                </div>
                <!-- <div >
                    <div>
                        发布者
                    </div>
                </div> -->
                <el-row :gutter="20" type="flex" justify="center" class="author-row">
                    <el-col :span="3">
                        发布者：XXXXX
                    </el-col>
                    <el-col :span="4">
                        发布时间：2023/02/25
                    </el-col>
                    <el-col :span="3">
                        浏览次数：99999
                    </el-col>
                </el-row>
            </el-header>
            <el-main class="main-style">
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内
                容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内
                容内容内容内容内容内容内容内容内容内容内容
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内
                容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内
                容内容内容内容内容内容内容内容内容内容内容
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内
                容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内
                容内容内容内容内容内容内容内容内容内容内容
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内
                容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内
                容内容内容内容内容内容内容内容内容内容内容
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内
                容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内
                容内容内容内容内容内容内容内容内容内容内容
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内
                容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内
                容内容内容内容内容内容内容内容内容内容内容
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内
                容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内
                容内容内容内容内容内容内容内容内容内容内容
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内
                容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内
                容内容内容内容内容内容内容内容内容内容内容
            </el-main>
            <el-footer class="footer-style">
                <div>XXXX：</div>
                <el-link href="http://www.stiei.edu.cn/main.htm" :underline="false" target="_blank">默认链接</el-link>
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
}

.footer-style {
    padding: 0 0 20px 30px;
    text-indent: 2em;
    text-align: left;
    font-size: 20px;
    color: #333;
}
</style>