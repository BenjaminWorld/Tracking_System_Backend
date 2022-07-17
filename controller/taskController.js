const {serviceSelectAll, serviceSelectByName } = require('../service/taskService');

const controlSelectAll = async (req, res) => {

    try {
        let result = await serviceSelectAll();
        if (result) {
            res.header("Access-Control-Allow-Origin", "*");
            res.json(result)
        }else{
            res.header("Access-Control-Allow-Origin", "*");
            res.send('Call Failure')
        }
    } catch (err) {
        console.log('err is ', err)
    }
}

const controlSelectByName = async (req, res) => {

    if (!req.query.name) {
        res.status(500).send({
            message: 'This is an error!'
         });
    }
    try {
        let result = await serviceSelectByName(req.query.name);
        if (result) {
            res.header("Access-Control-Allow-Origin", "*");
            res.json(result)
        }else{
            res.header("Access-Control-Allow-Origin", "*");
            res.send('CallByName failure')
        }
    } catch (err) {
        console.log('err is ', err)
    }
}

module.exports = {controlSelectAll: controlSelectAll, controlSelectByName: controlSelectByName};