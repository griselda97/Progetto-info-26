<template>
  <v-container ref="content">
    <div class="Biglietto"   >
      <div class="container" >
        <div class="row">
          <v-card class="mx-auto text-xs-center" max-width="800">
            <br />
            <h2
              class="font-weight-bold black--text display-1"
            >La tua prenotazione è andata a buon fine!</h2>
            <br />
            <div v-for="(product, index) in cart" :key="index">
              <div class="font-weight-medium black--text title mb-2">Spettacolo:{{product.titolo}}</div>
              <div
                class="font-weight-medium black--text subtitle mb-1"
              >Biglietti interi:{{product.qty_intero}}</div>
              <div
                class="font-weight-medium black--text subtitle mb-1"
              >Biglietti ridotti:{{product.qty_ridotto}}</div>
              <div
                class="font-weight-medium teal--text subtitle-2 mb-3"
              >{{product.giorno}} alle ore {{product.ora}}</div>
              <div
                class="font-weight-medium black--text subtitle mb-1"
              >Prezzo:{{product.prezzo_intero * product.qty_intero+product.prezzo_ridotto * product.qty_ridotto}}€</div>
            </div>
            <div
                class="font-weight-medium black--text subtitle mb-1"
              >Prenotazione effettuada da: {{currentUser}}</div>
            <div>
              <barcode v-bind:value="barcodeValue"></barcode></div>
          </v-card>
        </div>
      </div>
    </div>
    <br />
    <v-btn @click="download" color="teal lighten-1 white--text" larger style="float: right;">Stampa ricevuta</v-btn>
    <br/>
    <br/>
    <br/>
    <div class="text-xs-center"><span class="font-weight-bold title red--text">Per poter usufruire della prenotazione sarà necessario presentarsi alla biglietteria almeno 15 minuti prima dell/'inizio dello spettacolo con una copia della ricevuta di prenotazione. Ricordiamo che i biglietti ridotti sono riservati ai minori di 18 anni e agli over 65.'</span></div>
  </v-container>
</template>

<script>
import VueBarcode from "vue-barcode";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import firebase from "firebase";
export default {
  data: () => ({
    products: [],
    currentUser:false,
    barcodeValue:
      Math.random()
        .toString(36)
        .substring(2, 15) +
      Math.random()
        .toString(36)
        .substring(2, 15)
  }),
  methods: {
    download() {
   const doc = new jsPDF();
   var canvasElement = document.createElement('canvas');
    html2canvas(this.$refs.content, { canvas: canvasElement 
      }).then(function (canvas) {
        const doc = new jsPDF({
        format: [1200, 700]
      });
    const img = canvas.toDataURL("image/jpeg", 2);
    doc.addImage(img,'JPEG',20 ,10);
    doc.save("Biglietto.pdf");
   });
 },
},
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
  components: {
    barcode: VueBarcode
  },
  created(){
      if(firebase.auth().currentUser){
          this.currentUser= firebase.auth().currentUser.email;

      }
  },
 
};
</script>


<style scoped>
</style>
