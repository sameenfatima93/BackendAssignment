let count = 0;

for (let rollNumber = 1; rollNumber <= 20; rollNumber++) {

    if (rollNumber === 13) {
        continue;
    }

    if (rollNumber === 18) {
        break;
    }

    console.log("Calling roll number " + rollNumber);

    count++;
}

console.log("Total roll numbers called = " + count);