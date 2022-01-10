module.exports = {
    TOKEN_NOT_FOUND: {
        Code: 101,
        Message: "TOKEN_NOT_FOUND",
    },
    USER_NOT_FOUND: {
        Code: 102,
        Message: "USER_NOT_FOUND",
    },
    INVALID_TOKEN: {
        Code: 103,
        Message: "INVALID_TOKEN",
        Exp: 0,
    },
    CAMPAIGN_NOT_FOUND: {
        Code: 104,
        Message: "CAMPAIGN_NOT_FOUND",
    },
    Unauthorized_NOT_FOUND: {
        Code: 105,
        Message: "UNAUTHORIZED",
    },
    AUTHORIZATION_REQUIRED: {
        Code: 106,
        Message: "AUTHORIZATION_REQUIRED",
    },
    USE_ALREADY_EXIST:{
        code:107,
        message:"USE_ALREADY_EXIST"
    },
    INVALID_PASSWORD:{
        code:108,
        message: "Invalid Password"
    },
    PRODUCT_ALREADY_EXIST:{
        code:109,
        message: "PRODUCT_ALREADY_EXIST"
    },
    EMPTY_DATA:{
        code:110,
        message:"EMPTY_DATA"
    },
    PRODUCT_NOT_FOUND:{
        code:110,
        message:"PRODUCT_NOT_FOUND"
    },
    UNDEFINED_ERROR:{
        code :111,
        message:"UNDEFINED"
    },
    UNIDENTIFIED_TOKEN:{
        code:112,
        message:"UNIDENTIFIED_TOKEN"
    },
    unknownError: function(message) {
        return {
            code: 999,
            message: message ? message : "UNKNOWN_ERROR",
        };
    },
};
