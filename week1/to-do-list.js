const readlineSync = require('readline');

const rl = readlineSync.createInterface({

    input: process.stdin,
    output: process.stdout

});

const tasks = [];

function menu() {

    console.log("\n--- TO DO LIST ---");
    console.log("1. List task");
    console.log("2. Add tasks");
    console.log("3. Remove task");
    console.log("4. Exit");

    rl.question('Pick an option: ', choice => {

    switch(choice) {
        case '1': listTasks();
        break
        case '2': addTask();
        break
        case '3': removeTask();
        break
        case '4': rl.close();
        break
        default:
            console.log('Please pick a valid option.');
            menu();
        break
    }
})

}

function addTask() {
    
    rl.question('What task would you like to add? ', task => {

        tasks.push(task);
        console.log("task has been added.");
        menu();

    });

}

function removeTask() {

    rl.question('What task would you like to remove?', num => { //list tasks to see what to remove

        let index = Number(num) - 1;

        if (index >= 0 && index < tasks.length) {

            tasks.splice(index, 1);
            console.log("task has been removed.");
      
        } else { 
            
            console.log('Invalid option')
        }
        menu();
        
    });

}

function listTasks() {

    console.log('\nYour tasks:');
    tasks.forEach((t, i) => console.log(`${t}`)); //figure out how this works tmr
    menu();

}

menu();