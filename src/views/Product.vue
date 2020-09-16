<template>
  <el-dialog
    fullscreen
    :visible.sync="showProductModal"
    :show-close="false"
    destroy-on-close
  >
    <div slot="title" class="flex-justify">
      <h3>Product Details</h3>
      <span @click="$router.go(-1)"
        ><i class="el-icon-close" style="font-weight:bold; font-size:20px;"></i
      ></span>
    </div>
    <div class="container" style="background:white;">
      <div class="py-2 px-2">
        <el-row :gutter="10">
          <el-col :xs="24" :sm="24" :md="12">
            <div>
              <el-carousel :interval="5000" arrow="always">
                <el-carousel-item class="p-2" style="text-align:center;">
                  <img
                    style="text-align:center;"
                    :src="
                      require(`../assets/images/products/${item.image}.png`)
                    "
                    alt="item"
                    width="70%"
                  />
                </el-carousel-item>
              </el-carousel>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12">
            <div>
              <h2>{{ item.name }}</h2>
              <div class="flex mb-1">
                <el-rate v-model="rateValue" disabled text-color="#6c9804">
                </el-rate>
                <span class="">(3 customer review)</span>
              </div>
              <hr style="border: 1px dotted rgb(250, 249, 249);" />
              <div class="flex">
                <el-button type="text" class="cancel_text"
                  >GH₵ {{ item.dep_price }}</el-button
                >
                <el-button type="text">
                  <span style="font-size: 25px;">GH₵ {{ item.price }}</span>
                </el-button>
              </div>
              <div>
                <p class="mb-2">
                  Donec non est at libero vulputate rutrum. Morbi ornare lectus
                  quis justo gravida semper. Nulla tellus mi, vulputate
                  adipiscing cursus eu, suscipit id nulla. Donec a neque libero.
                </p>
                <span>
                  <el-button
                    v-show="!showCheckoutButton"
                    type="primary"
                    icon="el-icon-shopping-cart-full"
                    size="medium"
                    class="full-width"
                    @click="addToCart(item)"
                    >ADD TO CART</el-button
                  >
                </span>

                <span>
                  <el-button
                    v-show="showCheckoutButton"
                    type="danger"
                    icon="el-icon-shopping-cart-full"
                    size="medium"
                    class="full-width px-1"
                    @click="checkout"
                    >PROCEED TO CHECKOUT</el-button
                  >
                </span>
              </div>

              <div class="mt-2">
                <hr style="border: 1px dotted rgb(250, 249, 249);" />
                <ul class="mt-1 mb-2 item-discount-info">
                  <li>Free Delivery for Items GH₵ 100 and above.</li>
                  <li>10% Discount on Food Packages</li>
                </ul>
                <div class="flex-justify">
                  <div>
                    <p class="mb-1">Share this product</p>
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
                    <p class="mb-1">Add to your saved products</p>
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
                  libero vulputate rutrum. Morbi ornare lectus quis justo
                  gravida semper. Nulla tellus mi, vulputate adipiscing cursus
                  eu, suscipit id nulla. Donec a neque libero. Pellentesque
                  aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem,
                  quis fermentum turpis eros eget velit. Donec ac tempus ante.
                  Fusce ultricies massa massa. Mauris vel tellus non nunc mattis
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
  </el-dialog>
</template>

<script>
import { mapGetters } from "vuex";
import RelatedProducts from "../components/products/RelatedProducts";

export default {
  name: "ProductSingle",
  components: {
    RelatedProducts
  },
  data() {
    return {
      rateValue: 3,
      showProductModal: true,
      showCheckoutButton: false,
      item: null
    };
  },
  computed: {
    ...mapGetters({
      userShoppingCart: "getCartItems"
    })
  },
  created() {
    this.item = this.$route.query.item;
    this.checkCart();
  },
  methods: {
    checkCart() {
      let duplicateItem = this.userShoppingCart.find(
        product => product.id === this.item.id
      );
      this.showCheckoutButton = duplicateItem;
    },
    addToCart(product) {
      this.$store.dispatch("addItemToCart", product);
      this.checkCart();
    },
    checkout() {
      console.log("hey");
    },
    goBack() {
      this.showProductModal = false;
      this.$router.go(-1);
    }
  }
};
</script>
