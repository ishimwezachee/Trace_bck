const cloudinary= require("cloudinary");
const dotenv = require("dotenv")
dotenv.config();
  cloudinary.config({ 
    cloud_name:process.env.CLOUD_NAME, 
    api_key:process.env.API_KEY, 
    api_secret:process.env.API_SECRET 
  });
exports.imageUpload = async (file) => {
    // console.log(file.eventImage)
try {
    const is_image = await cloudinary.v2.uploader.upload(file.eventImage.tempFilePath);
    if (!is_image) return false;
    return is_image.url
} catch (error) {
  console.log(error)  
}
};



// module.exports = (req, res, next) => {
//     let imageName;
//     let Storage = multer.diskStorage({
//         destination: (req, file, cb) => {
//             cb(null, './uploads');
//         },
//         filename: (npm i express-fileuploadreq, file, cb) => {
//             imageName = new Date().getTime() + "_" + file.originalname;
//             cb(null, imageName);
//         }
//     });

//     let upload = multer({ storage: Storage });

//     let uploadFile = upload.single("eventImage");

//     uploadFile(req, res, function (err) {
//         req.imageName = imageName;
//         req.uploadError = err;
//         next();
//     })
// };