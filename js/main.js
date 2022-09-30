let theInput = document.querySelector(".add-task  input");
let theAddButton = document.querySelector(".add-task .plus");
let tasksContainar = document.querySelector(".tasks-content");

let taskCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-complete span");

///focus
window.onload = function () {
    theInput.focus();
};
theAddButton.onclick = function () {

    if (theInput.value === '') {
        console.log('no value');

    } else {
        let noTasksMsg = document.querySelector(".no-tasks-message");
        //check span message
        if(document.body.contains(document.querySelector(".no-tasks-message"))){
            noTasksMsg.remove();

        }
      
        //create span, delet button 
        let mainSpan = document.createElement('span');

        //delete span
        let deleteElement = document.createElement('span');

        //create the span
        let text = document.createTextNode(theInput.value);

        // create  text to delet 
        let deleteText = document.createTextNode("Delete");

        //add Text to span
        mainSpan.appendChild(text);

        //add classto span
        mainSpan.className = 'task-box';

        //add text to delet 
        deleteElement.appendChild(deleteText);

        //add text to delet 
        deleteElement.className = 'delete';

        //add delete buton in main span 
        mainSpan.appendChild(deleteElement);

        //add the task tow the contanar
        tasksContainar.appendChild(mainSpan);
        //empty the 
        theInput.value = '';
        //function calculateTasks()
        calculateTasks();

    }

    //remove no task masseg
}
document.addEventListener('click', function (e) {
    //delet task
    if (e.target.className == 'delete') {
        e.target.parentNode.remove();
        //check number of tasks inside the container 
        if(tasksContainar.childElementCount==0){
            createNoTasks();
        }
    }
    //fished
    if (e.target.classList.contains('task-box')) {
        //togel class finsh
        e.target.classList.toggle('finished');

    }
    calculateTasks();
})
///function to create span tasks message
function createNoTasks() {

    //create the messge span element 
    let msgSpan = document.createElement("span");
    //create the text message
    let msgText = document.createTextNode("No Task To Show");
    //add text to message span element 
    msgSpan.appendChild(msgText);
    //add class to message span
    msgSpan.className = "no-tasks-message";
    //addend the message span to contaniar
    tasksContainar.appendChild(msgSpan);
    //

}
//functin to calclat task
function calculateTasks(){
    ///calact all task
    taskCount.innerHTML= document.querySelectorAll('.tasks-content  .task-box ').length;

    ///commpletedTask
    tasksCompleted.innerHTML= document.querySelectorAll('.tasks-content .finished').length;

}