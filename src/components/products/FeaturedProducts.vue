<template>
  <div>
    <el-row :gutter="5">
      <el-col
        :xs="12"
        :sm="12"
        :md="6"
        :lg="4"
        :xl="4"
        v-for="(product, index) in items"
        :key="index"
        class="mb-1 itemRow"
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
              height="120px;"
              style="text-align:center;"
            />

            <h4>{{ product.name }}</h4>
            <h6>
              <i class="el-icon-success font-size-mini"></i> {{ product.unit }}
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
  </div>
</template>

<script>
export default {
  name: "FeaturedProducts",
  props: {
    items: Array
  },
  data() {
    return {
      showProductModal: false
    };
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch("addItemToCart", product);
    },
    showProduct(product) {
      this.$router.push({
        query: { name: product.name, item: product },
        path: `./item/${product.id}`
      });
    }
  }
};
</script>
