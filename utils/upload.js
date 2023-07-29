const {GridFsStorage} =require('multer-gridfs-storage')
const multer = require('multer')
// ENV CONFIGURATION
const dotenv = require('dotenv');
dotenv.config();

const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;


const CONNECTION_URL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@rentproperty.amfwt8o.mongodb.net/`
const connectionOption = {
	useNewUrlParser: true, useUnifiedTopology: true
}

const storage = new GridFsStorage({
	url: CONNECTION_URL,
	options: connectionOption,
	file: (request, file) => {
		const match = ["image/png", "image/jpg","image/jpeg"];

		if (match.indexOf(file.memeType) === -1)
			return `${Date.now()}-dharni-${file.originalname}`;

		return {
			bucketName: "photos",
			filename: `${Date.now()}-dharni-${file.originalname}`
		}
	}
});

const upload = multer({ storage });

module.exports = upload;