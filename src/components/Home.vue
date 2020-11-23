<template>
 <v-app :style="{background: $vuetify.theme.themes.light.background}">
   <v-layout row>
     <v-flex md3>
      <v-app :style="{background: $vuetify.theme.themes.light.background}">
         <v-container>
           <v-flex>
             <v-card class="ma-5 text-center mt-8" shaped elevation="10">
               <v-avatar class="mt-n7" size="60" elevation="10">
                 <img src="https://pbs.twimg.com/profile_images/1174748316606877696/x06HV-k5_400x400.jpg">
               </v-avatar>
                <v-card-title class="layout justify-center">
                  <tr v-for="user in data" :key="user.pharmaId">
                       
                        <td>{{user.pharmaId}}</td>
                    </tr>
                  </v-card-title>
                <v-card-subtitle class="layout justify-center">22 year</v-card-subtitle>
                <v-list class="mt-n5">
                  <v-list-item>
                  <v-list-item-title class="cyan--text text--darken-1">Blood</v-list-item-title>
                   <v-list-item-title class="cyan--text text--darken-1">Heights</v-list-item-title>
                    <v-list-item-title class="cyan--text text--darken-1">Weights</v-list-item-title>
                  </v-list-item>
                  <v-list-item class="mt-n5">
                    <v-list-item-subtitle>+A</v-list-item-subtitle>
                    <v-list-item-subtitle>178</v-list-item-subtitle>
                    <v-list-item-subtitle>NAN</v-list-item-subtitle>
                  </v-list-item>
                </v-list>
             </v-card>
           </v-flex>
          <v-flex>
            <v-card class="ma-5 mt-n2" shaped elevation="10">
                <v-list>
                  <v-list-item>
                    <v-list-item-avatar size="10" color="cyan darken-1"></v-list-item-avatar>
                    <v-list-item-title class="ml-n2"></v-list-item-title>
                    <v-list-item-subtitle>10 mg</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title class="cyan--text text--darken-1">MOn</v-list-item-title>
                    <v-list-item-title class="cyan--text text--darken-1">WED</v-list-item-title>
                    <v-list-item-title class="cyan--text text--darken-1">FRI</v-list-item-title>
                    <v-list-item-title class="cyan--text text--darken-1">SUN</v-list-item-title>
                  </v-list-item>
                  <v-list-item class="mt-n5">
                    <v-list-item-subtitle>hhhh</v-list-item-subtitle>
                   
                  </v-list-item>
                  <v-divider></v-divider>
                </v-list>
                <v-list two-line="" subheader="">
                  <v-list-item>
                    <v-list-item-avatar size="35">
                      <img src="https://pbs.twimg.com/profile_images/1174748316606877696/x06HV-k5_400x400.jpg">
                    </v-list-item-avatar>
                    <v-list-item-content class="ml-n2">
                      <v-list-item-title>
                           <tr v-for="user in data" :key="user.pharmaId">
                       
                        <td>pharmaciste.{{user.pharmaId}}</td>
                    </tr>
                      </v-list-item-title>
                     
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
                <v-list two-line="" subheader="" class="mt-n5"> 
                  <v-list-item>
                     <v-list-item-title>Surgeon</v-list-item-title>
                      <v-list-item-subtitle>Cancer </v-list-item-subtitle>

                  </v-list-item>
                </v-list>
                <v-list two-line="" subheader="" class="my-n8">
                  <v-list-item>
                    <v-list-item-title class="cyann--text text--darken-1">Date</v-list-item-title>
                   <v-list-item-title class="cyann--text text--darken-1">Time</v-list-item-title>
                  </v-list-item>
                <v-list-item>
                    <v-list-item-title>20 DEC 2020</v-list-item-title>
                    <v-list-item-title >14H30</v-list-item-title>
                  </v-list-item>
                </v-list>
            </v-card> 
          </v-flex>
         </v-container>
         
        <v-flex>
            <v-card class="ma-5 text-center mt-6" shaped elevation="5">
            <v-list-item three-line="">
              <v-list-item-content>
                <v-list-item-title class="headline mb-1">
                  <v-icon>far fa-credit-card</v-icon>
                  
                </v-list-item-title>
                <v-list-item-subtitle>4567890097654334567890</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            </v-card>
        </v-flex> 
    </v-app>
    </v-flex>
   <v-flex md9>
     <v-app :style="{background: $vuetify.theme.themes.dark.background}" class="rounded">
       <v-container>
         <v-flex>
           <v-list class="mt-5">
             <v-list-item>
             <v-list-item-title class="cyan--text text--darken-1">Examination</v-list-item-title>
              <v-list-item-action>
                <v-btn  class="ma-2" tile outlined="" color="cyan darken-1">
                  <v-icon left>fas fa-eye</v-icon> See ALL
                </v-btn>
              </v-list-item-action>
             </v-list-item>
           </v-list>
         </v-flex>
    <v-flex>
      <v-row no-gutter>
        <v-col cols="12" md="4">
          <v-row>
            <v-col cols="12" md="2">
              <v-card height="80px" width="10px" color="green"></v-card>
            </v-col>
            <v-col cols="12" md="10">
              <card></card>
            </v-col>
          </v-row>
        </v-col>
         <v-col cols="12" md="4">
          <v-row>
            <v-col cols="12" md="2">
              <v-card height="80px" width="10px" color="green"></v-card>
            </v-col>
            <v-col cols="12" md="10">
              <cardcopy></cardcopy>
            </v-col>
          </v-row>
        </v-col>
         <v-col cols="12" md="4">
          <v-row>
            <v-col cols="12" md="2">
              <v-card height="80px" width="10px" color="green"></v-card>
            </v-col>
            <v-col cols="12" md="10">
             <cardcopy2></cardcopy2>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-flex>
    <v-flex class="mt-12">
      <v-row no-gutters="">
        <v-col cols="12" md="6">
          <v-flex> 
            <v-list class="ml-10">
              <v-list-item>
                <v-list-item-title class="cyan--text text--darken-1">Prescription </v-list-item-title>
              
              </v-list-item>
            </v-list>
          </v-flex>
          <v-flex>
            <pres></pres>
          </v-flex>
          
         </v-col> 
          <v-col cols="12" md="6">
            <v-flex class="ml-10">
              <v-list>
                <v-list-item>
                  <v-list-item-title class="cyan--text text--darken-1">Order</v-list-item-title>
                </v-list-item>

              </v-list>


            </v-flex>
            <v-flex >
           
                <order></order>
          
            </v-flex>

          </v-col>
         

        
      </v-row>
    </v-flex>





       </v-container>
     </v-app>


   </v-flex>

   </v-layout>

 </v-app>
