<template>
  <div class="home">
    <div class="container">
      <!-- <img class="mb-5 vueLogo" alt="Vue logo" src="../assets/logo.png"> -->
      <h1 class="mb-4"><u><i>Bug Squasher</i></u></h1>
      <bug-form></bug-form>
      <div class="row">
        <div class="col-12 d-flex justify-content-center">
          <div class="dropdown show mt-4 mx-2">
            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Filter
            </a>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a class="dropdown-item" @click="filterChange(false)">Open Bugs</a>
              <a class=" dropdown-item" @click="filterChange(true)">Closed Bugs</a>
              <a class=" dropdown-item" @click="isHidden = !isHidden">Filter by creator</a>
              <a class="dropdown-item" @click="remFilters">Remove Filters</a>
            </div>
          </div>
          <div class="dropdown show mt-4 mx-2">
            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Sort
            </a>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a class="dropdown-item" @click="filterChange(false)">Most Recent</a>
              <a class=" dropdown-item" @click="filterChange(true)">Oldest</a>
              <a class=" dropdown-item" @click="">Reset Sort</a>
            </div>
          </div>
        </div>
      </div>
      <form @submit.prevent='filterCreator' class="mt-2">
        <input v-if="isHidden" v-model="creator.creator" type="text" placeholder="Creator" />
        <button v-if="isHidden" type="submit">search</button>
      </form>
      <div class=" row d-flex justify-content-center">
        <table class="table mt-4 pb-4 border border-dark">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Bug Creator</th>
              <th scope="col">Bug Title</th>
              <th scope="col">Bug Status</th>
              <th scope="col">Time Created</th>
            </tr>
          </thead>
          <tbody>
            <tr :class="{'openBG': !bug.closed}" v-for="(bug, index) in bugs" id="bugs" click click>
              <router-link class="text-dark" :to="'/BugDetails/'+bug._id">
                <th scope="row">{{index + 1}}</th>
                <td>{{bug.creator}}</td>
                <td>{{bug.title}}</td>
                <td v-if="!bug.closed">Open</td>
                <td v-else>Closed</td>
                <td>{{bug.createdAt}}</td>
              </router-link>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import BugForm from '@/components/BugForm'
  export default {
    name: 'home',
    data() {
      return {
        isHidden: false,
        creator: {}
      }
    },
    components: {
      BugForm
    },
    computed: {
      bugs() {
        return this.$store.state.bugs
      },
    },
    methods: {
      filterChange(status) {
        this.isHidden = false
        this.$store.dispatch('filterBug', status)
      },
      remFilters() {
        this.isHidden = false
        this.$store.dispatch('getBugs')
      },
      filterCreator(creator) {
        this.isHidden = false
        console.log(creator)
        this.$store.dispatch('filterCreator', this.creator.creator)
      }
    }
  }
</script>
<style>
  .openBG {
    background-color: rgba(250, 90, 90, 0.845);
  }

  #bugs {
    transition: all 0.1s linear
  }

  #bugs:hover {
    outline-style: solid;
    outline: 1px solid black;
    cursor: pointer;
  }

  a:hover {
    text-decoration: none
  }

  .vueLogo {
    max-height: 50px;
    width: auto;
  }
</style>