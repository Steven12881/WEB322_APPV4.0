// Create by Xiaochen Wang

const Sequelize = require('sequelize');

var sequelize = new Sequelize('danje1mhbk3hao', 'turqcqnvbfsayk', 'c4ec2c9da223231ab7b71e5a3d8de6f16dec88da77844e3e4d8ed952fa58057a', {
    host: 'ec2-184-73-199-72.compute-1.amazonaws.com', //host
    dialect: 'postgres',
    port: 5432,
    dialectOptions: {
        ssl: true
    }
});

sequelize.authenticate().then(function() {
    console.log('Connection has been established successfully.');
}).catch(function(err) {
    console.log('Unable to connect to the database:', err);
});

var Employee = sequelize.define('Employee',{
    employeeNum:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: Sequelize.STRING,
    last_Name: Sequelize.STRING,
    email: Sequelize.STRING,
    SSN: Sequelize.STRING,
    addressStreet: Sequelize.STRING,
    addresCity: Sequelize.STRING,
    addressState: Sequelize.STRING,
    addressPostal: Sequelize.STRING,
    matritalStatus: Sequelize.STRING,
    isManager: Sequelize.BOOLEAN,
    EmployeeManagerNum: Sequelize.INTEGER,
    status: Sequelize.STRING,
    department: Sequelize.INTEGER,
    hireDate: Sequelize.STRING
});

var Department = sequelize.define('Department',{
    departmentID:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    departmentName: Sequelize.STRING
});



module.exports.initialize = () => {
    return new Promise((resolve, reject) => {

        sequelize.sync().then(()=>{
            Employee.create({
                firstName: 'Progject1',
            }).then((Employee)=>{
                reject("unable to sync the database");
            });
        });
        reject();
    });
}

module.exports.getAllEmployees = () => {
    var arryAllEmployees = [];
    return new Promise((resolve, reject) => {
        sequelize.sync().then(()=>{
            
        })
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