<template>
  <el-header class="sticky-header">
    <el-row :gutter="10">
      <el-col :xs="7" :sm="6" :md="4">
        <div class="logo-wrapper">
          <router-link to="/groceries">
            <img
              src="../assets/images/errand market.gif"
              alt="logo"
              class="logo"
            />
          </router-link>
          <!-- <span class="logo mr-3">Errand Market</span> -->
          <span class="hidden-md-and-down ">
            <img
              src="../assets/images/ghana.png"
              alt="ghana icon"
              class="ghana-icon"
            />
          </span>
        </div>
      </el-col>

      <el-col :xs="14" :sm="15" :md="16">
        <div>
          <el-input
            placeholder="Search from all our food stuffs and packages"
            prefix-icon="el-icon-search"
            v-model="search"
          >
          </el-input>
        </div>
      </el-col>
      <el-col :xs="3" :sm="3" :md="4">
        <div class="flex">
          <el-dropdown trigger="click" class="hidden-sm-and-down nav-icons">
            <el-badge :value="numberOfItems" :max="5" :hidden="hasNoItem">
              <el-button icon="el-icon-shopping-cart-full" circle size="mini" />
            </el-badge>
            <el-dropdown-menu slot="dropdown" class="menu-scroller m-0">
              <div id="cartDropdown" v-if="itemsInCart > 0">
                <div
                  id="cartItem"
                  v-for="(item, index) in itemsInCart"
                  :key="index"
                >
                  <div>
                    <img
                      :src="
                        require(`../assets/images/products/${item.image}.png`)
                      "
                      alt="item"
                      width="80px;"
                    />
                  </div>

                  <div>
                    <li>{{ item.name }}</li>
                    <li>qty: {{ item.qty }}</li>
                    <li>GH₵ {{ item.price }}</li>
                  </div>
                  <div>
                    <el-button
                      type="text"
                      icon="el-icon-delete"
                      @click="removeCartItem(index)"
                    />
                  </div>
                </div>
                <div class="flex-justify px-1">
                  <h5>SUBTOTAL:</h5>
                  <h5>110.00</h5>
                </div>
                <div class="flex-justify mt-2">
                  <router-link to="/cart">
                    <el-button size="mini" type="primary">View Cart</el-button>
                  </router-link>
                  <router-link to="/checkout">
                    <el-button size="mini" type="primary">Checkout</el-button>
                  </router-link>
                </div>
              </div>

              <div id="cartDropdown" v-else>
                <p>No items in cart</p>
              </div>
            </el-dropdown-menu>
          </el-dropdown>
          <div class="hidden-xs-only nav-icons">
            <el-button icon="el-icon-collection-tag" circle size="mini" />
          </div>
          <el-dropdown trigger="click" class="nav-icons">
            <el-badge is-dot>
              <el-button icon="el-icon-user-solid" circle size="mini" />
            </el-badge>

            <el-dropdown-menu slot="dropdown" class="m-0">
              <el-dropdown-item icon="el-icon-user" id="px-1"
                >Account Settings</el-dropdown-item
              >
              <el-dropdown-item icon="el-icon-shopping-cart-full" id="px-1"
                >Your Cart</el-dropdown-item
              >
              <hr />
              <el-dropdown-item icon="el-icon-switch-button" id="px-1"
                >Logout</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
    </el-row>
  </el-header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "NavigationBar",
  data() {
    return {
      search: "",
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

<style>
#cartDropdown {
  margin-top: -10px;
  padding: 1px;
  max-width: 500px !important;
  max-height: 350px !important;
  overflow-y: scroll !important;
}
#cartItem {
  display: flex;
  cursor: pointer;
  padding: 7px;
}
#cartItem:hover {
  background-color: aliceblue;
}
#cartItem div:nth-of-type(1) {
  flex-grow: 0;
  max-width: 40%;
  border: 1px solid rgb(219, 217, 217);
}
#cartItem div:nth-of-type(2) {
  flex-grow: 2;
  max-width: 52%;
  margin-left: 20px;
}
#cartItem div:nth-of-type(3) {
  flex-grow: 0;
  max-width: 8%;
  margin-left: 20px;
}
</style>
