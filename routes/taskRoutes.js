const express = require('express');
const router = express.Router();

const {controlSelectAll, controlSelectByName} = require('../controller/taskController');

router.get('/', controlSelectAll);

router.get('/select-by-name', controlSelectByName);


module.exports = router;

