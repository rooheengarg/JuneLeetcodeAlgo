// DFS with stack
var invertTree = function(root) {
    if (root === null) {
      return null;
    }
    
    const stack = [];
    stack.push(root);
    
    while (stack.length > 0) {
      const copy = stack.pop();
      const left = copy.left;
      copy.left = copy.right;
      copy.right = left;
      
      if (copy.left !== null) {
        stack.push(copy.left);
      }
      
      if (copy.right !== null) {
        stack.push(copy.right);
      }
    }
    return root;
  }


  //Simple with auxillary tree
  var invertTree = function(root) {
        if(root == null) return null;
        
        let newInvertedTree = new TreeNode();
    
        newInvertedTree.val = root.val;
        newInvertedTree.left = invertTree(root.right);
        newInvertedTree.right = invertTree(root.left);
    
        return newInvertedTree;
  }


  //Lesser space 
  var invertTree = function(root) {
    if(!root){
        return null
    }
    
    let right = null
    let left = null
    if(root.right){
        right = invertTree(root.right); 
    }
    
    if(root.left){
        left = invertTree(root.left);
    }

    root.left = right;
    root.right = left;
    return root;
    
};