<template>
  <div class="Details View">
    <div class="container-fluid">
      <h1><u>Bug Details:</u></h1>
      <bug-data />
      <note-data />
    </div>
  </div>
</template>

<script>
  import BugData from "@/components/bugData"
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
      NoteData
    }
  }
</script>


<style>
</style>