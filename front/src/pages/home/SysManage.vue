<template>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="SysChineseName"
        label="系统中文名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="SysEnglishName"
        label="系统英文名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="SysAddress"
        label="URL地址">
      </el-table-column>
    </el-table>
  </template>

  <script>
    export default {
      name: 'SysManage',
      data() {
        return {
          tableData: [{
            SysChineseName: '百度',
            SysEnglishName: 'Baidu',
            SysAddress: 'www.baidu.com'
          }, ]
        }
      }
    }
  </script>

  <style></style>