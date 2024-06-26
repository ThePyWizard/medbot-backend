import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import routes from './routes/index.js'
import Connection from './config/db.config.js'


dotenv.config()

const app = express()

const PORT = process.env.PORT || 5000

const allowedOrigins = ['http://localhost:5173', 'https://medbot-frontend.vercel.app'];

const corsOptions = {
    origin: function (origin, callback) {
      // Check if the origin is in the allowedOrigins array or if it's undefined (not set)
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
    optionsSuccessStatus: 200,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
};

app.use(cors(corsOptions));
app.options('*', cors())
app.use(express.json({extended: true}))
app.use(express.urlencoded({ extended: true }))
app.get('/', (req, res) => {
    res.send('Agroscape server')
})
app.use('/api', routes)

Connection()

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`))