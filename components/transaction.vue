<template>
  <div class="grid grid-cols-2 py-4 border-b">
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-2">
        <UIcon :name="icon" :class="[iconColor]" class="w-5 h-5 flex-shrink-0" />
        <div>{{ transaction.description }}</div>
      </div>

      <div>
        <UBadge color="primary" v-if="transaction.category">{{ transaction.category }}</UBadge>
      </div>
    </div>

    <div class="flex items-center justify-end space-x-2">
      <div>{{ currency }}</div>
      <div>
        <UDropdownMenu :items="items" :popper="{ placement: 'bottom-start' }" class="cursor-pointer">
          <UButton icon="i-heroicons-ellipsis-horizontal" variant="ghost" color="primary" :loading="isLoading" />
        </UDropdownMenu>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  transaction: Object
})

const emit = defineEmits(['updatePage'])

const isIncome = computed(() => {
  return props.transaction.type.toLowerCase() === 'income'
})
const icon = computed(() => {
  return isIncome.value ? 'i-heroicons-arrow-up-right' : 'i-heroicons-arrow-down-right'
})
const iconColor = computed(() => {
  return isIncome.value ? 'text-green-500' : 'text-red-500'
})

const currency = formatCurrency(props.transaction.amount).currency

const isLoading = ref(false)
const toast = useToast()

async function handleDelete() {
  isLoading.value = true
  try {
    await deleteTransaction(props.transaction)
  } finally {
    emit('updatePage')
    toast.add({
      title: 'Transaction deleted',
    })
    isLoading.value = false
  }
}

const items = [
  {
    label: 'Edit',
    icon: 'i-heroicons-pencil',
    onSelect() {
      console.log('edit')
    }
  },
  {
    label: 'Delete',
    icon: 'i-heroicons-trash',
    onSelect() {
      handleDelete()
    }
  }
]
</script>