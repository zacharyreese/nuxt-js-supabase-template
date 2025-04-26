import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event)
  const { id } = await readBody(event)
  const { data, error } = await client.from('transactions').delete().eq('id', id)
  return data
})
