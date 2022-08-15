<template>
  <div>
    <el-upload
      v-loading="loading"
      :file-list="fileList"
      action="#"
      :http-request="onRequest"
      list-type="picture-card"
      :on-change="onChange"
      :on-remove="onRemove"
      :on-preview="onPreview"
      :before-upload="beforeUpload"
      :limit="1"
      class="custom"
      :class="fileList.length ? 'hide' : ''"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img :src="preview" alt="" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
//id:AKIDl03tVt3ygAPO8dsseARTGo69xWqujJel
//key:uYx53oLceRzINCn9F6j7G9nIciZBYgbJ
import COS from 'cos-js-sdk-v5'
var cos = new COS({
  SecretId: 'AKIDl03tVt3ygAPO8dsseARTGo69xWqujJel',
  SecretKey: 'uYx53oLceRzINCn9F6j7G9nIciZBYgbJ'
})
console.log(cos)
export default {
  name: 'UploadImg',
  data() {
    return {
      fileList: [],
      dialogVisible: false,
      preview: '',
      loading: false
    }
  },

  created() {},

  methods: {
    onRequest({ file }) {
      this.loading = true
      cos.putObject(
        {
          Bucket: 'jxy-1313341680' /* 必须 */,
          Region: 'ap-shanghai' /* 存储桶所在地域，必须字段 */,
          Key: file.name /* 必须 */,
          StorageClass: 'STANDARD',
          Body: file, // 上传文件对象
          onProgress: function (progressData) {
            console.log(JSON.stringify(progressData))
          }
        },
        (err, data) => {
          if (err || data.statusCode != 200) {
            return this.$message.error('上传失败，请重试')
          }
          this.loading = false
          this.$emit('onSuccess', { url: 'http://' + data.Location })
        }
      )
    },
    /* 文件状态改变时的钩子 */
    onChange() {
      console.log('文件上传了')
    },
    /* 文件移除时的钩子 */
    onRemove() {
      console.log('文件移除了')
    },
    onPreview(file) {
      console.log(file)
      this.preview = file.url
      this.dialogVisible = true
    },
    beforeUpload(file) {
      const type = ['image/jpeg', 'image/gif', 'image/bmp']
      if (!type.includes(file.type)) {
        this.$message.error('请选择' + type.join('、') + '后缀图片')
        return false
      }
      const maxSize = 100 * 1024
      if (maxSize > file.maxSize) {
        this.$message.error('图片不能超出100kb')
        return false
      }
    }
  }
}
</script>

<style lang="scss">
// .hide > .el-upload--picture-card {
//   display: none;
// }
.custom {
  width: 148px;
  height: 148px;
  overflow: hidden;
}
</style>
