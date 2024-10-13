import express from "express"
import multer from "multer"
import cors from "cors"
import fs from "fs"

const app = express()
app.use(cors())
app.use(express.json())
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
        const data = JSON.parse(fs.readFileSync("filelist.json", "utf-8"))
        data.push(req.file.originalname.substring(0,req.file.originalname.length-4))
        fs.writeFileSync("filelist.json",JSON.stringify(data))
        
        res.send("File uploaded successfully")
    }else{
        console.error("Error uploading file", req.fileValidationError)
    }
})

app.delete("/delete",(req,res) => {
    const filenameToDelete = req.body.target; // Assuming the filename to delete is sent in the request body
    console.log(filenameToDelete)
    if (!filenameToDelete) {
        return res.status(400).send("Filename is required");
    }

    fs.readFile("filelist.json", "utf-8", (err, data) => {
        if (err) {
        console.error("Error reading filelist.json:", err);
        return res.status(500).send("Error deleting file");
        }

        let filelist;
        try {
        filelist = JSON.parse(data);
        } catch (parseError) {
        console.error("Error parsing filelist.json:", parseError);
        return res.status(500).send("Error deleting file");
        }

        const index = filelist.indexOf(filenameToDelete);
        if (index > -1) {
        filelist.splice(index, 1);

        fs.writeFile("filelist.json", JSON.stringify(filelist), (writeErr) => {
            if (writeErr) {
            console.error("Error writing to filelist.json:", writeErr);
            return res.status(500).send("Error deleting file");
            }

            // Delete the actual file from the "documents" directory
            const filePath = `documents/${filenameToDelete}${filenameToDelete === "copyright"? ".jpg": ".pdf"}`;
            fs.unlink(filePath, (unlinkErr) => {
            if (unlinkErr) {
                console.error("Error deleting file:", unlinkErr);
                // You might choose to send an error response here, but it's important to also update filelist.json to reflect the actual state
                return res.status(500).send("Error deleting file from storage");
            }

            console.log(`File ${filenameToDelete} deleted successfully`);
            res.send(`File ${filenameToDelete} deleted successfully`);
            });
        });
        } else {
        console.log(`File ${filenameToDelete} not found in the list`);
        res.status(404).send(`File ${filenameToDelete} not found`);
        }
    });
})

app.get("/", (req,res) => {
    res.send("Hello World")
})

app.listen(port, () => {
    console.log(`server is running on ${port}`)
})