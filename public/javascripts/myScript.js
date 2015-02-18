/**
 * Created by lisabatbouta on 12/11/14.
 *
 * Note: Yahoo API can only receive ~200 stocks for a request at a time
 *       Therefore due to the short amount of time we decided to send data to the database to retrieve later
 *       and only retrieve a given number of the stocks from yahoo API
 */




/*
Note this is all only for test purposes the data is not displayed on this server
 */
/*
function getCommon(){
    $.ajax({url:'/commonStocks/stock'}).done( function (data) {
        var example = jQuery.parseJSON(data);
        console.log(example);
    });
}

window.addEventListener("load", getCommon, false);
*/


/*

function getAAPLStock() {
    $.ajax({url:'/stock/AAPL,AAC,BKS'}).done( function (data) {
        var example = jQuery.parseJSON(data);
        console.log(example);
    });

}

window.addEventListener("load", getAAPLStock, false);

*/