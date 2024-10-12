import express from "express"
import multer from "multer"
import cors from "cors"

const app = express()
app.use(cors())
const port = 404

const upload = multer({
    storage: multer.diskStorage({
    destination: 'documents', // Specify the destination directory
    filename: (req, file, cb) => {
    cb(null, file.originalname); // Use the original filename
    }
    })
});

app.post("/upload",upload.single("file"), (req,res) =>{
    if(req.file){
        console.log(`File ${req.file.originalname} uploaded successfully`)
        console.log(req.file,req.body)
        res.send("File uploaded successfully")
    }else{
        console.error("Error uploading file", req.fileValidationError)
    }
})

app.listen(port, () => {
    console.log(`server is running on ${port}`)
})

app.get("/", (req,res) => {
    res.send("Hello World")
})