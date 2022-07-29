<template>
  <div v-if="currentContact" class="edit-form">
    <h4>Contact</h4>
    <form>
      <div class="form-group">
        <label for="firstName">Prénom</label>
        <input type="text" class="form-control" id="firstName" v-model="currentContact.firstName" />
      </div>
      <div class="form-group">
        <label for="lastName">Nom de famille</label>
        <input type="text" class="form-control" id="lastName" v-model="currentContact.lastName" />
      </div>
    </form>
    <button type="submit" class="btn btn-success mr-2" @click="updateContact">
      Modifier
    </button>
    <button class="btn btn-danger" @click="deleteContact">
      Supprimer
    </button>
    <p>{{ message }}</p>
  </div>
  <div v-else>
    <br />
    <p>Sélectionner un contact pour l'afficher.</p>
  </div>
</template>
<script>

import ContactService from '../services/ContactService'
export default {
  name: 'contact',
  data() {
    return {
      currentContact: null,
      message: ''
    }
  },
  methods: {
    getContact(id) {
      ContactService.get(id)
        .then(response => {
          this.currentContact = response.data
          console.log(response.data)
        })
        .catch(e => {
          console.log(e)
        })
    },
    updateContact() {
      ContactService.update(this.currentContact._id, this.currentContact)
        .then(response => {
          console.log(response.data)
          this.message = 'Le contact a été modifié.'
        })
        .catch(e => {
          console.log(e)
        })
    },
    deleteContact() {
      ContactService.delete(this.currentContact._id)
        .then(response => {
          console.log(response.data)
          this.$router.push({ name: 'contact' })
        })
        .catch(e => {
          console.log(e)
        })
    }
  },
  mounted() {
    this.message = ''
    this.getContact(this.$route.params.id)
  }
}
</script>
<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
