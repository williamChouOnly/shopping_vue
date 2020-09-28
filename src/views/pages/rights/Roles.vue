<template>
  <div class>
    <!-- 面包屑区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>角色列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图区域 -->
    <el-card class="box-card">
      <el-button type="primary" size="medium">添加角色</el-button>
      <el-table :data="roleList" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="scope">
            <el-tag v-for="tag in scope.row.children" :key="tag.name" closable type="warning">{{tag.name}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="#" type="index"></el-table-column>
        <el-table-column label="角色名称" prop="roleName"></el-table-column>
        <el-table-column label="角色描述" prop="roleDesc"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" size="mini">编辑</el-button>
            <el-button type="danger" icon="el-icon-delete" size="mini">删除</el-button>
            <el-button type="warning" icon="el-icon-setting" size="mini">分配权限</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      roleList: [],
    }
  },
  created() {
    this.getRoleList()
  },
  methods: {
    async getRoleList() {
      await this.$http.get('roles').then((res) => {
        console.log(res)
        if (res.data.meta.status !== 200)
          return this.$message.error('获取数据失败')
        this.roleList = res.data.data
      })
    },
  },
}
</script>

<style lang='less' scoped>
</style>