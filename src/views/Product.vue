<template>
  <div class="container" style="background:white;">
    <div class="py-2 px-2">
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="12">
          <div>
            <el-carousel :interval="5000" arrow="always">
              <el-carousel-item class="p-2" style="text-align:center;">
                <img
                  style="text-align:center;"
                  src="../assets/images/products/tomatoes.png"
                  alt="item"
                  width="70%"
                />
              </el-carousel-item>
            </el-carousel>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12">
          <div>
            <h2>Fresh Tomatoes</h2>
            <div class="flex mb-1">
              <el-rate v-model="rateValue" disabled text-color="#6c9804">
              </el-rate>
              <span class="">(3 customer review)</span>
            </div>
            <hr style="border: 1px dotted rgb(250, 249, 249);" />
            <div class="flex">
              <el-button type="text" class="cancel_text">GH₵ 20</el-button>
              <el-button type="text">
                <span style="font-size: 25px;">GH₵ 10</span>
              </el-button>
            </div>
            <div>
              <p class="mb-2">
                Donec non est at libero vulputate rutrum. Morbi ornare lectus
                quis justo gravida semper. Nulla tellus mi, vulputate adipiscing
                cursus eu, suscipit id nulla. Donec a neque libero.
              </p>
              <el-button
                type="primary"
                icon="el-icon-shopping-cart-full"
                size="medium"
                class="full-width"
                >ADD TO CART</el-button
              >
            </div>

            <div class="mt-2">
              <hr style="border: 1px dotted rgb(250, 249, 249);" />
              <ul class="mt-1 mb-2" style="font-size: 9px;">
                <li>Free Delivery for Items GH₵ 100 and above.</li>
                <li>Discount on Food Packages</li>
              </ul>
              <div class="flex-justify">
                <div>
                  <p>Share this product</p>
                  <span>
                    <a href="" class="mr-1">
                      <img
                        src="../assets/images/instagram.png"
                        alt="icon"
                        width="20"
                      />
                    </a>
                    <a href="" class="mr-1">
                      <img
                        src="../assets/images/facebook.png"
                        alt="icon"
                        width="20"
                      />
                    </a>
                    <a href="">
                      <img
                        src="../assets/images/whatsapp.png"
                        alt="icon"
                        width="20"
                      />
                    </a>
                  </span>
                </div>
                <div>
                  <p>Add to your saved products</p>
                  <span>
                    <el-button plain size="mini" icon="el-icon-collection-tag"
                      >Add to saved</el-button
                    >
                  </span>
                </div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="10" class="mt-3">
        <el-col :xs="24" :sm="24" :md="24">
          <el-tabs type="card" stretch class="details-tab">
            <el-tab-pane label="Description" class="details-tab">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                fringilla augue nec est tristique auctor. Donec non est at
                libero vulputate rutrum. Morbi ornare lectus quis justo gravida
                semper. Nulla tellus mi, vulputate adipiscing cursus eu,
                suscipit id nulla. Donec a neque libero. Pellentesque aliquet,
                sem eget laoreet ultrices, ipsum metus feugiat sem, quis
                fermentum turpis eros eget velit. Donec ac tempus ante. Fusce
                ultricies massa massa. Mauris vel tellus non nunc mattis
                lobortis. vulputate adipiscing cursus eu, suscipit id nulla.
                Donec a neque libero. Pellentesque aliquet, sem eget laoreet
                ultrices, ipsum metus feugiat sem, quis fermentum turpis eros
                eget velit. Donec ac tempus ante.
              </p>
            </el-tab-pane>
            <el-tab-pane label="Additional Info">
              <p>No information on this product</p>
            </el-tab-pane>
            <el-tab-pane label="Reviews">
              <p>No reviews yet</p>
            </el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>

      <div class="mt-3">
        <h3>Find Related Items</h3>
        <div class="mt-2">
          <RelatedProducts />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RelatedProducts from "../components/products/RelatedProducts";

export default {
  name: "ProductSingle",
  components: {
    RelatedProducts
  },
  data() {
    return {
      rateValue: 3,
      dialogVisible: true
    };
  },
  created() {
    console.log(this.$route.params.id);
  },
  methods: {
    goBack() {
      this.$router.push("./-1");
    }
  }
};
</script>
