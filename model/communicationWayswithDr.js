const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const communicationWays = new Schema({
  d_id:{
    type : String
  },
WhatsApp_Link: {
  type: String,
  },
Telegram_Link: {
  },
  FaceBook_Link: {
  type: String,
  },
  Gmail_Link: {
  type: String,
  },
LastUpdateDate: {
    type: Date,
    default: Date.now()
    }
  }); 
module.exports = mongoose.model('CommunicationWays', communicationWays);