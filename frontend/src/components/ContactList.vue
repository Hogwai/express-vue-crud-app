<template>
  <div class="list row">
    <div class="col-md-6">
      <h4>Liste des contacts</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(contact, index) in contacts"
          :key="index"
          @click="setActiveContact(contact, index)"
        >
          {{ contact.firstName }} {{ contact.lastName }}
        </li>
      </ul>
      <button class="m-3 btn btn-sm btn-danger" @click="removeAllContacts">
        Supprimer tous les contacts
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentContact">
        <h4>Détail du contact</h4>
        <div>
          <label><strong>ID:</strong></label> {{ currentContact._id }}
        </div>
        <div>
          <label><strong>Prénom:</strong></label> {{ currentContact.firstName }}
        </div>
        <div>
          <label><strong>Nom de famille:</strong></label>
          {{ currentContact.lastName }}
        </div>
        <router-link
          :to="'/contact/' + currentContact._id"
          class="badge badge-warning"
          >Modifier</router-link
        >
      </div>
      <div v-else>
        <br />
        <p>Sélectionner un contact pour le modifier.</p>
      </div>
    </div>
  </div>
</template>
<script>
import ContactService from "../services/ContactService";
export default {
  name: "contacts-list",
  data() {
    return {
      contacts: [],
      currentContact: null,
      currentIndex: -1,
      firstName: "",
    };
  },
  methods: {
    retrieveContacts() {
      ContactService.getAll()
        .then((response) => {
          this.contacts = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveContacts();
      this.currentContact = null;
      this.currentIndex = -1;
    },
    setActiveContact(contact, index) {
      this.currentContact = contact;
      this.currentIndex = contact ? index : -1;
    },
    removeAllContacts() {
      ContactService.deleteAll()
        .then((response) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    searchByName() {
      ContactService.findByTitle(this.firstName)
        .then((response) => {
          this.contacts = response.data;
          this.setActiveContact(null);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveContacts();
  },
};
</script>
<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
