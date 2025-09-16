https://www.geeksforgeeks.org/bankers-algorithm-in-operating-system-2/ -->Banking Algo
https://www.geeksforgeeks.org/disk-scheduling-algorithms/?ref=lbp


/// check user online true and false  ------------------------>>

let isActive=navigator.onLine ?true : false

    
const objArray = [
    {
        index: 0,
        details: {
            name: "Jugal Sharma",
            ...(isActive && { status: "userOnline" }), // Only adds `status: "active"` when `isActive` is true
                      total: 45,
                      accountNumber: "1234567890",
                      email: "jugal@example.com",
                      phone: "9876543210",
                      address: "123 Main St, City, Country",
                      accountType: "Savings",
                      createdAt: new Date().toISOString(),
            // identity: { hashPanCard: false, hashAdhaarCard: true },
        }
    },
    {
        index: 1,
        details: {
                      name: "Kanika Sharma",
            total: 44,
            accountNumber: "0987654321",
            email: "kanika@example.com",
            phone: "8765432109",
            address: "456 Elm St, City, Country",
            accountType: "Checking",
            createdAt: new Date().toISOString(),

// identity: { hashPanCard: false, hashAdhaarCard: true },
        }
    }
];

console.log(objArray )




/// Total All amount with all user 



let isActive=true

    
const objArray = [
    {
        index: 0,
        details: {
            name: "Jugal Sharma",
            ...isActive &&(  {status:"active"}),
                      total: 45,
                      accountNumber: "1234567890",
                      email: "jugal@example.com",
                      phone: "9876543210",
                      address: "123 Main St, City, Country",
                      accountType: "Savings",
                      createdAt: new Date().toISOString(),
            // identity: { hashPanCard: false, hashAdhaarCard: true },
        }
    },
    {
        index: 1,
        details: {
                      name: "Kanika Sharma",
            total: 44,
            accountNumber: "0987654321",
            email: "kanika@example.com",
            phone: "8765432109",
            address: "456 Elm St, City, Country",
            accountType: "Checking",
            createdAt: new Date().toISOString(),

// identity: { hashPanCard: false, hashAdhaarCard: true },
        }
    }
];

console.log(objArray)


  let totalSum = 0; // Initialize sum variable

  for (let key of  objArray) { 
      let sum = key.details.total; // Extract `total` value
      totalSum += sum; // Add to total sum
    //  console.log(sum); // Print individual total values
  }
  
  console.log("Total Sum:", totalSum); // Print the final sum of all `total` values
  
  



  // search with index number  ..............................

let sear = 0;
let userFounds = false;

for (let user of objArray) { 
    if (user.index === sear) { // Compare with index
        console.log("User found:", user.details.name);
        console.log("User info:", user);
        userFounds = true;
        break;
    }
}

if (!userFounds) {
    console.log("User not found.");
}



/// Search with name in object Banking system 


let sear = "Jugal Sharma";
let userFounds = false;


for (let user of objArray) { 
    if (user.details.name.toLowerCase() === sear.trim().toLowerCase()) { // Trim and compare case-insensitively
        console.log("User found:", user.details.name);
        console.log("User info:", user);
        userFounds = true;
        break;
    }
}


if (!userFounds) {
    console.log("User not found.");
}



/// Store  in loacl Stoarge 


let jsondata = JSON.stringify(objArray); // Correct way to convert data to JSON string

console.log(jsondata); // Logs the JSON string instead of the object

localStorage.setItem("userData", jsondata); // Stores JSON string in localStorage



/// Add user with inpute box  Important ..................................

function addUser() {
    let name = document.getElementById("name").value.trim();
    let total = document.getElementById("total").value;
    let accountNumber = document.getElementById("accountNumber").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let address = document.getElementById("address").value.trim();
    let accountType = document.getElementById("accountType").value;

    if (!name || !total || !accountNumber || !email || !phone || !address) {
        alert("All fields are required!");
        return;
    }

    let newUser = {
        index: objArray.length,
        details: {
            name,
            total: parseFloat(total),
            accountNumber,
            email,
            phone,
            address,
            accountType,
            createdAt: new Date().toISOString(),
        }
    };

    objArray.push(newUser);
    alert("User added successfully!");
    displayUsers();
}


// Update User Name in Banking system ...................


// Function to update user name using for...of loop
function updateUserName(accountNumber, newName) {
    let userFound = false;

    for (let user of objArray) {
        if (user.details.accountNumber === accountNumber) {
            console.log(`Before Update: ${user.details.name}`);
            user.details.name = newName;
            console.log(`After Update: ${user.details.name}`);
            userFound = true;
            break; // Exit loop once the user is found and updated
        }
    }

    if (!userFound) {
        console.log("User not found.");
    }
}

