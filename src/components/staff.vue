<template>
<v-container>
<v-row>
    <v-col>
    <h1>Nurse</h1>
  <v-simple-table class="ma-5 pa-5">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            ID
          </th>
          <th class="text-left">
            Name
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in users"
          :key="item.name"
        >
          <td>{{ item.nurseId }}</td>
          <td>{{ item.firstName }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
    </v-col>
      <v-col>
          <h1>PHarmacuciste</h1>
  <v-simple-table class="ma-5 pa-5">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
           ID
          </th>
          <th class="text-left">
            Name
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in users2"
          :key="item.name"
        >
          <td>{{ item.pharmaId }}</td>
          <td>{{ item.firstName }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
    </v-col>
  </v-row>
 
</v-container>

</template>

<script>
import {actionsMixin, cookieValue} from '/home/omar/admin-tem/test/src/data/actions.js';
export default {
  name:'App',
   mixins: [actionsMixin],
  data() {
    return {  
    expanded: [],
     singleExpand: false,
    headers: [
          {
            text: 'ID',
            align: 'start',
            sortable: false,
            value: 'users[nurseId]',
          },
          { text: 'First Name', value: 'firstName' },
          { text: 'Last Name', value: 'patient_Last_Name' },
        
        ],
           headers2: [
          {
            text: 'ID',
            align: 'start',
            sortable: false,
            value: 'pharmaId',
          },
          { text: 'First Name', value: 'firstName' },
          { text: 'Last Name', value: 'patient_Last_Name' },
        
        ],
      users: [],
      users2:[],
    }
  },

 beforeMount(){
    this.getName();
    this.getName2();
  },



  methods :{
      async getName(){
      const headers = { 'X-Access-Token': cookieValue };
      const res = await fetch('http://localhost:3000/api/org.lms.ehr.Nurse',{headers});
      const data = await res.json();
      this.users= data;
      
    },
    
    async getName2(){
      const headers = { 'X-Access-Token': cookieValue };
      const res2 = await fetch('http://localhost:3000/api/org.lms.ehr.Pharma',{headers});
      const data2 = await res2.json();
      this.users2= data2;
      
    },
    
  }

}
</script>
<style></style>