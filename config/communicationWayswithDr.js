const Ways = require('../model/communicationWayswithDr');


//Add Communication Ways Info.
const store = (req, res, next) => { 
    let CommunicationWays = new Ways({
        WhatsApp_Link: req.body.WhatsApp_Link,
        Telegram_Link: req.body.Telegram_Link,
        FaceBook_Link: req.body.FaceBook_Link,
        Gmail_Link: req.body.Gmail_Link,
 
    })
    
        CommunicationWays.save()
        .then(response => {
            res.json({
                CommunicationWays,
                message: 'Doctors\'s Communication Ways Info. Added Successfully!'
        })
    })
        .catch(error =>{
            res.json({
                message:'An error occurred!!!' + error
        })
    })
    
    }
//Update Communication Ways Info.
const updateInfo = (req, res, next) => { 
    let ID = req.body.d_id

    
    let updatedData = {
        WhatsApp_Link: req.body.WhatsApp_Link || Ways.WhatsApp_Link,
        Telegram_Link: req.body.Telegram_Link || Ways.Telegram_Link,
        FaceBook_Link: req.body.FaceBook_Link || Ways.FaceBook_Link,
        Gmail_Link: req.body.Gmail_Link || Ways.Gmail_Link
    }
    
    Ways.findByIdAndUpdate(ID, {$set: updatedData})
    .then(() => {
    res.json({
        message: 'Doctor\'s Communication Ways Info. updated successfully!'
        })
    })
        .catch(error => {
            res.json({
                message: 'An error Occured!'
        })
    })
    }
//Delete Communication Ways Info. 

const destroy = (req, res, next) => { 
    let ID = req.body.d_id

    
    let deletedData = {
        WhatsApp_Link: req.body.WhatsApp_Link,
        Telegram_Link: req.body.Telegram_Link,
        FaceBook_Link: req.body.FaceBook_Link,
        Gmail_Link: req.body.Gmail_Link
    }
    
    
    Ways.findByIdAndRemove(ID, {$set: deletedData})
    .then(() => {
    res.json({
        message: 'One Or More Of Your (Doctor) Communication Ways Info. Deleted successfully!'
        })
    })
        .catch(error => {
            res.json({
                message: 'An error Occured!'
        })
    })
    }

    module.exports = {
        store,
        updateInfo,      //update a Doctor Communication Ways Information
        destroy     //delete One Or More Of Communication Ways of doctor.
    }
