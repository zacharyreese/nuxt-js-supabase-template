export const addTransactionSuccessToast = () => {
  const toast = useToast()
  return toast.add({
    title: 'Success',
    description: 'Transaction added successfully',
    icon: 'i-heroicons-check-circle',
    color: 'success',
  })
}

export const addTransactionErrorToast = () => {
  const toast = useToast()
  return toast.add({
    title: 'Error',
    description: 'Failed to add transaction',
    icon: 'i-heroicons-x-circle',
    color: 'error',
  })
}

export const deleteTransactionSuccessToast = () => {
  const toast = useToast()
  return toast.add({
    title: 'Success',
    description: 'Transaction deleted successfully',
    icon: 'i-heroicons-check-circle',
    color: 'success',
  })
}
