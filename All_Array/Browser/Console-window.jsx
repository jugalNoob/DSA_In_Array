1. console.assert() – Log Error If Condition is False
js
Copy
Edit
console.assert(5 > 10, "Assertion failed: 5 is not greater than 10");
✅ Expected Output (if condition is false)

txt
Copy
Edit
Assertion failed: 5 is not greater than 10
Use case: Debugging conditions that should always be true.

2. console.clear() – Clear the Console
js
Copy
Edit
console.clear();
✅ Effect: Clears the entire console output.
Use case: Remove clutter during debugging.

3. console.count() – Count the Number of Calls
js
Copy
Edit
console.count("Count Label");
console.count("Count Label");
console.count("Count Label");
✅ Expected Output:

txt
Copy
Edit
Count Label: 1
Count Label: 2
Count Label: 3
Use case: Track how often a function is called.

4. console.error() – Log an Error Message
js
Copy
Edit
console.error("This is an error message!");
✅ Expected Output (in red text):

txt
Copy
Edit
This is an error message!
Use case: Log errors for debugging.

5. console.group() – Create a Collapsible Group
js
Copy
Edit
console.group("User Data");
console.log("Name: Jugal");
console.log("Age: 25");
console.groupEnd();
✅ Expected Output:

yaml
Copy
Edit
▶ User Data
  Name: Jugal
  Age: 25
Use case: Organize related logs.

6. console.groupCollapsed() – Create a Collapsed Group
js
Copy
Edit
console.groupCollapsed("Debug Info");
console.log("Step 1: Initialized");
console.log("Step 2: Processing");
console.groupEnd();
✅ Effect: Creates a collapsed log group that expands when clicked.
Use case: Hide non-essential details.

7. console.groupEnd() – Close a Group
js
Copy
Edit
console.group("Task");
console.log("Started");
console.groupEnd();
console.log("Outside group");
✅ Expected Output:

arduino
Copy
Edit
▶ Task
  Started
Outside group
Use case: Close a grouped log section.

8. console.info() – Log Informational Message
js
Copy
Edit
console.info("Fetching data from API...");
✅ Effect: Displays informational logs (similar to console.log).
Use case: Indicate status updates.

9. console.log() – Print Messages to Console
js
Copy
Edit
console.log("Hello, Console!");
✅ Expected Output:

txt
Copy
Edit
Hello, Console!
Use case: Basic debugging.

10. console.table() – Display Data as a Table
js
Copy
Edit
console.table([
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 }
]);
✅ Expected Output (in a table format):

(index)	name	age
0	Alice	30
1	Bob	25
Use case: Display structured data.

11. console.time() & console.timeEnd() – Measure Execution Time
js
Copy
Edit
console.time("Execution Time");
for (let i = 0; i < 1000000; i++) {} // Simulated work
console.timeEnd("Execution Time");
✅ Expected Output:

txt
Copy
Edit
Execution Time: 5.24ms
Use case: Performance testing.

12. console.trace() – Show Call Stack
js
Copy
Edit
function foo() {
    bar();
}
function bar() {
    console.trace("Trace Example");
}
foo();
✅ Expected Output (stack trace showing function calls):

txt
Copy
Edit
Trace Example
    at bar (script.js:10)
    at foo (script.js:7)
    at script.js:12
Use case: Debug function calls.

13. console.warn() – Log a Warning Message
js
Copy
Edit
console.warn("This is a warning message!");
✅ Expected Output (in yellow text):

txt
Copy
Edit
⚠️ This is a warning message!
Use case: Alert developers about potential issues.


assert()	Logs error if condition is false	"Assertion failed: 5 is not greater than 10"
clear()	Clears console	Console is cleared
count()	Counts how many times called	"Count Label: 1"
error()	Logs error message	Red text: "This is an error!"
group()	Creates log group	"▶ Group Name"
groupCollapsed()	Creates collapsed group	"▶ Collapsed Group"
groupEnd()	Ends a log group	Ends grouping
info()	Logs info message	"Fetching data from API..."
log()	Logs to console	"Hello, Console!"
table()	Displays data in table	Table format
time() / timeEnd()	Measures time	"Execution Time: 5ms"
trace()	Shows function call stack	Stack trace output
warn()	Logs warning	Yellow text: "⚠️ Warning!"