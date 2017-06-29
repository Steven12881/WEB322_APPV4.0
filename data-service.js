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
    last_name: Sequelize.STRING,
    email: Sequelize.STRING,
    SSN: Sequelize.STRING,
    addressStreet: Sequelize.STRING,
    addresCity: Sequelize.STRING,
    addressState: Sequelize.STRING,
    addressPostal: Sequelize.STRING,
    matritalStatus: Sequelize.STRING,
    isManager: Sequelize.BOOLEAN,
    employeeManagerNum: Sequelize.INTEGER,
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

        sequelize.sync().then((Employee)=>{
                resolve();
            }).catch((error)=> {
                reject("unable to sync the database"); 
        });
        reject();
    });
}

module.exports.getAllEmployees = () => {

    return new Promise((resolve, reject) => {
        sequelize.sync().then(()=>{
            Employee.findAll({
                where:{
                    attributes1: [employeeNum],
                    attributes2: [firstName],
                    attributes3: [last_name],
                    attributes4: [email],
                    attributes5: [SSN],
                    attributes6: [addressStreet],
                    attributes7: [addresCity],
                    attributes8: [addressState],
                    attributes9: [addressPostal],
                    attributes10: [matritalStatus],
                    attributes11: [EmployeeManagerNum]
                }
            });
                resolve();
            }).catch((error)=>{
                reject("no results returned.");
            });
        reject();
    });
}

module.exports.getEmployeesByStatus = (status) => {

    return new Promise((resolve, reject) => {
        sequelize.sync().then(()=>{
            Employee.findAll({
                attributes: ['status'],
                where:{
                    status: ['Full Time','Part Time']
                },
            });
                resolve(data);
            }).then((error)=>{
                reject("no results returned.");
            });
        reject();
    });
}

module.exports.getEmployeesByDepartment = (department) => {

    return new Promise((resolve, reject) => {
        sequelize.sync().then(()=>{
            Employee.findAll({
                attributes: ['department'],
                // where:{
                //     employeeManagerNum: [1,2,3,4,5,6,7]
                // },
            });
                resolve(employeeManagerNum);
            }).then((error)=>{
                reject("no results returned.");
            });
        reject();
    });
}

module.exports.getEmployeesByManager = (manager) => {

    return new Promise((resolve, reject) => {
        sequelize.sync().then(()=>{
            Employee.findAll({
                attributes: ['employeeManagerNum'],
                // where:{
                //     employeeManagerNum: [1,2,3,4,5,6,7]
                // },
            });
                resolve();
            }).then((error)=>{
                reject("no results returned.");
            });
        reject();
    });
}

module.exports.getEmployeeByNum = (num) => {
    return new Promise((resolve, reject) => {
        sequelize.sync().then(()=>{
            Employee.findAll({
                attributes: ['employeeNum'],
                // where:{
                //     employeeManagerNum: [1,2,3,4,5,6,7]
                // },
            });
                resolve(employeeNum);
            }).then((error)=>{
                reject("no results returned.");
            });
        reject();
    });
}

module.exports.getManagers = () => {
    var arryGetManagers = [];
    return new Promise((resolve, reject) => {
        sequelize.sync().then(()=>{
            Employee.findAll({
                attributes: [''],
                // where:{
                //     employeeManagerNum: [1,2,3,4,5,6,7]
                // },
            });
                resolve(data);
            }).then((error)=>{
                reject("no results returned.");
            });
        reject();
    });
}

module.exports.getDepartments = () => {
    return new Promise((resolve, reject) => {
        sequelize.sync().then(()=>{
            Employee.findAll({
                attributes: [1,2,3,4,5,6,7],
                // where:{
                //     employeeManagerNum: [1,2,3,4,5,6,7]
                // },
            });
                resolve();
            }).then((error)=>{
                reject("no results returned.");
            });
        reject();
    });
}

module.exports.addEmployee = (employeeData) => {
    employeeData.isManager = (employeeData.isManager) ? true : false;
    return new Promise((resolve, reject) => {
        Employee.create({
            employeeNum: employeeData.employeeNum,
            firstName: employeeData.firstName,
            last_name: employeeData.last_name,
            email: employeeData.email,
            SSN: employeeData.email,
            addressStreet: employeeData.addressStreet,
            addresCity: employeeData.addresCity,
            isManager: employeeData.isManager,
            addressState: employeeData.addressState,
            addressPostal: employeeData.addressPostal,
            employeeManagerNum: employeeData.employeeManagerNum,
            status: employeeData.status,
            department: employeeData.department,
            hireDate: employeeData.hireDate,
        }).then((data)=>{
            resolve(data);
        }).catch((err)=>{
            reject("unable to create employee.");
        });
        reject("unable to create employee.");
    });
}

module.exports.updateEmployee = (employeeData) => {
    employeeData.isManager = (employeeData.isManager) ? true : false;
    return new Promise((resolve, reject) => {
        Employee.update({
            employeeNum: employeeData.employeeNum,
            firstName: employeeData.firstName,
            last_name: employeeData.last_name,
            email: employeeData.email,
            SSN: employeeData.email,
            addressStreet: employeeData.addressStreet,
            addresCity: employeeData.addresCity,
            isManager: employeeData.isManager,
            addressState: employeeData.addressState,
            addressPostal: employeeData.addressPostal,
            employeeManagerNum: employeeData.employeeManagerNum,
            status: employeeData.status,
            department: employeeData.department,
            hireDate: employeeData.hireDate,
        }).then((data)=>{
            resolve(data);
        }).catch((err)=>{
            reject("unable to create employee.");
        });
        reject();
    });
}

module.exports.addDepartment = (departmentData) => {

}

module.exports.updateDepartment = (departmentData) => {

}

module.exports.getDepartmentById = (id) => {

}