import {Choice} from "./Choice";
import {QuestionType} from "./QuestionType";

export interface QustionDomain {
  /**
   * id
   */
  id: string
  /**
   * 排序
   */
  sort?: number
  /**
   * 题干
   */
  title: string
  /**
   * 分值
   */
  point?: number
  /**
   * 题目类型
   */
  type?: QuestionType
  /**
   * 选项
   */
  choices?: Array<Choice>
  /**
   * 资源id
   */
  resourceId?: string
}
