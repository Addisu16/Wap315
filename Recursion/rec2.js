let el4
=
{
value: 4,
next: null};
let el3
=
{
value: 3,
next: el4};
let el2
=
{
value: 2,
next: el3};
let list
=
{
value: 1,
next: el2};

function printValues(list){
    if(!list){
        console.log('null');
        return;
        //the following line will help to 
        //erase the last arrow
     }if(!list.next){
       console.log(list.value);
       return;
    }
   console.log(`${list.value}->`);
    printValues(list.next);
}

printValues(list);
// function reverseList(head,previous=null){
//     //case 1:Base case
//     if(!head){
//         return previous;
//     }
//     //variable to store next node
//     let temp=head.next;
//     //reverse the node 
//     head.next=previous;
//     return reverseList(temp,head);
// }

// console.log(reverseList(list));


//count nodes

function countNodes(list){
    if(!list){
        return 0;
    }else{
    return 1+countNodes(list.next);
}
}
console.log("number of Node is:",countNodes(list));

 //find if node exits

function checkIfNodeExists(list,target){
    if(!list){
    return false;
    }else if(list.value===target){
     return true;
    }
    else{
         return checkIfNodeExists(list.next,target);
}
}
console.log("hello check if node exists ",checkIfNodeExists(list,el3));//true
//console.log("hello check if node exists ",checkIfNodeExists(list,el5));//el5 is not defined
function findLastIndexOf(array,str,index=0){
    if(array.length===0){
        return -1;
    }else if(array[index]===str){
          return array.length-1;
    }
    return findLastIndexOf(array,str,index+1);
}

let arr=['app','sugur','app','sweet'];
console.log(findLastIndexOf(arr,'app'));

// //add a NewNode after the given node
// function addNewNode(node,newNode){
//     if(node.next!=null){
//         newNode.next=node.next;
//     }
//         node.next=newNode;
    
//        return newNode;

//     }

    //console.log(addNewNode(el4,el6));


    