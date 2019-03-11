<template>
  <div class="detailBugs">
    <h1><u>Bug Details:</u></h1>
    <div class="row d-flex justify-content-center">
      <img class="closed" v-if="findBug.closed" src="../assets/closed.png" />
      <note-form></note-form>
      <div class="col-6 bg-light shadow d-flex justify-content-center mt-2 h-100">
        <div class="col-3 align-self-center h-100">
          <h4 v-if="findBug.closed" class="text-dark p-1 bg-success rounded">Closed</h4>
          <h4 v-else class="p-1 bg-danger text-white rounded">Open</h4>
          <img class="align-self-center" src="../assets/Bug.png" id="bugImage" />
          <button class="btn btn-secondary mt-3 p-2" :class="{'openBG': findBug.closed}" v-if="!findBug.closed"
            @click="statusChange(findBug._id)">Close
            bug</button>
        </div>
        <div class="p-5">
          <div class="row">
            <h5 class="p-2" id="bugTitle"><b>Creator:</b></h5>
            <h5 class="p-2 px-5 bg-white rounded align-self-center">{{findBug.creator}}</h5>
            <hr>
            <h5 class="p-2" id="bugTitle"><b>Title:</b></h5>
            <h5 class="p-2 px-5 bg-white rounded align-self-center">{{findBug.title}}</h5>
          </div>
          <hr>
          <div class="row">
            <h6 class="p-2 align-self-center" id="bugTitle"><b>Description:</b></h6>
            <textarea readonly class="col-8 py-4 border-0 ml-3 bg-white">{{findBug.description}}</textarea>
          </div>

        </div>
      </div>
    </div>
  </div>
  </div>
</template>


<script>
  import NoteForm from "@/components/NoteForm"
  export default {
    name: 'bugData',
    computed: {
      findBug() {
        return this.$store.state.bugs.find(bug => bug._id == this.$route.params.id)
      },
    },
    methods: {
      statusChange() {
        this.$store.dispatch('changeStatus')
      }
    },
    components: {
      NoteForm
    }
  }
</script>


<style>
  h1 {
    font-weight: normal
  }

  h2 {
    font-weight: normal
  }

  h3 {
    font-weight: normal
  }

  #bugImage {
    transform: scale(1.2)
  }

  #bugTitle {
    background-color: #dedede
  }

  .closed {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    position: fixed;
    background-attachment: local;
    z-index: 100;
    height: 350px;
    opacity: 0.8;
  }
</style>