<template>
  <div>
    <div class="flex-justify">
      <h3>Featured Products</h3>
      <el-button type="text">See more</el-button>
    </div>

    <div>
      <div class="flex-justify">
        <el-card shadow="hover" 
          v-for="(product, index) in featuredProducts" :key="index"
          >
          <div>
            <el-button type="success" size="mini" round 
              icon="el-icon-shopping-cart-full" 
              class="add_to_cart_button" plain
              @click="addToCart(product)"
            >
              Add to Cart
            </el-button>
          </div>
          <img :src="require(`../../assets/images/products/${product.image}.png`)" 
            alt="item" width="120px;" 
            @click="showSingleProduct(product.id)"
          >
          <h4>{{product.name}}</h4>
          <h6><i class="el-icon-success font-size-mini"></i> Available In - {{product.unit}}</h6>
          
          <div class="flex-justify mt-1">
            <el-button size="mini" type="text">GHc{{product.price}}</el-button>
            <el-button size="mini" type="text" class="cancel_text">GHc{{product.dep_price}}</el-button>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeaturedProducts",
  data () {
    return {
      image: "tomatoes",
      featuredProducts: [
        { id: "091", name: "Fresh Tomatoes", unit: "5 per price", price: 10, dep_price: 20, image: "tomatoes"},
        { id: "00120", name: "Letuce", unit: "Pieces", price: 5, dep_price: 7, image: "letuce"},
        { id: "00121", name: "Eggs", unit: "Crates", price: 10, dep_price: 18, image: "egg"},
        { id: "00214", name: "Coco Yam", unit: "Tubers", price: 13, dep_price: 17, image: "cocoyam"},
        { id: "00546", name: "Chicken", unit: "1 pound", price: 14, dep_price: 18, image: "chicken"},
        { id: "0023", name: "Meat", unit: "1 pound", price: 12, dep_price: 17, image: "meat"},
      ]
    }
  },
  methods: {
    addToCart (product) {
      this.$store.dispatch('addItemToCart', product)
    },
    showSingleProduct (id) {
      console.log(id)
    }
  }
}
</script>