// Example: Change "Jugal Sharma" to "Jugal Verma"
updateUserName("1234567890", "Jugal Verma");

// Example: Change "Kanika Sharma" to "Kanika Gupta"
updateUserName("0987654321", "Kanika Gupta");

console.log(objArray);



/// ------------------- Detele with nindex number ---------


const objArray = [
    {
        index: 0,
        details: {
            name: "Jugal Sharma",
            total: 45,
            accountNumber: "1234567890",
            email: "jugal@example.com",
            phone: "9876543210",
            address: "123 Main St, City, Country",
            accountType: "Savings",
            createdAt: new Date().toISOString(),
        }
    },
    {
        index: 1,
        details: {
            name: "Kanika Sharma",
            total: 69,
            accountNumber: "0987654321",
            email: "kanika@example.com",
            phone: "8765432109",
            address: "456 Elm St, City, Country",
            accountType: "Checking",
            createdAt: new Date().toISOString(),
        }
    },
    {
        index: 2,
        details: {
            name: "Rahul Verma",
            total: 32,
            accountNumber: "5678901234",
            email: "rahul@example.com",
            phone: "7654321098",
            address: "789 Pine St, City, Country",
            accountType: "Savings",
            createdAt: new Date().toISOString(),
        }
    },
    {
        index: 3,
        details: {
            name: "Simran Kaur",
            total: 85,
            accountNumber: "2345678901",
            email: "simran@example.com",
            phone: "6543210987",
            address: "101 Maple St, City, Country",
            accountType: "Business",
            createdAt: new Date().toISOString(),
        }
    }
];

console.log(objArray);


const indexNumber = 0; // Index to delete
let indexToDelete = -1; // Store index to remove

// Loop through the array to find the matching index
for (let i = 0; i < objArray.length; i++) {
    if (objArray[i].index === indexNumber) {
        indexToDelete = i;
        break; // Stop loop once found
    }
}

// Remove the object if found
if (indexToDelete !== -1) {
    objArray.splice(indexToDelete, 1);
}

console.log("After deletion:", objArray);



// user delete with add name and account number ------------------------>>

const objArray = [
    {
        index: 0,
        details: {
            name: "Jugal Sharma",
            total: 45,
            accountNumber: "1234567890",
            email: "jugal@example.com",
            phone: "9876543210",
            address: "123 Main St, City, Country",
            accountType: "Savings",
            createdAt: new Date().toISOString(),
        }
    },
    {
        index: 1,
        details: {
            name: "Kanika Sharma",
            total: 69,
            accountNumber: "0987654321",
            email: "kanika@example.com",
            phone: "8765432109",
            address: "456 Elm St, City, Country",
            accountType: "Checking",
            createdAt: new Date().toISOString(),
        }
    },
    {
        index: 2,
        details: {
            name: "Rahul Verma",
            total: 32,
            accountNumber: "5678901234",
            email: "rahul@example.com",
            phone: "7654321098",
            address: "789 Pine St, City, Country",
            accountType: "Savings",
            createdAt: new Date().toISOString(),
        }
    },
    {
        index: 3,
        details: {
            name: "Simran Kaur",
            total: 85,
            accountNumber: "2345678901",
            email: "simran@example.com",
            phone: "6543210987",
            address: "101 Maple St, City, Country",
            accountType: "Business",
            createdAt: new Date().toISOString(),
        }
    }
];

console.log("Before deletion:", objArray);

//  Define search criteria
let indexNumber = 3; // Index to delete
let username = "Simran Kaur";
let accountNumber = "6543210987";

let indexToDelete = -1;

// Find user by index, name, or account number
for (let i = 0; i < objArray.length; i++) {
    if (
        objArray[i].index === indexNumber ||  // Check index
        objArray[i].details.name.toLowerCase() === username.toLowerCase() ||  // Check name (case insensitive)
        objArray[i].details.accountNumber === accountNumber  // Check account number
    ) {
        indexToDelete = i;
        break;
    }
}

// Delete if found
if (indexToDelete !== -1) {
    console.log(`Deleting user:`, objArray[indexToDelete]);
    objArray.splice(indexToDelete, 1);
    console.log("After deletion:", objArray);
} else {
    console.log(`User not found for Index: ${indexNumber}, Name: "${username}", or Account Number: "${accountNumber}"`);
}




/// 0---- user Delete ------------


function deleteUserByIndex(indexNumber) {
    let newArray = [];
    
    for (let user of objArray) {
        if (user.index !== indexNumber) {
            newArray.push(user); // Keep users except the one to delete
        }
    }

    if (newArray.length === objArray.length) {
        console.log("User not found.");
    } else {
        console.log(`User with index ${indexNumber} deleted successfully.`);
    }

    return newArray;
}

// Example: Delete user with index 0
const updatedArray = deleteUserByIndex(0);
console.log(updatedArray);



