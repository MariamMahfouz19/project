const dynpgfrdr = require('../model/dynpgfrdr');
const User = require('../model/User');
const upload = require('../utils/multer');
const cloudinary = require('../utils/cloudinary');
// Show the list of Patients
const index = (req, res, next) => {
    dynpgfrdr.find({d_id: req.body.d_id})
        .then(response => {
            res.json({
                response
            })
        })
        .catch(error => {
            res.json({
                message: 'An error Occured!'
            })
        })
}

//Show an Patient By Name
const show = (req, res, next) => {
    let patientName = req.body.patientName
    dynpgfrdr.find({ patientName: patientName })
        .then(response => {
            res.json({
                response
            })
        })
        .catch(err => {
            message: 'An error occurred'
        })

}


//Adding a new Patient
const store = async (req, res) => {
    try {
        let result;
        if(req.file){
        result = await cloudinary.uploader.upload(req.file.path);
        }
        let patient = new dynpgfrdr({
            d_id: req.body.d_id,
            patientName: req.body.patientName,
            patientAge: req.body.patientAge,
            patientPhoneNumber: req.body.patientPhoneNumber,
            patientUsername: req.body.patientUsername,
            patientEmail: req.body.patientEmail,
            patientPassword: req.body.patientPassword,
            cancerType: req.body.cancerType,
            diagnosisOfDisease: req.body.diagnosisOfDisease,
            drugs_names: req.body.drugs_names,
            patientGender: req.body.patientGender,
           /* avatar:result?result.secure_url:undefined,
            cloudinary_id:result?result.public_id:undefined,*/
            //images : req.body.images,
            /*pathologicalAnalysisImages: req.body.pathologicalAnalysisImages,
            xraysImages: req.body.xraysImages,
            drugSheetImages: req.body.drugSheetImages,*/
            doctorInstructionsAndNotes: req.body.doctorInstructionsAndNotes,
            abnormal_Symptoms: req.body.abnormal_Symptoms,
            additional_Info: req.body.additional_Info

        });
        await patient.save();
        res.json(
            {
                message: 'Patient Added Successfully!'
            })
        //res.json(patient)

    } catch (err) {
        console.log(err);
        res.json({
            message: 'An error occurred!!!'
        })
    }
}
/*const store = (req, res, next) => { 
let patient = new dynpgfrdr({
    patientName: req.body.patientName,
    patientAge: req.body.patientAge,
    patientPhoneNumber: req.body.patientPhoneNumber,
    patientUsername: req.body.patientUsername,
    patientEmail: req.body.patientEmail,
    patientPassword:req.body.patientPassword,
    cancerType: req.body.cancerType,
    diagnosisOfDisease: req.body.diagnosisOfDisease,
    drugs_names: req.body.drugs_names,
    patientGender: req.body.patientGender,
    images : req.body.images,
    /*pathologicalAnalysisImages: req.body.pathologicalAnalysisImages,
    xraysImages: req.body.xraysImages,
    drugSheetImages: req.body.drugSheetImages,
    doctorInstructionsAndNotes: req.body.doctorInstructionsAndNotes,
    abnormal_Symptoms : req.body.abnormal_Symptoms,
    additional_Info : req.body.additional_Info
})

    patient.save()
    .then(response => {
        res.json({
            message: 'Patient Added Successfully!'
    })
})
    .catch(error =>{
        res.json({
            message:'An error occurred!!!' + error
    })
})

}*/

