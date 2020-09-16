<template>
  <el-dialog
    fullscreen
    :visible.sync="showCartModal"
    :show-close="false"
    destroy-on-close
  >
    <div slot="title" class="flex-justify">
      <h3>Cart ({{ tableData.length }} items)</h3>
      <span @click="goBack"
        ><i class="el-icon-close" style="font-weight:bold; font-size:20px;"></i
      ></span>
    </div>
    <div class="container" style="background:white;">
      <div>
        <br />
        <el-table :data="tableData">
          <el-table-column prop="name" label="Item">
            <template slot-scope="props">
              <div class="flex">
                <span style="margin-right: 10px;">
                  <img
                    :src="
                      require(`../assets/images/products/${props.row.image}.png`)
                    "
                    alt="item"
                    width="85px;"
                  />
                </span>
                <span>
                  <b style="font-weight:bold; font-size: 16px">{{
                    props.row.name
                  }}</b>
                  <br />
                  <small style="font-weight:500; font-size: 11px"
                    ><b>GH₵ {{ props.row.price }}</b></small
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
            </template>
          </el-table-column>
          <el-table-column prop="quantity" label="Quantity">
            <template slot-scope="props">
              <el-input-number
                v-model="props.row.qty"
                @change="handleChange($event, props.row)"
                :min="1"
                :max="10"
              ></el-input-number>
            </template>
          </el-table-column>

          <el-table-column prop="total" label="Total">
            <template slot-scope="props">
              <el-button type="text" class=""
                >GH₵ {{ props.row.total }}</el-button
              >
            </template>
          </el-table-column>
        </el-table>
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
      tableData: []
    };
  },
  computed: {
    ...mapGetters({
      user: "getUser",
      cartItems: "getCartItems"
    })
  },
  created() {
    console.log(this.cartItems);
    this.tableData = this.cartItems;
  },
  methods: {
    handleChange(e, item) {
      item.total = e * item.price;
    },
    goBack() {
      this.showCartModal = false;
      this.$router.go(-1);
    }
  }
};
</script>
