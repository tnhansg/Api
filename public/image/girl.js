exports.name = '/images/girl';
exports.index = async(req, res, next) => {
    try {
        const girl = require('./data/json/girl.json');
        var image = girl[Math.floor(Math.random() * girl.length)].trim();
        const cadao = require('./data/json/cadao.json');
        var fact1 = cadao[Math.floor(Math.random() * cadao.length)].trim();
        res.jsonp({
            url: image,
            count: girl.length,
            fast: fact1,
            author: 'tnhan'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}