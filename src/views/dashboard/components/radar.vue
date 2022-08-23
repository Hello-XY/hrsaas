<template>
  <div class="radarEcharts" ref="myDiv"></div>
</template>

<script>
import * as echarts from 'echarts'
import { options } from 'runjs'
export default {
  data() {
    return {}
  },

  created() {},
  mounted() {
    this.initRadar()
  },

  methods: {
    initRadar() {
      const myChart = echarts.init(this.$refs.myDiv) // 得到图表实例
      const option = {
        backgroundColor: 'pink',
        title: {
          text: '人员绩效表'
        },
        legend: {
          data: ['张三', '李四'],
          textStyle: {
            color: 'yellow',
            fontSize: 14
          }
        },
        radar: {
          // shape: 'circle',
          indicator: [
            { name: '加班', max: 100 },
            { name: 'Administration', max: 100 },
            { name: 'Information Technology', max: 100 },
            { name: 'Customer Support', max: 100 },
            { name: 'Development', max: 100 },
            { name: 'Marketing', max: 100 }
          ],
          splitLine: {
            lineStyle: {
              color: [
                'green',
                'purple',
                'yellow',
                'yellowgreen',
                'rgba(238, 197, 102, 0.8)',
                'rgba(238, 197, 102, 1)'
              ].reverse()
            },
            splitArea: {
              areaStyle: {
                color: ['pink', '#26C3BE', '#fff', '#428BD4'],
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowBlur: 10
              },
              show: true
            }
          }
        },
        series: [
          {
            name: 'Budget vs spending',
            type: 'radar',
            data: [
              {
                value: [100, 100, 50, 50, 60, 70],
                name: '张三'
              },
              {
                value: [100, 70, 100, 50, 60, 70],
                name: '李四'
              }
            ]
          }
        ]
      }
      myChart.setOption(option)
    }
  }
}
</script>

<style lang="scss" scoped>
.radarEcharts {
  width: 500px;
  height: 500px;
}
</style>
