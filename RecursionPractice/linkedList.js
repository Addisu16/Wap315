let el4 = { value: 4, next: null };
let el3 = { value: 3, next: el4 };
let el2 = { value: 2, next: el3 };
let list = { value: 1, next: el2 };




function printListReverse(list) {
    let s = '';
    if (list ){
    s = printListReverse(list.next) + "\n" + list.value;
    }
    return s;
}

console.log("printList: ",printListReverse(list));

function appendValues(list) {
    let values = '';
    if (list) {
        let separator = list.next ? '->' : '';
        values += list.value + separator + appendValues(list.next);
    }
    return values;
}

console.log(appendValues(list));


function countNodes(list) {
if(list)
    return 1+countNodes(list.next);
}


console.log("The number of nodes is: ",countNodes(list));
function checkTheNode(list,node){
    if(!list){
        return false;
    }
    if(list.value===node){
        return true;
    }
    return checkTheNode(list.next,node);
}


console.log("Check if the node exists",checkTheNode(list,0));


function arrayOfNodes(list){
    let array=[];
    if(list){
       array=[list.value].concat(arrayOfNodes(list.next));
    
    }
    return array;
}
console.log(arrayOfNodes(list));



function addNodeAfter(list,node,newNode){
    if(!list){
        return;
    }else if(list.value==node){
        let temp=list.next;
        list.next={value:newNode,next:temp};
        return;
    }
    return addNodeAfter(list.next,node,newNode);
}
addNodeAfter(list,3,"newNode")
console.log("The new node: ",JSON.stringify(list));


function subList(list,node){
    if(!list){
        return;
    }if(list.value==node){
       return list;
    }
    return subList(list.next,node);

}

console.log('subList: ',subList(list,3));


// The code is a bit complex, but it's a recursive function that takes a company object and returns a department-wise sum of salaries of all employees in each department. Here's a simplified version of the code that does the same thing:

// javascript
// Copy code
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