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
      <el-button type="primary" size="medium" @click="showAddDialog">添加角色</el-button>
      <el-table :data="roleList" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="scope">
            <!-- 一级权限 -->
            <el-row
              :class="['bdBottom', i1 === 0 ? 'bdTop':'','itemCenter']"
              v-for="(item1,i1) in scope.row.children"
              :key="item1.id"
            >
              <el-col :span="5">
                <el-tag
                  closable
                  type="warning"
                  @close="deleteRight(scope.row,item1.id)"
                >{{item1.authName}}</el-tag>
                <i class="el-icon-caret-right"></i>
              </el-col>
              <el-col :span="19">
                <!-- 二级权限 -->
                <el-row
                  :class="['itemCenter',i2 === 0?'':'bdTop']"
                  v-for="(item2,i2) in item1.children"
                  :key="item2.id"
                >
                  <el-col :span="6">
                    <el-tag
                      closable
                      type="success"
                      @close="deleteRight(scope.row,item2.id)"
                    >{{item2.authName}}</el-tag>
                    <i class="el-icon-caret-right"></i>
                  </el-col>
                  <!-- 三级权限 -->
                  <el-col :span="18">
                    <el-tag
                      v-for="item3 in item2.children"
                      :key="item3.id"
                      closable
                      type="danger"
                      @close="deleteRight(scope.row,item3.id)"
                    >{{item3.authName}}</el-tag>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </template>
        </el-table-column>
        <el-table-column label="#" type="index"></el-table-column>
        <el-table-column label="角色名称" prop="roleName"></el-table-column>
        <el-table-column label="角色描述" prop="roleDesc"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              type="primary"
              icon="el-icon-edit"
              size="mini"
              @click="showEditDialog(scope.row.id)"
            >编辑</el-button>
            <el-button
              type="danger"
              icon="el-icon-delete"
              size="mini"
              @click="delUser(scope.row.id)"
            >删除</el-button>
            <el-button
              type="warning"
              icon="el-icon-setting"
              size="mini"
              @click="showRightDialog(scope.row)"
            >分配权限</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <!-- 添加角色对话窗 -->
    <el-dialog title="添加角色" :visible.sync="addDialogVisible" width="50%" @close="closeAddDialog">
      <el-form :model="addRuleForm" :rules="editRules" ref="addRuleFormRef" label-width="100px">
        <el-form-item label="角色名称" prop="roleName">
          <el-input v-model="addRuleForm.roleName"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" prop="roleDesc">
          <el-input v-model="addRuleForm.roleDesc"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addRole">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 编辑对话窗 -->
    <el-dialog title="修改角色" :visible.sync="editDialogVisible" width="50%">
      <el-form :model="editRuleForm" :rules="editRules" ref="editRuleFormRef" label-width="100px">
        <el-form-item label="角色名称" prop="roleName">
          <el-input v-model="editRuleForm.roleName"></el-input>
        </el-form-item>
        <el-form-item label="角色描述">
          <el-input v-model="editRuleForm.roleDesc"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="changeRole">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 分配权限对话窗 -->
    <el-dialog @close="closeRightDialog" title="分配权限" :visible.sync="rightDialogVisible" width="30%">
      <el-tree
        ref="treeRef"
        :data="rightList"
        show-checkbox
        node-key="id"
        default-expand-all
        :default-checked-keys="defKeys"
        :props="defaultProps"
      ></el-tree>
      <span slot="footer" class="dialog-footer">
        <el-button @click="rightDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="changeRight">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      roleList: [],
      // 编辑表单数据
      editRuleForm: {},
      // 编辑表单规则
      editRules: {
        roleName: [
          { required: true, message: '请输入角色名', trigger: 'blur' },
        ],
      },
      // 是否打开编辑窗口
      editDialogVisible: false,
      // 添加角色表单数据
      addRuleForm: {
        roleName: '',
        roleDesc: '',
      },
      // 是否打开添加角色窗口
      addDialogVisible: false,
      // 是否打开分配权限窗口
      rightDialogVisible: false,
      // 权限列表
      rightList:[],
      // 权限树属性
      defaultProps: {
        children: 'children',
        label: 'authName'
      },
      // 权限树已选属性
      defKeys:[],
      // 角色id
      roleId:0
    }
  },
  created() {
    this.getRoleList()
  },
  methods: {
    async getRoleList() {
      await this.$http.get('roles').then((res) => {
        // console.log(res)
        if (res.data.meta.status !== 200)
          return this.$message.error('获取角色列表失败')
        this.roleList = res.data.data
        // console.log(this.roleList)
      })
    },
    // 点击编辑按钮
    async showEditDialog(userId) {
      this.editDialogVisible = true
      await this.$http.get('roles/' + userId).then((res) => {
        // console.log(res)
        if (res.data.meta.status !== 200)
          return this.$http.error('获取角色信息失败')
        this.editRuleForm = res.data.data
      })
    },
    // 确定修改角色
    async changeRole() {
      await this.$http
        .put('roles/' + this.editRuleForm.roleId, {
          roleName: this.editRuleForm.roleName,
          roleDesc: this.editRuleForm.roleDesc,
        })
        .then((res) => {
          // console.log(res)
          // console.log(this.editRuleForm.roleId)
          if (res.data.meta.status != 200)
            return this.$message.error('修改角色失败')
          this.$message.success('修改角色成功')
          // 关闭编辑窗口
          this.editDialogVisible = false
          this.getRoleList()
        })
    },
    // 关闭添加用户窗口
    closeAddDialog() {
      this.$refs.addRuleFormRef.resetFields()
    },
    // 点击添加角色
    showAddDialog() {
      this.addDialogVisible = true
    },
    // 确定添加角色
    async addRole() {
      await this.$http
        .post('roles', {
          roleName: this.addRuleForm.roleName,
          roleDesc: this.addRuleForm.roleDesc,
        })
        .then((res) => {
          if (res.data.meta.status != 201)
            return this.$message.error('添加角色失败')
          this.$message.success('添加角色成功')
          this.addDialogVisible = false
          this.getRoleList()
          // console.log(res)
        })
    },
    // 确定删除角色
    async delUser(roleId) {
      await this.$confirm('此操作将永久删除该角色, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          this.$http.delete('roles/' + roleId).then((res) => {
            // console.log(roleId)
            // console.log(res)

            const data = res.data
            if (data.meta.status !== 200)
              return this.$message.error('删除角色失败')
            this.$message({
              type: 'success',
              message: '删除角色成功!',
            })
            this.getRoleList()
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除',
          })
        })
    },
    // 删除角色的权限
    async deleteRight(role, rightId) {
      await this.$confirm('此操作将永久删除该权限, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          this.$http
            .delete(`roles/${role.id}/rights/${rightId}`)
            .then((res) => {
              // const data = res.data
              // console.log(res)
              if (res.data.meta.status !== 200)
                return this.$message.error('删除权限失败')
              this.$message({
                type: 'success',
                message: '删除权限成功!',
              })
              console.log(role)
              role.children = res.data.data
              // this.getRoleList()
              // console.log(role)
            })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除',
          })
        })
    },
    // 利用递归，找到三级权限，并把权限id加入到数组
    findChecked(node,arr){
      // 判断是否为三级权限，是则加入数组，不是则遍历node.children
      if(!node.children){
        return arr.push(node.id)
      }
      node.children.forEach(item => {
        this.findChecked(item,arr)
      })
    },
    // 分配权限窗口
    async showRightDialog(role) {
      this.roleId = role.id
      this.rightDialogVisible = true
      await this.$http.get('rights/tree').then((res) => {
        // console.log(res)
        if(res.data.meta.status !== 200) return this.$message.error('获取权限列表失败')
         //   获取权限树
        this.rightList = res.data.data
        this.findChecked(role,this.defKeys)
        console.log(this.rightList)
      })
    },
    // 确定分配权限
    async changeRight(){
      const keys = [
        ...this.$refs.treeRef.getCheckedKeys(),
        ...this.$refs.treeRef.getHalfCheckedKeys()
      ]
      const keyStr = keys.join(',')
      await this.$http.post(`roles/${this.roleId}/rights`,{
        'rids':keyStr
      }).then(res =>{
        if(res.data.meta.status !== 200) return this.$message.error('更新权限失败')
        this.$message.success('更新权限成功')
        this.rightDialogVisible = false
        // console.log(res)
        this.getRoleList()
      })
    },
    // 关闭分配权限窗口
    closeRightDialog(){
      this.defKeys = []
    }
  }
}
</script>

<style lang='less' scoped>
.bdTop {
  border-top: 1px solid #eee;
}
.bdBottom {
  border-bottom: 1px solid #eee;
}
.itemCenter {
  display: flex;
  align-items: center;
}
.el-tag {
  margin: 7px;
}
</style>