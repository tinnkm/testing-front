<template>
  <view class="index">
    <NumberDisplay/>
    <NumberSubmit/>
    <Question/>
  </view>
</template>

<script>
import NumberDisplay from '../../components/NumberDisplay.vue'
import NumberSubmit from '../../components/NumberSubmit.vue'
import Question from '../../components/Question'
export default {
  name: 'Index',
  components: {
    NumberDisplay,
    NumberSubmit,
    Question
  }
}
</script>

<style>
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
