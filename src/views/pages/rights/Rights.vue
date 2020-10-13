<template>
  <div class>
    <!-- 面包屑区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>权限列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 权限列表区域 -->
    <el-table border stripe :data="rightList" style="width: 100%">
      <el-table-column label="#" type="index"></el-table-column>
      <el-table-column prop="authName" label="权限名称"></el-table-column>
      <el-table-column prop="path" label="路径"></el-table-column>
      <el-table-column prop="level" label="权限等级">
        <template slot-scope="scope">
          <el-tag type="success" v-if="scope.row.level === '0'">一级</el-tag>
          <el-tag type="danger" v-else-if="scope.row.level === '1'">二级</el-tag>
          <el-tag type="warning" v-else>三级</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rightList: [],
    }
  },
  created() {
    this.getRightList()
  },
  methods: {
    async getRightList() {
      await this.$http.get('rights/list').then((res) => {
        // console.log(res);
        if (res.data.meta.status !== 200)
          return this.$message.error('获取权限列表失败')
        this.rightList = res.data.data
      })
    },
  },
}
</script>

<style lang='less' scoped>
</style>