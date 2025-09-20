const { getActivityHandler } = require("./api/activityHandler");

const [ , , username ] = process.argv;

getActivityHandler(username);