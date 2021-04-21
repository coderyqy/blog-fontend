<template>
  <div id="article">
    <div class="search">
      <div class="search-item">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="search-item">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </div>
      <div class="search-item">
        <el-button type="danger">查询</el-button>
      </div>
      <div class="search-item" style="margin-left: auto; margin-right:20px">
        <el-button type="primary" @click="$router.push('/addArticle')">添加</el-button>
      </div>
    </div>
    <div class="main">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="title" label="标题" width="180"></el-table-column>

        <el-table-column prop="is_status" label="状态" width="180">
          <template slot-scope="scope">{{ scope.row.is_status == 0 ? '未发布' : '已发布'}}</template>
        </el-table-column>

        <el-table-column prop="createAt" label="创建时间" width="180"></el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button class="delete" @click="$router.push(`/modifyArticle/${scope.row.id}`)">修改</el-button>
            <el-button class="stop" v-if="scope.row.is_status == 0">发布</el-button>
            <el-button class="stop" v-if="scope.row.is_status == 1">停止</el-button>
            <el-button class="delete" @click="deleteArticle(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import vueQr from 'vue-qr'

import { getAllArticle, deleteArticle } from 'network/article'

export default {
  name: "Article",
  data () {
    return {
      downloadData: {
        url: 'http://www.baidu.com'
      },
      input: "23156",
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      tableData: [],
    }
  },
  components: {
    vueQr
  },
  methods: {
    async getAllArticle () { // 获取所有文章
      const con = await getAllArticle()
      this.tableData = con.result[0]
      console.log(con.result[0])
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
    }
  },
  created () {
    this.getAllArticle()
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