<template>
    <header class="flex justify-between items-center mt-4 border border-gray-300 rounded-lg p-2 bg-gray-600">
        <NuxtLink to="/" class="text-xl font-bold">
            Finance Tracker
        </NuxtLink>
        <div>
            <UAvatar src="https://github.com/shadcn.png" icon="stash:user-avatar" class="custom-avatar-icon" />
        </div>
    </header>
</template>

<style>
.iconify {
	font-size: var(--text-2xl) /* 1.5rem = 24px */;
  line-height: var(--tw-leading, var(--text-2xl--line-height) /* calc(2 / 1.5) ≈ 1.3333 */);
}
</style>