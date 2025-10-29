for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}
// i = 3


for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}

| Feature                   | `let`                            | `var`                                  |
| ------------------------- | -------------------------------- | -------------------------------------- |
| Scope                     | Block-scoped                     | Function-scoped                        |
| Loop variable in closures | Each iteration gets its own copy | All iterations share the same variable |
| Output in `setTimeout`    | 0,1,2,3,4                        | 5,5,5,5,5                              |

