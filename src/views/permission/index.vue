<template>
  <div class="dashboard-container">
    <div class="app-container">
      <!-- 靠右的按钮 -->
      <page-tools>
        <template v-slot:right>
          <el-button type="primary" size="small" @click="showAddDialog('0', 1)"
            >添加权限</el-button
          >
        </template>
      </page-tools>
      <!-- 表格 -->
      <el-table
        border
        slot="right"
        style="width: 100%"
        :data="permissions"
        row-key="id"
        ref="table"
      >
        <el-table-column align="center" label="名称">
          <template v-slot="{ row }">
            <i
              v-if="row.children"
              class="el-icon-folder-opened"
              style="margin-right: 5px"
              @click="expend(row)"
            ></i>
            <i v-if="row.type == 2" class="el-icon-folder"></i>
            <span>{{ row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="标识" prop="code" />
        <el-table-column align="center" label="描述" prop="description" />
        <el-table-column align="center" label="操作">
          <template v-slot="{ row }">
            <el-button type="text" @click="showAddDialog(row.id, 2)"
              >添加</el-button
            >
            <el-button type="text">编辑</el-button>
            <el-button type="text">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 放置一个弹层 用来编辑新增节点 -->
      <el-dialog
        title="添加权限点"
        :visible.sync="showDialog"
        @close="btnCancel"
      >
        <!-- 表单 -->
        <el-form
          ref="perForm"
          :model="formData"
          :rules="rules"
          label-width="120px"
        >
          <el-form-item label="权限名称" prop="name">
            <el-input v-model="formData.name" style="width: 90%" />
          </el-form-item>
          <el-form-item label="权限标识" prop="code">
            <el-input v-model="formData.code" style="width: 90%" />
          </el-form-item>
          <el-form-item label="权限描述">
            <el-input v-model="formData.description" style="width: 90%" />
          </el-form-item>
          <el-form-item label="开启">
            <el-switch
              v-model="formData.enVisible"
              active-value="1"
              inactive-value="0"
            />
          </el-form-item>
        </el-form>
        <el-row slot="footer" type="flex" justify="center">
          <el-col :span="6">
            <el-button size="small" type="primary" @click="btnOK"
              >确定</el-button
            >
            <el-button size="small" @click="btnCancel">取消</el-button>
          </el-col>
        </el-row>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { getPermissionList, addPermission } from '@/api/permission'
import { tranListToTreeData } from '@/utils'
export default {
  data() {
    return {
      permissions: [],
      formData: {
        name: '', // 名称
        code: '', // 标识
        description: '', // 描述
        type: '', // 类型 该类型 不需要显示 因为点击添加的时候已经知道类型了
        pid: '', // 因为做的是树 需要知道添加到哪个节点下了
        enVisible: '0' // 开启
      },
      rules: {
        name: [
          { required: true, message: '权限名称不能为空', trigger: 'blur' }
        ],
        code: [{ required: true, message: '权限标识不能为空', trigger: 'blur' }]
      },
      showDialog: false
    }
  },

  created() {
    this.getPermissionList()
  },

  methods: {
    async getPermissionList() {
      const res = await getPermissionList()
      this.permissions = tranListToTreeData(res, '0')
    },
    expend(row) {
      console.log(row)
      row.isexpend = !row.isexpend
      this.$refs.table.toggleRowExpansion(row, row.isExpand)
    },
    showAddDialog(id, type) {
      this.showDialog = true
      thia.formData.pid = id
      this.formData.type = type
    },
    btnCancel() {},
    async btnOK() {
      this.$refs.perForm.validate((valid) => {
        if (!valid) return
        addPermission(this.formData)
        this.$message.success('添加成功')
        this.showDialog = false
        this.getPermissionList()
      })
    }
  }
}
</script>

<style scoped lang="scss">
::v-deep .el-table [class*='el-table__row--level'] .el-table__expand-icon {
  display: none;
}
</style>
