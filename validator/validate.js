const validatePayloadUsername = (username) => {
    if(username === undefined) {
        throw new Error('nama user harus diisi!');
    };
};

module.exports = {
    validatePayloadUsername
};