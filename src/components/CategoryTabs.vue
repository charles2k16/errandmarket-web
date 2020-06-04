<template>
  <div>
    <el-tabs>
      <el-tab-pane v-for="product in productCategories" :key="product.name">
        <div slot="label" class="flex-column"> 
          <img :src="require(`../assets/images/svg/${product.icon}.svg`)" class="image-round">
          <span>{{product.name}}</span>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'CategoryTabs',
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
    }
  }
}
</script>