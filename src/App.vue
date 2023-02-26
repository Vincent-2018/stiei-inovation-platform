<template>
  <div id="app">
    <el-container>
      <el-header style="height:auto">
        <el-image :src="require('./assets/head-img.png')" fit="fill" style="display: block;"></el-image>
      </el-header>
      <el-main>
        <div id="main" style="width: auto;">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
            background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item index="1">首页</el-menu-item>
            <el-submenu index="2">
              <template slot="title">双创资源</template>
              <el-menu-item index="2-1">相关政策</el-menu-item>
              <el-menu-item index="2-2">课程标准</el-menu-item>
              <el-menu-item index="2-3">教学资源</el-menu-item>
              <el-menu-item index="2-4">项目模拟</el-menu-item>
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
              <el-menu-item index="6-1">泰迪</el-menu-item>
              <el-menu-item index="6-2">华为</el-menu-item>
              <el-menu-item index="6-3">行企业</el-menu-item>
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
          </el-menu>
        </div>
      </el-main>
    </el-container>
    <el-container>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
    }
  },
  created() {
    this.$router.push("/home")
  },
  methods: {
    handleSelect(key, keyPath) {
      if (key === "1") {
        this.$router.push("/home")
      }
      else if (key === "2-1") {
        this.$router.push("/relatedInformation")
      }
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
  background-color: #fff;
  color: #fff;
}

.el-carousel__item:nth-child(2n) {
  background-color: #fff;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #fff;
}
</style>
