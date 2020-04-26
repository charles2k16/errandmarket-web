<template>
  <el-header>
    <div class="container flex-justify">
      <span class="logo">Errand Market</span>
      <el-input
        style="width:40%;"
        class="search-input"
        placeholder="Search from all our food stuffs and packages"
        v-model="search">
        <template slot="append">
          <el-button
            icon="el-icon-search"
          />
        </template>
      </el-input>
      <div class="flex">
        <el-badge :value="3" :max="99">
          <el-button icon="el-icon-shopping-cart-full" circle size="small"></el-button>
        </el-badge>
        <el-dropdown trigger="click" class="ml-2">
          <span class="el-dropdown-link theme-text">
            Hi, Charles<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown" id="m-0">
            <el-dropdown-item icon="el-icon-user" id="px-1">Account Settings</el-dropdown-item>
            <el-dropdown-item icon="el-icon-shopping-cart-full" id="px-1">Your Cart</el-dropdown-item>
            <hr>
            <el-dropdown-item icon="el-icon-switch-button" id="px-1">Logout</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </el-header>
</template>

<script>
export default {
  name: 'NavigationBar',
  data () {
    return {
      search: ''
    }
  }
}
</script>
