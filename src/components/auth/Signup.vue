<template>
  <div class="signup container">
    <form @submit.prevent="signup" class="card-panel">
      <h2 class="center amber-text text-darken-4">Signup</h2>
      <div class="field">
        <label for="email">Email</label>
        <input type="email" name="email" v-model="email">
      </div>
      <div class="field">
        <label for="alias">Alias</label>
        <input type="text" name="alias" v-model="alias">
      </div>
      <div class="field">
        <label for="password">Password</label>
        <input type="password" name="password" v-model="password">
      </div>
      <p class="red-text center" v-if="feedback">{{ feedback }}</p>
      <div class="field center">
        <button class="btn amber darken-4">Signup</button>
      </div>
      <div class="field center">
        Made with <span style="color: #e25555;">&#9829;</span> by I Putu Deta Utama Putra
        <p><a target="_newtab" href="https://web.facebook.com/putudeta11">Facebook</a> - <a arget="_newtab" href="https://github.com/detautama">Github</a> - <a arget="_newtab" href="https://www.linkedin.com/in/deta-u-8bb1a7107">LinkedIn</a></p>
      </div>
    </form>
  </div>
  
</template>

<script>
import slugify from 'slugify'
import db from '@/firebase/init'
import firebase from 'firebase'

export default {
  name: 'Signup',
  data () {
    return {
      email: null,
      password: null,
      alias: null,
      feedback: null,
      slug: null
    }
  },
  methods: {
    signup () {
      if (this.alias && this.email && this.password) {
        this.slug = slugify(this.alias, {
          replacement: '-',
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        })
        let ref = db.collection('users').doc(this.slug)
        ref.get().then(doc => {
          if (doc.exists) {
            this.feedback = 'This alias already exist'
          } else {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
              .then (user => {
                ref.set({
                  alias: this.alias,
                  geolocation: null,
                  user_id: user.uid
                })
              })
              .then(() => {
                this.$router.push({ name: 'GMap'})
              })
              .catch (err => {
                this.feedback = err.message
              })
              this.feedback = 'This alias is free to use'
          }
        })
        console.log(this.slug)
      } else {
        this.feedback = 'You must enter all fields'
      }
    }
  }
}
</script>

<style>
  .signup {
    max-width: 400px;
    margin-top: 50px;
  }

  .signup h2 {
    font-size: 2.4em;
  }

  .signup .field {
    margin-bottom: 10px;
  }
</style>

