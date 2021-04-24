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
                <v-card-actions class="justify-center">             
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
          id: 1,
          src: "https://i.ibb.co/YQ7t51x/a-1-p.jpg",
          titolo: "Aladdin",
          descrizione:
            "Aladdin è un ragazzo poverissimoche campa di espedienti...",
          trama:
            "Aladdin è un ragazzo poverissimo che campa di espedienti nella città di Agrabah. Durante un furtarello incontra la principessa Jasmine, cui è stato proibito di uscire dal palazzo reale: ma Jasmine vuole conoscere la sua città, e va in giro spacciandosi per la sua ancella Dalia. Quando Aladdin scopre la vera identità della principessa è troppo tardi: ne è già innamorato, ma sa di essere troppo /'straccione/' per aspirare alla sua mano. Il perfido visir Jafar, stanco del ruolo di eterno secondo e desideroso di impossessarsi del trono del sultano, spedisce Aladdin a rubare una lampada magica che rende chi la possiede potentissimo. Ma dentro la lampada c/'' è un genio e Jafar ha progetti pericolosi dunque Aladdin si terrà stretti lampada e genio, con l/'aiuto della scimmietta Abu e di un velocissimo tappeto magico.",

          giorno: "Sabato 7",
          ora: "21:00",
          qty_intero: 1,
          qty_ridotto: 0,
          prezzo_intero: 7,
          prezzo_ridotto: 5
        },
        {
          id: 2,
          src: "https://i.ibb.co/vXDgHq8/a-star-is-born.jpg",
          titolo: "A Star is born",
          descrizione: "Ally fa la cameriera di giorno e si esibisce come cantante la sera,du...",
          trama:
            "Ally fa la cameriera di giorno e si esibisce come cantante il venerdì sera, durante l'appuntamento en travesti del pub locale. È lì che incontra per la prima volta Jackson Maine, star del rock, di passaggio per un rifornimento di gin. E siccome nella vita di Jack un super alcolico tira l'altro, dalla più giovane età, i due proseguono insieme la serata e Ally si ritrova a prendere a pugni un uomo grande il doppio di lei, reo di essersi comportato da fan molesto. Il resto della storia la conosciamo: la favola di lei comincia quando lui la invita sul palco, rivelando il suo talento al mondo, poi sarà con le sue mani che scalerà le classifiche, mentre la carriera e la tenuta fisica e psicologica di lui rotolano nella direzione opposta, seguendo una china oramai inarrestabile.",

          giorno: "Sabato 14",
          ora: "21:00",
          qty_intero: 1,
          qty_ridotto: 0,
          prezzo_intero: 7,
          prezzo_ridotto: 5
        },
        {
          id: 3,
          src: "https://i.ibb.co/nkCphYp/MIN.jpg",
          titolo: "Men in black",
          descrizione:
            "Molly è soltanto una bambina quando incontra una creatura ali...",
          trama:
            "Molly è soltanto una bambina quando incontra una creatura aliena, che aiuterà a fuggire, e assiste all/'intervento dei Men in Black senza farsi sparaflashare. Tutta la vita conserva il segreto dell/'esistenza degli alieni, sperando un giorno di diventare un agente segreto in tailleur e cravatta neri. Irriducibile nel perseguire il proprio sogno, riesce finalmente a scovare il quartier generale dei Men in Black e a convincere l/'Agente O a prenderla in prova. Abbigliata e armata, l/'Agente (Molly) deve guadagnarsi sul campo il neuralizzatore e affiancare l/'Agente H, indisciplinato e sbruffone. Tra Parigi e Marrakech finiranno per intendersi e salvare il mondragon do da mostri e talpe.",

          giorno: "Sabato 21",
          ora: "21:00",
          qty_intero: 1,
          qty_ridotto: 0,
          prezzo_intero: 7,
          prezzo_ridotto: 5
        },
        {
          id: 4,
          src: "https://i.ibb.co/tx0BC5v/dragon-trainer.jpg",
          titolo: "Dragon Trainer- Il mondo nascosto",
          descrizione:
            "Hiccup ha preso il posto del padre Stoyck come leader …",
          trama:
            "Hiccup ha preso il posto del padre Stoyck come leader di Berk, nonostante del leader debba ancora trovare la stoffa, mentre Sdentato è il nuovo Alfa, il drago da cui tutti gli altri draghi si lasciano guidare. Uomini e draghi convivono, dunque, felicemente e scomodamente, ma l/'utopia ha i giorni contati: Grimmel il Grifagno, assetato killer di Furie Buie, è sulle tracce di Sdentato e ha stretto un patto con i nemici di Hiccup promettendo loro di riportare in gabbia ogni drago in libertà. Non resta che partire, lasciare la propria terra, alla ricerca di quel mondo nascosto di cui vaneggiava Stoyck, per scoprire se si tratti davvero del paradiso dei draghi o soltanto di una leggenda da marinai.",

          giorno: "Sabato 28",
          ora: "21:00",
          qty_intero: 1,
          qty_ridotto: 0,
          prezzo_intero: 7,
          prezzo_ridotto: 5
        },
        {
          id: 5,
          src: "https://i.ibb.co/KjMZ12t/il-releone.jpg",
          titolo: "Il Re Leone",
          descrizione:
            "Simba è il futuro re, il cucciolo di Mufasa, sovrano ...",
          trama:
            "Simba è il futuro re, il cucciolo di Mufasa, sovrano temuto e rispettato, che non cerca la guerra e sa stare entro gli ampi confini del proprio regno. Ma qualcuno trama nell/'ombra per sovvertire l/'ordine costituito e le promesse future: è Scar, l/'invidioso fratello minore di Mufasa, pronto a macchiarsi del più atroce delitto e a prendere il potere con l/'inganno. Esiliato e convinto a torto di essere responsabile della fine dell/'amato padre, Simba cresce lontano dalla Rupe dei Re finché il passato non torna a cercarlo e a domandargli di assumersi le sue responsabilità.",

          giorno: "Domenica 8",
          ora: "21:00",
          qty_intero: 1,
          qty_ridotto: 0,
          prezzo_intero: 7,
          prezzo_ridotto: 5
        },
        {
          id: 6,
          src: "https://i.ibb.co/RY8XTSc/the-rider.jpg",
          titolo: "The Rider",
          descrizione:
            "Nella riserva di Pine Ridge, nel South Dakota, Brady ...",
          trama:
            "Nella riserva di Pine Ridge, nel South Dakota, Brady Blackburn addestra cavalli selvaggi. Giovane cowboy e stella nascente del rodeo, apprende dal suo medico di non poter più cavalcare. Una brutta caduta lo ha disarcionato per sempre, sfondandogli il cranio in maniera quasi fatale. A fianco della sorellina, affetta dalla sindrome di Asperger, e in lotta col padre piegato dal lavoro e dalle responsabilità, cerca una nuova ragione di vita in un Paese che non fa sconti. Nato e cresciuto in quella riserva, Brady è un cowboy Lakota, il giovane rappresentante di una comunità costituitasi attorno alla passione per i cavalli, che cavalcano con le piume sui loro Stetson in onore degli antenati. La regista l'ha osservata a lungo prima di comporre una ballata centrata su Brady e inscritta nella tradizione western, dove gli attori, non professionisti, interpretano personaggi conformi al loro vissuto.",

          giorno: "Domenica 15",
          ora: "21:00",
          qty_intero: 1,
          qty_ridotto: 0,
          prezzo_intero: 7,
          prezzo_ridotto: 5
        },
        {
          id: 7,
          src: "https://i.ibb.co/wCsBtLL/il-regno.jpg",
          titolo: "Il Regno",
          descrizione:
            "Manuel López-Vidal è un vicesegretario regionale pros...",
          trama:
            "Manuel López-Vidal è un vicesegretario regionale prossimo al salto verso la politica nazionale. Con i compagni di partito gestisce un consolidato sistema di potere che mescola corruzione, favoritismi e benefit di lusso. Quando il giro di corruzione viene a galla e cominciano gli interrogatori, Manuel è lasciato solo sia dai capi di Madrid, sia dagli ex amici. Espulso dal /'regno/', braccato dalla stampa e indicato come principale responsabile dello scandalo, non esita a tentare ogni strada pur di salvare la reputazione e la sua stessa vita.",

          giorno: "Domenica 22",
          ora: "21:00",
          qty_intero: 1,
          qty_ridotto: 0,
          prezzo_intero: 7,
          prezzo_ridotto: 5
        },
        {
          id: 8,
          src: "https://i.ibb.co/fFvXHsK/l-039-ospite.jpg",
          titolo: "L’ospite",
          descrizione:
            "Guido (38 anni) ha una relazione con Chiara (33 anni)...",
          trama:
            "Guido (38 anni) ha una relazione con Chiara (33 anni) che viene messa in crisi dalla possibilità che lei sia rimasta incinta. Mentre lui si sente pronto per la paternità lei ci vuole pensare. Nell'attesa, Guido, sperando di farle cambiare idea, se ne va di casa ottenendo ospitalità sia dai suoi genitori che dagli amici. Avrà modo di diventare testimone di storie che non conosceva fino in fondo.",

          giorno: "Domenica 29",
          ora: "21:00",
          qty_intero: 1,
          qty_ridotto: 0,
          prezzo_intero: 7,
          prezzo_ridotto: 5
        }],
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