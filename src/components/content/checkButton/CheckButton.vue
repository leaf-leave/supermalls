<template>
  <div class="check-button" :class="{ check: isChecked }">
    <img src="@/assets/img/cart/tick.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: 'CheckButton',
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less" scoped>
.check-button {
  border-radius: 50%;
  border: 2px solid #aaa;
  width: 15px;
  height: 15px;
}
.check {
  background-color: tomato;
  border: 2px solid tomato;
}
</style>
