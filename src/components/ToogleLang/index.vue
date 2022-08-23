<template>
  <el-dropdown @command="changeLanguage">
    <span class="el-dropdown-link">
      <svg-icon style="color: #fff; font-size: 20px" icon-class="language" />
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item
        v-for="(value, key) in messages"
        :key="key"
        :command="key"
        :disabled="$i18n.locale == key"
        >{{ value.name }}</el-dropdown-item
      >
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { messages } from '@/i18n'
import Cookie from 'js-cookie'
export default {
  name: 'ToogleLang',
  data() {
    return {
      messages
    }
  },

  created() {},

  methods: {
    changeLanguage(val) {
      this.$i18n.locale = val
      this.$router.go(0)
      Cookie.set('lang', val)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-dropdown-link {
  cursor: pointer;
  color: #fff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
