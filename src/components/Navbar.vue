<template>
    <nav>
        <v-navigation-drawer v-model="drawer" dark app mini-variant mini-variant-width="100" class="cyan darken-1">
            <v-list>
                <v-list-item class="mb-12">
                    <v-list-item-action></v-list-item-action>
                </v-list-item>
            </v-list>
            <v-list flat>
                <v-list-item router to="/">
                    <v-list-item-content>
                        <v-icon class="mb-2">dashboard</v-icon>
                    <v-list-item-subtitle align="center">Dashboard</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item router to="/doctor">
                    <v-list-item-content>
                        <v-icon class="mb-2">fas fa-notes-medical</v-icon>
                    <v-list-item-subtitle align="center">MyPatient</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item router to="/doc">
                    <v-list-item-content>
                        <v-icon class="mb-2">fas fa-signature</v-icon>
                    <v-list-item-subtitle align="center">Give a Prescreption </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item router to="/get">
                    <v-list-item-content>
                        <v-icon class="mb-2">fas fa-signature</v-icon>
                    <v-list-item-subtitle align="center">Give an Appointment</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item router to="/staff">
                    <v-list-item-content>
                        <v-icon class="mb-2">fas fa-user-md</v-icon>
                    <v-list-item-subtitle align="center">Staff departemtn</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-list style="position: absolute; bottom:0" class="ml-3" flat>
                <v-list-item router to="/sign">
                    <v-list-item-action>
                        <v-icon class="mb-2">fas fa-sign-out-alt</v-icon>
                    
                    </v-list-item-action>
                </v-list-item>
                
                
                

            </v-list>

        </v-navigation-drawer>
    </nav>
</template>

<script>



export default {

    data: () => ({
        drawer: true

    })

}
</script>

<style>

</style>