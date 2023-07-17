const express = require('express');
const cors = require('cors');
global.__basedir = __dirname;
const Connection = require('./database/db');

const app = express();


require('./Model/List_Property.js')
require('./Model/List_Plot.js')

require('./Model/List_Requirement.js')


app.use(cors());
app.use(express.json());


app.use(require('./Route/Property_Route.js'))
app.use(require('./Route/Plot_Route.js'))
app.use(require('./Route/Requirement_Route.js'))
app.use(require('./Route/File_Route.js'))

app.use(require('./Route/Property_Route.js'))



const PORT = 4000 || process.env.PORT;

app.listen(PORT, () => {
    console.log("Server has been Started");
});
Connection();