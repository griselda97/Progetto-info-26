<template>
    <v-container>
      <Carousel/>
    <v-card>
      <v-toolbar color="white" light flat dense>
              <v-tabs slot="extension" v-model="tabs" background-color="transparent" grow>
                <v-tab to="/">CINEMA</v-tab>
                <v-tab to="/Teatro">TEATRO</v-tab>
                <v-tab to="/Concerti">CONCERTI</v-tab>
                </v-tabs>
          </v-toolbar>
      <div class="pa-4 ma-2 ">
              <p class="text-xs-center display-1">PROGRAMMAZIONE SETTEMBRE 2019</p>
            </div>             
   <v-layout row wrap >
      <template v-for="(product, index) in products">
        <v-flex xs12 sm6 md4 lg3 :key="index" >
          <v-row >
            <v-card class="ma-4" style="position: relative;" height="430px">
              <v-img :src="product.src" :aspect-ratio="10/9">
              </v-img>

              <v-card-text class="pt-3 text-xs-center" >
                <div class="font-weight-medium black--text title mb-2">{{product.titolo}}</div>
                <div class="font-weight-medium teal--text subtitle-2 mb-3">{{product.giorno}} alle {{product.ora}}</div>
                <div class="font-weight-light">{{product.descrizione}}</div>
              </v-card-text>
               <div>
                <v-card-actions class="justify-center" >
                   <v-btn @click="goTodetail(product.id)" color="teal lighten-1 white--text" >dettagli</v-btn>
                </v-card-actions>
               </div>
            </v-card>
          </v-row>
        </v-flex>
      </template>
    </v-layout>
   </v-card>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      products: [{
          id: 21,
          src: "https://i.ibb.co/mTPN8GG/russian.jpg",
          titolo: "Russian Renaissance",
          descrizione:
            "Dalla classica al jazz con gli strumenti della tradiz...",
          trama:
            "Dalla classica al jazz con gli strumenti della tradizione russa/. Questo straordinario combo si è imposto all/'attenzione mondiale aggiudicandosi nel 2017 l/'M-Prize Chamber Arts Competition negli Stati Uniti/. Da allora hanno conquistato il pubblico e la critica con performance indimenticabili che hanno sondato le straordinarie possibilità degli strumenti della tradizione russa - come balalaika, domra o fisarmonica - nell/'esplorare ogni genere musicale dal jazz al tango, dal folk alla classica/.",

          giorno: "Mercoledì 4",
          ora: "21:00",
          qty_intero: 1,
          qty_ridotto: 0,
          prezzo_intero: 7,
          prezzo_ridotto: 5
        },
        {
          id: 22,
          src: "https://i.ibb.co/G39p4wS/Vinicio-Capossela-1.jpg",
          titolo: "Vinicio Capossela",
          descrizione:
            "L/'eclettico cantautore italiano torna in tour per porta/…",
          trama:
            "L/'eclettico cantautore italiano torna in tour per portare il suo nuovo show sui principali palchi italiani/. Vinicio Capossela è uno tra gli artisti con il maggior numero di riconoscimenti da parte del Club Tenco/. La sua visionarietà poetica lo rende uno degli artisti più amati del panorama musicale italiano/.",

          giorno: "Mercoledì 11",
          ora: "21:00",
          qty_intero: 1,
          qty_ridotto: 0,
          prezzo_intero: 7,
          prezzo_ridotto: 5
        },

        {
          id: 23,
          src: "https://i.ibb.co/t3wg87f/ORCHESTRA.jpg",
          titolo: "Philip von Steinacker",
          descrizione:
            "Concerto con Philip von Steinacker, direttore, Mirja...",
          trama:
            "Concerto con Philip von Steinacker, direttore, Mirjam Gruber, soprano e l/'Orchestra Haydn di Bolzano e Trento/.",

          giorno: "Mercoledì 18",
          ora: "21:00",
          qty_intero: 1,
          qty_ridotto: 0,
          prezzo_intero: 7,
          prezzo_ridotto: 5
        },
        {
          id: 24,
          src: "https://i.ibb.co/JvBcMGQ/LES-LULLIES.jpg",
          titolo: "Les Lullies",
          descrizione: "Concerto punk-beat-freaks dei francesi Les Lullies/...",
          trama: "Concerto punk-beat-freaks dei francesi Les Lullies/.",

          giorno: "Mercoledì 25",
          ora: "21:00",
          qty_intero: 1,
          qty_ridotto: 0,
          prezzo_intero: 7,
          prezzo_ridotto: 5
        }]
    }),
     methods:{  
    goTodetail(id) {  
      this.$router.push({name:'Spettacolo',params:{Pid:id}})
      }
  }
  }
</script>


<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%; 
}
.v-card h3.display-1 {
  font-size: 24px !important;
}
</style>