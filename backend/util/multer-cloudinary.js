import multer from "multer";
import { v2 as cloudinary } from 'cloudinary'
import {CloudinaryStorage} from 'multer-storage-cloudinary'

cloudinary.config({ 
  cloud_name: 'dpqkfgxyi', 
  api_key: '765333937132334', 
  api_secret: 'Nt6ArGx905ZBgpp0ZesFOYYChL4',
  secure: true
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
      return {
          folder: "travellog",
          public_id: file.fieldname + '-' + Date.now()
      }
  }
})

const upload = multer({storage:storage})

export {upload,cloudinary}