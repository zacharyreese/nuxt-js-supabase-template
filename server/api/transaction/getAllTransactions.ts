import { serverSupabaseClient } from '#supabase/server'

export default eventHandler(async (event) => {
  const db = await serverSupabaseClient(event)

  const { data, error } = await db.from('transactions')
  .select()
  .eq('is_deleted', false)
  .order('created_at', { ascending: false })
  
  if (error) {
    console.error('supabase error: ', error.message)
    return []
  }
  return data
})
