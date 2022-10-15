exports.name = '/images/sex';
exports.index = async(req, res, next) => {
    try {
        const sex = require('./data/json/sex.json');
        var image = sex[Math.floor(Math.random() * sex.length)].trim();
        const cadao = require('./data/json/cadao.json');
        var fact1 = cadao[Math.floor(Math.random() * cadao.length)].trim();
        res.jsonp({
            url: image,
            count: sex.length,
            fast: fact1,
            author: 'tnhan'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}