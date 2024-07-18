function writeCards(names, event) {
    // Create a new, empty array to hold the messages
    let messages = [];

    // Iterate through the input array
    for (let i = 0; i < names.length; i++) {
        // Build out the 'thank you' message for each name
        let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        // Add the message to the new array
        messages.push(message);
    }

    // Return the new array
    return messages;
}

// Example of what a call to the writeCards() function might look like
const names = ["Ada", "Brendan", "Ali"];
const event = "birthday";
const thankYouMessages = writeCards(names, event);

console.log(thankYouMessages);

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}

// Example of what a call to the countDown function might look like
countDown(10);
