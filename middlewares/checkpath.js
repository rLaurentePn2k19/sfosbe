const fs = require('fs');
module.exports = (req, res, next) => {
    fs.exists('/photos', (exists) => {
        if (exists) {
            next();
        }
        // else {
        //     fs.mkdir(uploadPath, (err) => {
        //         if (err) {
        //             console.log('Error in folder creation');
        //             next();
        //         }
        //         next();
        //     })
        // }
    })
}