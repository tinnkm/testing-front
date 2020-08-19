<template>
  <view class="question-wrapper">
    <view class="container">
      <view class="question-title">{{ question.title }}</view>
      <view class="question-choice-wrapper">
        <view
          class="question-choice"
          v-for="choice in question.choices"
          :key="choice.key"
          @tap="answer(choice.key)"
        >{{choice.title}}</view>
      </view>
    </view>
    <view class="btn-group">
      <Button type="primary" class="pre-btn" @tap="preQuestion">上一题</Button>
      <Button type="default" class="next-btn" @tap="nextQuestion">下一题</Button>
    </view>
  </view>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
// import { QustionDomain } from "../domain/QustionDomain";
import { Button } from "@tarojs/components";
export default defineComponent({
  components: {
    Button,
  },
  setup() {
    /**
     * 当前题 TODO: 目前版本不支持类型指定，在taro更新到3.0.8后更新代码
     */
    const question = reactive({
      id: "",
      title:
        "某用户是做服装销售生意的,所有的在线平台和数据都放在阿里云的云服务器 ECS 实例和云数据库 RDS 实例中,现在 CEO 想对销售额的变化趋势做一个监控,并在订单量发生较大变化时能收到预警信息,可以使用阿里云的哪个产品实现,并在管理控制台中展现结果？",
      choices: [
        {
          key: "1",
          title:
            "态势感知",
        },
        {
          key: "2",
          title: "云服务器 ECS",
        },
        {
          key: "3",
          title: "云监控",
        },
        {
          key: "4",
          title: "阿里绿网",
        },
      ],
    });
    /**
     * 下一题
     * @param next
     */
    const nextQuestion = () => {
      console.log("next");
    };

    /**
     * 上一题
     * @param pre
     */
    const preQuestion = () => {
      console.log("pre");
    };

    /**
     * 作答
     * @param key
     */
    const answer = (key) => {
      console.log(key)
    }
    onMounted(() => {
      console.log(question);
    });
    return {
      question,
      nextQuestion,
      preQuestion,
      answer
    };
  },
});
</script>

<style lang='scss'>
.question-wrapper {
  position: relative;
  .question-title {
    font-size: 28rpx;
    font-weight: 550;
    text-align: left;
    line-height: 40rpx;
  }
  .question-choice-wrapper {
    margin: 100rpx auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    .question-choice {
      width: 100%;
      min-height: 90rpx;
      background-color: #f3f3f3;
      border: 1px solid #eeeeee;
      border-radius: 8rpx;
      margin: 30rpx 0;
      line-height: 40rpx;
      font-size: 28rpx;
      display: flex;
      justify-content: center;
      flex-direction: column;
      flex: 1;
    }
  }

  .btn-group {
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    .pre-btn {
      width: 40%;
      background-color: #07c160;
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
      color: #323233;
      &::after,
      &::before {
        border-radius: 0;
        border: none;
      }
    }
  }
}
</style>
