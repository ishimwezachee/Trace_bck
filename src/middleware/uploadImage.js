const multer = require("multer");
module.exports = (req, res, next) => {
    let imageName;

    let Storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, './uploads');
        },
        filename: (req, file, cb) => {
            imageName = new Date().getTime() + "_" + file.originalname;
            cb(null, imageName);
        }
    });

    let upload = multer({ storage: Storage });

    let uploadFile = upload.single("eventImage");

    uploadFile(req, res, function (err) {
        req.imageName = imageName;
        req.uploadError = err;
        next();
    })
};