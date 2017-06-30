// Created by Xiaochen Wang

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

const Employee = sequelize.define('Employee',{
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
    }, {
        createdAt: false, // disable createdAt
        updatedAt: false // disable updatedAt
});

const Department = sequelize.define('Department',{
    departmentId:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    departmentName: Sequelize.STRING
    }, {
        createdAt: false, // disable createdAt
        updatedAt: false // disable updatedAt
});

module.exports.initialize = () => {

    return new Promise((resolve, reject) => {

        sequelize.sync().then((Employee)=>{
            resolve();
        }).then((Department)=>{
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
            Employee.findAll();
                resolve(Employee.findAll());
            }).catch((error)=>{
                reject("no results returned.");
            });
        resolve(Employee.findAll());
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
                resolve();
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
    return new Promise((resolve, reject) => {
        sequelize.sync().then(()=>{
            Employee.findAll({
                attributes: [isManager],
            });
                resolve(Employee);
            }).catch((err) => {
                reject("no results returned.");
            });
        reject();
    });
}

module.exports.getDepartments = () => {
    return new Promise((resolve, reject) => {
        sequelize.sync().then(()=>{
            Department.findAll({
                order: ['departmentId'],
            });
        }).catch((err) => {
            reject("no results returned.");
        });
        resolve(Department.findAll());
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
                hireDate: employeeData.hireDate
        }).then(() => {
            resolve(Employee);
        }).catch(() => {
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
        }).then(()=>{
            resolve();
        }).catch(()=>{
            reject("unable to create employee.");
        });
        reject();
    });
}

module.exports.addDepartment = (departmentData) => {
    return new Promise((resolve, reject) => {
        Department.create({
            departmentId: departmentData.departmentId,
            departmentName: departmentData.departmentName
        }).then(() => {
            resolve(Department);
        }).catch(() => {
            reject("unable to create employee.");
        });
        reject("unable to create employee.");
    });
}

module.exports.updateDepartment = (departmentData) => {
    return new Promise((resolve, reject) => {
        Department.update({
            departmentId: departmentData.departmentId,
            departmentName: departmentData.departmentName
        }).then(() => {
            resolve();
        }).catch(() => {
            reject("unable to create employee.");
        });
        reject("unable to create employee.");
    });
}

module.exports.getDepartmentById = (id) => {
    return new Promise((resolve, reject) => {
        Department.findAll({
            where:{
                departmentId: departmentData.departmentId,
                departmentName: departmentData.departmentName
            }
        });
            resolve();
        }).catch(()=>{
            reject("unable to create employee.");
    });
}

module.exports.deleteEmployeeByNum = (empNum) =>{
    return new Promise((resolve, reject) => {
        Employee.destroy({
            where:{
                employeeNum: empNum
            }
        });
         resolve();
    }).catch(() => {
        reject();
    });
}