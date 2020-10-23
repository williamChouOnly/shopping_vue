<template>
  <div class>
    <!-- 面包屑区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>数据统计</el-breadcrumb-item>
      <el-breadcrumb-item>数据报表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <!-- 2.为Echarts准备一个Dom -->
      <div id="main" style="width: 750px;height:400px;"></div>
    </el-card>
  </div>
</template>

<script>
// 导入echarts
import echarts from 'echarts'
import _ from 'lodash'
export default {
  data() {
    return {
      options: {
        title: {
          text: '用户来源',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#E9EEF3',
            },
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: [
          {
            boundaryGap: false,
          },
        ],
        yAxis: [
          {
            type: 'value',
          },
        ],
      },
    }
  },
  async mounted() {
    var myChart = echarts.init(document.getElementById('main'))
    await this.$http.get('reports/type/1').then((res) => {
      console.log(res)
      // 指定图表的配置项和数据,合并对象
      const options = _.merge(this.options, res.data.data)
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(options)
    })
  },
}
</script>

<style lang='less' scoped>
</style>