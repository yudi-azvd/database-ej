const db = require('../database')

const ClientController = {
  async index(request, response) {
    const results = await db.query(
      `
      SELECT
        "clients"."name",
        "clients"."email",
        "phone"
        
        FROM
          "client_phones"
            JOIN
          "clients"
        
        ON
          "client_phones"."client_id" = "clients"."client_id"
        ;
      `
      )

    return response.json(results.rows)
  },

  async create(request, response) {
    const client = request.body

    var results = await db.query(
      `INSERT INTO "clients" ("name", "email")
      VALUES ($1,  $2) 
      RETURNING "client_id";`, 
      [client.name, client.email]
    )
    
    if (client.phones) {
      // results = await db.query(
      //   `INSERT INTO "client_phones" ()`
      // )
    }

    return response.json(results)
  }
}


module.exports = ClientController
