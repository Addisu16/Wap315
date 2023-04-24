let company = {

    sales: [{ name: 'Peter', salary: 100 }, { name: "Abresh", salary: 400 }, { name: 'Aisha', salary: 2500 }],
    development: {
        sites: [{ name: 'john', salary: 2500 }, { name: 'Addis', salary: 400 }],//sub departments
        internals: [{ name: 'jack', salary: 1200 }]
    }

};

//sum all the salaries in the department
// function sumSalries(department) {
//     let sum = 0;
//     if (Array.isArray(department)) {
//         for (let i = 0; i < department.length; i++) {
//             sum += department[i].salary;
//         }
//     }else{
//         for (let subdep in department) {
//             sum += sumSalries(department[subdep]);
//         }
//     }
//     return sum;
// }
function sumSalaries(department){
    let sum=0;
    for(let key in department){
        if(typeof department[key]=='obj'){
            sum+=sumSalaries(department[key]);
        }else if(key=="salary"){
            sum+=department[key];
        }
    }
    return sum;
}


console.log('The sum of salaries in all the department is:', sumSalaries(company));


function getEmployeeNameSalary(department){
    if (Array.isArray(department)) 
        return department.reduce(function (prev, current) 
        {
            console.log(prev, current)
            prev[current.name]= current.salary;
            return prev;
        },{}); 
    let nameSalary = {};
    for (let subdep of Object.values(department)) {
        let subDeptObj = getEmployeeNameSalary(subdep);
        for(let key in subDeptObj){
            nameSalary[key]= subDeptObj[key];
        }
    }
    return nameSalary ;
}

console.log("wengel's company",getEmployeeNameSalary(company));

//get employee names in array format

function empName(department) {
    if (Array.isArray(department)) {
        return department.map((item) => {return (item.name ) })
    }
    let names = [];

    for (let subDep of Object.values(department)) {
        let subDepartmentNmames = empName(subDep);
        names = names.concat(subDepartmentNmames);
    }
    return names;
}
console.log('Employee names: ', empName(company));

// function getEmployeeNameSalary(department) {
//     let nameSalary = {};
//     for (let subDep of Object.values(department)) {
//         if (Array.isArray(department)) {
//             let subDepObj = getEmployeeNameSalary(subDep);
//             Object.assign(nameSalary, subDepObj);
//         } else {
//             nameSalary[subDep.name] = subDep.salary;

//         }
//     }
//     return nameSalary;
// }

// console.log('get employee who is paid', getEmployeeNameSalary(company));

function getEmployeeSalaryGreaterThan20000(department) {
    if (Array.isArray(department)) {
        return department.filter((item) => item.salary > 500).map((item) => item.name);
    }
    let names = [];

    for (let subDep of Object.values(department)) {
        let subDepartmentNmames = getEmployeeSalaryGreaterThan20000(subDep);
        names = names.concat(subDepartmentNmames);
    }

    return names;
}
console.log("get names who's salary is >than 20000", getEmployeeSalaryGreaterThan20000(company));


// //find employee name with salary
// function findEmpWithHisSalary(department) {
//     if (Array.isArray(department)) {
//         return department.find((item) => item.salary = item.name);
//     }
//     let names = [];

//     for (let subDep of Object.values(department)) {
//         let subDepartmentNmames = getEmployeeSalaryGreaterThan20000(subDep);
//         names = names.concat(subDepartmentNmames);
//     }

//     return names;
// }

// //max/min 
// function getSalaryStates(employees){
//     let minSalary=Infinity;
//     let maxSalary=-Infinity;
//     let totalSalary=0;
//     for(let employee of employees){
//         let salary=employee.salary;
//         if(salary<minSalary){
//             minSalary=salary;
//         }
//         if(salary>maxSalary){
//             maxSalary=salary;
//         }
//         totalSalary+=salary;
//     }
//     let avgSalary=totalSalary/employees.length;
//     return {
//         minSalary:minSalary,
//         maxSalary:maxSalary,
//         avgSalary:avgSalary

//     };
// }
function sumSalFirstLevelDept(company) {
    let deptSalary = {};
    for (let deptName in company) {
        let dept = company[deptName];
        if (Array.isArray(dept)) {
            deptSalary[deptName] = dept.reduce((prev, emp) => prev + emp.salary, 0);
        } else if (typeof dept == 'object') {
            let subDept = sumSalFirstLevelDept(dept);
            for (let subDeptName in subDept) {
                deptSalary[`${deptName} - ${subDeptName}`] = subDept[subDeptName];
            }
        }
    }
    return deptSalary;
}
console.log(sumSalFirstLevelDept(company));


/*what is this {
    sales: 3000,
    'development - sites': 2900,
    'development - internals': 1200*/
    // function sumSalFirstLevelDept(company) {
    //     let deptSalary = {};
    //     for (let deptName in company) {
    //         let dept = company[deptName];
    //         if (Array.isArray(dept)) {
    //             deptSalary[deptName] = dept.reduce(function (prev, emp) {
    //                 return prev + emp.salary;
    //             }, 0);
    //             if (company.parent)
    //                 deptSalary.parent = company.parent;
    //             delete company.parent;
    //         }
    //         else if (typeof dept == 'object') {
    //             dept.parent = deptName;
    //             let subDept = sumSalFirstLevelDept(dept);
    //             let aggregrateSalary = {}
    //             if (subDept.parent) {
    //                 aggregrateSalary[subDept.parent] = 0;
    //                 for (let eachDept in subDept) {
    //                     if(eachDept!='parent')
    //                     aggregrateSalary[subDept.parent] += subDept[eachDept];
    //                 }
    //             }
    //             delete subDept.parent;
    //             deptSalary = { ...deptSalary, ...aggregrateSalary };
    //         }
    //     }
    //     return deptSalary;
    // }
    // console.log("this is siri",sumSalFirstLevelDept(company));
