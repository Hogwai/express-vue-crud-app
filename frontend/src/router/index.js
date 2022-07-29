import { createWebHistory, createRouter } from 'vue-router'
import ContactList from '../components/ContactList'
import Contact from '../components/Contact'
import AddContact from '../components/AddContact'

const routes = [
  {
    path: '/',
    alias: '/contact',
    name: 'contact',
    component: ContactList
  },
  {
    path: '/contact/:id',
    name: 'contact-details',
    component: Contact
  },
  {
    path: '/add',
    name: 'add',
    component: AddContact
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
