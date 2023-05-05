<template>
  <div class="pages">
    <el-pagination
      :current-page="pages.page"
      :page-sizes="pageSizes"
      :page-size="pages.page_size"
      layout="total, sizes, prev, pager, next, jumper"
      background
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>
<script>
export default {
  props: {
    total: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      pageSizes: [10, 50, 100, 300, 500],
      pages: {
        page: 1,
        page_size: 10
      }
    }
  },
  methods: {
    handleSizeChange(val) {
      this.pages.page_size = val
      this.$emit('handleSizeChange', this.pages)
      // console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      this.pages.page = val
      this.$emit('handleCurrentChange', this.pages)
      // console.log(`当前页: ${val}`)
    }
  }
}
</script>
