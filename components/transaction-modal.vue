<template>
  <UModal title="Add Transaction" v-model:open="open">
    <UButton icon="i-heroicons-plus-circle" class="cursor-pointer">Add</UButton>
    <template #body>
      <UForm :state="form" :schema="schema" :validate-on="['blur']" @submit="handleSubmit" class="space-y-4">

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

        <UButton type="submit" :loading="isLoading">
          Submit
        </UButton>

      </UForm>
    </template>
  </UModal>
</template>

<script setup>
import { CATEGORIES, TRANSACTION_TYPES } from '~/constants'
import { z } from 'zod'

const emit = defineEmits(['updatePage'])
const isLoading = ref(false)
const supabase = useSupabaseClient()
// Modal open state
const open = ref(false)

const handleSubmit = (e) => {
  saveTransaction()
}

const initialState = {
  amount: 0,
  transaction_date: '',
  description: '',
  category: '',
  transaction_type: '',
}
// Use spread operator to create a new object with the initial state
// to avoid resetting the form with the user input values
const form = reactive({...initialState})

// Zod schema for form validation
const schema = z.object({
  amount: z.number().positive('Amount must be more than 0'),
  transaction_date: z.string().date(),
  description: z.string().optional(),
  category: z.string().optional(),
  transaction_type: z.string(),
})

const saveTransaction = async () => {
  isLoading.value = true
  try {
    const { data, error } = await supabase.from('transactions')
      .upsert({
        amount: form.amount,
        transaction_date: form.transaction_date,
        description: form.description,
        category: form.category,
        type: form.transaction_type,
      })
    
    if (error) {
      addTransactionErrorToast()
    } else {
      addTransactionSuccessToast()
      resetForm()
      // Close modal
      open.value = false
      // Refresh transactions
      emit('updatePage')
    }
  } catch(error) {
    addTransactionErrorToast()
    console.log(error)
  } finally {
    isLoading.value = false
  }
}

function resetForm() {
  Object.assign(form, initialState)
}
</script>