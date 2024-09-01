import express from 'express';
import historyRepository  from '../histories/historyRepository.mjs';
import { JSONFilePreset } from "lowdb/node";
const db = await JSONFilePreset('./assets/main-data.json', () =>{ourstories:[]});

const router = express.Router();
router.get('/histories', (req, res, next) =>
{
    const histories = historyRepository;
    histories.get((data) => {
        res
        .status(200)
        .json({
            "status" : 200,
            "statusText" : "OK",
            "message": "All histories",
            "data" : data
        });
    }, (err) => {
        next(err);
    });

});
router.get('/histories/:id', async(req, res, next) => {
    const histories = historyRepository;
    histories.getById(req.params.id, (data) => {
        res
        .status(200)
        .json({
            "status" : 200,
            "statusText" : "OK",
            "message": "Single history",
            "data" : data
        });
    }, (err) => {
        next(err);
    });

})

// router.post('/histories/:id', async (req, res) =>
// {
//     const post = {
//         "id" : 6,
//         "name" : "test",
//         "description" : "test again"
//     }
    
//    await db.update(({ourstories}) => ourstories.push(post))
    
//     res
//         .send('got post');
// })

export default router;


