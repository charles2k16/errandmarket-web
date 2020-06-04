<template>
  <div class="container">
    <div>
      <CategoryTabs />
    </div>

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
      <div class="food_basket_title py-1">
        <h1>Food Baskets</h1>
        <p style="font-size: 15px;" class="mt-1">
          Order for your already packaged food products ready at a go. <br>
          Choose from a variety of preffered ingredients in any food basket you choose. 
        </p>
      </div>
      <div class="row mt-2">
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
import CategoryTabs from "../components/CategoryTabs"

export default {
  name: 'Home',
  components: {
    FeaturedProducts, CategoryTabs
  },
  data () {
    return {
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

<style>
  .col-lg-3:first-child {
    margin-right: 15px;
  }
  .col-lg-3:nth-child(2) {
    margin-right: 15px;
  }
  .col-lg-3:nth-child(3) {
    margin-right: 15px;
  }
</style>
