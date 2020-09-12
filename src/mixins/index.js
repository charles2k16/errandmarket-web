import { Notification, Message } from 'element-ui'

export default {
  components: {
    Notification, Message
  },
  methods: {
    errorMessage(message) {
      Message.error({
        message: message,
        showClose: true,
      })
    },
    removeCartItem(itemIndex) {
      this.$store.dispatch("removeItemFromCart", itemIndex);
    }
  }
}