</template>

<script>
import pres from '/home/omar/Music/pharma/medical/src/components/pres'
import card from '/home/omar/Music/pharma/medical/src/components/card'
import cardcopy from '/home/omar/Music/pharma/medical/src/components/cardcopy'
import cardcopy2 from '/home/omar/Music/pharma/medical/src/components/cardcopy2'

import order from '/home/omar/Music/pharma/medical/src/components/order'
import {actionsMixin, cookieValue} from '/home/omar/admin-tem/test/src/data/actions.js';
const gradients=[
 ["#222"],
 ["#42b3f4"],
 ["red","orange","yellow"],
 ["purple","violet"],
 ["#00c6ff","#F0F","#1feaea"],
 ["#f72047","ffd200","#1feaea"],
]

export default {
  mixins: [actionsMixin],
  components: {
    pres,
    order,
    card,
    cardcopy,
    cardcopy2
    },
  data: () =>({
    action: cookieValue,
    data: {},
    with:2,
    radius:10,
    padding:8,
    linceCap:'round',
    gradient: gradients[5],
    value:[0,2,5,9,5,1,0,3,5,0,0,1,8,2,9,8],
    gradientDirection:'top',
    gradients,
    fill:false,
    type:'trend',
    autoLineWisth:false,
    arrayEvents:null,
    date2: new Date().toISOString().substr(0,10),
  }),
  computed:{
    theme(){
      return this.$vuetify.theme.dark ? "dark" : "light";
  }
},
beforeMount(){
    this.getName();
  },
mounted (){
  this.arrayEvents=[...Array(6)].map(() =>{
    const day=Math.floor(Math.random() *30)
    const d= new Date()
    d.setDate(day)
    return d.toISOString().substr(0,10)
 })
},
methods:{ 
  
  functionEvents (date){
    const [,, day]=date.split('-')
    if([12,17,28].includes(parseInt(day,10))) return true
    if([1,19,22].includes(parseInt(day,10))) return ['red','#00f']
    return false
  },
  async getName(){
      const headers = { 'X-Access-Token': cookieValue };
      const res = await fetch('http://localhost:3000/api/org.lms.ehr.Pharma',{headers});
      const data = await res.json();
      this.data = data;
    },
  
}

}
</script>

<style scoped>
.rounded{
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
}
</style>