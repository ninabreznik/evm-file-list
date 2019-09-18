# get-evm-file-list

## This solution
 
   get evm contract file Path List

## Installation

yarn or npm install
      
 
## Usage

yarn start

##  sample code

```
const fileDisplay = async (filePath) => {
    const dirList = await fs.readdirSync(filePath, { encoding: 'utf8' })
    for (var k of dirList) {
        var filedir = path.join(filePath, k);
        const stat = fs.statSync(filedir)
        if (stat.isDirectory()) { await fileDisplay(filedir) }
        if (stat.isFile()) { workList.push(filedir) }
    }
    return workList;
}
```


 




