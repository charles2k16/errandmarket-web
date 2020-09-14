<template>
  <div class="container" style="background:white;">
    <div class="py-2 px-2">
      <span>This is a message</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >Confirm</el-button
        >
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductSingle",
  data() {
    return {
      goBack: "./-1",
      dialogVisible: true
    };
  },
  created() {
    console.log(this.$route.query.name);
  },
  methods: {
    handleClose() {
      this.$router.push("/groceries");
    }
  }
};
</script>
