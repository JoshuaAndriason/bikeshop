var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/velo', function(req, res, next) {
    res.render('index', {
        dataBike
    });
});

router.get('/shop', function(req, res, next) {
    res.render('shop', {
        dataCardBike
    });
});


var dataBike = [{ nom: "BIK045", url: "/images/bike-1.jpg", prix: "679"}, 
{ nom: "ZOOK07", url: "/images/bike-2.jpg", prix: "999"},
 {nom: "TITANS", url: "/images/bike-3.jpg", prix: "799"}, 
 {nom: "CEWO", url: " /images/bike-4.jpg", prix: "1300"},
 { nom: "AMIG39", url: "/images/bike-5.jpg", prix: "479"}, 
 { nom: "LIK099", url: "/images/bike-6.jpg", prix: "869"}]
 
 var dataCardBike = [{numero:1, nom: "BIK045", url: "/images/bike-1.jpg", prix: "679",quantité : 1 }, 
{numero:2, nom: "ZOOK07", url: "/images/bike-2.jpg", prix: "999", quantité : 2 },
 {numero:3, nom: "TITANS", url: "/images/bike-3.jpg", prix: "799", quantité: 3}, 
 {numero:4, nom: "CEWO", url: " /images/bike-4.jpg", prix: "1300", quantité: 2},
 {numero:5, nom: "AMIG39", url: "/images/bike-5.jpg", prix: "479", quantité: 2}, 
 {numero:6, nom: "LIK099", url: "/images/bike-6.jpg", prix: "869", quantité: 4}]


router.get('/shop', function(req, res, next) {
    res.render('shop', { title: 'Shop' });
});

module.exports = router;