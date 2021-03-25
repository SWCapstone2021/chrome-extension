// This is what our customer data looks like.
const customerData = [
    { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
    { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" }
];

// 1. notify users that your browsers does not support indexDB
if (!window.indexedDB) {
    console.log("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
}
// 2. The call to the open() function returns an IDBOpenDBRequest object with a result (success) or error value that you handle as an event.
// The second parameter to the open method is the version of the database. 
// The version number is an unsigned long long number, which means that it can be a very big integer.
var request = window.indexedDB.open("MyTestDatabase", 5);

request.onerror = function(event) {
    // Do something with request.errorCode!
    console.log("Why didn't you allow my web app to use IndexedDB?!");
}

// In the handler for the upgradeneeded event, you should create the object stores needed for this version of the database
request.onupgradeneeded = function(event) {
    // Save the IDBDatabase interface
    var db = event.target.result;

    // 1. Create an objectStore for this database
    // In this case, the database will already have the object stores from the previous version of the database, so you do not have to create these object stores again. You only need to create any new object stores, or delete object stores from the previous version that are no longer needed.
    var objectStore = db.createObjectStore("name", { keyPath: "myKey" });

    // 2. Create an objectStore to hold information about our customers. We're
    // going to use "ssn" as our key path because it's guaranteed to be
    // unique - or at least that's what I was told during the kickoff meeting.
    var objectStore = db.createObjectStore("customers", { keyPath: "ssn" });
    objectStore.createIndex("name", "name", { unique: false });
    objectStore.createIndex("email", "email", { unique: ture });
    objectStore.transaction.oncomplete = function(event) {
        var customerObjectStore = db.transaction("customers", "readwrite").objectStore("customers");
        customerData.forEach(function(customer) {
            customerObjectStore.add(customer);
        });
    };

    // 3. Create another object store called "names" with the autoIncrement flag set as true.
    var objStore = db.createObjectStore("names", { autoIncrement: true });

    customerData.forEach(function(customer) {
        objStore.add(customer.name);
    })
};

request.onsuccess = function(event) {
    // Do something with request.result!
    console.log("Data base access success!");
    // 1. db object
    db = event.target.result;

    // 2. error handler for every request
    db.onerror = function(event) {
        // Generic error handler for all errors targeted at this database's requests!
        console.error("Database error: " + event.target.errorCode);
    }

}


// The first argument is a list of object stores that the transaction will span.
//  If you don't specify anything for the second argument, you get a read-only transaction. Since you want to write to it here you need to pass the "readwrite" flag.
var transcation = db.transaction(["customers"], "readwrite");
transaction.oncomplete = function(event) {
    console.log("All done!");
};

transaction.onerror = function(event) {
    // Don't forget to handle errors!
};

// ADD
var objectStore = transaction.objectStore("customers");
customerData.forEach(function(customer) {
    var request = objectStore.add(customer);
    request.onsuccess = function(event) {
        // event.target.result === customer.ssn;
    };
});

// DELETE
var request = db.transaction(["customers"], "readwrite")
    .objectStore("customers")
    .delete("444-44-4444");
request.onsuccess = function(event) {
    // It's gone!
    console.log("It's gone!");
};