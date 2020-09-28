<template>
  <div>
    <!-- 面包屑区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图区域 -->
    <el-card class="box-card">
      <!-- 搜索与添加区域 -->
      <el-row :gutter="20">
        <el-col :span="8">
          <!-- clearable可清空按钮 -->
          <el-input placeholder="请输入内容" v-model="paramsObj.query" clearable @clear="getUserlist">
            <el-button @click="getUserlist" slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="dialogVisible = true">添加用户</el-button>
        </el-col>
      </el-row>
      <!-- 用户列表区域 -->
      <el-table border stripe :data="userlist" style="width: 100%">
        <el-table-column label="#" type="index" width="180"></el-table-column>
        <el-table-column prop="username" label="姓名" width="180"></el-table-column>
        <el-table-column prop="email" label="邮箱"></el-table-column>
        <el-table-column prop="mobile" label="电话"></el-table-column>
        <el-table-column prop="role_name" label="角色"></el-table-column>
        <el-table-column prop="mg_state" label="状态">
          <!-- slot-scope可以获得当前插槽域的数据 -->
          <template slot-scope="scope">
            <el-switch v-model="scope.row.mg_state" @change="handleChangeEvent(scope.row)"></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              type="primary"
              icon="el-icon-edit"
              size="mini"
              @click="showEditDialog(scope.row.id)"
            ></el-button>
            <el-button
              type="warning"
              icon="el-icon-delete"
              size="mini"
              @click="delUser(scope.row.id)"
            ></el-button>
            <el-tooltip effect="dark" content="分配角色" placement="top" :enterable="false">
              <el-button @click="showRoleDialog(scope.row)" type="primary" icon="el-icon-setting" size="mini"></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页区域 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="paramsObj.pagenum"
        :page-sizes="[1, 2, 5, 10]"
        :page-size="paramsObj.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </el-card>
    <!-- 添加用户对话框 -->
    <el-dialog title="添加用户" width="50%" :visible.sync="addDialogVisible" @close="closeDialog">
      <el-form :model="addFormData" :rules="addRules" ref="addRuleForm" label-width="70px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="addFormData.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="addFormData.password"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="addFormData.email"></el-input>
        </el-form-item>
        <el-form-item label="手机" prop="mobile">
          <el-input v-model="addFormData.mobile"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addUser">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 编辑用户信息 -->
    <el-dialog @close="clsoeEditDialog" title="修改用户" :visible.sync="editDialogVisible" width="50%">
      <el-form :model="editFormData" :rules="addRules" ref="editRuleForm" label-width="100px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="editFormData.username" disabled></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="editFormData.email"></el-input>
        </el-form-item>
        <el-form-item label="手机" prop="mobile">
          <el-input v-model="editFormData.mobile"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editUser">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 分配角色框 -->
    <el-dialog title="分配角色" :visible.sync="roleDialogVisible" width="50%" @close="closeRoleDialog">
      <div>
        <p>当前用户：{{userInfo.username}}</p>
        <p>当前角色：{{userInfo.role_name}}</p>
        <p>
          分配角色：
          <el-select size="mini" v-model="selectRoleId" placeholder="请选择">
            <el-option
              v-for="item in roleList"
              :key="item.id"
              :label="item.roleName"
              :value="item.id"
            ></el-option>
          </el-select>
        </p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="roleDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="changeRole">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    // 自定义手机号验证规则
    var checkPhone = (rule, value, callback) => {
      const regMobile = /^1[34578]\d{9}$/
      if (regMobile.test(value)) {
        return callback()
      }
      return callback(new Error('请输入合法的手机号码'))
    }
    return {
      // 定义个参数对象
      paramsObj: {
        query: '',
        pagenum: 1,
        pagesize: 2,
      },
      // 用户列表
      userlist: [],
      total: 0,
      // 添加用户框
      addDialogVisible: false,
      // 添加用户表单数据
      addFormData: {
        username: '',
        password: '',
        email: '',
        mobile: '',
      },
      // 用户表单验证规则
      addRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          {
            min: 3,
            max: 10,
            message: '用户名长度在 3 到 10 个字符',
            trigger: 'blur',
          },
        ],
        password: [
          { required: true, message: '请输入用户密码', trigger: 'blur' },
          {
            min: 6,
            max: 15,
            message: '用户密码长度在 6 到 15 个字符',
            trigger: 'blur',
          },
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' },
        ],
        mobile: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          {
            min: 7,
            max: 11,
            message: '手机号码长度在 7 到 11 个字符',
            trigger: 'blur',
          },
          { validator: checkPhone, trigger: 'blur' },
        ],
      },
      // 添加用户表单属性
      addRuleForm: {
        username: '',
        password: '',
        email: '',
        mobile: '',
      },
      //编辑用户表单数据
      editFormData: {
        id: 0,
        username: '',
        email: '',
        mobile: '',
      },
      // 编辑用户表单属性
      editRuleForm: {
        username: '',
        email: '',
        mobile: '',
      },
      // 是否打开编辑用户窗口
      editDialogVisible: false,
      // 角色数组
      roleList:[],
      // 当前用户信息
      userInfo:{},
      // 是否打开分配角色窗口
      roleDialogVisible:false,
      // 当前角色id
      selectRoleId:'',

    }
  },
  created() {
    this.getUserlist()
  },
  methods: {
    async getUserlist() {
      await this.$http
        .get('users', {
          params: this.paramsObj,
        })
        .then((res) => {
          // console.log(res)
          const data = res.data
          if (data.meta.status !== 200)
            return this.$message.error('获取用户列表失败')
          this.userlist = data.data.users
          this.total = data.data.total
        })
    },
    // 监听每页条数改变
    handleSizeChange(value) {
      this.paramsObj.pagesize = value
      this.getUserlist()
    },
    // 监听当前页码改变
    handleCurrentChange(value) {
      this.paramsObj.pagenum = value
      this.getUserlist()
    },
    // 状态改变后上传数据库更新状态
    async handleChangeEvent(user) {
      // console.log(user)
      await this.$http
        .put(`users/${user.id}/state/${user.mg_state}`)
        .then((res) => {
          // console.log(res)
          if (res.data.meta.status !== 200) {
            user.mg_state = !user.mg_state
            return this.$message.error('更新用户状态失败')
          }
          return this.$message.success('更新用户状态成功')
        })
    },
    // 关闭对话框时重置表单数据
    closeDialog() {
      this.$refs.addRuleForm.resetFields()
    },
    async addUser() {
      await this.$refs.addRuleForm.validate((valid) => {
        // console.log(valid)
        if (!valid) {
          return
        }
        this.$http.post('users', this.addFormData).then((res) => {
          // console.log(res)
          if (res.data.meta.status !== 201)
            return this.$message.error('添加用户失败')
          this.$message.success('添加用户成功')
          // 对话框关闭
          this.addDialogVisible = false
          this.getUserlist()
        })
      })
    },
    // 编辑用户信息
    async showEditDialog(userId) {
      // console.log(userId)
      await this.$http.get('users/' + userId).then((res) => {
        // console.log(res)
        const data = res.data
        if (data.meta.status !== 200)
          return this.$message.error('查询用户信息失败！')
        this.editFormData.username = data.data.username
        this.editFormData.email = data.data.email
        this.editFormData.mobile = data.data.mobile
        this.editFormData.id = data.data.id
      })
      this.editDialogVisible = true
    },
    clsoeEditDialog() {
      this.$refs.editRuleForm.resetFields()
    },
    // 编辑用户信息确定
    async editUser() {
      await this.$refs.editRuleForm.validate((valid) => {
        if (!valid) return
        this.$http
          .put('users/' + this.editFormData.id, {
            email: this.editFormData.email,
            mobile: this.editFormData.mobile,
          })
          .then((res) => {
            // console.log(res)
            const data = res.data
            if (data.meta.status !== 200)
              return this.$message.error('更新用户信息失败')
            this.$message.success('更新用户信息成功')
            // 刷新用户列表
            this.getUserlist()
            // 将编辑信息窗口关闭
            this.editDialogVisible = false
          })
      })
    },
    // 确定删除用户
    async delUser(userId) {
      await this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          this.$http.delete('users/' + userId).then((res) => {
            console.log(res)
            const data = res.data
            if (data.meta.status !== 200)
              return this.$message.error('删除用户失败')
            this.$message({
              type: 'success',
              message: '删除用户成功!',
            })
            this.getUserlist()
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除',
          })
        })
    },
    // 打开分配角色对话窗
    async showRoleDialog(userInfo){
      var roles = []
      this.roleDialogVisible = true
      this.userInfo = userInfo
      await this.$http.get('roles').then(res =>{
        // console.log(res)
        const data = res.data
        if(data.meta.status !== 200) return this.$message.error('获取数据失败')
        this.roleList = data.data

      })
    },
    // 关闭角色对话窗
    closeRoleDialog(){
      this.selectRoleId = ''
      // this.userInfo = {}
    },
    // 修改角色
    async changeRole(){
      await this.$http.put(`users/${this.userInfo.id}/role`,{
        rid:this.selectRoleId
      }).then(res =>{
        // console.log(res)
        const data = res.data
        if(data.meta.status !== 200) return this.$message.error('修改用户角色失败')
        this.$message.success('修改用户角色成功')
        this.roleDialogVisible = false
        this.getUserlist()
      })
    }
  }
}
</script>

<style lang='less' scoped>
</style>