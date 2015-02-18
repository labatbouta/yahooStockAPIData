var express = require('express');
var router = express.Router();
var yahooFinance = require('yahoo-finance');
var database = require('../sql/database');

// send database data as string to client side
function StocksCallback(res, data) {
var string1 = new Array();

    for(var i =0; i < 200; i++){
        string1.push(data[i].name);
    }

    yahooFinance.snapshot({
        symbols: string1,
        fields: ['s','n', 'a2',  'b2','b3', 'g', 'h', 'k2']
    }, function (err, snapshot) {
        res.send(JSON.stringify(snapshot));
    });
}



/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});




/*GET all common stocks from db and rank common stocks data */
router.get('/commonStocks/stock', function(req, res){
    var queryString = 'SELECT name FROM stockTrade';
    database.query(res, StocksCallback, queryString, {});
});




//fields
// s = symbol                           n = name
// k2= change in percent realtime       g = day low
// h = day high                         b2 = asking price of stock
// a2 = average daily volume

/* request one or group of stocks*/
router.get('/stock/:stock', function(req, res){
    var stringOfStocks = req.param("stock");
    var stocksymbols = stringOfStocks.split(",");
    yahooFinance.snapshot({
        symbols: stocksymbols,
        fields: ['s','n', 'a2',  'b2', 'b3','g', 'h', 'k2']
    }, function (err, snapshot) {
        res.send(JSON.stringify(snapshot));
    });

});




module.exports = router;
