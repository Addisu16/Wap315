// let company = {

//     sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
//     development: {
//         sites: { sitessubdep1: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }], sitessubdep2: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }] },
//         internals: [{ name: 'Jack', salary: 1300 }]
//     }
// };
let company = {

    sales: [{ name: 'Wengel', salary: 100 }, { name: "Abresh", salary: 400 }, { name: 'Aisha', salary: 2500 }],
    development: {
        sites: [{ name: 'john', salary: 2500 }, { name: 'Addis', salary: 400 }],//sub departments
        internals: [{ name: 'jack', salary: 1200 }]
    }

};


// function sumSalaries(company){
//     let sum=0;
//     let emp=0;
//     if(Array.isArray(company)){
//         for(let i=0;i<company.length;i++){
//             sum+=company[i].salary;
//             emp++;

//         }
//     }else{
//          for(const subDepartment in company){
//          sum+=sumSalaries(company[subDepartment]);

//         }

//     }



//     return sum;

// }
// console.log("The total Salaries in all department",sumSalaries(company));

function sumSalariesByDept(company) {
    // console.log(company)
    let deptSalary = {};
    for (let deptName in company) {
        let dept = company[deptName];
        let sum = 0;
        if (Array.isArray(dept)) {
            sum += dept.reduce(function (prev, emp) {
                return prev + emp.salary;
            }, 0);
            deptSalary[deptName] = sum;
        } else {
            // console.log(deptSalary);
            deptSalary = Object.assign(sumSalariesByDept(dept), deptSalary);
        }
    }
    return deptSalary;
}
console.log(sumSalariesByDept(company));

function calculateAverage(company) {
    let sum = [];
    let depSalary = {};

    for (const dep in company) {
        let values = company[dep];
        if (Array.isArray(values)) {
            for (const value of values) {
                sum.push(value.name);
            }
            depSalary[dep] = sum;
        } else {
            let sub = calculateAverage(values);
            Object.assign(depSalary, sub);
        }
    }
    return depSalary;
}

console.log("The average value is: ", calculateAverage(company));


//GET Max
// function getMaximum(company) {
//     let depSalary = {};
//     for (let dep in company) {
//         let values = company[dep];
//         if (Array.isArray(values)) {
//             let company.values.filter(emp => (emp.salary>2000)?emp.name:null));
//             depSalary[dep] = maxSalary;
//         } else {
//             let subDep = getMaximum(values);
//             Object.assign(depSalary, subDep);
//         }
//     }
//     return depSalary;
// }
//console.log('The max salary', getMaximum(company));

function maxSalariesByDept(company) {
    let deptSalary = {};
    for (let deptName in company) {
        let dept = company[deptName];

        if (Array.isArray(dept)) {
            let max = dept.reduce(function (prev, emp) {
                return prev > emp.salary ? prev : emp.salary;
            }, dept[0].salary);
            deptSalary[deptName] = max;
        } else {
            // console.log(deptSalary);
            deptSalary = Object.assign(maxSalariesByDept(dept), deptSalary);
        }
    }
    return deptSalary;
}
console.log('The max', maxSalariesByDept(company));



function getSalaryByName(company, name) {
    for (let deptName in company) {
        let dept = company[deptName];
        if (Array.isArray(dept)) {
            let employee = dept.find(emp => emp.name === name);
            if (employee) {
                return employee.salary;
            }
        } else {
            let salary = getSalaryByName(dept, name);
            if (salary !== null) {
                return salary;
            }
        }
    }
    return null; // return null if employee not found
}


console.log("Addis's Salary is: ", getSalaryByName(company, 'Addis'));