5️⃣ Comparison


| Feature  | Debounce                           | Throttle                      |
| -------- | ---------------------------------- | ----------------------------- |
| Trigger  | After **no events** for X ms       | At **most once** every X ms   |
| Use case | Search input, resize, autocomplete | Scroll, mouse move, key press |
| Example  | Wait for user to **stop typing**   | Check scroll **every 200ms**  |


🔑 Key Points:

Debounce delays execution until after activity stops

Ideal for: search boxes, resize, input typing, button clicks

Prevents spam API calls or multiple event triggers





🔑 Key Points
Event Type

| Event Type     | Use Case                              |
| -------------- | ------------------------------------- |
| Input / typing | Search autocomplete, form validation  |
| Click / button | Prevent double clicks or spam actions |
| Scroll         | Infinite scroll, lazy loading         |
| Resize         | Recalculate layout / charts           |


function debounce(fn, delay) {
    let timeId;
    return function (...args) {
        clearTimeout(timeId);           // cancel previous timer
        timeId = setTimeout(() => {     // save new timer
            fn(...args);
        }, delay);
    }
}

// Function to run
const search = (msg) => console.log(msg);

// Create debounced version
const searchWaitUser = debounce(search, 1000);

// Simulate rapid calls
searchWaitUser('hi');
searchWaitUser('hello');
searchWaitUser('jugal');
searchWaitUser('jugal sharma');  // Only this will log after 1s




::::::::::::::: Throttle    :::::::::::::::::::::::::

//1:: email sending delay timer

function throll(fn  , delay){

    let lastcall=0
    return function(...ages){

    }

}

function sendChat(message){
    console.log('sending message')
}


let sendChatThrolle=throll(sendChat , 2*1000)



🔑 Use Cases of Throttle

| Event Type   | Example / Use Case                    |
| ------------ | ------------------------------------- |
| Scroll       | Lazy loading / infinite scroll        |
| Resize       | Window resizing calculations          |
| Button Click | Limiting spammy clicks                |
| Mouse Move   | Tracking movement without freezing UI |





  <button onclick="sendEmail()">sendEmail</button>
let count = 1;
let isThrottled = false;
function sendEmail() {

    let i="my name is number"
    if (!isThrottled) {
        console.log('Sending', count++ , i);
        isThrottled = true;
        setTimeout(() => {
            isThrottled = false;
        }, 1000);
    }
}



Call throttledSendEmail("Alice", "Hello!")
                |
                V
  (...args) collects -> args = ["Alice", "Hello!"]  (Rest)
                |
                V
          fn(...args) expands -> sendEmail("Alice", "Hello!")  (Spread)
                |
                V
  sendEmail executes -> console.log("Alice: Hello!")



  function sum(...numbers)
        ^
        | Rest gathers everything into an array
sum(1,2,3,4) -> numbers = [1,2,3,4]


function greet(greeting, ...names) {
    console.log(greeting);
    console.log(names);
}

greet("Hello", "Alice", "Bob", "Charlie");