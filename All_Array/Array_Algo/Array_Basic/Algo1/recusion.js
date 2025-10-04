unction recvie(data, x = 0) {
    if (x >= data.length) return;

    console.log(data[x]);

    recvie(data, x + 1);
}

let data = [10, 20, 30, 40];
recvie(data);



function recvie(x) {
    if (x > 3) return x;

    console.log(x);

    recvie(x + 1);
}

recvie(0);



Step-by-step dry run

Call 1 → x = 0

Check if (0 > 3) → false

console.log(0) → prints 0

Call again with x = 1

Call 2 → x = 1

Check if (1 > 3) → false

console.log(1) → prints 1

Call again with x = 2

Call 3 → x = 2

Check if (2 > 3) → false

console.log(2) → prints 2

Call again with x = 3

Call 4 → x = 3

Check if (3 > 3) → false

console.log(3) → prints 3

Call again with x = 4

Call 5 → x = 4

Check if (4 > 3) → true ✅

Returns 4 → recursion stops.

🔑 Why does the loop run?

Because the condition is x > 3, not x >= 3.

At x = 0, 1, 2, 3 → x > 3 is false, so recursion continues.

At x = 4 → x > 3 is true, so recursion stops.