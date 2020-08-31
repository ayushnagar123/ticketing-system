const status = require('./status_handler')
module.exports={
    response: (code,message,data)=>{
        return {
            status: code,
            statusMessage:status[code],
            message: message,
            data: data
        }
    }
}