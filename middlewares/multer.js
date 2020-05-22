var multer = require('multer')

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'photos');
    },
    filename: function (req, file, cb) {
        // console.log(`${Date.now()}_${file.originalname}`);
        cb(null, `${Date.now()}_${file.originalname}`);
    },
})

var upload = multer({ storage: storage, limits: { fileSize: 1000000000 } })

module.exports = upload;