exports.name = '/images/instagram';
exports.index = async(req, res, next) => {
    try {
        const instagram = require('./data/json/ig.json');
        var image = instagram[Math.floor(Math.random() * instagram.length)].trim();
        const cadao = require('./data/json/cadao.json');
        var fact1 = cadao[Math.floor(Math.random() * cadao.length)].trim();
        res.jsonp({
            url: image,
            count: instagram.length,
            fast: fact1,
            author: 'tnhan'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}