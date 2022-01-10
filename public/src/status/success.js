module.exports = {
    USER_REGISTERED: {
        Code: 200,
        Message: "USER_REGISTERED",
    },
    USER_UPDATED: {
        Code: 201,
        Message: "USER_UPDATED",
    },
    PRODUCT_ADDED: {
        Code: 202,
        Message: "PRODUCT_ADDED",
    },
    PRODUCT_UPDATED: {
        Code: 203,
        Message: "PRODUCT_UPDATED",
    },
    ANALYTICS_CREATED: {
        Code: 105,
        Message: "ANALYTICS_ADD",
    },
    unknownError: function(message) {
        return {
            code: 999,
            message: message ? message : "UNKNOWN_ERROR",
        };
    },
};
