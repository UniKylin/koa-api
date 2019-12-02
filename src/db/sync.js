const conn = require('./conn')

require('./index')

conn.sync({ force: true })
  .then(res => {
    console.log(`===> Sync successfully...`)
    process.exit()
  })
  .catch(err => console.log(`===> Sync failure...`))

conn.authenticate()
  .then(res => console.log(`===> Connection successfully...`))
  .catch(err => console.log(`===> Connection failure...`))