import express from 'express';
import createError from 'http-errors';
import cookieParser from 'cookie-parser';
import path from 'node:path';
import historiesRoute from './routes/histories.mjs';

const __dirname = import.meta.dirname;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use('/public', express.static(path.join(__dirname, 'public')))

app.use('/api', historiesRoute);

app.use('/api/images', express.static('images'));

app.use((req, res, next) => {
    next(createError(404));
})

app.use((err, req, res, next) =>{
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    res.status(err.status || 500).send();
})

app.listen(5002, () => {
    console.log('Listening Port 5002');
});

