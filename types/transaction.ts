export type Transaction = {
  id: number
  created_at: string
  amount: number
  type: string
  description: string
  is_deleted: boolean
  deleted_at: string | null
}
