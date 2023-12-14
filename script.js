    const inputbox = document.getElementById("input-box");
    const list_item = document.querySelector(".listcontainer");

    function addTask(){
        if(inputbox.value === ''){
            alert("You must Enter Task here...")
        }else{
            const li = document.createElement("li");
            li.innerHTML = inputbox.value;
            list_item.appendChild(li); 
            const span = document.createElement("span")
            span.innerHTML = "\u00d7";
            li.appendChild(span); 

        }
        saveData();

        inputbox.value = "";
    }

        list_item.addEventListener("click", function(e){
            console.log(e);
        if(e.target.tagName === "LI" ){
            e.target.classList.toggle("checked");
            saveData();
        }else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            saveData();
        }
    }, false);


    function saveData(){
        localStorage.setItem("Data", list_item.innerHTML);
    }

    function showTask(){
        list_item.innerHTML = localStorage.getItem("Data");
        console.log(list_item);
    }

    showTask()

