const fs = require('fs');
const path = require('path');
let workList = []
const fileDisplay = async (filePath) => {
    try {
        const dirList = await fs.readdirSync(filePath, { encoding: 'utf8' })
        for (var k of dirList) {
            var filedir = path.join(filePath, k);
            const stat = fs.statSync(filedir)
            if (stat.isDirectory()) { await fileDisplay(filedir) }
            if (stat.isFile()) { workList.push(filedir) }
        }
        console.log('workList', workList)
        return workList;
    } catch (err) {
        console.log('err', err)
    }
}

const fileList = async (contractsPath = "../evm-smart-contracts/contracts") => {

    var filePath = path.resolve(contractsPath);
    return await fileDisplay(filePath)
}
fileList()

module.exports = fileList