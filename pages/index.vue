<template>
    <section class="flex items-center justify-between mb-10">
        <h1 class="text-4xl font-extrabold">
            Summary
        </h1>
        <div>
            <USelectMenu v-model="selectedView" :items="timePeriods" :search-input="false" />
        </div>
    </section>

    <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
      <Trend title="Total Balance" :amount="1000" :lastAmount="900" :loading="false" />
      <Trend title="S&P 500" :amount="1000" :lastAmount="1250" :loading="false" />
      <Trend title="Crypto" :amount="1000" :lastAmount="300" :loading="false" />
      <Trend title="Stocks" :amount="1000" :lastAmount="3800" :loading="false" />
    </section>

    <section class="mb-10">
      <div v-for="(transactionsOnDay, date) in transactionsGroupedByDate" :key="date" class="mb-10">
        <DailyTransactionSummary :date="date" :transaction="transactionsOnDay" />
        <Transaction v-for="transaction in transactionsOnDay" :key="transaction.id" :transaction="transaction" />
      </div>
    </section>
</template>

<script setup>
const timePeriods = ['Yearly', 'Monthly', 'Weekly', 'Daily']
const selectedView = ref(timePeriods[0])
const transactions = ref([])

const { data } = await useFetch('/api/transaction/getAllTransactions')
transactions.value = data.value

const transactionsGroupedByDate = computed(() => {
  const grouped = {}
  for (const transaction of transactions.value) {
    const date = new Date(transaction.created_at).toISOString().split('T')[0]
    if (!grouped[date]) {
      grouped[date] = []
    }
    grouped[date].push(transaction)
  }
  return grouped
})

</script>

<style scoped>


</style>