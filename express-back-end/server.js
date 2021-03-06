const PORT = 8080;
const cors = require('cors');

const Express = require('express');
const BodyParser = require('body-parser');
const app = Express();
const morgan = require('morgan');
const cookieSession = require("cookie-session");
const bcrypt = require('bcrypt');


// Express Configuration
app.use(morgan('dev'));
app.use(cors());
app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json());
app.use(Express.static('public'));
app.use(cookieSession({
  name: 'session',
  keys: ['I am the very model of a scientist salarian', "I've studied species Turian, Asari, and Batarian", "I've mastered genetics(as a subset of biology)", "because I am a expert (which I know is a tautology)"]
}));

// Sample GET route
const attendance = require('./routes/attendance');
const registry = require("./routes/registry");
const departments = require('./routes/departments');
const group = require('./routes/group');
const kpi = require('./routes/kpi');
const task =require('./routes/task');
const user = require('./routes/user')

app.use('/attendance',attendance)
app.use('/registry',registry);
app.use('/departments',departments);
app.use('/group',group);
app.use('/kpi',kpi);
app.use('/task',task);
app.use('/user',user)




app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});

// const db = require('./data/db')

// app.get('/api/data', (req, res) => {
//   db("employees").where('id',1)
//   .then((result)=>{
//     console.log(result);
//     res.json({message:result[0].youdianyisi})
//   })
//   // res.json({message:'hello'})

// });