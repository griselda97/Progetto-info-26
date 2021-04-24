<template>
<nav>
  <div>
    <v-navigation-drawer v-model="drawer" app temporary >
      <v-list>
          <v-list-tile :to="{name: 'Informazioni'}">
            <v-list-tile-action>
              <v-icon>info</v-icon>
            </v-list-tile-action>
            <v-list-tile-action>
              <v-list-tile-title>Informazioni</v-list-tile-title>
            </v-list-tile-action>
          </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar color="teal lighten-4" >
      <v-toolbar-side-icon @click="drawer=!drawer"></v-toolbar-side-icon>
      <v-toolbare-title>
        <router-link to="/" class="toolbar-title">Cinepaese</router-link>
      </v-toolbare-title>
      <v-spacer></v-spacer>
      <v-toolbar-item>
        <router-link :to="{name: 'Login'}" v-if="!isLoggedIn">
          <v-btn flat>Accedi</v-btn>
        </router-link>
        <router-link :to="{name: 'Register'}" v-if="!isLoggedIn">
          <v-btn flat>Registrati</v-btn>
        </router-link>
        <router-link :to="{name: 'Carrello'}" v-if="isLoggedIn">
          <v-btn flat >Carrello</v-btn>
        </router-link>
        <v-btn flat v-if="isLoggedIn" @click="logout">Logout</v-btn>
      </v-toolbar-item>
    </v-toolbar>
  </div>
  </nav>
</template>

<script>
import firebase from "firebase";


export default {
  name: "top-navigation",
  data() {
    return {
      isLoggedIn: false,
      currentUser: false,
      drawer: false,
    };
  },
     created(){
      if(firebase.auth().currentUser){
          this.isLoggedIn=true;

      }
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.go({ path: this.$router.path });
        });
    }
  },

};
</script>

<style>
a:link {
  color: #000;
  text-decoration: none;
} /* unvisited link  */
a:visited {
  color: #000;
  text-decoration: none;
} /* visited link    */
a:hover {
  color: #000;
  text-decoration: none;
} /* mouse over link */
a:active {
  color: #000;
  text-decoration: none;
}
</style>
