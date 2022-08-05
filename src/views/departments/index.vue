<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card class="box-card">
        <!-- 头部 -->
        <TreeTools :treeNode="company" :isRoot="true" />
        <!-- 树形 -->
        <el-tree :data="departs" :props="defaultProps" default-expand-all>
          <template v-slot="{ data }">
            <TreeTools :treeNode="data" />
          </template>
        </el-tree>
      </el-card>
    </div>
  </div>
</template>

<script>
import TreeTools from './compoents/tree-tools.vue'
import { getDeptsApi } from '@/api/departments'
export default {
  components: {
    TreeTools
  },
  data() {
    return {
      defaultProps: {
        label: 'name'
      },
      departs: [
        { name: '总裁办', children: [{ name: '董事会' }] },
        { name: '行政部' },
        { name: '人事部' }
      ],
      company: { name: '传智教育', manager: '负责人' }
    }
  },

  created() {
    this.getDeptsApi()
  },

  methods: {
    async getDeptsApi() {
      const res = await getDeptsApi()
      this.departs = res.depts
    }
  }
}
</script>

<style scoped lang="less"></style>
