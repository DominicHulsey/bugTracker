<template>
  <div class="Details View">
    <h1><u>Bug Details:</u></h1>
    <bug-data />
    <note-form />
    <note-data />
  </div>
</template>

<script>
  import BugData from "@/components/bugData"
  import NoteForm from "@/components/NoteForm"
  import NoteData from '@/components/noteData'
  export default {
    name: 'BugDetails',
    mounted() {
      let id = this.$route.params.id
      this.$store.dispatch('setId', id)
      this.$store.dispatch('getNotes')
    },
    computed: {
      notes() {
        return this.$store.state.notes
      }
    },
    methods: {

    },
    components: {
      BugData,
      NoteForm,
      NoteData
    }
  }
</script>


<style>

</style>