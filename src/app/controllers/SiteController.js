const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {

    // [GET] /
    async home(req, res, next) {
        console.log('cron_now');
        res.send('Trang chủ server App');
    }
}


module.exports = new SiteController; // Tạo một instance cho SiteController
//const SiteController = require('./SiteController');