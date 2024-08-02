<template>
  <div>
    <Navbar/>
    <div class="content" >
        <h1>Transforming Brands with Creativity and Excellence</h1>
        <p>We're a dynamic team fueled by passion and creativity, committed to transforming your ideas into reality. </p>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/navbar.vue';
import Footer from '@/components/footer.vue';
export default {
    components:{
        Navbar,
        Footer,
    }
}
</script>

<style>

</style>