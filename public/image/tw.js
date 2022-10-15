exports.name = '/images/tw';
exports.index = async(req, res, next) => {
    try {
        const tw = require('./data/json/tw.json');
        var image = tw[Math.floor(Math.random() * tw.length)].trim();
        const cadao = require('./data/json/cadao.json');
        var fact1 = cadao[Math.floor(Math.random() * cadao.length)].trim();
        res.jsonp({
            url: image,
            count: tw.length,
            fast: fact1,
            author: 'tnhan'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}