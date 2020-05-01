<template>
  <div>
    <div class="flex-justify">
      <h3>Featured Products</h3>
      <el-button type="text">See more</el-button>
    </div>

    <div>
      <div class="flex_space_around">
        <el-card shadow="hover">
          <div>
            <el-button type="success" size="mini" round 
              icon="el-icon-shopping-cart-full" class="add_to_cart_button" plain>
              Add to Cart
            </el-button>
          </div>
          <img src="../../assets/images/products/tomatoes.png" alt="" width="120px;">
          <h4>Fresh Tomatoes</h4>
          <h6><i class="el-icon-success font-size-mini"></i> Available In - 10pcs</h6>
          
          <div class="flex-justify mt-1">
            <el-button size="mini" type="text">GHc10</el-button>
            <el-button size="mini" type="text" class="cancel_text">GHc10</el-button>
          </div>
        </el-card>
       
       <el-card shadow="hover">
          <div>
            <el-button type="success" size="mini" round 
              icon="el-icon-shopping-cart-full" class="add_to_cart_button" plain>
              Add to Cart
            </el-button>
          </div>
          <img src="../../assets/images/products/chicken.png" alt="" width="120px;">
          <h4>Fresh Tomatoes</h4>
          <h6><i class="el-icon-success font-size-mini"></i> Available In - 10pcs</h6>
          
          <div class="flex-justify mt-1">
            <el-button size="mini" type="text">GHc10</el-button>
            <el-button size="mini" type="text" class="cancel_text">GHc10</el-button>
          </div>
        </el-card>

        <el-card shadow="hover">
          <div>
            <el-button type="success" size="mini" round 
              icon="el-icon-shopping-cart-full" class="add_to_cart_button" plain>
              Add to Cart
            </el-button>
          </div>
          <img src="../../assets/images/products/letuce.png" alt="" width="120px;">
          <h4>Fresh Tomatoes</h4>
          <h6><i class="el-icon-success font-size-mini"></i> Available In - 10pcs</h6>
          
          <div class="flex-justify mt-1">
            <el-button size="mini" type="text">GHc10</el-button>
            <el-button size="mini" type="text" class="cancel_text">GHc10</el-button>
          </div>
        </el-card>

        <el-card shadow="hover">
          <div>
            <el-button type="success" size="mini" round 
              icon="el-icon-shopping-cart-full" class="add_to_cart_button" plain>
              Add to Cart
            </el-button>
          </div>
          <img src="../../assets/images/products/egg.png" alt="" width="120px;">
          <h4>Fresh Tomatoes</h4>
          <h6><i class="el-icon-success font-size-mini"></i> Available In - 10pcs</h6>
          
          <div class="flex-justify mt-1">
            <el-button size="mini" type="text">GHc10</el-button>
            <el-button size="mini" type="text" class="cancel_text">GHc10</el-button>
          </div>
        </el-card>

        <el-card shadow="hover">
          <div>
            <el-button type="success" size="mini" round icon="el-icon-shopping-cart-full" plain>
              Add to Cart
            </el-button>
          </div>
          <img src="../../assets/images/products/cocoyam.png" alt="" width="120px;">
          <h4>Fresh Tomatoes</h4>
          <h6><i class="el-icon-success font-size-mini"></i> Available In - 10pcs</h6>
          
          <div class="flex-justify mt-1">
            <el-button size="mini" type="text">GHc10</el-button>
            <el-button size="mini" type="text" class="cancel_text">GHc10</el-button>
          </div>
        </el-card>

        <el-card shadow="hover">
          <div>
            <el-button type="success" size="mini" round 
              icon="el-icon-shopping-cart-full" class="add_to_cart_button" plain>
              Add to Cart
            </el-button>
          </div>
          <img src="../../assets/images/products/meat.png" alt="" width="120px;">
          <h4>Meat (Cow)</h4>
          <h6><i class="el-icon-success font-size-mini"></i> Available In - 1 Pound</h6>
          
          <div class="flex-justify mt-1">
            <el-button size="mini" type="text">GHc12</el-button>
            <el-button size="mini" type="text" class="cancel_text">GHc15</el-button>
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
      featuredProducts: [
        { name: "Fresh Tomatoes", unit: "10 pieces", price: 10, desc: "Tomatoes from Ghana", image: "../../assets/images/products/tomatoes.png"},
        { name: "Fresh Tomatoes", unit: "10 pieces", price: 10, desc: "Tomatoes from Ghana", image: "../../assets/images/products/tomatoes.png"},
        { name: "Fresh Tomatoes", unit: "10 pieces", price: 10, desc: "Tomatoes from Ghana", image: "../../assets/images/products/tomatoes.png"}
      ]
    }
  }
}
</script>
