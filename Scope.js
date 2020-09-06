/**
 * Global Scope
 * Function Scope,
 * Block Scope
 * 
 * without defining with var, let, const then it is Global scope.
 * Const does not have a block scope
 * 
 */

function callfn() {
    if (1)
        const name = "Saurabh";

    console.log(name)
}

callfn();

