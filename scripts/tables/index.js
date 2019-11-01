/**
 * Módulo do Nodejs que lê arquivos.
 */
const fs = require('fs')

/**
 * Importar banco de dados já conectado
 */
const db = require('../../database')


createTables()


function createTables() {
  /**
   * Vai ler todos os arquivos nesse 
   * diretório e guardar apenas
   * os que terminam com `.sql`. 
   */
  const sqlScripts = fs
    .readdirSync(__dirname)
    .filter(script => 
      script.endsWith('.sql')
    )

    /**
   * Pra cada arquivo, pegue o conteúdo
   * transforme em string e faça a query
   * pro banco de dados
   */
  sqlScripts.forEach(async (script) => {
    // scriptName é melhor
    console.log('-', script)
    const query = fs
      .readFileSync(`${__dirname}/${script}`)
      .toString()
    console.log('\t... done')
    await db.query(query)
  })

  console.log('- tables creation finished')
  db.close()
}



