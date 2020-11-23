<template>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">
        Patient
        </div>
        <v-list-item-title class="headline mb-1">
          Look at your Patient
        </v-list-item-title>
        <v-list-item-subtitle>Fill the Form to give a patient an appointment</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="35"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
      to="/doctor"
      >
        Button
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
