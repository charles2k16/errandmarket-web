<template>
  <div>
    <el-tabs stretch @tab-click="handleClick" v-model="activeTab">
      <el-tab-pane name="Groceries">
        <div slot="label" class="flex-column">
          <!-- <img
            :src="require(`../assets/images/svg/${product.icon}.svg`)"
            class="image-round"
          /> -->
          <i class="el-icon-grape tab-icons"></i>
          <span>Groceries</span>
        </div>

        <div>
          <router-view />
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "CategoryTabs",
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
      console.log(tab.name);
    }
  }
};
</script>
