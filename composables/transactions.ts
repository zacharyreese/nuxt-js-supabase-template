export const getAllTransactions = async () => {
  try {
    const result = await $fetch('/api/transaction/getAllTransactions')
    return result
  } catch (error) {
    console.error(error)
  }
}

export const deleteTransaction = async (transaction: Transaction) => {
  const db = useSupabaseClient<Database>()

  const { data, error, status } = await db.from('transactions')
  .update({
    is_deleted: true,
    deleted_at: new Date().toISOString()
  })
  .eq('id', transaction.id)

  if (error) {
    console.error(error)
  }
}

// SERVER SIDE METHOD
//
// export const deleteTransaction = async (id: string) => {
//   const result = await useFetch('/api/transaction/deleteTransaction', {
//     method: 'POST',
//     body: {
//       id,
//     },
//   })
  
//   if (result.error?.value) {
//     throw createError({
//       statusCode: 500,
//       statusMessage: 'Internal Server Error',
//       data: {
//         message: result.error?.value?.message || 'Internal Server Error',
//       },
//     })
//   }

//   return result.data
// }

