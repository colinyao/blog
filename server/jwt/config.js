const moment=require('moment')
module.exports={
    secret:'this is a secret',
    expires:moment().add(7,'days').valueOf()
}