//Update Patient Information
const update = async (req, res) => {
    try {
        let Dynpgfrdr = await dynpgfrdr.findById(req.params.id)

        let uploadResult;
        if (req.file) {
            if (Dynpgfrdr.cloudinary_id) {
                await cloudinary.uploader.destroy(Dynpgfrdr.cloudinary_id)
            }
            uploadResult = await cloudinary.uploader.upload(req.file.path);
        }

        let updatedData = {
            d_id : req.body.d_id || dynpgfrdr.d_id,
            patientName: req.body.patientName || dynpgfrdr.patientName,
            patientAge: req.body.patientAge || dynpgfrdr.patientAge,
            patientPhoneNumber: req.body.patientPhoneNumber || dynpgfrdr.patientPhoneNumber,
            patientUsername: req.body.patientUsername || dynpgfrdr.patientUsername,
            patientEmail: req.body.patientEmail || dynpgfrdr.patientEmail,
            patientPassword: req.body.patientPassword || dynpgfrdr.patientPassword,
            cancerType: req.body.cancerType || dynpgfrdr.cancerType,
            diagnosisOfDisease: req.body.diagnosisOfDisease || dynpgfrdr.diagnosisOfDisease,
            drugs: req.body.drugs || dynpgfrdr.drugs,
            patientGender: req.body.patientGender || dynpgfrdr.patientGender,
            // avatar: result.secure_url || dynpgfrdr.avatar,
            // cloudinary_id: result.public_id || dynpgfrdr.cloudinary_id,
            xraysImages: req.body.xraysImages || dynpgfrdr.xraysImages,
            drugSheetImages: req.body.drugSheetImages || dynpgfrdr.drugSheetImages,
            doctorInstructionsAndNotes: req.body.doctorInstructionsAndNotes || dynpgfrdr.doctorInstructionsAndNotes
        };

        if (uploadResult) {
            updatedData.avatar = uploadResult.secure_url;
            updatedData.cloudinary_id = uploadResult.public_id;
        }

        Dynpgfrdr = await dynpgfrdr.findByIdAndUpdate(req.params.id, updatedData, { new: true })
        res.json({
            message: 'Patient Updated successfully!!!'
        }
        )
    } catch (err) {

        console.log(err);
        res.json({
            message: 'An error Occured!!!'
        })
    }
}



/*
const update = (req, res, next) => {
let patientID = req.body.patientID
let updatedData = {
    doctorID: req.body.doctorID || dynpgfrdr.doctorID,
    patientName: req.body.patientName || dynpgfrdr.patientName,
    patientAge: req.body.patientAge || dynpgfrdr.patientAge,
    patientPhoneNumber: req.body.patientPhoneNumber || dynpgfrdr.patientPhoneNumber,
    patientUsername: req.body.patientUsername || dynpgfrdr.patientUsername,
    patientEmail: req.body.patientEmail || dynpgfrdr.patientEmail,
    patientPassword: req.body.patientPassword || dynpgfrdr.patientPassword,
    cancerType: req.body.cancerType || dynpgfrdr.cancerType,
    diagnosisOfDisease: req.body.diagnosisOfDisease || dynpgfrdr.diagnosisOfDisease,
    drugs_names: req.body.drugs_names || dynpgfrdr.drugs_names,
    patientGender: req.body.patientGender || dynpgfrdr.patientGender,
    avatar: result.secure_url || dynpgfrdr.avatar, 
    cloudinary_id:result.public_id || dynpgfrdr.cloudinary_id,
    pathologicalAnalysisImages: req.body.pathologicalAnalysisImages,
    xraysImages: req.body.xraysImages,
    drugSheetImages: req.body.drugSheetImages,
    doctorInstructionsAndNotes: req.body.doctorInstructionsAndNotes,
    doctorInstructionsAndNotes: req.body.doctorInstructionsAndNotes,
    abnormal_Symptoms : req.body.abnormal_Symptoms,
    additional_Info : req.body.additional_Info
}

dynpgfrdr.findByIdAndUpdate(patientID, {$set: updatedData})
.then(() => {
res.json({
    message: 'Patient updated successfully!'
    })
})
    .catch(error => {
        res.json({
            message: 'An error Occured!'
    })
})
}
*/
//Delete Patient information

const destroy = async (req, res) => {
    try {
        // Find user by id
        let Dynpgfrdr = await dynpgfrdr.findById(req.params.id);
        console.log(req.params.id);
        console.log(Dynpgfrdr);
        // Delete image from cloudinary
       if(Dynpgfrdr.cloudinary_id) {
       await cloudinary.uploader.destroy(Dynpgfrdr.cloudinary_id);
    }
        // Delete user from db
        await Dynpgfrdr.remove();
        res.json({
            message: 'Patient deleted successfully!!!'
        })
        
        // Dynpgfrdr);
    } catch (err) {
        // res.json({
        //message: 'An error Occured!!!'
        console.log(err)
        // })
    }
    // console.log(err);
}

/*
(req, res, next) => { let patientID = req.body.patientID
dynpgfrdr.findByIdAndRemove(patientID)
.then(() => {
    res.json({
        message: 'Patient deleted successfully!!!'
    })
})
    .catch(error => {
        res.json({
        message: 'An error Occured!!!'
    })
})
}*/
module.exports = {
    index,          // Show Set of Patients
    show,          //Show a Patient
    store,        //Adding a Patient
    update,      //update a Patient Information
    destroy     //delete a  Patient
}
