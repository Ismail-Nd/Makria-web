<template>
    <div class="activity">
        <div class="activity-card">
          <h1>{{ num }}</h1>
          <p>{{ project }}</p>
        </div>
      </div>
</template>

<script>
export default {
    props:[ 'num' , 'project']
}
</script>

<style>

</style>