exports.name = '/images/china';
exports.index = async(req, res, next) => {
    try {
        const china = require('./data/json/china.json');
        var image = china[Math.floor(Math.random() * china.length)].trim();
        res.jsonp({
            url: image,
            count: china.length,
            author: 'tnhan'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}