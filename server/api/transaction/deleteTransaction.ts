import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
  return 'Hello Nitro'
})
