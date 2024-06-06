const { connect } = require('mongoose');
const { isDev, db } = require('../config');

module.exports = async () => {
  try {
    const uri = isDev ? `mongodb+srv://standoffclan680:5yZwZh713rApQBjb@cluster0.zk2zedz.mongodb.net/twigram?retryWrites=true&w=majority&appName=Cluster0` : db.uri;
    await connect(uri);

    console.log('database connected');
  } catch (error0) {
    console.log(error0.message);
  }
};
