<template>
    <div class="grid grid-cols-2 py-4 border-b font-bold">
      <div class="flex items-center justify-between">
        {{ date }}
        <div>
          <UBadge color="neutral" v-if="transaction.category">{{ transaction.category }}</UBadge>
        </div>
      </div>

      <div class="flex items-center justify-end mr-10">
        {{ formattedCurrency }}
      </div>
    </div>
</template>

<script setup>
const props = defineProps({
  transaction: Array,
  date: String
})

const total = computed(() => {
  let sum = 0

  for (const transaction of props.transaction) {
    if(transaction.type.toLowerCase() === 'income') {
      sum += transaction.amount
    } else {
      sum -= transaction.amount
    }
  }

  return sum
})

const formattedCurrency = computed(() => {
  return formatCurrency(total.value).currency
})
</script>