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
        <div class="container hidden-sm-and-down footer-link">
          <div class="mb-1">
            <p>
              Thanks for visiting: Find any issues, report with a feedback or
              call
              <a href="tel:+233540571511">+233 (540) 571-511</a>
            </p>
          </div>
          <hr />
          <div class="mt-1">
            <div class="flex-justify">
              <span>
                <span
                  >Copyright © 2020 Errand Market Ltd. All rights
                  reserved.</span
                >
                <a class="link">About us</a>
                <a class="link">Send Feedback</a>
                <a class="link">Terms of Use</a>
                <a class="link">Legal</a>
              </span>
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
          </div>
        </div>
        <TabbedFooter />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import NavigationBar from "./NavigationBar";
import TabbedFooter from "./TabbedFooter";

export default {
  name: "MainPage",
  components: {
    NavigationBar,
    TabbedFooter
  }
};
</script>

<style></style>
