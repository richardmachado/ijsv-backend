Starting backend from scratch

-npm init -y

Git init
npm i nodemon express knex sqlite3 bcryptjs cors helmet pg morgan jsonwebtoken dotenv

Go into package.json and add start to scripts "start": "nodemon index.js"

knex init (creates the knexfile.js)

Add a data folder so the next step goes through

open knexfile.js and configure the connection like this --

development: { client: 'sqlite3', connection: { filename: './data/car-dealer.db3' <—— filename here }, useNullAsDefault: true },

Postgres\* production: { client: 'pg', connection: process.env.DATABASE_URL, pool: { min: 2, max: 10 }, migrations: { directory:"./migrations" }, seeds: { directory:"./seeds" } }

knex migrate:make \_create_user_table (xxx = name of table)

exports.up = async function(knex) { await knex.schema.createTable("users", (table) => { table.increments("id").unique()… }) };

exports.down = async function(knex) {

await knex.schema.dropTableIfExists("users”)
};

knex migrate:latest (this will create the db3 file)
knex migrate:rollback and then latest to make any changes
In data folder add files = db-config.js In dbconfig file add

const knex = require('knex');

const knexConfig = require('../knexfile.js');

module.exports = knex(knexConfig.development);

Start working on files

- xxx-model.js
  -xxx-router-js
  Root directory

Add index.js file
In index.js add const server = require('./server.js');
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => { console.log(\n=== Server listening on port ${PORT} ===\n); });

-create api folder - add server.js In server.js add

const express = require('express'); const cors = require('cors'); const helmet = require('helmet'); const usersRouter = require('./users/users-router') const studentsRouter = require('./students/student-router') const loginRouter = require('./auth/login') const projectRouter = require('./projects/projects-router')

const server = express();

server.use(helmet()); server.use(cors()); server.use(express.json());

server.use('/api/auth', loginRouter);

server.use('/api/users', usersRouter);

server.get('/', (req, res) => { res.send("Server is running"); });

module.exports = server;

knex seed:make 001-filename

got to seeds folder and add schema to table created

return knex(‘table name”).truncate()

knex seed:run

Knex migrate:latest —env=production knex seed:run -env=production
