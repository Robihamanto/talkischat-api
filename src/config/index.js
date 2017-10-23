import mongodb from 'mongodb';

export default {
  // "port": 3005,
  // "mongoUrl": "mongodb://localhost:27017/chat-api",
  "port": process.env.PORT,
  "mongoUrl": "mongodb://root:12345@ds129315.mlab.com:29315/talkischat",
  "bodyLimit": "100kb"
}
