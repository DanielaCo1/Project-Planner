class Planner {
	taskList = []; //List of task

	constructor() {
		console.log("Conscrution ===> ", this.taskList);
	}

	//Ajoute une tache dans la taskList
	add(task) {
		//Mettre task dans taskList
        task.id = Date.now();
		this.taskList.push(task);
	}

    calculTimeRemaining(endDate){
        // endDate =  Date();
        // let now =  new Date().getTime();
        // let diff = Math.abs(endDate - now);
        // console.log(diff);
        console.log(Date()-  Date(endDate));
        
        
    }

	//Affiche la liste des tasks
	list() {
		//Afficher toutes les taches dans la page web
		let taskCardListElm = document.querySelector("#taskCardList");



		taskCardListElm.innerHTML = this.taskList
			.map((task) => {
				return `
                    <section class="taskCard">

                        <div class="taskCard__main">
                            <h2 class="taskCard__title">${task.name}</h2>
                            <div class="taskCard__main__right">
                                <span class="button taskCard__cd">${this.calculTimeRemaining(task.endDate)}</span>
                                <button class="button button--icon button--icon--solo button--icon--down"></button>
                            </div>
                        </div>
                        <div class="taskCard__content">
                            <p class="taskCard__description">${
								task.description
							}</p>
                            <div class="taskCard__buttons">
                                <select class="button button--icon button--icon--down">
                                    <option value="toDo" ${
										task.status == "toDo" ? "selected" : ""
									}>To Do</option>
                                    <option value="Doing" ${
										task.status == "doing" ? "selected" : ""
									} >Doing </option>
                                    <option value="Done" ${
										task.status == "done" ? "selected" : ""
									}>Done </option>
                                </select>
                                <button class="btnDelete button" data-taskid="${task.id}">Delete</button>
                                <button class="button">
                                    Important 
                                    <input type="checkbox" ${
										task.important ? "checked" : ""
									}>
                                </button>
                            </div>
                        </div>
                    </section>
                `;
			})
			.join("");

// Add element delete
let deleteBtn = document.createElement("button");
deleteBtn.classList.add("button");
deleteBtn.innerHTML = "Delete";



let btnDeleteList = document.querySelectorAll(".btnDelete");
btnDeleteList.forEach(btn=>{
    btn.addEventListener("click",e=>{
        console.log(e.target.dataset.taskid);
        let idToDelete = e.target.dataset.taskid;//dataset= accesso a taskid

        let index = planner.taskList.findIndex( elt=> elt.id == idToDelete);//se l'elem è = ad idDeletelm 
        planner.deleteTask(index);
        planner.list();
        

    })
    console.log(btn);
})


	}

    deleteTask(index){
        this.taskList.splice(index, 1)
    }

}

function addDeleteEvent(e){
    console.log(e);
}


let planner = new Planner();
let task1 = {
    name: "My first task",
    endDate: new Date(),
    description: "descriprion de la tache 1",
    status: "toDo",
    important: true,
};

planner.add(task1);

planner.list();


//----------------------------------
// Input Form
//----------------------------------
let modalBoxElt = document.querySelector("#modalBox");

//Add event on add task button
let btnAddTaskElt = document.querySelector("#btnAddTask");
btnAddTaskElt.addEventListener("click", (e) => {
	modalBoxElt.style.visibility = "visible";
});

//Add event on form submit to add a task
let form = document.getElementById("form");
form.addEventListener("submit", (e) => {
	e.preventDefault();
	console.log(e);

    let taskNameInput = document.querySelector("#taskName").value;
	let endDateInput = document.querySelector("#endDate").value;
	let endTimeInput = document.querySelector("#endTime").value;
	let descriptionInput = document.querySelector("#description").value;
    let importantInput = document.querySelector("#important").checked;
    console.log(importantInput);
	if(
        taskNameInput !=  "" &&
        endDateInput != "" &&
        endTimeInput != "" &&
        descriptionInput != ""
        ) {
            closeForm();
           
            let task = {
                name : taskNameInput,
                endDate: new Date(endDateInput + "T"+ endTimeInput),
                description: descriptionInput,
                status: "toDo",
                important: importantInput,
            }; 
            planner.add(task);
            planner.list();
            }
        
    else {
        alert("Le formlaire n'est pas valide");
    }     
	
});

//Add function Delete


//Add event on reset btn
form.addEventListener("reset", (e) => {
	e.preventDefault();
	closeForm();
});

//reset and close the form
function closeForm() {
	document.getElementById("form").reset();
	modalBoxElt.style.visibility = "hidden";
}

