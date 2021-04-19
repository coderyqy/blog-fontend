<template>
  <div class="add-article">
    <div></div>
    <el-card class="box-card">
      <div class="top-card">
        <el-button class="back-btn" @click="$router.go(-1)">返回</el-button>
        <div class="article-title">
          <span>文章标题</span>
          <el-input v-model="articleTitle" class="article-title-inp" placeholder="请输入内容"></el-input>
        </div>
        <el-button type="primary" class="save-btn" @click="modify">确认修改</el-button>
      </div>
    </el-card>

    <div class="editor">
      <mavon-editor :toolbars="toolbars" v-model="value" style="height:700px;" ref="md" />
    </div>
  </div>
</template>

<script>
import { getArticle, update } from 'network/article'

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
      value: '',
      articleTitle: '',
      articleId: this.$route.params.id
    }
  },
  methods: {
    //监听markdown变化
    change (value, render) {

    },
    //上传图片接口pos 表示第几个图片 
    handleEditorImgAdd (pos, $file) {

    },
    handleEditorImgDel () {

    },
    async getArticle () {
      const { result } = await getArticle(this.articleId)
      console.log('----返回的数据----')
      this.articleTitle = result[0].title
      this.value = result[0].content
      console.log(result[0].title)
    },
    async modify () {
      console.log(this.articleId, this.articleTitle, this.value)
      const result = await update(this.articleId, this.articleTitle, this.value)
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

    }
  },
  created () {
    this.getArticle()
  }
}
</script>

<style scoped>
.add-article {
  margin: 14px;
  background-color: #fff;
}

.editor {
  margin-top: 20px;
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
  margin-left: 100px;
}
.article-title > span {
  padding-right: 6px;
  font-size: 16px;
}
.article-title-inp {
  width: 450px;
}
</style>