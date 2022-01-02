import * as yup from "yup";

module.exports = yup.object().shape({
    username: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    createdOn: yup.date().default(function() {
        return new Date();
    })
});