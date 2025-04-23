export const formatCurrency = (amount) => {
  const currency = computed(() => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'USD'
    }).format(isRef(amount) ? amount.value : amount)
  })

  return {
    currency
  }
}