import multer from "multer";
import nextConnect from "next-connect";

const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/uploads/", // Define the folder to store the files
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  }),
});

const apiRoute = nextConnect({
  onError(error, req, res) {
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.array("file"));

apiRoute.post((req, res) => {
  res.status(200).json({ data: "success" });
});

export default apiRoute;
export const config = {
  api: {
    bodyParser: false, // Disabling bodyParser is important
  },
};
