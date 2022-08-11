class Planner{
    taskList = []; //List of task

    constructor(){
        console.log("Conscrution ===> ",this.taskList);
    }

    //Ajoute une tache dans la taskList
    add(task){
        //Mettre task dans taskList
        this.taskList.push(task);
    }

    //Affiche la liste des tasks
    list(){
        //Afficher toutes les taches dans la page web
        let taskCardListElm = document.querySelector("#taskCardList");

        taskCardListElm.innerHTML = this.taskList
            .map(task=>{
                return `
                    <section class="taskCard">
                        <div class="taskCard__main">
                            <h2 class="taskCard__title">${task.name}</h2>
                            <div class="taskCard__main__right">
                                <span class="button taskCard__cd">${task.endDate.toLocaleDateString()}</span>
                                <button class="button button--icon button--icon--solo button--icon--down"></button>
                            </div>
                        </div>
                        <div class="taskCard__content">
                            <p class="taskCard__description">${task.description}</p>
                            <div class="taskCard__buttons">
                                <select class="button button--icon button--icon--down">
                                    <option value="toDo" ${(task.status == "toDo" )? "selected" : ""}>To Do</option>
                                    <option value="Doing" ${(task.status == "doing" )? "selected" : ""} >Doing </option>
                                    <option value="Done" ${(task.status == "done" )? "selected" : ""}>Done </option>
                                </select>
                                <button class="button">Delete</button>
                                <button class="button button">
                                    Important 
                                    <input type="checkbox" ${(task.important) ? "checked" : ""}>
                                </button>
                            </div>
                        </div>
                    </section>
                `;
            })
            .join("");
    }



}
//------------------------------------------


let task1 = 
    {
        name: "My first task",
        endDate: new Date(),
        description: "descriprion de la tache 1",
        status: "toDo",
        important: true
    };
let task2 = 
    {
        name: "My second task",
        endDate: new Date(),
        description: "descriprion de la seconde tache",
        status: "done",
        important: false
    };

let task3 = 
    {
        name: "My third task",
        endDate: new Date(),
        description: "descriprion de la 3eme tache",
        status: "doing",
        important: true
    };


let planner = new Planner();
planner.add(task1);
planner.add(task2);
planner.add(task3);


planner.list();