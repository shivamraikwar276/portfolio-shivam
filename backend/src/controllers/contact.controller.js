
const contactModel = require("../models/contact.model")


async function createContactController(req, res) {
    
    try{
        const { name , email, subject, message } = req.body

    if (!name || !email || !subject || !message) {
    return res.status(400).json({
        success: false,
        message: "All fields are required"
    });
}

    

    const contact = await contactModel.create({
        name,
        email,
        subject,
        message
      });

      return res.status(201).json({
      success: true,
      message: "Contact message saved successfully",
      contact,
    });
    
    }

    

    catch(err){
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
}
    async function getAllContactsController(req, res) {
        
        try{
            const contacts = await contactModel.find();

        res.status(200).json({
            success: true,
            contacts,
        });
        
        }

        catch(err){
            res.status(500).json({
                success: false,
                message: err.message
            });
        }
    }

module.exports = {
      createContactController,
      getAllContactsController
}





