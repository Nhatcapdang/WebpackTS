export interface IPosts {
  readonly author: string
  readonly content: string
  readonly likeCount: number
  readonly title: string
  readonly createdAt?: string
  readonly updatedAt?: string
  readonly __v?: number
  readonly _id?: string
}
export interface IResponse<T> {
  readonly data: T
  readonly status: number
  readonly statusText: string
}

export interface IRreduer<T> {
  readonly isLoading: boolean
  readonly status?: 'success' | 'falied'
  readonly data: T
}
