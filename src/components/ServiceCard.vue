<template>
  <div class="service-card" >
    {{ svg }}
    <h1>{{ title  }}</h1>
    <p>{{ par }}</p>
    <router-link to="/contact">get started</router-link>
  </div>
</template>

<script>
export default {
    props:['svg','title','par',]
}
</script>

<style>

</style>