<template>
  <el-header class="sticky">
    <div class="mx-2 flex-justify">
      <div>
        <span class="logo mr-3">Errand Market</span>
        <span class="font-bold-2"><el-button icon="el-icon-location" circle style="margin-right:2px; padding:2px;" size="mini"/>
          Greater Accra
        </span>
      </div>
      <el-input
        style="width:50%;"
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
        <el-dropdown trigger="click">
          <el-badge :value="numberOfItems" :max="5" :hidden="hasNoItem">
            <el-button icon="el-icon-shopping-cart-full" circle size="small"/>
          </el-badge>
          <el-dropdown-menu slot="dropdown" id="m-0" class="menu-scroller">
            <div id="cartDropdown">
              <div v-for="(item, index) in itemsInCart" :key="index">
                <li>{{item.name}}</li>
                <li>{{item.price}}</li>
                <el-button icon="el-icon-delete" @click="removeCartItem(index)"/>
              </div>
            </div>
          </el-dropdown-menu>
        </el-dropdown>
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
import { mapGetters } from "vuex";

export default {
  name: 'NavigationBar',
  data () {
    return {
      search: '',
      numberOfItems: 0,
      hasNoItem: true,
      itemsInCart: []
    }
  },
  computed: {
    ...mapGetters({
      user: 'getUser',
      isLoggedIn: 'isLoggedIn',
      cartItems: 'getCartItems'
    })
  },
  watch: {
    cartItems: function () {
      this.getCartItems()
    }
  },
  created () {
    this.getCartItems()
  },
  methods: {
    getCartItems () {
      if (this.cartItems.length > 0) {
        this.itemsInCart = this.cartItems 
        this.numberOfItems = this.cartItems.length
        this.hasNoItem = false
      } else {
        this.itemsInCart = []
        this.numberOfItems = 0
        this.hasNoItem = true
      }
    },
    removeCartItem (i) {
      this.$store.dispatch('removeItemFromCart', i)
    }
  }
}
</script>

<style>
  #cartDropdown {
    font-family: 'Montserrat', sans-serif;
    margin-top:-10px;
    width: 400px !important;
    max-height: 450px !important;
    overflow-y: scroll !important;
  }
</style>
