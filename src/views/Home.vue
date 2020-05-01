<template>
  <div class="container">
    <el-tabs>
      <el-tab-pane v-for="product in productCategories" :key="product.name">
        <div slot="label" class="flex-column"> 
          <img :src="product.icon" class="image-round">
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

    <div>
      
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
        { name: 'Vegetables', icon: "../assets/svg/vegetables.svg", route: '/vegetables' },
        { name: 'Fruits', icon: '/img/fruits.fd4a0d34.svg', route: '/fruits' },
        { name: 'Tubers', icon: '/img/tuber.f5edc489.svg', route: '/tubers' },
        { name: 'Chicken', icon: '/img/chicken.050cb940.svg', route: '/vegetables' },
        { name: 'Canned Foods', icon: '/img/tuna.90b3ff60.svg', route: '/vegetables' },
        { name: 'Grains', icon: '/img/grains.39e6cd3b.svg', route: '/vegetables' },
        { name: 'Cereals', icon: '/img/cereal.593e83fc.svg', route: '/vegetables' },
        { name: 'Meats', icon: '/img/meat.06526ab4.svg', route: '/meats' },
        { name: 'fish', icon: '/img/fish.fda1583d.svg', route: '/fish' },
        { name: 'Food Packages', icon: '/img/packages.1b95e94a.svg', route: '/fish' },
      ],
      banners: [
        {image: "../assets/banners/banner1.png"},
        {image: "../assets/banners/banner1.png"}
      ]
    }
  }
}
</script>
