const axios = require('axios')
const dotenv = require('dotenv');

// Load env vars 
dotenv.config({ path: './config/config.env' });

exports.getStocks = async (req, res, next) => {
    try {
        const getActiveStocks = async () => {
            try {
                return await axios.get(`https://financialmodelingprep.com/api/v3/actives?apikey=${process.env.FIN_KEY}`)
            } catch (error) {
                console.error(error)
            }
        }
        const stocks = await getActiveStocks();
        res.status(200).json({ success: true, data: stocks.data })
    } catch (err) {
        console.log(err)
        res.status(400).json({
            success: false
        })
    }
}
