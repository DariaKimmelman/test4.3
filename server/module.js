const jsonFile = require('jsonfile');

exports.getAll = async() => {
    const fileData = await jsonFile.readFile('./cats.json');
    return fileData;
}

exports.addCat = async(cat) => {
    try {
        const currentFileData = await jsonFile.readFile('./cats.json');
        currentFileData.push(cat);
        const updateFile = await jsonFile.writeFile('./cats.json', currentFileData)
        return "Cat is added!";

    } catch (err) {
        console.log(err);
    }
}
exports.deleteCat = async(id)=>{
    try{
        const currentFileData = await jsonFile.readFile('./cats.json');
        const newData = currentFileData.filter((item)=>{return item.id != id})
        const updateFile = await jsonFile.writeFile('./cats.json', newData)
        return "Cat is deleted!";

    }
    catch (err) {
        console.log(err);
    }
}