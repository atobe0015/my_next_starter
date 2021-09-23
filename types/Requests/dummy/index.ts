/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** ダミーエンドポイントの定義 */
  get: {
    query: {
      id: string
    }

    status: 200
    /** Dummy Response */
    resBody: Types.Dummy
  }
}
