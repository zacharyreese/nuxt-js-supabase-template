<!--
  Default layout for the app.
  This layout is used for all pages in the app.
  It includes a header and a main content area.
  The header is the same on all pages.
  <slot /> is the content of the page in /pages/*
-->
<template>
  <div class="container mx-auto max-w-6xl bg-gray-800 p-8 px-12">
    <AppHeader />
    <main class="my-10">
      <slot />
    </main>
  </div>
</template>

<script setup>

</script>

<style>

</style>