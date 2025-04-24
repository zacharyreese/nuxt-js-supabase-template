export const getAllTransactions = async () => {
  const result = await useFetch('/api/transaction/getAllTransactions')
  
  if (result.error?.value) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
      data: {
        message: result.error?.value?.message || 'Internal Server Error',
      },
    })
  }

  return result.data
}

export const deleteTransaction = async (id: string) => {
  const result = await useFetch('/api/transaction/getAllTransactions')
  
  if (result.error?.value) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
      data: {
        message: result.error?.value?.message || 'Internal Server Error',
      },
    })
  }

  return result.data
}

