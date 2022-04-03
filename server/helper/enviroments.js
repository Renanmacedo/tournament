require('dotenv').config();

const enviroment = /prod|qa/ig;
const Enviroments = {

    isDev() {
        return !enviroment.test(process.env.NODE_ENV)
    }
};

module.exports = Enviroments;