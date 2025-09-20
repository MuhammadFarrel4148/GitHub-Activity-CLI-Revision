const {
    getActivityService
} = require('../service/activityService');

const { 
    validatePayloadUsername 
} = require('../validator/validate');

const getActivityHandler = async(username) => { 
    try {
        validatePayloadUsername(username);

        const result = await getActivityService(username);

        console.log('Output:');
        console.log(result);

    } catch(error) {
        console.error(error);
    };
};

module.exports = {
    getActivityHandler
}

