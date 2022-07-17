const {selectAll,selectByName} = require('../repository/taskRepository');

const serviceSelectAll = async () => {
  
        let result = await selectAll();
        console.log('service',result);
    
        var resultArray = Object.values(JSON.parse(JSON.stringify(result)))
        let stage1 = resultArray.filter(res => res.stage == 1)
        let stage2 = resultArray.filter(res => res.stage == 2)
        let stage3 = resultArray.filter(res => res.stage == 3)
        let resultByStage = [{ "Stage 1": stage1, "Stage 2": stage2, "Stage 3": stage3 }]

        return resultByStage; 

}

const serviceSelectByName = async (name) => {
  
        let result = await selectByName(name);
        console.log('service',result);
    
        var resultArray = Object.values(JSON.parse(JSON.stringify(result)))
        let stage1 = resultArray.filter(res => res.stage == 1)
        let stage2 = resultArray.filter(res => res.stage == 2)
        let stage3 = resultArray.filter(res => res.stage == 3)
        let resultByStage = [{ "Stage 1": stage1, "Stage 2": stage2, "Stage 3": stage3 }]

        return resultByStage; 

}

module.exports = {serviceSelectAll: serviceSelectAll, serviceSelectByName: serviceSelectByName  };