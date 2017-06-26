const moment=require('moment')
let time=moment().add(7,'days').valueOf()
module.exports={
    secret:'this is a secret',
    expires:time
}