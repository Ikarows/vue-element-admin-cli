<template>
  <div class="main">
    <el-form ref="form" :model="form" class="form" label-width="150px">
      <el-form-item label="代理商名称">
        <el-input v-model="form.agency_name" />
      </el-form-item>
      <el-form-item label="统一社会信用代码">
        <el-input v-model="form.uscc" />
      </el-form-item>
      <el-form-item label="代理区域">
        <el-cascader
          v-model="form.agency_text"
          size="large"
          :options="options"
          @change="handleChange"
        />
      </el-form-item>
      <el-form-item label="详细地址">
        <el-input v-model="form.address" type="textarea" />
      </el-form-item>
      <el-form-item v-for="(item, index) in territory" :key="index" :label="index === 0 ? '市场范围' : ''" class="territory">
        <el-cascader
          v-model="territory[index]"
          size="large"
          :options="options"
          @change="handleChange"
        />
        <el-button v-if="territory.length === index + 1" type="primary" icon="el-icon-plus" circle class="btn" @click="addTerritory" />
        <el-button v-else type="danger" icon="el-icon-delete" circle class="btn" @click="delTerritory" />
      </el-form-item>

      <el-button type="primary" class="submit" @click="onSubmit">提交</el-button>
    </el-form>
  </div>
</template>

<script>
import {
  provinceAndCityData,
  regionData,
  provinceAndCityDataPlus,
  regionDataPlus,
  CodeToText,
  TextToCode
} from 'element-china-area-data'
export default {
  data() {
    return {
      territory: [
        []
      ], // 市场范围
      form: {
        agency_name: '', // 代理商名称
        agency_code: '', // 代理区域
        uscc: '', // 统一社会信用代码
        address: '', // 详细地址,
        territory_list: [] // 市场范围
      },
      options: provinceAndCityData
    }
  },
  methods: {
    handleChange(value) {
      console.log(value)
    },

    addTerritory() {
      this.territory.push([])
    },

    delTerritory() {
      // this.territory
    },

    onSubmit() {
      console.log('form', this.form)
    }
  }
}
</script>

<style lang="scss" scoped>
  .main {

    .form {
      width: 460px;
    }

    .submit {
      margin-left: 80px;
    }

    .territory {
      position: relative;

      .btn {
        position: absolute;
        right: -45px;
      }
    }
  }
</style>
