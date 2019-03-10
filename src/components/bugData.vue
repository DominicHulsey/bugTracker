<template>
  <div class="detailBugs">
    <div class="row d-flex justify-content-center">
      <div class="col-5 bg-light shadow d-flex justify-content-center mt-2 h-100">
        <div class="col-3 align-self-center h-100">
          <img class="align-self-center animate infinite pulse" src="../assets/Bug-02.png" id="bugImage" />
        </div>
        <div class="p-5" :class="{'bg-secondary': !findBug.closed}">
          <div class="row h-25">
            <h2 class="p-2" id="bugTitle"><b>Creator:</b></h2>
            <h2 class="p-2 px-5 bg-white rounded align-self-center">{{findBug.creator}}</h2>
          </div>
          <hr>
          <div class="row h-25">
            <h2 class="p-2" id="bugTitle"><b>Title:</b></h2>
            <h2 class="p-2 px-5 bg-white rounded align-self-center">{{findBug.title}}</h2>
          </div>
          <hr>
          <div class="row h-25">
            <h2 class="p-2" id="bugTitle"><b>Description:</b></h2>
            <h2 class="p-2 px-5 bg-white rounded align-self-center">{{findBug.description}}</h2>
          </div>
          </ul>
          <button :class="{'openBG': findBug.closed}" v-if="!findBug.closed" @click="statusChange(findBug._id)">Close
            bug</button>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>


<script>
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
</style>