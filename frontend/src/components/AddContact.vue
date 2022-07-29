<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="firstName">Prénom</label>
        <input type="text" class="form-control" id="firstName" required="true" v-model="contact.firstName"
          name="firstName" />
      </div>
      <div class="form-group">
        <label for="lastName">Nom de famille</label>
        <input class="form-control" id="lastName" required="true" v-model="contact.lastName" name="lastName" />
      </div>
      <button @click="saveContact" class="btn btn-success">Valider</button>
      <div v-if="!valid" class="alert alert-danger mt-2" role="alert">
        Veuillez vérifier votre saisie.
      </div>
    </div>
    <div v-else>
      <h4>Contact enregistré.</h4>
      <button @click="$router.push('contact')" class="btn btn-warning mr-1">
        Retour
      </button>
      <button class="btn btn-success" @click="newContact">
        Ajouter un nouveau contact
      </button>
    </div>
  </div>
</template>

<script>
import ContactService from "../services/ContactService";
export default {
  name: "add-contact",
  data() {
    return {
      contact: {
        _id: null,
        firstName: "",
        lastName: "",
      },
      submitted: false,
      valid: true
    };
  },
  methods: {
    saveContact() {
      var data = {
        firstName: this.contact.firstName,
        lastName: this.contact.lastName,
      };
      ContactService.create(data)
        .then((response) => {
          if (response.data.errors != undefined) {
            this.valid = false;
          } else {
            this.contact._id = response.data.id;
            this.submitted = true;
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },

    newContact() {
      this.submitted = false;
      this.valid = true;
      this.contact = {};
    },
  },
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
