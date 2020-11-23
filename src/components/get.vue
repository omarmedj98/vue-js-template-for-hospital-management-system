<template>
 <v-container fluid class="pa-5 ma-5">

     <h1>give an appointment</h1>
  
  <ValidationObserver ref="observer">
    <form class="pa-10">
      
      <ValidationProvider  name="Class" >
       <v-select
          v-model="post.$class"
          :items="options"
         
          label="Select"
          data-vv-name="select"
        
        ></v-select>
      </ValidationProvider>
        <ValidationProvider  name="appid" >
       <v-text-field
          v-model="post.appID"
          :counter="10"
          :error-messages="errors"
          label="Id"
          required
        ></v-text-field>
      </ValidationProvider>
       
        <ValidationProvider  name="doctor" >
       <v-text-field
          v-model="post.doctor"
          :counter="10"
          :error-messages="errors"
          label="doctor"
          required
        ></v-text-field>
      </ValidationProvider>
      <ValidationProvider  name="patient" >
        <v-text-field
          v-model="post.patient"
          :counter="10"
          :error-messages="errors"
          label="patient"
          required
        ></v-text-field>
      </ValidationProvider>
      <ValidationProvider  name="medicalrecord">
        <v-text-field
          v-model="post.medicalRecord"
          :error-messages="errors"
          label="medicalrecord"
          required
        ></v-text-field>
      </ValidationProvider>
     
       <ValidationProvider  name="time">
        <v-text-field
          v-model="post.datafield"
          :error-messages="errors"
          label="time"
          required
        ></v-text-field>
      </ValidationProvider>

      <v-btn class="mr-4" @click="submit">submit</v-btn>
      <v-btn @click="clear">clear</v-btn>
    </form>
  </ValidationObserver>


 </v-container>
</template>

<script>
  import { required, email, max } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

  setInteractionMode('eager')

  extend('required', {
    ...required,
    message: '{_field_} can not be empty',
  })

  extend('max', {
    ...max,
    message: '{_field_} may not be greater than {length} characters',
  })

  extend('email', {
    ...email,
    message: 'Email must be valid',
  })
import {actionsMixin, cookieValue} from '/home/omar/admin-tem/test/src/data/actions.js';

  export default {

  mixins: [actionsMixin],
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      action: cookieValue,
      post: {},
      data: {},
      name: '',
      email: '',
      select: null,
       options: [
        { value: 'org.lms.ehr.take_appointment', text: 'Give Appointment' },
      ],
      checkbox: null,
    }),

    methods: {
      async submit () {
        const headers = {'X-Access-Token': cookieValue,
      "Content-Type": "application/json"
     

      };
      const { data } = await fetch(
        "http://localhost:3000/api/org.lms.ehr.take_appointment",{
          method: "POST",
          body:JSON.stringify(this.post),
          headers:headers
        },
      );
      this.data = data;
      },
      clear () {
        this.name = ''
        this.email = ''
        this.select = null
        this.checkbox = null
        this.$refs.observer.reset()
      },


    async createPost() {
      const headers = {'X-Access-Token': cookieValue,
      "Content-Type": "application/json"
     

      };
      const { data } = await fetch(
        "http://localhost:3000/api/org.lms.ehr.RemoveOthersToRead",{
          method: "POST",
          body:JSON.stringify(this.post),
          headers:headers
        },
      );
      this.data = data;
    }













    },
  }
</script>