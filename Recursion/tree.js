function Tree(value){
    this.value=value;
    this.trees=[];
}


let treeA=new Tree("A");
let treeB=new Tree("B");
let treeC=new Tree("C");
let treeE=new Tree("E");
let treeD=new Tree("D");


treeA.trees.push(treeB,treeE,treeD);
treeD.trees.push(treeC);

// function printTree(tree,level=0){

//     if(!tree.trees || tree.trees.length===0){
//         return;
//     }
//     let index='';
//     for(let i=0;i<level;i++){
//         index+=" ";
//     }
//     console.log(index+" "+tree);
//             for(let child of tree.trees){
//                 //console.log(child);
//                 printTree(child,level+1);
//             }
//         }
    

//     printTree(treeA);

    function printTreeNode(root){

    console.log(root.value);
    for(const child of root.trees){
        printTreeNode(child)
    }
}
printTreeNode(treeA);