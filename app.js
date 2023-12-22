let express = require("express");
let cors = require('cors');
let sequelize = require('./connections/database');
let Company = require('./models/Company');
let companyRoutes = require("./routes/Company");
let app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(companyRoutes);
sequelize.sync();
app.listen(3000);