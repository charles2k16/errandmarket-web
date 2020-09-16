<template>
  <div>
    <div>
      <img src="../assets/images/banners/grocery.png" alt="" width="100%" />
    </div>
    <div>
      <FeaturedProducts :items.sync="groceries" />
    </div>

    <!-- <div class="mt-2">
      <div class="food_basket_title py-1">
        <h1>Food Baskets</h1>
        <p style="font-size: 15px;" class="mt-1">
          Order for your already packaged food products ready at a go. <br />
          Choose from a variety of preffered ingredients in any food basket you
          choose.
        </p>
      </div>
      <div class="row mt-2">
        <div
          class="col-lg-3 col-md-6 col-sm-6"
          v-for="(food, index) in foodBaskets"
          :key="index"
        >
          <div
            :class="
              `food_basket_boxes flex-column-justify py-1 ${food.bgColor}`
            "
          >
            <div style="color:white;">
              <h2>{{ food.name }}</h2>
              <p>{{ food.num_ingredients }} selective ingredients</p>
              <br />
              <p>Min Price</p>
              <h2>GHc {{ food.price }}</h2>
            </div>

            <div>
              <img
                src="../assets/images/products/groceries.png"
                alt=""
                width="150px"
              />
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import FeaturedProducts from "../components/products/FeaturedProducts";

export default {
  name: "Groceries",
  components: {
    FeaturedProducts
  },
  data() {
    return {
      groceries: [
        {
          id: "091",
          name: "Fresh Tomatoes",
          unit: "GH₵2 starting price",
          price: 10,
          dep_price: 20,
          image: "tomatoes"
        },
        {
          id: "00120",
          name: "Onions",
          unit: "GH₵5 starting price",
          price: 5,
          dep_price: 7,
          image: "onions"
        },
        {
          id: "00121",
          name: "Eggs",
          unit: "GH₵10 for a crate",
          price: 10,
          dep_price: 18,
          image: "egg"
        },
        {
          id: "00214",
          name: "Coco Yam",
          unit: "Available in tubers",
          price: 12,
          dep_price: 17,
          image: "cocoyam"
        },
        {
          id: "00546",
          name: "Chicken",
          unit: "GH₵6 for half a pound",
          price: 12,
          dep_price: 18,
          image: "chicken"
        },
        {
          id: "0023",
          name: "Meat",
          unit: "1 pound",
          price: 12,
          dep_price: 17,
          image: "meat"
        },
        {
          id: "00214",
          name: "Coco Yam",
          unit: "Tubers",
          price: 13,
          dep_price: 17,
          image: "cocoyam"
        },
        {
          id: "00546",
          name: "Chicken",
          unit: "1 pound",
          price: 14,
          dep_price: 18,
          image: "chicken"
        },
        {
          id: "0023",
          name: "Meat",
          unit: "1 pound",
          price: 12,
          dep_price: 17,
          image: "meat"
        },
        {
          id: "00120",
          name: "Letuce",
          unit: "Pieces",
          price: 5,
          dep_price: 7,
          image: "letuce"
        },
        {
          id: "00121",
          name: "Eggs",
          unit: "Crates",
          price: 10,
          dep_price: 18,
          image: "egg"
        },
        {
          id: "00546",
          name: "Chicken",
          unit: "1 pound",
          price: 14,
          dep_price: 18,
          image: "chicken"
        },
        {
          id: "0023",
          name: "Meat",
          unit: "1 pound",
          price: 12,
          dep_price: 17,
          image: "meat"
        },
        {
          id: "00546",
          name: "Chicken",
          unit: "1 pound",
          price: 14,
          dep_price: 18,
          image: "chicken"
        },
        {
          id: "0023",
          name: "Meat",
          unit: "1 pound",
          price: 12,
          dep_price: 17,
          image: "meat"
        },
        {
          id: "091",
          name: "Fresh Tomatoes",
          unit: "5 per price",
          price: 10,
          dep_price: 20,
          image: "tomatoes"
        },
        {
          id: "00120",
          name: "Letuce",
          unit: "Pieces",
          price: 5,
          dep_price: 7,
          image: "letuce"
        },
        {
          id: "00121",
          name: "Eggs",
          unit: "Crates",
          price: 10,
          dep_price: 18,
          image: "egg"
        }
      ],
      foodBaskets: [
        {
          name: "Groundnut Soup",
          num_ingredients: 13,
          price: 20,
          bgColor: "bg_light_green"
        },
        {
          name: "Light Soup",
          num_ingredients: 13,
          price: 25,
          bgColor: "bg_light_orange"
        },
        {
          name: "Kontomire Soup",
          num_ingredients: 12,
          price: 15,
          bgColor: "bg_green"
        },
        {
          name: "Okro/Okra Soup",
          num_ingredients: 15,
          price: 20,
          bgColor: "bg_light_red"
        }
      ]
    };
  }
};
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
