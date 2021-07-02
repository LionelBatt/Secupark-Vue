<template>
  <div>
    <v-app-bar class="navbar-custom" clipped-left>
      <img class="mr-3" :src="require('../assets/logo2.png')" height="40"/>
      <v-toolbar-title @click="goHome" class="dark--text">SécuPark</v-toolbar-title>
      <p>Beta</p>

      <!--div-- class="navbar-nav" >
        <v-btn-toggle
            v-model="toggle_multiple"
            background-color="primary"
            dark
            multiple
        >
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn small @click="goLogin" color="primary">
                <v-icon dark v-bind="attrs" v-on="on">mdi-account-plus</v-icon>
              </v-btn>
            </template>
            <span>Connexion</span>
          </v-tooltip>

        <v-spacer></v-spacer>

          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn @click.prevent="logOut()" small color="primary">
                <v-icon dark v-bind="attrs" v-on="on">mdi-account-arrow-right</v-icon>
              </v-btn>
            </template>
            <span>Déconnexion</span>
          </v-tooltip>
        </v-btn-toggle>
      </div-->


      <!--une fois co avec back end utiliser/modier cette partie
      pour afficher boutton connexion quand déconnecté
      pour afficher boutton déconnexion quand connecté
      -->

      <div class="navbar-nav" v-if="login">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn @click.prevent="logOut" small color="primary">
              <v-icon dark v-bind="attrs" v-on="on">mdi-account-arrow-right</v-icon>
            </v-btn>
          </template>
          <span>Déconnexion</span>
        </v-tooltip>
      </div>
      <div v-else class="navbar-nav">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn small @click="goLogin" color="primary">
              <v-icon dark v-bind="attrs" v-on="on">mdi-account</v-icon>
            </v-btn>
          </template>
          <span>Connexion</span>
        </v-tooltip>
      </div>
      <div v-if="showUserDashboard">
        <v-btn @click="goUserBoard" small color="primary">Utilisateur</v-btn>
      </div>
      <div v-if="showAdminDashboard">
        <v-btn @click="goAdminBoard" small color="primary">Administrateur</v-btn>
      </div>

    </v-app-bar>
      </div>
</template>

<script>

export default {
  name: 'Toolbar',
  data: function () {
    return {
      drawer: false,
      login: false,
    }
  },
  mounted() {
    this.loggedIn()
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showUserDashboard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_USER');
      }

      return false;
    },
    showAdminDashboard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_ADMIN');
      }

      return false;
    },
  },

    methods: {
    goHome () {
      this.$router.replace('/home')
    },
    goLogin() {
      this.$router.replace('/login')
    },
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    },
    loggedIn(){
      if(!this.$store.state.auth.status.loggedIn){
        this.login = this.$store.state.auth.status.loggedIn
        console.log('login :'+this.login)
        console.log('co user :'+this.$store.state.auth.status.loggedIn)
      }else{
        this.login = this.$store.state.auth.status.loggedIn
        console.log('login :'+this.login)
        console.log('co user :'+this.$store.state.auth.status.loggedIn)
      }
    },
      goAdminBoard(){
        this.$router.replace('/AdminDashboard')
      },
      goUserBoard(){
        this.$router.replace('/UserDashboard')
      },
  }
}
</script>
<style>
.navbar-nav {
  margin-left: auto;
}
.navbar-custom {
  background-image: linear-gradient( to left ,#6619FF 25%, #000DF2 ,#135db3 , #267fff,#0000);
}

.navbar-custom .navbar-brand {
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 0.1rem;
  font-weight: 700;
}

.navbar-custom .navbar-nav .nav-item .nav-link {
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
}
</style>

