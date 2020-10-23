<template>
  <div class>
    <!-- 面包屑导航区 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>订单管理</el-breadcrumb-item>
      <el-breadcrumb-item>订单列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <!-- clearable可清空按钮 -->
      <el-input placeholder="请输入内容" v-model="queryInfo.query" clearable >
        <el-button  slot="append" icon="el-icon-search" @click="getOrderList"></el-button>
      </el-input>
      <!-- 用户列表区域 -->
      <el-table :data="orderList" border stripe  style="width: 100%">
        <el-table-column label="#" type="index"></el-table-column>
        <el-table-column  label="订单编号" prop="order_number"></el-table-column>
        <el-table-column  label="订单价格" prop="order_price"></el-table-column>
        <el-table-column  label="是否付款" >
          <template slot-scope="scope">
            <el-tag type="danger" size="mini" v-if="scope.row.pay_status">未付款</el-tag>
            <el-tag type="success" size="mini" v-else>已付款</el-tag>
          </template>
        </el-table-column>
        <el-table-column  label="是否发货" prop="is_send"></el-table-column>
        <el-table-column  label="下单时间">
          <template slot-scope="scope">
            {{scope.row.create_time | dataFormate}}
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页区域 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pagenum"
        :page-sizes="[1, 2, 5, 10]"
        :page-size="queryInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  data(){
    return {
      // 订单列表查询参数
      queryInfo: {
        query: '',
        pagenum: 1,
        pagesize: 10
      },
      total: 0,
      // 订单列表
      orderList: [],
      // 修改地址对话框
    }
  },
  created(){
    this.getOrderList()
  },
  methods:{
    async getOrderList(){
      await this.$http.get('orders',{
        params:this.queryInfo
      }).then(res =>{
        if(res.data.meta.status !== 200) return this.$message('获取订单列表失败')
        this.orderList = res.data.data.goods
        this.total = this.total
        console.log(res)
      })
    },
    // 改变每页显示条数
    handleSizeChange(value){
      this.queryInfo.pagesize = value
      this.getOrderList()
    },
    // 改变当前页码
    handleCurrentChange(value){
      this.queryInfo.pagenum = value
    }
  }
}
</script>

<style lang='less' scoped>
.el-input{
  width:30%
}
</style>