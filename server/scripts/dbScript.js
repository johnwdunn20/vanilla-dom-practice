const db = require('../models/model')

const insertTestRecord = async () => {
  try {
    const data = await db.User.create({
      username: 'test',
      password: 'test'
    })
    console.log('Inserted: ', data);
  } catch (e) {
    console.log('Error: ', e);
  }
};

insertTestRecord();