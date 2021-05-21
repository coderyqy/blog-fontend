<template>
  <div class="add-article">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/article' }">文章管理</el-breadcrumb-item>
      <el-breadcrumb-item>添加文章</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
      <div class="top-card">
        <div class="article-title">
          <span>文章标题</span>
          <el-input v-model="articleTitle" class="article-title-inp" placeholder="请输入内容"></el-input>
        </div>
        <el-button type="primary" class="save-btn" @click="saveArticle">保存</el-button>
      </div>
    </el-card>

    <el-card class="box-card upload-card">
      <div style="display:flex">
        <span style="padding-right: 10px">内容摘要</span>
        <el-input type="textarea" style="width:88%" :rows="2" placeholder="请输入内容" v-model="condec"></el-input>
      </div>
    </el-card>

    <div class="editor">
      <mavon-editor
        :toolbars="toolbars"
        v-model="value"
        @imgAdd="handleEditorImgAdd"
        :style="{height: mdHeight}"
        ref="md"
      />
    </div>

    <el-card class="box-card upload-card">
      选择标签
      <el-checkbox-group v-model="checkList">
        <el-checkbox v-for="(label,index) in labelList" :label="label.name" :key="index"></el-checkbox>
      </el-checkbox-group>
    </el-card>

    <el-card class="box-card upload-card">
      <el-upload
        class="upload-demo"
        action
        :http-request="uploadMainImg"
        :on-remove="handleRemove"
        :file-list="fileList"
        list-type="picture"
        :limit="1"
      >
        上传主图
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </el-card>
  </div>
</template>

<script>
import { save } from 'network/article'
import { uploadPicture, uploadMainPicture, uploadAddPicture } from 'network/file'
import { getAllLabel } from 'network/label'

export default {
  name: "AddArticle",
  data () {
    return {
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true, // 预览
      },
      value: '', // 富文本内容
      articleTitle: '', // 文章标题
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      mdHeight: '0px',
      fileList: [], // 主图
      mimetype: '', // 图片类型
      imgUrl: '', // 后台传过来的主图地址
      condec: '', // 内容摘要
      labelList: [], // 标签列表
      checkList: [] // 所选标签的列表
    }
  },
  methods: {
    changeMDHeight () {                        //动态修改样式
      this.clientHeight = document.documentElement.clientHeight
      // this.mdHeight = `${this.clientHeight - 210}px`
      this.mdHeight = `${this.clientHeight - 410}px`
    },
    uploadP () {

    },
    //监听markdown变化
    change (value, render) {

    },
    // 上传图片
    async handleEditorImgAdd (pos, file) {
      var formData = new FormData()
      formData.append('picture', file)
      // 保存图片
      const result = await uploadAddPicture(formData)
      // 替换文章图片的url
      console.log(result)
      this.$refs.md.$img2Url(pos, result.imgUrl)
    },
    // 获取所有标签
    async getAllLabels () {
      const result = await getAllLabel()
      console.log("标签")
      this.labelList = result
    },
    // 保存文章
    async saveArticle () {
      console.log(this.checkList)
      const result = await save(this.articleTitle, this.condec, this.value, this.imgUrl, this.mimetype, this.checkList)
      console.log(result)
      if (result.status == 200) {
        this.$message({
          message: result.message,
          type: 'success'
        })
        this.$router.push("/article")
      } else {
        this.$message.error(result.message)
      }
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleDownload (file) {
      console.log(file)
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    async uploadMainImg (fileData) {
      const { file } = fileData
      var formData = new FormData()
      formData.append('picture', file)
      // 保存图片
      const result = await uploadMainPicture(formData)
      this.imgUrl = result.imgUrl
      this.mimetype = result.mimetype
      console.log(result)
    }
  },
  created () {
    this.getAllLabels()
  },
  mounted () {
    this.changeMDHeight()
  }
}
</script>

<style scoped>
.add-article {
  margin: 14px;
  /* background-color: #fff; */
}

.editor {
  margin-top: 6px;
}

.top-card {
  display: flex;
}

.save-btn {
  margin-left: auto;
}

.article-title {
  display: flex;
  width: 550px;
  line-height: 32px;
}
.article-title > span {
  padding-right: 6px;
  font-size: 16px;
}
.article-title-inp {
  width: 450px;
}

.upload-card {
  margin-top: 6px;
}

.el-checkbox-group {
  padding-top: 10px;
  margin-bottom: 10px;
}
</style>