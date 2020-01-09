<template>
  <!-- <div class="page-wrapper">
    <h1 class="home-page-title">{{ appTitle }}</h1>
    <img alt="logo-bento" class="logo" src="@/assets/img/bento-starter.svg"/>
    <a
      rel="noopener"
      class="documentation-link"
      target="_blank"
      href="https://bento-starter.netlify.com/"
      >Documentation →</a
    >
  </div>-->
  <div>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section" id="section1">
        <div class="fp-bg">
          <input type="text" v-model="userId" />
          <input type="text" v-model="name" />
          <input type="text" v-model="email" />
          <button type="submit" @click="writeUserData(userId,name,email)">submit</button>
          <button @click="readUserData()">readUser</button>
          <button @click="pushNoti()">Notification</button>
          <br />
          <div style="color:#fff">{{read}}</div>
        </div>
      </div>
      <div class="section"></div>
    </full-page>
    <!-- <input type="submit" @click="writeUserData(userId,name,email)" /> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
import firebase from 'firebase/app'
require('firebase/auth')
require('firebase/database')
require('firebase/messaging')

export default {
  head() {
    return {
      title: {
        inner: 'Home'
      },
      meta: [
        {
          name: 'description',
          content: `${this.appTitle} home page`,
          id: 'desc'
        }
      ]
    }
  },
  data() {
    return {
      options: {
        licenseKey: 'YOUR_KEY_HEERE',
        menu: '#menu',
        sectionsColor: ['#41b883', '#ff5f45', '#0798ec']
      },
      userId: '',
      name: '',
      email: '',
      database: '',
      username: '',
      read: [],
      tokenn: '',
      messaging: ''
    }
  },
  computed: mapState('app', ['appTitle']),
  methods: {
    writeUserData(userId, name, email) {
      firebase
        .database()
        .ref('users/' + userId)
        .set(
          {
            username: name,
            email: email
          },
          error => {
            if (error) {
              // The write failed...
            } else {
              // Data saved successfully!
              console.log('success')
            }
          }
        )
    },
    readUserData() {
      firebase
        .database()
        .ref('users')
        .on('value', snap => {
          this.read = snap.val()
          console.log(this.read)
        })
    },
    pushNoti() {
      // const messaging = firebase.messaging()
      // messaging.usePublicVapidKey(
      //   'BN6pgm3Rl9t0j0UUfgJyAMUSKA2lNT2hKIERcDVmv9475qq8x8lhoO7-NEfjYYvjDH3VsKnBzAebqAAo6W6WLco'
      // )
    }
  },
  mounted() {
    this.database = firebase.database()
    console.log('database', this.database)
    firebase
      .database()
      .ref('users')
      .on('value', snap => {
        // Object.keys(snap.val()).map(i => snap.val()[i])
        this.read = Object.values(snap.val())
        console.log(this.read)
      })
    // for (let i = 0; i < array.length; i++) {
    // }
    const messaging = firebase.messaging()
    messaging.usePublicVapidKey(
      'BN6pgm3Rl9t0j0UUfgJyAMUSKA2lNT2hKIERcDVmv9475qq8x8lhoO7-NEfjYYvjDH3VsKnBzAebqAAo6W6WLco'
    )
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        console.log('Notification permission granted.')
        // TODO(developer): Retrieve an Instance ID token for use with FCM.
        // ...
        messaging
          .getToken()
          .then(currentToken => {
            if (currentToken) {
              sendTokenToServer(currentToken)
              updateUIForPushEnabled(currentToken)
              console.log('token:', currentToken)
            } else {
              // Show permission request.
              console.log(
                'No Instance ID token available. Request permission to generate one.'
              )
              // Show permission UI.
              updateUIForPushPermissionRequired()
              setTokenSentToServer(false)
            }
          })
          .catch(err => {
            console.log('An error occurred while retrieving token. ', err)
            showToken('Error retrieving Instance ID token. ', err)
            setTokenSentToServer(false)
          })
      } else {
        console.log('Unable to get permission to notify.')
      }
    })
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.page-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo {
    margin-bottom: 3rem;
  }

  .home-page-title {
    text-align: center;
  }

  .documentation-link {
    display: inline-block;
    font-size: 1.2rem;
    color: #fff;
    background-color: #5d6788;
    padding: 0.8rem 1.6rem;
    border-radius: 4px;
    transition: background-color 0.1s ease;
    box-sizing: border-box;
    text-decoration: none;
    width: fit-content;
    font-weight: 500;
  }
}
#section1 .fp-bg {
  background: url('../assets/img/bannerTes.jpg');
  background-size: cover;
  background-position: center;
  width: auto;
  height: 100%;
  padding: 30px;
}
</style>
