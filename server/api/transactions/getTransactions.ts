import { serverSupabaseClient } from '#supabase/server'

export default eventHandler(async (event) => {
  const db = await serverSupabaseClient(event)

  const { data, error } = await db.from('transactions').select()
  if (error) {
    console.error('supabase error: ', error.message)
    return []
  }
  return data
})
