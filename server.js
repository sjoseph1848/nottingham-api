const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
// const connectDB = require('./config/db');
const colors = require('colors');

// Load env vars 
dotenv.config({ path: './config/config.env' });

// Route files 
const stocks = require('./routes/stocks');

const app = express();

// Body parser 
app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// Mount routers
app.use('/api/v1/stocks', stocks);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));

// Handle unhandle promise rejections 
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    // Close server & exit process 
    server.close(() => process.exit(1));
})