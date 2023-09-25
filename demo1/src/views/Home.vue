<template>
  <div class="body">
    <div class="box">
      <div style="text-align: center;">
        <h1>留言板</h1>
        <div>
          <el-button type="text" size="large" style="margin-right: -70vw;" icon="el-icon-circle-plus" @click="add">
            添加
          </el-button>
        </div>
      </div>
      <el-table :data="tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)" stripe :key="key">
        <el-table-column prop="id" label="编号">

        </el-table-column>
        <el-table-column prop="title" label="标题">

        </el-table-column>
        <el-table-column prop="content" label="内容">

        </el-table-column>
        <el-table-column prop="author" label="留言人">

        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text" icon="el-icon-edit" @click="update(scope.row)">编辑</el-button>
            <el-button type="text" icon="el-icon-delete-solid" @click="deleteInfo(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="block" style="text-align: center;">
        <span class="demonstration"></span>
        <el-pagination @current-change="handleCurrentChange" :current-page="currentPage" :page-size="pageSize"
          layout="total, prev, pager, next, jumper" :total=this.tableData.length>
        </el-pagination>
      </div>

      <el-dialog title="添加信息" :visible.sync="addShow">
        <el-form :model="operatorBody[0]">
          <el-form-item label="id">
            <el-input v-model="operatorBody[0].id" autocomplete="off" disabled></el-input>
          </el-form-item>
          <el-form-item label="title">
            <el-input v-model="operatorBody[0].title" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="content">
            <el-input v-model="operatorBody[0].content" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="author">
            <el-input v-model="operatorBody[0].author" autocomplete="off"></el-input>

          </el-form-item>
          <el-form-item label="addtime">
            <el-input v-model="currentTime" autocomplete="off" disabled></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="addShow = false">取 消</el-button>
          <el-button type="primary" @click="addSubmit">确 定</el-button>
        </div>
      </el-dialog>

      <el-dialog title="修改信息" :visible.sync="updateshow">
        <el-form :model="operatorBody[1]">
          <el-form-item label="id">
            <el-input v-model="operatorBody[1].id" autocomplete="off" disabled></el-input>
          </el-form-item>
          <el-form-item label="title">

            <el-input v-model="operatorBody[1].title" autocomplete="off">
            </el-input>
          </el-form-item>
          <el-form-item label="content">

            <el-input v-model="operatorBody[1].content" autocomplete="off"></el-input>

          </el-form-item>
          <el-form-item label="author">

            <el-input v-model="operatorBody[1].author" autocomplete="off"></el-input>


          </el-form-item>
          <el-form-item label="addtime">
            <el-input v-model="operatorBody[1].addtime" autocomplete="off" disabled></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="updateshow = false">取 消</el-button>
          <el-button type="primary" @click="updateSubmit">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>  
  
<style scoped>
.body {
  height: 100vh;
  width: 100%;
}
</style>
<script>
import axios from 'axios';


export default {
  name: 'Home',
  data() {
    return {
      tableData: [
  
      ],
      currentPage: 1,
      pageSize: 4,
      operatorBody: [
        {
          id: '111',
          title: '',
          content: '',
          author: '',
          addtime: '',
        },
        {
          id: '222',
          title: '222',
          content: '222',
          author: '222',
          addtime: '',
        },
      ],
      addShow: false,
      updateshow: false,
      currentTime: '',
      key:0
    }
  },
  created() {
    setInterval(this.getCurrenttime, 1000)
  },
  beforeCreate() {
    axios.get("http://localhost:8081/bbs/getdata").then(res => {
      var data = res.data
      for (let index = 0; index < data.length; index++) {
            this.tableData.push(data[index])
      }
    })
  },
  methods: {

    handleCurrentChange(val) {
      this.currentPage = val
    },
    add() {
      console.log(this.tableData)
      this.getCurrenttime()
      this.operatorBody[0].addtime = this.currentTime
      this.addShow = true
    },
    addSubmit() {
      var body = {
        id: this.operatorBody[0].id,
        title: this.operatorBody[0].title,
        content: this.operatorBody[0].content,
        author: this.operatorBody[0].author,
        addtime: this.operatorBody[0].addtime,
      }
      axios.post("http://localhost:8081/bbs/add", body)
      this.$message.success("提交成功!")
      this.addShow = false
      this.$router.go(0)
    },
    deleteInfo(row) {
      axios.post("http://localhost:8081/bbs/delete/" + row.id)
      this.key++
      this.$message.success("删除成功!")
      this.$router.go(0)
      
    },
    update(row) {
      this.updateshow = true
      this.operatorBody[1].id = row.id
      this.operatorBody[1].author = row.author
      this.operatorBody[1].title = row.title
      this.operatorBody[1].content = row.content
      this.operatorBody[1].addtime = row.addtime

    },
    updateSubmit(row) {
      axios.post("http://localhost:8081/bbs/update", this.operatorBody[1])
      this.$message.success("修改成功!")
      this.updateshow = false
      this.$router.go(0)
    },
    getCurrenttime() {
      var _this = this;
      let yy = new Date().getFullYear();
      let mm = new Date().getMonth() + 1;
      let dd = new Date().getDate();
      let hh = new Date().getHours();
      let mf = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes();
      let ss = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds();
      _this.currentTime = yy + '/' + mm + '/' + dd + ' ' + hh + ':' + mf + ':' + ss;
    }
  },



}  
</script>  