const GoogleSpreadsheet = require('google-spreadsheet')
const credentials = require('./bugtracker.json')

const doc = new GoogleSpreadsheet('1lpwwtqpxxnhzvtUdUZcC4Rx0HJub2ouOuYocrtrd_Do')
    doc.useServiceAccountAuth(credentials, (err) => {
        if(err){
            console.log('Não foi possível abrir a planilha')
        } else {
            console.log('Planilha aberta')
            doc.getInfo((err, info ) => {
              const worksheet = info.worksheets[0]
              worksheet.addRow({name: 'Lucas', email: 'teste@gmail.com' }, err =>{
                  console.log('linha inserida')
              })
            })
        }
    })