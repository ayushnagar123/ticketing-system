const status = require('./status_handler')
module.exports={
    error: (code,message)=>{
        // console.log(toString(code));
        return {
            status: code,
            statusMessage:status[code],
            message: message
        }
    }
}