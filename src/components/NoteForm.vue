<!-- <b-dropdown id="ddown1" text="Dropdown Button" class="m-md-2">
  <b-dropdown-item>First Action</b-dropdown-item>
  <b-dropdown-item>Second Action</b-dropdown-item>
  <b-dropdown-item>Third Action</b-dropdown-item>
  <b-dropdown-divider />
  <b-dropdown-item active>Active action</b-dropdown-item>
  <b-dropdown-item disabled>Disabled action</b-dropdown-item>
</b-dropdown> -->


<template>
  <div class="noteForm">
    <!-- <div v-if="!bugStatus.closed">
      <form @submit.prevent='createNote'>
        <input v-model="noteForm.creator" type="text" placeholder="Enter note creator" />
        <input v-model="noteForm.content" type="text" placeholder="Enter note" />
        <div class="b-dropdown' v-model=" noteForm.flagged">
          <div class="b-dropdown-item' value=" pending">pending</div>
          <div class="b-dropdown-item' value=" completed">completed</div>
          <div class="b-dropdown-item' value=" rejected">rejected</div>
        </div>
        <button type="submit">Create Note</button>
      </form>
    </div> -->
  </div>
</template>
<script>
  export default {
    name: 'noteForm',
    mounted() {
      this.$store.dispatch('getNotes')
    },
    computed: {
      bugStatus() {
        return this.$store.state.bugs.find(bug => bug._id == this.$route.params.id)
      }
    },
    data() {
      return {
        noteForm: {}
      }
    },
    methods: {
      createNote() {
        this.$store.dispatch('createNote', this.noteForm)
      }
    },
    components: {}
  }

</script>
<style>

</style>