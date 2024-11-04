
function createUsername(firstName, lastName) {
    let firstPart = firstName[0] + firstName[1] + firstName[2];
    
    let lastPart = lastName[0] + lastName[1] + lastName[2];
    
    let totalLength = firstName.length + lastName.length;
    
    let username = firstPart + lastPart + totalLength;
    
    return username; 
}

// Example usage
console.log(createUsername("Samantha", "Green")); 