<template>
  <UModal title="Add Transaction">
    <UButton icon="i-heroicons-plus-circle" class="cursor-pointer">Add</UButton>
    <template #body>
      <UForm :state="form" @submit="handleSubmit" class="space-y-4">

        <UFormField label="Transaction Type" name="transaction_type" required >
          <USelect v-model="form.transaction_type" :items="TRANSACTION_TYPES" placeholder="Select Transaction Type" class="w-full" />
        </UFormField>

        <UFormField label="Amount" name="amount" required>
          <UInput v-model="form.amount" class="w-full" type="number" placeholder="Enter Amount" />
        </UFormField>

        <UFormField label="Transaction Date" name="transaction_date" required >
          <UInput type="date" v-model="form.transaction_date" class="w-full" icon="i-heroicons-calendar" />
        </UFormField>

        <UFormField label="Description" name="description" hint="Optional" >
          <UInput v-model="form.description" placeholder="Description" class="w-full" />
        </UFormField>

        <UFormField label="Category" name="category" hint="Optional" >
          <USelect v-model="form.category" :items="CATEGORIES" placeholder="Select Category" class="w-full" />
        </UFormField>

        <UButton type="submit">
          Submit
        </UButton>

      </UForm>
    </template>
  </UModal>
</template>

<script setup>
import { CATEGORIES, TRANSACTION_TYPES } from '~/constants'

const handleSubmit = (e) => {
  console.log(e)
}

const form = reactive({
  amount: 0,
  transaction_date: '',
  description: '',
  category: '',
  transaction_type: '',
})

</script>