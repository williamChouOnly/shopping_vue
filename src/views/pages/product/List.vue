<template>
  <div class=''>
    <!-- 面包屑区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图区域 -->
    <el-card class="box-card">
      <!-- 搜索与添加区域 -->
      <el-row :gutter="20">
        <el-col :span="8">
          <!-- clearable可清空按钮 -->
          <el-input  placeholder="请输入内容" v-model="productObj.query" clearable @clear="getProductList">
            <el-button @click="getProductList" slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary"  @click="goAddPage">添加商品</el-button>
        </el-col>
      </el-row>
      <el-table border stripe :data="productList" style="width: 100%">
        <el-table-column label="#" type="index"></el-table-column>
        <el-table-column prop="goods_name" label="商品名称" width="600"></el-table-column>
        <el-table-column prop="goods_price" label="商品价格（元）"></el-table-column>
        <el-table-column prop="goods_weight" label="商品重量"></el-table-column>
        <el-table-column prop="add_time" label="创建时间">
          <template slot-scope="scope">
            {{scope.row.add_time | dataFormate}}
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              type="primary"
              icon="el-icon-edit"
              size="mini"
            ></el-button>
            <el-button
              type="danger"
              icon="el-icon-delete"
              size="mini"
              @click="delProduct(scope.row.goods_id)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页区域 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="productObj.pagenum"
        :page-sizes="[1, 2, 5, 10]"
        :page-size="productObj.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  data(){
    return{
      // 获取商品数据的对象
      productObj:{
        query: '',
        pagenum:1,
        pagesize:2
      },
      // 商品列表
      productList:[],
      // 商品总数
      total:0
    }
  },
  created(){
    this.getProductList()
  },
  methods:{
    async getProductList(){
      await this.$http.get('goods',{
        params:this.productObj
      }).then(res =>{
        // console.log(res)
        if(res.data.meta.status !== 200) return this.$message.error('获取商品列表失败')
        this.productList = res.data.data.goods
        this.total = res.data.data.total
      })
    },
    // 监听每页条数改变
    handleSizeChange(value) {
      this.productObj.pagesize = value
      // console.log(this.productObj.pagesize)
      this.getProductList()
    },
    // 监听当前页码改变
    handleCurrentChange(value) {
      this.productObj.pagenum = value
      this.getProductList()
      // console.log(this.productObj.pagenum)

    },
    // 增加添加商品页面路由
    goAddPage(){
      this.$router.push('/goods/addProduct')
    },
    
    async delProduct(productId) {
      console.log(productId)
      await this.$confirm('此操作将永久删除该商品, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          this.$http.delete('goods/' + productId).then((res) => {
            console.log(res)
            const data = res.data
            if (data.meta.status !== 200)
              return this.$message.error('删除商品失败')
            this.$message({
              type: 'success',
              message: '删除商品成功!',
            })
            this.getProductList()
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除',
          })
        })
    }
  }
}
</script>

<style lang='less' scoped>

</style>