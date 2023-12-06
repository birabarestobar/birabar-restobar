const mongoose = require('mongoose');
const URI = 'mongodb+srv://birabarestobar:restobar2023@birabar-restobar.xq4csfb.mongodb.net/restobar?retryWrites=true&w=majority';
mongoose.connect(URI)
  .then(db => console.log('DB is connected'))
  .catch(err => console.error(err));
module.exports = mongoose;
