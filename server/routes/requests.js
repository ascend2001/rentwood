import express from 'express';
import base from '../airtable.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('We are live!');
});

router.get('/getAllApts', (req, res) => {
  base('Apartments').select({
    view: 'Grid view',
  }).eachPage((records, fetchNextPage) => {
    // This function (`page`) will get called for each page of records.

    console.log(records);

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();
  }, (err) => {
    if (err) { console.error(err); }
  });
  // base('Apartments').find('recKL8p22KEOfangX', (err, record) => {
  //   if (err) { console.error(err); return; }
  //   console.log(record);
  // });
});

router.get('/getAllLocations', async(req, res) => {
  try{
    // let data = [];
    const data = await base('Apartments').select({
      view: 'Grid view',
      fields: ['Latitude','Longitude'],
    }).all();
    res.status(202).json(data);
  }
  catch(error){
    res.status(404).json(error.message);
  }
});
export default router;
