<template>
    <div>
        <div class="font-bold" >{{ title }}</div>
        <div class="text-2xl font-extrabold">
            <USkeleton v-if="loading" class="h-8 w-[75%] bg-gray-600 mb-2 mt-2" />
            <div v-else>{{ formattedAmount.currency.value }}</div>
        </div>
        <div class="text-sm">
            <USkeleton v-if="loading" class="h-6 w-[85%] bg-gray-600" />
            <div v-else class="flex space-x-1 items-center font-semibold text-sm">
              <UIcon :name="trendingIcon" class="w-4 h-4" :class="[trendingColor]" />
              <!-- 25% down from 1000 -->
              <span>{{ Math.abs(percentDifference) }}% 
                <span :class="[trendingColor]">{{ trendingUp ? 'up' : 'down' }}</span>
                    from {{ formattedLastAmount.currency.value }}
              </span>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: String,
    amount: Number,
    lastAmount: Number,
    loading: Boolean
})

const trendingUp = computed(() => {
    return props.amount > props.lastAmount
})

const trendingIcon = computed(() => {
    return trendingUp.value ? 'iconamoon:trend-up-bold' : 'iconamoon:trend-down-bold'
})

const trendingColor = computed(() => {
    return trendingUp.value ? 'green' : 'red'
})

const percentDifference = computed(() => {
    return Math.round(((props.amount - props.lastAmount) / props.lastAmount) * 100)
})

const formattedAmount = formatCurrency(props.amount)
const formattedLastAmount = formatCurrency(props.lastAmount)
</script>

<style scoped>
.green {
    color: #4aea4a;
}

.red {
    color: #f05353;
}
</style>