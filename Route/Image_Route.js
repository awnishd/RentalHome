
const grid =require('gridfs-stream');
const mongoose = require('mongoose');
const express = require('express');


const upload =require('../utils/upload.js')

const router = express.Router();

const url = 'https://rentalhome.onrender.com';



let gfs, gridfsBucket;
const conn = mongoose.connection;
conn.once('open', () => {
	gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
		bucketName: 'fs'
	});
	gfs = grid(conn.db, mongoose.mongo);
	gfs.collection('fs');
});


router.get('/file/:filename', async (request, response) => {
	try {
		const file = await gfs.files.findOne({ filename: request.params.filename });
		// const readStream = gfs.createReadStream(file.filename);
		// readStream.pipe(response);
		const readStream = gridfsBucket.openDownloadStream(file._id);
		readStream.pipe(response);
	} catch (error) {
		response.status(500).json({ msg: error.message });
	}
})



router.post('/file/upload', upload.single('file'), async (request, response) =>  {
	if (!request.file)
		return response.status(404).json("File not found");

	const imageUrl = `${url}/file/${request.file.filename}`;

	response.status(200).json(imageUrl);
})


module.exports = router;
