// Create by Xiaochen Wang

module.exports.initialize = () => {
    return new Promise((resolve, reject) => {
        reject();
    });
}

module.exports.getAllEmployees = () => {
    var arryAllEmployees = [];
    return new Promise((resolve, reject) => {
        reject();
    });
}

module.exports.getEmployeesByStatus = (status) => {
    var arryByStatus = [];
    return new Promise((resolve, reject) => {
        reject();
    });
}

module.exports.getEmployeesByDepartment = (department) => {
    var arryByDepartment = [];
    return new Promise((resolve, reject) => {
        reject();
    });
}

module.exports.getEmployeesByManager = (manager) => {
    var arrayGetEmployeesByMannager = [];

    return new Promise((resolve, reject) => {
        reject();
    });
}

module.exports.getEmployeeByNum = (num) => {
    return new Promise((resolve, reject) => {
        reject();
    });
}

module.exports.getManagers = () => {
    var arryGetManagers = [];
    return new Promise((resolve, reject) => {
        reject();
    });
}

module.exports.getDepartments = () => {
    var arryGetDepartments = [];
    return new Promise((resolve, reject) => {
        reject();
    });
}

module.exports.addEmployee = (employeeData) => {
    employeeData.isManager = (employeeData.isManager) ? true : false;
    employeeData.employeeNum = ++empCount;
    return new Promise((resolve, reject) => {
        reject();
    });
}

module.exports.updateEmployee = (employeeData) => {
    employeeData.isManager = (employeeData.isManager) ? true : false;
    return new Promise((resolve, reject) => {
        reject();
    });
}