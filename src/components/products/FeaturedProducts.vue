<template>
  <div>
    <el-row :gutter="5">
      <el-col
        :xs="12"
        :sm="12"
        :md="6"
        :lg="4"
        :xl="4"
        v-for="(product, index) in topProducts"
        :key="index"
        class="mb-1"
      >
        <el-card>
          <div class="flex_space_around mt-1">
            <i
              class="el-icon-shopping-cart-full product-icon"
              @click="addToCart(product)"
            />
            <i class="el-icon-collection-tag product-icon" />
            <i class="el-icon-share product-icon" />
          </div>
          <div @click="showProduct(product)">
            <img
              :src="
                require(`../../assets/images/products/${product.image}.png`)
              "
              alt="item"
              width="150px;"
              style="text-align:center;"
            />

            <h4>{{ product.name }}</h4>
            <h6>
              <i class="el-icon-success font-size-mini"></i> Available In Stocks
            </h6>

            <div class="flex-justify mt-1">
              <el-button size="mini" type="text"
                >GH₵ {{ product.price }}</el-button
              >
              <el-button size="mini" type="text" class="cancel_text"
                >GH₵ {{ product.dep_price }}</el-button
              >
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-dialog
      fullscreen
      :visible.sync="dialogVisible"
      :show-close="false"
      destroy-on-close
    >
      <div slot="title" class="flex-justify">
        <h3>User Product</h3>
        <span @click="dialogVisible = false"
          ><i
            class="el-icon-close"
            style="font-weight:bold; font-size:20px;"
          ></i
        ></span>
      </div>
      <Product />
    </el-dialog>
  </div>
</template>

<script>
import Product from "./Product";

export default {
  name: "FeaturedProducts",
  components: {
    Product
  },
  data() {
    return {
      dialogVisible: false,
      topProducts: [
        {
          id: "091",
          name: "Fresh Tomatoes",
          unit: "5 per price",
          price: 10,
          dep_price: 20,
          image: "tomatoes"
        },
        {
          id: "00120",
          name: "Letuce",
          unit: "Pieces",
          price: 5,
          dep_price: 7,
          image: "letuce"
        },
        {
          id: "00121",
          name: "Eggs",
          unit: "Crates",
          price: 10,
          dep_price: 18,
          image: "egg"
        },
        {
          id: "00214",
          name: "Coco Yam",
          unit: "Tubers",
          price: 13,
          dep_price: 17,
          image: "cocoyam"
        },
        {
          id: "00546",
          name: "Chicken",
          unit: "1 pound",
          price: 14,
          dep_price: 18,
          image: "chicken"
        },
        {
          id: "0023",
          name: "Meat",
          unit: "1 pound",
          price: 12,
          dep_price: 17,
          image: "meat"
        },
        {
          id: "00214",
          name: "Coco Yam",
          unit: "Tubers",
          price: 13,
          dep_price: 17,
          image: "cocoyam"
        },
        {
          id: "00546",
          name: "Chicken",
          unit: "1 pound",
          price: 14,
          dep_price: 18,
          image: "chicken"
        },
        {
          id: "0023",
          name: "Meat",
          unit: "1 pound",
          price: 12,
          dep_price: 17,
          image: "meat"
        },
        {
          id: "00120",
          name: "Letuce",
          unit: "Pieces",
          price: 5,
          dep_price: 7,
          image: "letuce"
        },
        {
          id: "00121",
          name: "Eggs",
          unit: "Crates",
          price: 10,
          dep_price: 18,
          image: "egg"
        },
        {
          id: "00546",
          name: "Chicken",
          unit: "1 pound",
          price: 14,
          dep_price: 18,
          image: "chicken"
        },
        {
          id: "0023",
          name: "Meat",
          unit: "1 pound",
          price: 12,
          dep_price: 17,
          image: "meat"
        },
        {
          id: "00546",
          name: "Chicken",
          unit: "1 pound",
          price: 14,
          dep_price: 18,
          image: "chicken"
        },
        {
          id: "0023",
          name: "Meat",
          unit: "1 pound",
          price: 12,
          dep_price: 17,
          image: "meat"
        },
        {
          id: "091",
          name: "Fresh Tomatoes",
          unit: "5 per price",
          price: 10,
          dep_price: 20,
          image: "tomatoes"
        },
        {
          id: "00120",
          name: "Letuce",
          unit: "Pieces",
          price: 5,
          dep_price: 7,
          image: "letuce"
        },
        {
          id: "00121",
          name: "Eggs",
          unit: "Crates",
          price: 10,
          dep_price: 18,
          image: "egg"
        }
      ]
    };
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch("addItemToCart", product);
    },
    showProduct(product) {
      this.dialogVisible = true;
      this.$router.push({
        query: { item: product.name }
      });
    }
  }
};
</script>
