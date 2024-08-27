import express from 'express';
import { JSONFilePreset } from "lowdb/node";
const db = await JSONFilePreset('./assets/main-data.json', () =>{ourstories:[]});

const router = express.Router();
router.get('/histories', (req, res) =>
{
    res
    .status(200)
    .send(db.data);
})
router.get('histories/:id', (req, res) => {
    const result = db.get("ourhistories")
    .find({id: req.params.id})
    .value();

    if (result) {
        res.send(result)
    }else 
    {
        res
        .status(404)
        .send();
    }
})

router.post('/histories/:id', async (req, res) =>
{
    const post = {
        "id" : 6,
        "name" : "test",
        "description" : "test again"
    }
    
   await db.update(({ourstories}) => ourstories.push(post))
    
    res
        .send('got post');
})

export default router;


