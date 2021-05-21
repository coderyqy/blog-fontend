<template>
  <div id="article">
    <div class="main">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="commentuser.name" label="访客名" width="180"></el-table-column>
        <el-table-column prop="content" label="评论内容" width="180"></el-table-column>
        <el-table-column prop="createAt" label="创建时间" width="180"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button class="delete" @click="open(scope.row.id)">回复</el-button>
            <el-button class="delete" @click="deleteComment(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
        <el-table-column label="状态">
          <template slot-scope="scope">{{(scope.row.isStatus == 0) ? '未回复' : '已回复'}}</template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import vueQr from 'vue-qr'

import { getAllComment, deleteComment } from 'network/comment'

import { message, replyMessage, getMessage } from 'network/message'

export default {
  name: "Comment",
  data () {
    return {
      input: "23156",
      value: '',
      tableData: [],
    }
  },
  components: {
    vueQr
  },
  methods: {
    // 获取留言
    async getMessageList () {
      const result = await getMessage()
      console.log(result)
      if (result) {
        this.tableData = result
      }
    },
    async deleteArticle (id) {
      console.log(id)
      const result = await deleteArticle(id)
      if (result.status == 200) {
        this.$message({
          message: result.message,
          type: 'success'
        })
        // 重新请求全部文章
        this.getAllArticle()
      } else {
        this.$message.error(result.message)
      }
    },
    // 弹窗
    open (id) {
      this.$prompt('请输入回复内容', '回复', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputValidator: (content) => {
          if (typeof content == "undefined" || content == '' || content == ' ') {
            return false
          } else {
            return true
          }
        },
        inputErrorMessage: '内容不能为空！'
      }).then(({ value }) => {


      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        })
      })
    },
    // 删除
    async deleteComment (id) {
      const result = await deleteComment(id)
      if (result.status == 200) {
        this.$message({
          message: result.message,
          type: 'success'
        })
        // 重新请求全部评论
        this.getAllComment()
      } else {
        this.$message.error(result.message)
      }
    },
  },
  created () {
    this.getMessageList()
  }
}
</script>

<style scoped>
#article {
  margin: 14px;
}
.search {
  display: flex;
  padding: 20px 0;
  background-color: #fff;
  box-shadow: 0px 0px 8px rgb(219, 219, 219);
}
.search .search-item {
  margin-left: 12px;
}
.main {
  margin-top: 20px;
  background-color: #fff;
  box-shadow: 0px 0px 8px rgb(219, 219, 219);
}
.delete:hover {
  background: rgb(245, 139, 68);
  color: #fff;
}
.stop:hover {
  background: rgb(197, 69, 94);
  color: #fff;
}
</style>