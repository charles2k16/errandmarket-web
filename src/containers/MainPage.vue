<template>
  <div>
    <el-container>
      <el-alert
        title="SPECIAL OFFERS! - Get 20% off food packages and groceries more than GHc100"
        type="info"
        show-icon
      >
      </el-alert>
      <NavigationBar />
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>
        <Footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

export default {
  name: "MainPage",
  components: {
    NavigationBar,
    Footer
  }
};
</script>

<style></style>
