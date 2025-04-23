export const getAllTransactions = async () => {
  const data = await useFetch('/api/transactions/getTransactions')
  //console.log(data);
  // if (data.error?.value) {
  //   throw createError({
  //     statusCode: 500,
  //     statusMessage: 'Internal Server Error',
  //     data: {
  //       message: data.error?.value?.message || 'Internal Server Error',
  //     },
  //   })
  // }

  return data
}
