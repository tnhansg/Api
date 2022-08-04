exports.name = '/images/china';
exports.index = async(req, res, next) => {
    try {
        const china = require('./data/json/china.json');
        var image = china[Math.floor(Math.random() * china.length)].trim();
        const cadao = require('./data/json/cadao.json');
        var fast1 = cadao[Math.floor(Math.random() * cadao.length)].trim();
        res.jsonp({
            url: image,
            count: china.length,
            fast: fast1,
            author: 'tnhan'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}