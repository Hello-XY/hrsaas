<template>
  <el-dialog
    title="分配角色"
    :visible="visible"
    @close="close"
    @open="onOpen"
  >
    <el-checkbox-group v-model="checkList">
      <el-checkbox :label="item.id" v-for="item in list" :key="item.id">{{
        item.name
      }}</el-checkbox>
    </el-checkbox-group>
    <el-row slot="footer" type="flex" justify="center">
      <el-col :span="6">
        <el-button type="primary" size="small" @click="assignRoles"
          >确定</el-button
        >
        <el-button size="small" @click="close">取消</el-button>
      </el-col>
    </el-row>
  </el-dialog>
</template>

<script>
import { getRolesApi } from '@/api/role'
import { getUserDetail } from '@/api/user'
import { assignRoles } from '@/api/employess'
export default {
  props: {
    visible: {
      type: Boolean,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      checkList: ['A', 'B'],
      list: []
    }
  },

  created() {},

  methods: {
    close() {
      this.$emit('update:visible', false)
    },
    async getRolesList() {
      const { rows } = await getRolesApi()
      this.list = rows
    },
    onOpen() {
      this.getRolesList()
      this.getUserDetail()
    },
    async getUserDetail() {
      const { roleIds } = await getUserDetail(this.id)
      this.checkList = roleIds
    },
    async assignRoles() {
      if (!this.checkList.length) return this.$message.error('请选择角色')
      await assignRoles({
        id: this.id,
        roleIds: this.checkList
      })
      this.$message.success('分配成功')
      this.close()
    }
  }
}
</script>

<style scoped></style>
