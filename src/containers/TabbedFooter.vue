<template>
  <div class="container">
    <el-tabs
      tab-position="bottom"
      stretch
      @tab-click="handleClick"
      v-model="activeTab"
      class="hidden-md-and-up footer-tab"
    >
      <el-tab-pane name="Home">
        <div slot="label" class="flex-column">
          <i class="el-icon-s-home footer-tab-icon"></i>
          <span class="tb-text">Home</span>
        </div>
      </el-tab-pane>
      <el-tab-pane name="Cart">
        <div slot="label" class="flex-column">
          <el-badge
            :value="numberOfItems"
            :max="5"
            :hidden="hasNoItem"
            class="item"
          >
            <i class="el-icon-shopping-cart-full footer-tab-icon"></i>
          </el-badge>
          <span class="tb-text" style="margin-top: -12px;">Cart</span>
        </div>
      </el-tab-pane>
      <el-tab-pane name="Saved">
        <div slot="label" class="flex-column">
          <i class="el-icon-collection-tag footer-tab-icon"></i>
          <span class="tb-text">Saved</span>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TabbedFooter",
  data() {
    return {
      activeTab: "Home",
      numberOfItems: 0,
      hasNoItem: true,
      itemsInCart: []
    };
  },
  computed: {
    ...mapGetters({
      user: "getUser",
      isLoggedIn: "isLoggedIn",
      cartItems: "getCartItems"
    })
  },
  watch: {
    cartItems: function() {
      this.getCartItems();
    }
  },
  created() {
    this.getCartItems();
  },
  methods: {
    getCartItems() {
      if (this.cartItems.length > 0) {
        this.itemsInCart = this.cartItems;
        this.numberOfItems = this.cartItems.length;
        this.hasNoItem = false;
      } else {
        this.itemsInCart = [];
        this.numberOfItems = 0;
        this.hasNoItem = true;
      }
    }
  }
};
</script>
