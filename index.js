const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
global.__basedir = __dirname;
const Connection = require('./database/db');

const app = express();

var jsonParser = bodyParser.json({limit:1024*1024*10, type:'application/json'}); 
var urlencodedParser = bodyParser.urlencoded({ extended:true,limit:1024*1024*10,type:'application/x-www-form-urlencoded' });
app.use(jsonParser);
app.use(urlencodedParser);


require('./Model/List_Property.js')
require('./Model/List_Plot.js')
require('./Model/Owner_Property.js')
require('./Model/List_Requirement.js')
require('./Model/ProjectDetail_Model.js')


app.use(cors());
app.use(express.json());


app.use(require('./Route/Property_Route.js'))
app.use(require('./Route/Plot_Route.js'))
app.use(require('./Route/Requirement_Route.js'))
app.use(require('./Route/File_Route.js'))
app.use(require('./Route/Admin_Route.js'));
app.use(require('./Route/Image_Route.js'))

app.use(require('./Route/Property_Route.js'))
app.use(require('./Route/ProjectDetail_Route.js'))



const PORT = 4000 || process.env.PORT;

app.listen(PORT, () => {
    console.log("Server has been Started");
});
Connection();