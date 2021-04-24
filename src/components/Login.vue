<template>
  <v-content>
    <div class="container">
      <div class="row">
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar color="lime accent-4" flat>
                <v-toolbar-title class="white--text">Accedi</v-toolbar-title>
              </v-toolbar>
              <v-form class="mx-4">
                <v-text-field
                  outlined
                  prepend-inner-icon="person"
                  type="text"
                  id="email"
                  v-model="email"
                  label="Email"
                ></v-text-field>
                <v-text-field
                  outlined
                  shaped
                  prepend-inner-icon="lock"
                  v-model="password"
                  type="password"
                  id="password"
                  label="Password"
                ></v-text-field>
              </v-form>
              <v-flex offset-xs8>
                <v-card-actions class>
                  <v-btn
                    class="white--text"
                    depressed
                    color="lime accent-4"
                    v-on:click="login"
                  >Accedi</v-btn>
                </v-card-actions>
              </v-flex>
            </v-card>
          </v-flex>
        </v-layout>
      </div>
    </div>
  </v-content>
</template>

<script>
import firebase from "firebase";
export default {
  name: "login",
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login: function(e) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.$router.go({ path: this.$router.path });
          },
          err => {
            alert(err.message);
          }
        );

      e.preventDefault();
    }
  },
};
</script>
