<template>
  <div class="container">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
      <el-breadcrumb-item>Cart</el-breadcrumb-item>
    </el-breadcrumb>

    <h2 class="mt-2">Cart (4 items)</h2>

    <div>
      <el-table :data="tableData">
        <el-table-column
          prop="name"
          label="Item"
          >
        </el-table-column>
        <el-table-column
          prop="price"
          label="Price"
          >
        </el-table-column>
        <el-table-column
          prop="quantity"
          label="Quantity">
        </el-table-column>

        <el-table-column
          prop="total"
          label="Total">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Cart',
  data () {
    return {
      tableData: []
    }
  },
  computed: {
    ...mapGetters({
      user: 'getUser',
      cartItems: 'getCartItems'
    })
  },
  created () {
    this.tableData = this.cartItems
  }
}
</script>