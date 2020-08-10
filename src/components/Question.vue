<template>
  <view>
    <view> {{ question.title }}</view>
    <view></view>
    <view class="btn-group">
      <Button type='primary' size='small'>上一题</Button>
      <Button type='secondary' size='normal'>下一题</Button>
    </view>
  </view>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive} from 'vue'
import {QustionDomain} from '../domain/QustionDomain'
import { Button } from '@tarojs/components'
export default defineComponent({
  components:{
    Button
  },
  setup() {
    /**
     * 当前题
     */
    let question = reactive<QustionDomain>({id: '', title: ''})
    /**
     * 下一题
     * @param next
     */
    const nextQuestion = (next) => {
      question = next
    }

    /**
     * 上一题
     * @param pre
     */
    const preQuestion = (pre) => {
      question = pre
    }
    onMounted(() => {
      console.log(question)
    })
    return {
      question,
      nextQuestion,
      preQuestion
    }
  }
})
</script>

<style scoped>

</style>
