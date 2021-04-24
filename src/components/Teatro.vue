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
          id: 11,
          src: "https://i.ibb.co/qdBKGcR/teatro-it-roberto-bolle-friends.jpg",
          titolo: "Roberto Bolle & Friends",
          descrizione:
            "II Gala Roberto Bolle and Friends si sono trasformati n…",
          trama:
            "II Gala Roberto Bolle and Friends si sono trasformati nelle mani di Roberto Bolle, qui nei panni non solo di interprete, ma anche di direttore artistico, in un potente strumento culturale di diffusione della danza, attirando ogni anno migliaia di persone. Bolle, forte della sua intensissima esperienza internazionale, è riuscito ogni volta a ricreare per ognuno di questi appuntamenti uno spettacolo magico, riunendo alcuni dei più importanti ballerini del mondo e dando vita con loro a programmi vivaci, sorprendenti, che hanno saputo coinvolgere pubblici eterogenei e mai così vasti finora. Dai grandi classici, alle coreografie più nuove, il Roberto Bolle and Friends ha radunato ogni anno il meglio della danza del mondo, offrendo una possibilità culturale rara e prestigiosa e infrangendo alcuni tabù che costringevano il balletto nella definizione di arte di nicchia.",

          giorno: "Sabato 7",
          ora: "17:00",
          qty_intero: 1,
          qty_ridotto: 0,
          prezzo_intero: 7,
          prezzo_ridotto: 5
        },
        {
          id: 12,
          src: "https://i.ibb.co/MpZTQDC/RICCARDO.jpg",
          titolo: "Riccardo III, Shakespeare a Villa Borghese",
          descrizione:
            "Riccardo III è sicuramente...",
          trama:
            "Riccardo III è sicuramente tra i personaggi più negativi del teatro shakespeariano anche se il suo è il riflesso del negativo che lo circonda  Infatti gioca con ironia sarcastica con se stesso e con il destino degli altri come un attore sul palcoscenico del mondo che mette la sua esistenza sempre al limite dell/’umano, camminando come sulla lama di un coltello e sempre in equilibrio tra la vita e la morte. In un rituale macabro da roulette russa.",

          giorno: "Sabato 14",
          ora: "17:00",
          qty_intero: 1,
          qty_ridotto: 0,
          prezzo_intero: 7,
          prezzo_ridotto: 5
        },

        {
          id: 13,
          src: "https://i.ibb.co/s5DztxQ/macbeth.jpg",
          titolo: "Macbeth",
          descrizione: "Un nuovo allestimento di un grande classico shakespeariano...",
          trama:
            "Un nuovo allestimento di un grande classico shakespeariano messo in scena dalla Compagnia Regionale, in prima nazionale. Nasce dal grande amore per il drammaturgo inglese il desiderio della regista Serena Sinigaglia di confrontarsi con il dramma più ‘oscuro’ del Bardo, interpretato da una compagnia di ben quattordici elementi. La drammaturgia è frutto di uno studio attento del testo e delle singole parole, operato con l/’intento di sfatare i pregiudizi costruiti intorno alla tragedia secondo cui Macbeth e la Lady non sanno gestire la propria ambizione e le conseguenze delle proprie azioni. Il risultato è un ‘Macbeth’ che restituisce la concretezza  e i toni popolari della lingua di Shakespeare, con un/’immagine molto più ‘terrestre’ di Macbeth e Lady Macbeth: due protagonisti che vogliono ardentemente possedere lo scettro del potere, ma semplicemente «non sono capaci, sono inetti, sono tragicomici buffoni, si agitano sul palcoscenico del potere per pochi istanti e poi svaniscono, inghiottiti con facilità da gente più abile di loro.",

          giorno: "Sabato 21",
          ora: "17:00",
          qty_intero: 1,
          qty_ridotto: 0,
          prezzo_intero: 7,
          prezzo_ridotto: 5
        },
        {
          id: 14,
          src: "https://i.ibb.co/j5cRprZ/van-gogh.jpg",
          titolo: "Vincent Van Gogh – L’odore assordante del bianco",
          descrizione:
            "Non dev/’essere stato affatto...",
          trama:
            "Non dev/’essere stato affatto facile per un genio del colore ritrovarsi rinchiuso in un luogo dove non c/’era tonalità diversa dal bianco: una prigione monocromatica per chi invece amava esaltare le infinite sfumature della tavolozza.E/’ il 1899 quando il pittore olandese Vincent Van Gogh si ritrova all/’interno del manicomio di Saint Paul de Manson, a una ventina di chilometri da Arles. Il suo unico desiderio è quello di uscire da quelle austere mura, e la sua prima speranza è riposta nell/’inaspettata visita del fratello Theo, che ha dovuto prendere quattro treni e persino un carretto per andare a trovarlo. Il testo, vincitore nel 2005 del Premio Riccione ‘Pier Vittorio Tondelli’ è stato scritto da Stefano Massini, ad oggi l/’autore teatrale italiano più rappresentato nel mondo. Lo spettacolo viene messo in scena come una metafora del temporaneo isolamento di Vincent Van Gogh, interpretato da Alessandro Preziosi: i tormenti interiori del pittore olandese vengono racchiusi in una sorta di thriller psicologico attorno al tema della creatività artistica che lascia lo spettatore con il fiato sospeso dall/’inizio alla fine.",

          giorno: "Sabato 28",
          ora: "17:00",
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