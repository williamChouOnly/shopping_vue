<template>
  <el-container class="home-container">
    <el-header>
      <div>
        <img src="../../assets/logo.png" alt />
        <span>电商后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <el-aside :width="isCollapse? '64px':'200px'">
        <div class="toggle-button" @click="togleCollapse">|||</div>
        <!-- 侧边栏菜单区域 -->
        <!-- :unique-opened="true"表示只允许一个menu展开 -->
        <!-- :router="true"启用vue-router模式，index就是它的路径 -->
        <el-menu :default-active="currentIndex" :router="true" :unique-opened="true" :collapse="isCollapse"  background-color="#333744" text-color="#fff" active-text-color="#409EFF">
          <!-- 一级菜单 -->
          <el-submenu v-for="item in menuList" :key="item.id" :index="item.id+''">
            <!-- index+''是为了转换成字符串 -->
            <!-- 一级菜单的模板区域 -->
            <template slot="title">
              <!-- 图标 -->
              <i :class="iconObj[item.id]"></i>
              <span>{{item.authName}}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item @click="setSessionIndex" :index="'/'+ child.path" v-for="child in item.children" :key="child.id">
              <!-- 二级菜单的模板区域 -->
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-menu"></i>
                <span>{{child.authName}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data(){
    return{
      menuList:[],
      iconObj:{
        '125': 'iconfont icon-user',
        '103': 'iconfont icon-tijikongjian',
        '101': 'iconfont icon-shangpin',
        '102': 'iconfont icon-danju',
        '145': 'iconfont icon-baobiao'
      },
      // 是否折叠
      isCollapse:false,
      // 当前二级菜单的index
      currentIndex:''
    }
  },
  created(){
    this.getMenuList()
    this.getCurrentIndex()
  },
  methods: {
    // 退出函数
    logout() {
      // 清空sessionstorage
      window.sessionStorage.clear()
      // 跳转登陆页面
      this.$router.push('/login')
    },
    // 获得菜单数据
    async getMenuList(){
      await this.$http.get('menus').then(res =>{
        // console.log(res)
        if (res.data.meta.status !== 200) return this.$message.error(res.data.meta.msg)
        this.menuList = res.data.data
        // console.log(this.menuList)
      })
    },
    // 切换折叠效果
    togleCollapse(){
      this.isCollapse = !this.isCollapse
    },
    // 将index存入sessionstorage
    setSessionIndex(event){
      window.sessionStorage.setItem('index',event.$options.propsData.index)
      this.currentIndex = event.$options.propsData.index
      // console.log(event.$options.propsData.index)
      
    },
    // 从sessionstorage取出index并赋值给currentIndex
    getCurrentIndex(){
      const index = window.sessionStorage.getItem('index')
      this.currentIndex = index
    }
  },
}
</script>

<style lang='less' scoped>
.home-container {
  height: 100%;
}
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div {
    display: flex;
    align-items: center;
    height: 40px;
    color: #fff;
    font-size: 20px;
    img {
      height: 40px;
    }
    span {
      margin-left: 15px;
    }
  }
}
.el-aside {
  background-color: #333744;
  .el-menu{
    border:none;

  }
}
.el-main {
  background-color: #eaedf1;
}
.iconfont{
  margin-right: 10px;
}
.toggle-button {
  background-color: #4A5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  // 鼠标放上去变成小手
  cursor: pointer;
}
</style>