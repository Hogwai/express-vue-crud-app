import { addNewContact, getContacts, getContactWithID, updateContact, deleteContact } from '../controllers/crmController';

const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            console.log(`Request de: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, getContacts)

        /*.get((req, res) =>
            res.send('Demande GET avec succès'))*/

        /*.post((req, res) =>
            res.send('Demande POST avec succès'));*/
        .post(addNewContact);

    app.route('/contact/:contactId')
        // contact by ID
        .get(getContactWithID)

        // update contact
        .put(updateContact)

        // delete contact
        .delete(deleteContact);

}

export default routes;