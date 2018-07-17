<template>
  <div class="navbar">
    <nav class="amber darken-4">
      <div class="container">
        <router-link :to="{ name: 'GMap' }" class="brand-logo left">GeoNinjas!</router-link>
        <ul class="right">
          <li v-if="!user"><router-link :to="{ name: 'Signup'}">Signup</router-link></li>
          <li v-if="!user"><router-link :to="{ name: 'Login' }">Login</router-link></li>
          <li v-if="user"><a>{{ user.alias }}</a></li>
          <li v-if="user"><a @click="logout">Logout</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>


<script>
import firebase from 'firebase'
import db from '@/firebase/init'

export default {
  name: 'Navbar',
  data () {
    return {
      user: null
    }
  },
  methods: {
    logout () {
      firebase.auth().signOut().then(() => {
        this.$router.push({ name: 'Login'})
      })
    }
  },
  created () {
    db.collection('users').where('user_id', '==', firebase.auth().currentUser.uid).get()
      .then((snapshot) => {
        snapshot.forEach(doc => {
          this.user = doc.data()
          this.user.id = doc.id
        })
      })
    // firebase.auth().onAuthStateChanged((user) => {
    //   if(user) {
    //     this.user = user
    //   } else {
    //     this.user = null
    //   }
    // })
  }
}
</script>

<style>

</style>
