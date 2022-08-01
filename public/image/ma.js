exports.name = '/image/ma';
exports.index = async(req, res, next) => {
    try {
        const ma = require('./data/json/ma.json');
        var image = ma[Math.floor(Math.random() * ma.length)].trim();
        res.jsonp({
            url: image,
            count: ma.length,
            author: 'tnhan'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}