<template>
  <view class="question-wrapper">
    <view>{{ question.title }}</view>
    <view></view>
    <view class="btn-group">
      <Button type="primary" class="pre-btn" @tap="preQuestion">上一题</Button>
      <Button type="default" class="next-btn" @tap="nextQuestion">下一题</Button>
    </view>
  </view>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import { QustionDomain } from "../domain/QustionDomain";
import { Button } from "@tarojs/components";
export default defineComponent({
  components: {
    Button,
  },
  setup() {
    /**
     * 当前题
     */
    let question = reactive<QustionDomain>({ id: "", title: "" });
    /**
     * 下一题
     * @param next
     */
    const nextQuestion = () => {
      console.log("next")
    };

    /**
     * 上一题
     * @param pre
     */
    const preQuestion = () => {
      console.log("pre")
    };
    onMounted(() => {
      console.log(question);
    });
    return {
      question,
      nextQuestion,
      preQuestion,
    };
  },
});
</script>

<style lang='scss'>
.question-wrapper {
  position: relative;
  .btn-group {
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    .pre-btn {
      width: 40%;
      background-color: #19e919;
      border-radius: 0;
      border: none;
      &::after,
      &::before {
        border-radius: 0;
        border: none;
      }
    }
    .next-btn {
      width: 60%;
      border-radius: 0;
      border: none;
      &::after,
      &::before {
        border-radius: 0;
        border: none;
      }
    }
  }
}
</style>
