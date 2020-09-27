<template>
  <el-dialog
    fullscreen
    :visible.sync="showCartModal"
    :show-close="false"
    destroy-on-close
  >
    <div slot="title" class="flex-justify">
      <h3>Cart ({{ cartItems.length }} items)</h3>
      <span @click="goBack"
        ><i class="el-icon-close" style="font-weight:bold; font-size:20px;"></i
      ></span>
    </div>
    <div class="container" style="background:whitesmoke;">
      <div class="cartItem" v-for="(item, index) in cartItems" :key="index">
        <el-row :gutter="5">
          <el-col :xs="24" :sm="24" :md="8" :lg="8">
            <div class="flex">
              <span style="margin-right: 10px; width:100px;">
                <img
                  :src="require(`../assets/images/products/${item.image}.png`)"
                  alt="item"
                  width="100%"
                />
              </span>
              <span>
                <b style="font-weight:bold; font-size: 16px">{{ item.name }}</b>
                <br />
                <small style="font-weight:500; font-size: 11px"
                  ><b>GH₵ {{ item.price }}</b></small
                >
                <br />
                <el-button
                  class="btn-text-delete"
                  size="mini"
                  type="text"
                  icon="el-icon-delete"
                  @click="removeCartItem(index)"
                  >Remove</el-button
                >
              </span>
            </div>
          </el-col>
          <el-col :xs="18" :sm="16" :md="8" :lg="8">
            <div class="quantity_input">
              <el-select v-model="item.qty" class="select_input">
                <el-option
                  v-for="q in quantity"
                  :key="q"
                  :label="q"
                  :value="q"
                  @click="quantityChange($event)"
                />
              </el-select>
            </div>
          </el-col>
          <el-col :xs="6" :sm="6" :md="8" :lg="8">
            <div class="quantity_total">
              <el-button type="text" v-model="item.total"
                >GH₵ {{ item.total }}</el-button
              >
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </el-dialog>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Cart",
  data() {
    return {
      showCartModal: true,
      quantity: [1, 2, 3, 4, 5, 6, 7, 8, 10]
    };
  },
  computed: {
    ...mapGetters({
      user: "getUser",
      cartItems: "getCartItems"
    })
  },
  methods: {
    quantityChange(value) {
      console.log(value);
    },
    goBack() {
      this.showCartModal = false;
      this.$router.go(-1);
    }
  }
};
</script>
