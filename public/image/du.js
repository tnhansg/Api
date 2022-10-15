exports.name = '/images/du';
exports.index = async(req, res, next) => {
    try {
        const du = require('./data/json/du.json');
        var image = du[Math.floor(Math.random() * du.length)].trim();
        const cadao = require('./data/json/cadao.json');
        var fact1 = cadao[Math.floor(Math.random() * cadao.length)].trim();
        res.jsonp({
            url: image,
            count: du.length,
            fast: fact1,
            author: 'tnhan'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}