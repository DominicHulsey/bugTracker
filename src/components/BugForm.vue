<template>
  <div class="bugForm">
    <form @submit.prevent='createBug'>
      <input v-model="bugForm.creator" type="text" placeholder="Enter bug creator" />
      <input v-model="bugForm.title" type="text" placeholder="Enter bug title" />
      <input v-model="bugForm.description" type="text" placeholder="Enter bug description" />
      <button type="submit">Create Bug</button>
    </form>
  </div>
</template>
<script>
  export default {
    name: 'bugs',
    data() {
      return {
        bugForm: {}
      }
    },
    computed: {},
    methods: {
      createBug() {
        this.$store.dispatch('createBug', this.bugForm)
      }
    },
    components: {}
  }

</script>
<style scoped>

</style>