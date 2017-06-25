// Create by Xiaochen Wang

const Sequelize = require('sequelize');

var sequelize = new Sequelize('danje1mhbk3hao', 'turqcqnvbfsayk', 'c4ec2c9da223231ab7b71e5a3d8de6f16dec88da77844e3e4d8ed952fa58057a', {
    host: 'ec2-184-73-199-72.compute-1.amazonaws.com',
    dialect: 'postgres',
    port: 5432,
    dialectOptions: {
        ssl: true
    }
});

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