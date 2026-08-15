
    const express = require("express")


    const {
        createContactController,
        getAllContactsController
    } = require("../controllers/contact.controller");


    const router = express.Router();

    // create contact
    router.post("/create", createContactController);

    // get all contacts
    router.get("/all", getAllContactsController);

    module.exports = router

