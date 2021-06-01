//const {Client} = require('pg')
//const client = new Client({
  //  user: "postgres",
  //  password: "2612",
  //  host: "localhost",
  //  port: 5432,
  //  database: "shrutidb"

//})


//client.connect()
//.then(() => console.log('Connected Successfully'))
//.then(()=> client.query('select * from employee'))
//.then(results => console.table(results.rows))
//.catch(e => console.log(e))
//.finally(()=> client.end())

module.exports = (sequelize,DataTypes) => {
    const Business = sequelize.define('business',{
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false,

        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: DataTypes.DATE,
    });

    return Business;
}