class ErrorHandler extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode = statusCode
        Error.captureStackTrace(this,this.constructor)
    }
}
module.exports = ErrorHandler



















// //The ErrorHandler class has a constructor method that takes two arguments, message and statuscode. The message argument is a string that represents an error message, and the statuscode argument is an integer that represents an HTTP status code.

// Inside the constructor, the super keyword is used to call the constructor of the parent Error class, passing in the message argument. This initializes the error message of the ErrorHandler instance.

// The statuscode argument is then assigned to the statuscode property of the ErrorHandler instance using this.statuscode = statuscode.