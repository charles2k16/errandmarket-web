<template>
  <div>
    <div>
      <img src="../assets/images/banners/meat.png" alt="banner" width="100%" />
    </div>
    <div>
      <FeaturedProducts :items.sync="vegies" />
    </div>
  </div>
</template>

<script>
import FeaturedProducts from "../components/products/FeaturedProducts";

export default {
  name: "Meats",
  components: {
    FeaturedProducts
  },
  data() {
    return {
      vegies: [
        {
          id: "0021",
          name: "Carrots",
          unit: "10 pieces for price",
          price: 4,
          dep_price: 5,
          image: "carrots"
        },
        {
          id: "0025",
          name: "Red Pepper",
          unit: "GH₵2 starting price",
          price: 2,
          dep_price: 0,
          image: "red-pepper"
        },
        {
          id: "0024",
          name: "Garden Eggs",
          unit: "GH₵2 starting price",
          price: 2,
          dep_price: 0,
          image: "garden-eggs"
        },
        {
          id: "00123",
          name: "Letuce",
          unit: "GH₵5 starting price",
          price: 5,
          dep_price: 7,
          image: "letuce"
        },
        {
          id: "00122",
          name: "Onions",
          unit: "GH₵2 starting price",
          price: 2,
          dep_price: 0,
          image: "onions"
        }
      ]
    };
  }
};
</script>
