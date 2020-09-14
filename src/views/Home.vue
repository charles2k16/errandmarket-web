<template>
  <div class="container">
    <div class="tab-margin">
      <el-tabs stretch @tab-click="handleClick" v-model="activeTab">
        <el-tab-pane
          v-for="product in productCategories"
          :key="product.name"
          :name="product.name"
        >
          <div slot="label" class="flex-column">
            <!-- <img
            :src="require(`../assets/images/svg/${product.icon}.svg`)"
            class="image-round"
          /> -->
            <i :class="product.icon" class="tab-icons"></i>
            <span>{{ product.name }}</span>
          </div>

          <div>
            <router-view />
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      activeTab: "Groceries",
      productCategories: [
        { name: "Groceries", icon: "el-icon-grape", route: "/vegetables" },
        { name: "Fruits & Vegs", icon: "el-icon-apple", route: "/vegetables" },
        { name: "Meats", icon: "el-icon-chicken", route: "/fruits" },
        { name: "Tubers", icon: "el-icon-cherry", route: "/tubers" },
        { name: "Food Baskets", icon: "el-icon-dish-1", route: "/vegetables" },
        { name: "Canned Foods", icon: "el-icon-box", route: "/vegetables" }
      ]
    };
  },
  methods: {
    handleClick(tab) {
      this.$router.push({ name: tab.name });
      console.log(tab.name);
    }
  }
};
</script>
