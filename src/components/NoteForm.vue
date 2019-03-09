<template>
  <div class="noteForm">
    <form @submit.prevent='createNote'>
      <input v-model="noteForm.creator" type="text" placeholder="Enter note creator" />
      <input v-model="noteForm.content" type="text" placeholder="Enter note" />
      <button type="submit">Create Note</button>
    </form>
  </div>
</template>
<script>
  export default {
    name: 'notes',
    data() {
      return {
        noteForm: {}
      }
    },
    computed: {},
    methods: {
      createNote() {
        this.$store.dispatch('createNote', this.noteForm)
      }
    },
    components: {}
  }

</script>
<style scoped>

</style>