<template>
  <main>
    <div class="content-wrapper">
      <ProductsSection/>
    </div>
  </main>
</template>

<script>
import ProductsSection from "./ProductsSection.vue"

  export default {
    name: 'MainSection',
    components: {
      ProductsSection,
    },
  }
</script>

<style lang="scss" scoped>
.content-wrapper{
  margin-bottom: 5rem;
}
</style>