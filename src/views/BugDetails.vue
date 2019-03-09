<template>
  <div class="Details View">
    <h1><u>Bug Details:</u></h1>
    <bug-details></bug-details>
    <note-form></note-form>
    <div class="row">
      <!-- <div class="col-2 card" v-for="note in notes">
        <h1>{{note.creator}}</h1>
        <h1>{{note.content}}</h1> -->
    </div>
  </div>
  </div>
</template>

<script>
  import BugDetails from "@/components/bugDetails"
  import NoteForm from "@/components/NoteForm"
  export default {
    name: 'Details',
    mounted() {
      let id = this.$route.params.id
      this.$store.dispatch('setId', id)
    },
    data() {
    },
    computed: {
      notes() {
        return this.$store.state.notes
      }
    },
    methods: {

    },
    components: {
      BugDetails,
      NoteForm
    }
  }
</script>


<style scoped>

</style>