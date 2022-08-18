exports.name = '/images/instagram';
exports.index = async(req, res, next) => {
    try {
        const instagram = require('./data/json/ig.json');
        var image = instagram[Math.floor(Math.random() * instagram.length)].trim();
        res.jsonp({
            url: image,
            count: instagram.length,
            author: 'tnhan'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}