/// Total Mmemory Update In Your back account .............


let totalmoney = 10; // Initialize sum variable

for (let key of objArray) { 
    if (key.index === 0) {  // Check if index is 0

        if (key.details.total <= 45) {
            key.details.total += totalmoney;  // ✅ Corrected += instead of =+
        } else {
            console.log("Check Your Total Money");
        }
        
        console.log("Total for index 0:", key.details.total);
    }
}



:::::::::::::::::::::::: Random Number genter 

function generateRandomUser(index) {
    const names = ["Jugal Sharma", "Kanika Sharma", "Rahul Verma", "Simran Kaur", "Amit Gupta", "Priya Singh", "Rohan Mehta", "Ananya Das", "Vikram Rao", "Neha Kapoor"];
    const accountTypes = ["Savings", "Checking", "Business"];
    
    return {
        index: index,
        details: {
            name: names[index % names.length],
            total: Math.floor(Math.random() * 100), // Random total balance
            accountNumber: Math.floor(1000000000 + Math.random() * 9000000000).toString(),
            email: `user${index}@example.com`,
            phone: Math.floor(6000000000 + Math.random() * 4000000000).toString(),
            address: `${Math.floor(Math.random() * 999)} Main St, City, Country`,
            accountType: accountTypes[index % accountTypes.length],
            createdAt: new Date().toISOString(),
        }
    };
}

for (let i = 0; i < 10; i++) {
    objArray.push(generateRandomUser(i));
}

console.log("Generated Users:", objArray);


:::::::::::::Important ::::::::::::::::::

const objArray = [
    {
        index: 0,
        details: {
            name: "Jugal Sharma",
            total: 45,
            accountNumber: "1234567890",
            email: "jugal@example.com",
            phone: "9876543210",
            address: "123 Main St, City, Country",
            accountType: "Savings",
            createdAt: new Date().toISOString(),
        }
    },
    {
        index: 1,
        details: {
            name: "Kanika Sharma",
            total: 69,
            accountNumber: "0987654321",
            email: "kanika@example.com",
            phone: "8765432109",
            address: "456 Elm St, City, Country",
            accountType: "Checking",
            createdAt: new Date().toISOString(),
        }
    },
    {
        index: 2,
        details: {
            name: "Rahul Verma",
            total: 32,
            accountNumber: "5678901234",
            email: "rahul@example.com",
            phone: "7654321098",
            address: "789 Pine St, City, Country",
            accountType: "Savings",
            createdAt: new Date().toISOString(),
        }
    },
    {
        index: 3,
        details: {
            name: "Simran Kaur",
            total: 85,
            accountNumber: "2345678901",
            email: "simran@example.com",
            phone: "6543210987",
            address: "101 Maple St, City, Country",
            accountType: "Business",
            createdAt: new Date().toISOString(),
        }
    },
    {
        index: 4,
        details: {
            name: "Amit Gupta",
            total: 55,
            accountNumber: "3456789012",
            email: "amit@example.com",
            phone: "5432109876",
            address: "202 Oak St, City, Country",
            accountType: "Savings",
            createdAt: new Date().toISOString(),
        }
    },
    {
        index: 5,
        details: {
            name: "Priya Singh",
            total: 71,
            accountNumber: "4567890123",
            email: "priya@example.com",
            phone: "4321098765",
            address: "303 Cedar St, City, Country",
            accountType: "Checking",
            createdAt: new Date().toISOString(),
        }
    },
    {
        index: 6,
        details: {
            name: "Rohan Mehta",
            total: 29,
            accountNumber: "5678901234",
            email: "rohan@example.com",
            phone: "3210987654",
            address: "404 Birch St, City, Country",
            accountType: "Business",
            createdAt: new Date().toISOString(),
        }
    },
    {
        index: 7,
        details: {
            name: "Ananya Das",
            total: 63,
            accountNumber: "6789012345",
            email: "ananya@example.com",
            phone: "2109876543",
            address: "505 Walnut St, City, Country",
            accountType: "Savings",
            createdAt: new Date().toISOString(),
        }
    },
    {
        index: 8,
        details: {
            name: "Vikram Rao",
            total: 47,
            accountNumber: "7890123456",
            email: "vikram@example.com",
            phone: "1098765432",
            address: "606 Chestnut St, City, Country",
            accountType: "Checking",
            createdAt: new Date().toISOString(),
        }
    },
    {
        index: 9,
        details: {
            name: "Neha Kapoor",
            total: 90,
            accountNumber: "8901234567",
            email: "neha@example.com",
            phone: "9876543210",
            address: "707 Redwood St, City, Country",
            accountType: "Business",
            createdAt: new Date().toISOString(),
        }
    }
];

console.log("Generated Users:", objArray);
