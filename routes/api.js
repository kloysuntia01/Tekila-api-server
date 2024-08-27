import {router} from 'express';
import historiesRouter from './histories.mjs';


module.exports = (db) => {
    router.use(historiesRouter(db));
    return router;
};