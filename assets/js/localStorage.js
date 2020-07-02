function SaveLocalStorage(arr, arrName){
    var localObj = JSON.stringify(arr);
    console.log(localObj)
    localStorage.setItem(arrName,localObj);
}
function CheckExistLocal(arrName){
    var localObj = localStorage.getItem(arrName);
    if(localObj !== null){
        return true;
    }
    return false;
}
function getDataFromLocal(arrName){
    var localList =[];
    if(CheckExistLocal(arrName)){
        return JSON.parse(localStorage.getItem(arrName));
    }
    return localList;
}

function getObj(objName){
    var localObj
    if(CheckExistLocal(objName)){
        return JSON.parse(localStorage.getItem(objName));
    }
    return localObj;
}
function deleteObj(objName){
    if(CheckExistLocal(objName)){
        localStorage.removeItem(objName);
        return true;
    }
    return false;
}