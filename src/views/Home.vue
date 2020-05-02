<template>
  <div class="container">
    <el-tabs>
      <el-tab-pane v-for="product in productCategories" :key="product.name">
        <div slot="label" class="flex-column"> 
          <img :src="require(`../assets/images/svg/${product.icon}.svg`)" class="image-round">
          <span>{{product.name}}</span>
        </div>
      </el-tab-pane>
    </el-tabs>

    <div>
      <el-carousel trigger="click">
      <el-carousel-item>
        <img src="../assets/images/banners/grain.jpeg">
      </el-carousel-item>
      <el-carousel-item>
        <img src="../assets/images/banners/meat_banner.jpeg">
      </el-carousel-item>
    </el-carousel>
    </div>

    <div class="mt-2">
      <FeaturedProducts />
    </div>

    <div class="mt-2">
      <img src="../assets/images/banners/healthy.jpg" alt="" width="600px;">
      <div style="text-align:center;">
        <h2>Food Baskets</h2>
        <p>ddfff</p>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-6" v-for="(food, index) in foodBaskets" :key="index">
          <div :class="`food_basket_boxes flex-column-justify py-1 ${food.bgColor}`">
            <div style="color:white;">
              <h2>{{food.name}}</h2>
              <p>{{food.num_ingredients}} selective ingredients</p>
              <br>
              <p>Min Price</p>
              <h2>GHc {{food.price}}</h2>
            </div>

            <div>
              <img src="../assets/images/products/groceries.png" alt="" width="150px">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FeaturedProducts from "../components/products/FeaturedProducts"
export default {
  name: 'Home',
  components: {
    FeaturedProducts
  },
  data () {
    return {
      productCategories: [
        { name: 'Vegetables', icon: "vegetables", route: '/vegetables' },
        { name: 'Fruits', icon: 'fruits', route: '/fruits' },
        { name: 'Tubers', icon: 'tuber', route: '/tubers' },
        { name: 'Chicken', icon: 'chicken', route: '/vegetables' },
        { name: 'Canned Foods', icon: 'tuna', route: '/vegetables' },
        { name: 'Grains', icon: 'grains', route: '/vegetables' },
        { name: 'Cereals', icon: 'cereal', route: '/vegetables' },
        { name: 'Meats', icon: 'meat', route: '/meats' },
        { name: 'fish', icon: 'fish', route: '/fish' },
        { name: 'Food Baskets', icon: 'packages', route: '/fish' },
      ],
      foodBaskets: [
        { name: 'Groundnut Soup', num_ingredients: 13, price: 20, bgColor: 'bg_light_green' },
        { name: 'Light Soup', num_ingredients: 13, price: 25, bgColor: 'bg_light_orange' },
        { name: 'Kontomire Soup', num_ingredients: 12, price: 15, bgColor: 'bg_green' },
        { name: 'Okro/Okra Soup', num_ingredients: 15, price: 20, bgColor: 'bg_light_red' }
      ]
    }
  }
}
</script>
