<template>
  <div>
    <!-- 面包屑区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图区域 -->
    <el-card class="box-card">
      <el-alert title="添加商品信息" type="info" show-icon center></el-alert>
      <!-- 步骤条 -->
      <el-steps :space="200" :active="activeIndex - 0" finish-status="success" align-center>
        <el-step title="基本信息"></el-step>
        <el-step title="商品参数"></el-step>
        <el-step title="商品属性"></el-step>
        <el-step title="商品图片"></el-step>
        <el-step title="商品内容"></el-step>
        <el-step title="完成"></el-step>
      </el-steps>
      <!-- 左侧标签页 -->
      <el-form
        :model="addForm"
        :rules="addFormRules"
        ref="addFormRef"
        label-width="100px"
        label-position="top"
      >
        <el-tabs
          v-model="activeIndex"
          :tab-position="tabPosition"
          :before-leave="beforeTabLeave"
          @tab-click="tabClicked"
        >
          <el-tab-pane label="基本信息" name="0">
            <el-form-item label="商品名称" prop="goods_name">
              <el-input v-model="addForm.goods_name"></el-input>
            </el-form-item>
            <el-form-item label="商品价格" prop="goods_price">
              <el-input v-model="addForm.goods_price" type="number"></el-input>
            </el-form-item>
            <el-form-item label="商品重量" prop="goods_weight">
              <el-input v-model="addForm.goods_weight" type="number"></el-input>
            </el-form-item>
            <el-form-item label="商品数量" prop="goods_number">
              <el-input v-model="addForm.goods_number" type="number"></el-input>
            </el-form-item>
            <el-form-item label="商品分类" prop="goods_cat">
              <el-cascader
                v-model="addForm.goods_cat"
                :options="categories"
                :props="cascaderProps"
                @change="handleChange"
              ></el-cascader>
            </el-form-item>
          </el-tab-pane>
          <el-tab-pane label="商品参数" name="1">
            <el-form>
              <!-- 渲染表单的Item项 -->
              <el-form-item
                v-for="item in manyTableData"
                :key="item.attr_id"
                :label="item.attr_name"
              >
             
                <!-- 复选框组 -->
                <el-checkbox-group v-model="item.attr_vals">
                  <el-checkbox v-for="(cb, i) in item.attr_vals" :label="cb" :key="i" border></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="商品属性" name="2">
            <el-form>
              <el-form-item
                :label="item.attr_name"
                v-for="item in onlyTableData"
                :key="item.attr_id"
              >
                <el-input v-model="item.attr_vals"></el-input>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="商品图片" name="3">
            <el-upload
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :on-success="handleSuccess"
              :action="uploadURL"
              :headers="headerObj"
              list-type="picture"
            >
              <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
          </el-tab-pane>
          <el-tab-pane label="商品内容" name="4">
            <!-- 富文本编辑器 -->
            <quill-editor v-model="addForm.goods_introduce"></quill-editor>
            <!-- 添加商品 -->
            <el-button type="primary" class="btnAdd" @click="addGoods">添加商品</el-button>
          </el-tab-pane>
        </el-tabs>
      </el-form>
    </el-card>
    <el-dialog title="图片预览" :visible.sync="previewDialogVisible" width="50%">
      <img :src="picPreviewPath" alt class="previewImg" />
    </el-dialog>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  data() {
    return {
      // 步骤条默认激活 与左侧Tab联动
      activeIndex: '0',
      // 标签页设置成左侧
      tabPosition: 'left',
      // 分类列表
      categories: [],
      // 级联选择器配置
      cascaderProps: {
        expandTrigger: 'hover',
        label: 'cat_name',
        value: 'cat_id',
        children: 'children',
      },
      // 添加商品的表单对象
      addForm: {
        goods_name: '',
        goods_price: 0,
        goods_weight: 0,
        goods_number: 0,
        // 商品所属分类数组
        goods_cat: [],
        // 图片的数组
        pics: [],
        // 商品详情描述
        goods_introduce: '',
        attrs: [],
      },
      addFormRules: {
        goods_name: [
          { required: true, message: '请输入商品名称', trigger: 'blur' },
        ],
        goods_price: [
          { required: true, message: '请输入商品价格', trigger: 'blur' },
        ],
        goods_weight: [
          { required: true, message: '请输入商品重量', trigger: 'blur' },
        ],
        goods_number: [
          { required: true, message: '请输入商品数量', trigger: 'blur' },
        ],
        goods_cat: [
          { required: true, message: '请选择商品分类', trigger: 'blur' },
        ],
      },
      // 动态参数列表数据
      manyTableData: [],
      // 静态属性列表数据
      onlyTableData: [],
      picPreviewPath: '',
      // 图片上传地址
      uploadURL: 'http://127.0.0.1:8888/api/private/v1/upload',
      // 图片预览框
      previewDialogVisible: false,
      // 图片上传请求对象
      headerObj: {
        Authorization: window.sessionStorage.getItem('token'),
      },
    }
  },
  created() {
    this.getCategories()
  },
  computed: {
    getCateId() {
      if (this.addForm.goods_cat.length === 3) {
        return this.addForm.goods_cat[2]
      }
      return null
    },
  },
  methods: {
    getCategories() {
      this.$http.get('categories').then((res) => {
        // console.log(res)
        this.categories = res.data.data
      })
    },
    handleChange() {
      if (this.addForm.goods_cat.length !== 3) {
        this.addForm.goods_cat = []
      }
    },
    // 判断是否切换标签
    beforeTabLeave(activeName, oldActiveName) {
      // console.log(activeName, oldActiveName)
      if (oldActiveName === '0' && this.addForm.goods_cat.length != 3) {
        this.$message.error('请先选择商品分类')
        return false
      }
    },
    // Tab标签被选中时触发
    async tabClicked() {
      // console.log(this.activeIndex)
      if (this.activeIndex === '1') {
        await this.$http
          .get(`categories/${this.getCateId}/attributes`, {
            params: {
              sel: 'many',
            },
          })
          .then((res) => {
            // console.log(res)
            if (res.data.meta.status !== 200) {
              return this.$message.error('获取动态参数列表失败！')
            }
            res.data.data.forEach((item) => {
              item.attr_vals =
                item.attr_vals.lenth === 0 ? [] : item.attr_vals.split(' ')
            })
            this.manyTableData = res.data.data
          })
      } else if (this.activeIndex === '2') {
        await this.$http
          .get(`categories/${this.getCateId}/attributes`, {
            params: {
              sel: 'only',
            },
          })
          .then((res) => {
            // console.log(res)
            if (res.data.meta.status !== 200) {
              return this.$message.error('获取动态参数列表失败！')
            }
            this.onlyTableData = res.data.data
          })
      }
    },
    // 上传图片预览
    handlePreview(file) {
      // console.log(file)
      this.picPreviewPath = file.response.data.url
      this.previewDialogVisible = true
    },
    // 移除图片
    handleRemove(file) {
      // console.log(file)
      // 先获得当前图片临时路径
      const temPath = file.response.data.tmp_path
      // 通过临时路径在pics查找索引值
      const i = this.addForm.pics.findIndex((x) => x.pic === temPath)
      // 删除该索引的图片
      this.addForm.pics.splice(i, 1)
      console.log(this.addForm.pics)
    },
    // 监听上传图片事件
    handleSuccess(response) {
      // 拼接得到图片临时路径
      const picInfo = { pic: response.data.tmp_path }
      // 将临时路径放进pics数组
      this.addForm.pics.push(picInfo)
    },
    // 添加商品
    addGoods() {
      this.$refs.addFormRef.validate(async valid =>{
        if(!valid) this.$message.error('请填写必要的表单项！')
      })
      // 对addform进行深拷贝
      const form = _.cloneDeep(this.addForm)
      // 把goods_cat数组转换成字符串
      form.goods_cat = form.goods_cat.join(',')
      // 处理动态参数
      this.manyTableData.forEach(item => {
        const newInfo = {
          "attr_id":item.attr_id,
          "attr_value":item.attr_vals.join(' ')
        }
        this.addForm.attrs.push(newInfo)
      })
      // 处理静态参数
      this.manyTableData.forEach(item => {
        const newInfo = {
          "attr_id":item.attr_id,
          "attr_value":item.attr_vals
        }
        this.addForm.attrs.push(newInfo)
      })
      form.attrs = this.addForm.attrs
      // console.log(form)
      // 发起请求添加商品
      this.$http.post('goods',form).then(res =>{
        console.log(res)
        if(res.data.meta.status === 400){
          return this.$message.error('商品名称已存在！')
        }else if(res.data.meta.status !== 201){
          return this.$message.error('添加商品失败！')
        }
        this.$message.success('添加商品成功！')
        this.$router.push('/goods')
      })
    },
  }
}
</script>

<style lang='less' scoped>
.el-cascader {
  height: 10px;
}
.previewImg {
  width: 100%;
}
.btnAdd {
  margin-top: 15px;
}
</style>