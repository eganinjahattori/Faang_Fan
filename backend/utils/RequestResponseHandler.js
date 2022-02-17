class ResponseHandler {
    static returnResponse = async(status, message, data = null, event = null) => {
        return {
            statusCode: status,
            body: JSON.stringify({
                    message: message,
                    input: event,
                    data: data
                },
                null,
                2
            ),
        };
    }
}

module.exports = { ResponseHandler };