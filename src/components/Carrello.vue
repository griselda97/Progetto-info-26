<template>
  <v-container id="cart" >
    <h2 class="display-2 mb-4" style="text-align: center">Carrello</h2>
<v-list two-line >
      <div v-for="(product, index) in cart" :key="index">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <v-img :src="product.src"></v-img>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>{{product.titolo}} </v-list-tile-title>
            <v-list-tile-sub-title>{{product.descrizione}} </v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile></v-list-tile>
          <v-list-tile></v-list-tile>

          <v-list-tile>Intero</v-list-tile>
            <v-list-tile-action>
            <v-list-tile>
              <input v-model="product.qty_intero" class="form-control input-qty" type="number" /> 
            </v-list-tile>
          </v-list-tile-action>

          <v-list-tile>Ridotto</v-list-tile>
          <v-list-tile-action>
            <v-list-tile>
              <input v-model="product.qty_ridotto" class="form-control input-qty" type="number" min="0" />
            </v-list-tile>
          </v-list-tile-action>

          <v-list-tile>{{product.prezzo_intero * product.qty_intero+product.prezzo_ridotto * product.qty_ridotto}}€</v-list-tile>

          <v-list-tile-action>
            <v-btn icon ripple  @click="removeItem(index)">
              <v-icon color="red lighten-1">delete</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
        <v-divider v-if="index + 1 < products.length" :key="index"></v-divider>
      </div>
    </v-list>      
    <v-container v-if="oggetti !==0 ">
      <router-link :to="{name: 'CheckOut'}"><v-btn @click="prenota(product)" color="success" larger style="float: right;">Prenota</v-btn></router-link>
    </v-container>
    <v-container v-else>
      <div class="container my-1" style="text-align: center">
        <img src="https://i.ibb.co/rmfWSXr/carrello.png" width="180px" />
        <div class="mt - 4">
            <h1 class="blu fw ">Il tuo carrello è vuoto</h1>
            <h2 class="blu fw">Per prenotare uno spettacolo torna alla homepage</h2>
        </div>
    <v-container>
      <v-btn @click="$router.push('/')" color="teal lighten-1 white--text" larger style="float: center;">Homepage</v-btn>
    </v-container>  

    </div>
    </v-container>
  
    
  </v-container>

 
</template>

<script>
export default {
  data: () => ({
     products: [],
  }),
    methods: {
		// Remove item by its index
    removeItem(product) {
      this.$store.state.cart.splice(this.$store.state.cart.indexOf(product), 1);
    },
    prenota(product) {
      this.$store.state.cart;
      this.$store.state.cart.push({
        name: "Prenota",
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
    
  computed:{
    cart(){
       return this.$store.state.cart;
    },
    oggetti(product){
      let oggetto=0;
      this.$store.state.cart.map( el => {
        oggetto += el["qty_intero"] +  el["qty_ridotto"];
      });
      return oggetto;
      }
  },
  
};
</script>

<style scoped>
.blu {
 color: darkcyan;
}

.fw{
 font-weight: 1200;
}

</style>