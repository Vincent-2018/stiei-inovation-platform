<template>
  <div id="app">
    <el-container>
      <el-header style="height: 100">
        <img src="./assets/head-img.png" style="width: 2560;">
      </el-header>
      <el-main>
        <div id="main" style="width: auto;">
          <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
            background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item index="1">首页</el-menu-item>
            <el-submenu index="2">
              <template slot="title">双创资源</template>
              <el-menu-item index="2-1">相关政策</el-menu-item>
              <el-menu-item index="2-2">工作室</el-menu-item>
              <el-menu-item index="2-3">企业项目</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">工作室</template>
              <el-menu-item index="3-1">组织架构</el-menu-item>
              <el-menu-item index="3-2">日常运营</el-menu-item>
              <el-menu-item index="3-3">项目管理</el-menu-item>
              <el-menu-item index="3-4">绩效考核</el-menu-item>
            </el-submenu>
            <el-menu-item index="4">企业项目</el-menu-item>
            <el-menu-item index="5">学生项目</el-menu-item>
            <el-submenu index="6">
              <template slot="title">双创竞赛</template>
              <el-menu-item index="6-1">组织架构</el-menu-item>
              <el-menu-item index="6-2">日常运营</el-menu-item>
              <el-menu-item index="6-3">项目管理</el-menu-item>
            </el-submenu>
            <el-submenu index="7">
              <template slot="title">学分互认</template>
              <el-menu-item index="7-1">学分申请</el-menu-item>
              <el-menu-item index="7-2">学分确认</el-menu-item>
              <el-menu-item index="7-3">课程、学分、学时</el-menu-item>
            </el-submenu>
            <el-submenu index="8">
              <template slot="title">成果转化</template>
              <el-menu-item index="8-1">成果介绍</el-menu-item>
              <el-menu-item index="8-2">转化流程</el-menu-item>
              <el-menu-item index="8-3">转化结果</el-menu-item>
            </el-submenu>
            <el-submenu index="9">
              <template slot="title">双创培训</template>
              <el-menu-item index="9-1">培训信息</el-menu-item>
            </el-submenu>
            <!-- <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item> -->
          </el-menu>
        </div>
      </el-main>
    </el-container>
    <el-container>
      <el-main>
        <el-carousel :interval="4000" type="card" height="400px">
          <el-carousel-item v-for="item in 6" :key="item">
            <h3 class="medium">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </el-main>
    </el-container>
    <!-- <img src="./assets/logo.png">
    <div>
      <el-button @click="startHacking">Start</el-button>
    </div> -->
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     bannerHeight: 50,
  //     imgwrap: [
  //       { url: require("./assets/head-img.png") },
  //       { url: require("./assets/head-img.png") },
  //       { url: require("./assets/head-img.png") },
  //       { url: require("./assets/head-img.png") },
  //       { url: require("./assets/head-img.png") }
  //     ]
  //   }
  // },
  // mounted() {
  //   this.setSize();
  //   window.addEventListener('resize', () => {
  //     this.setSize();
  //   }, false);
  // },
  // methods: {
  //   setSize() {
  //     this.bannerHeight = document.body.clientWidth / 4
  //   }
  // }
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}

img {
  margin: 0;
  padding: 0;
}

.el-header {
  margin: 0;
  padding: 0;
}

.el-main {
  margin: 0;
  padding: 0;
  text-align: center;
  /* line-height: 200px; */
  background-color: #D3DCE6;
  color: #333;
}

/* .el-aside {
  margin: 0;
  padding: 0;
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 200px;
} */
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
