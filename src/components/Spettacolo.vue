<template>
  <div class="Spettacolo">
    <div class="container">
      <div class="row">
        <v-card class="mx-auto" max-width="420">
          <div class="col-md-12" v-for="(product,index) in products" :key="index">
            <div v-if="id == product.id">
              <v-img height="600px" :src="product.src" class="img-fluid"></v-img>
              <v-card-text class="pt-3">
                <div class="font-weight-medium black--text title mb-2">{{product.titolo}}</div>
                <div
                  class="font-weight-medium teal--text subtitle-2 mb-3"
                >{{product.giorno}} alle {{product.ora}}</div>
                <div class="font-weight-light">{{product.trama}}</div>
              </v-card-text>
              <div>
                <v-card-actions class="justify-center">
                  <router-link :to="{name: 'Carrello'}">
                    <v-btn
                      @click="aggiungiCarrello(product)"
                      color="teal lighten-1 white--text"
                    >Aggiungi al carrello</v-btn>
                  </router-link>
                </v-card-actions>
              </div>
            </div>
          </div>
        </v-card>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Spettacolo",
  data() {
    return {
      id: this.$route.params.Pid,

      products: [
        {
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
          descrizione: "Ally fa la cameriera di giorno e si esibisce come can…",
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
            "Molly è soltanto una bambina quando incontra una crea...",
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
          titolo: "L/’ospite",
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
        },
        {
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
            "Riccardo III è sicuramente tra i personaggi più negati…",
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
          descrizione: "Un nuovo allestimento di un grande classico shak…",
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
          titolo: "Vincent Van Gogh – L/’odore assordante del bianco",
          descrizione:
            "Non dev/’essere stato affatto facile per un genio del …",
          trama:
            "Non dev/’essere stato affatto facile per un genio del colore ritrovarsi rinchiuso in un luogo dove non c/’era tonalità diversa dal bianco: una prigione monocromatica per chi invece amava esaltare le infinite sfumature della tavolozza.E/’ il 1899 quando il pittore olandese Vincent Van Gogh si ritrova all/’interno del manicomio di Saint Paul de Manson, a una ventina di chilometri da Arles. Il suo unico desiderio è quello di uscire da quelle austere mura, e la sua prima speranza è riposta nell/’inaspettata visita del fratello Theo, che ha dovuto prendere quattro treni e persino un carretto per andare a trovarlo. Il testo, vincitore nel 2005 del Premio Riccione ‘Pier Vittorio Tondelli’ è stato scritto da Stefano Massini, ad oggi l/’autore teatrale italiano più rappresentato nel mondo. Lo spettacolo viene messo in scena come una metafora del temporaneo isolamento di Vincent Van Gogh, interpretato da Alessandro Preziosi: i tormenti interiori del pittore olandese vengono racchiusi in una sorta di thriller psicologico attorno al tema della creatività artistica che lascia lo spettatore con il fiato sospeso dall/’inizio alla fine.",

          giorno: "Sabato 28",
          ora: "17:00",
          qty_intero: 1,
          qty_ridotto: 0,
          prezzo_intero: 7,
          prezzo_ridotto: 5
        },

        {
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
          titolo: "Philipp von Steinacker",
          descrizione:
            "Concerto con Philipp von Steinacker, direttore, Mirja...",
          trama:
            "Concerto con Philipp von Steinacker, direttore, Mirjam Gruber, soprano e l/'Orchestra Haydn di Bolzano e Trento/.",

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
        }
      ]
    };
  },
  methods: {
    goTodetail(id) {
      this.$router.push({ name: "Spettacolo", params: { Pid: id } });
    },
    aggiungiCarrello(product) {
      this.$store.state.cart;
      this.$store.state.cart.push({
        name: "Carrello",
        id: product.id,
        src: product.src,
        titolo: product.titolo,
        descrizione: product.descrizione,
        qty_intero: product.qty_intero,
        qty_ridotto: product.qty_ridotto,
        prezzo_intero: product.prezzo_intero,
        prezzo_ridotto: product.prezzo_ridotto,
        giorno :product.giorno,
        ora: product.ora
      });
    }
  },
};
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