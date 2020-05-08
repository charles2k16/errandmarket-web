<template>
  <div>
    <el-page-header @back="goBack" content="detail" />
    
  </div>
</template>

<script>
export default {
  name: 'ProductSingle',
  data () {
    return {
      goBack: "./-1"
    }
  }
}
</script>