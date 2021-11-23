<template>
  <div class="main">
    <el-form ref="form" :model="form" :inline="true">
      <el-form-item label="关键词">
        <el-input v-model="form.search_content" />
      </el-form-item>
      <el-form-item label="代理商状态">
        <el-select v-model="form.status" placeholder="代理商状态">
          <el-option label="请选择" value="" />
          <el-option label="正常" :value="1" />
          <el-option label="冻结" :value="2" />
        </el-select>
      </el-form-item>
      <el-form-item label="审核状态">
        <el-select v-model="form.audit_status" placeholder="审核状态">
          <el-option label="请选择" value="" />
          <el-option label="待审批" :value="0" />
          <el-option label="审批通过" :value="1" />
          <el-option label="己拒绝" :value="2" />
        </el-select>
      </el-form-item>
      <el-button type="primary" icon="el-icon-search" size="small">搜索</el-button>
      <el-button type="primary" icon="el-icon-plus" size="small" @click="add">添加代理商</el-button>
    </el-form>

    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="ID" width="80" align="center" sortable="custom" />
      <el-table-column prop="agency_name" label="代理商名称" min-width="200px" />
      <el-table-column prop="uscc" label="统一社会信用代码" width="180" />
      <el-table-column prop="address" label="地址" />
      <el-table-column prop="status" label="代理商状态" width="120" align="center">
        <template slot-scope="{row}">
          <el-tag v-if="row.status === 1">正常</el-tag>
          <el-tag v-else type="info">冻结</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="audit_status" label="审核状态" width="120" align="center">
        <template slot-scope="{row}">
          <el-tag :type="row.audit_status | filterStatusColor">{{ row.status | filterStatus }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="created" label="创建时间" width="150px" align="center" />
      <el-table-column label="操作" align="center" width="210">
        <template slot-scope="{row, $index}">
          <el-button size="mini">详情</el-button>
          <el-button type="success" size="mini">通过</el-button>
          <el-button type="danger" size="mini">拒绝</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pages">
      <el-pagination
        :current-page="pages.page"
        :page-sizes="[100, 300, 500, 800]"
        :page-size="pages.number"
        layout="total, sizes, prev, pager, next, jumper"
        background
        :total="pages.total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    filterStatus(value) {
      switch (value) {
        case 0:
          return `待审批`
        case 1:
          return `审批通过`
        case 2:
          return `己拒绝`
      }
    },

    filterStatusColor(value) {
      switch (value) {
        case 0:
          return `warning`
        case 1:
          return `success`
        case 2:
          return `danger`
      }
    }
  },
  data() {
    return {
      form: {
        search_content: '',
        status: '',
        audit_status: ''
      },
      pages: {
        page: 1,
        number: 10,
        total: 1000
      },
      tableData: [{
        agency_name: '2016-05-02',
        name: '王小虎',
        status: 1,
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    add() {
      this.$router.push('/agent/add')
    },

    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },

    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
