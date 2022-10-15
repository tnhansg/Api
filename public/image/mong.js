exports.name = '/images/mong';
exports.index = async(req, res, next) => {
    try {
        const mong = require('./data/json/mong.json');
        var image = mong[Math.floor(Math.random() * mong.length)].trim();
        const cadao = require('./data/json/cadao.json');
        var fact1 = cadao[Math.floor(Math.random() * cadao.length)].trim();
        res.jsonp({
            url: image,
            count: mong.length,
            fast: fact1,
            author: 'tnhan'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}