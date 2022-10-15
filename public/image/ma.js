exports.name = '/image/ma';
exports.index = async(req, res, next) => {
    try {
        const ma = require('./data/json/ma.json');
        var image = ma[Math.floor(Math.random() * ma.length)].trim();
        const cadao = require('./data/json/cadao.json');
        var fact1 = cadao[Math.floor(Math.random() * cadao.length)].trim();
        res.jsonp({
            url: image,
            count: ma.length,
            fast: fact1,
            author: 'tnhan'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}