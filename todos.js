// get todos from localStorage
let todos = localStorage.getItem("todos")

// try parse data or null
try {
	todos = JSON.parse(todos)
	todos = todos.length ? todos : null
} catch(e) {
	todos = null
}

// set default value if todos == null
if (!todos) {

	localStorage.setItem("todos", JSON.stringify(todos))
}

// func to create or update todos list in ui
function createTodos(todos) {
	let todosList = document.querySelector("#todos-list")
	todosList.innerHTML = ""

	// create list tag for each todo
	todos.forEach((todo, index) => {
		let li = document.createElement("li")
		li.className = "list-group-item"
		let content = document.createElement("span")
		content.textContent = todo.content
		content.style.textDecoration = todo.status ? "initial" : 'line-through'
		let deleteBtn = document.createElement("img")
		deleteBtn.src = "media/delete.png"
		deleteBtn.alt = "delete icon"
		deleteBtn.className = 'float-right'

		// append content and deleteBtn to li
		li.append(content)
		li.append(deleteBtn)

		// append li to todosList
		todosList.append(li)

		// add deleteBtn functionality
		deleteBtn.addEventListener("click", e => {
			todos.splice(index, 1)
			localStorage.setItem("todos", JSON.stringify(todos))
			createTodos(todos)
		})

	
}

createTodos(todos)

// action add & search
let actions = document.querySelector("#actions")
let formWrapper = document.querySelector("#form-wrapper")

Array.from(actions.children).forEach(action => {
	if (action.dataset.action == "add") {
		action.addEventListener("click", e => {
			formWrapper.innerHTML = `
				<form id="add">
					<input class="form-control" name="add" placeholder="Add todo ..">
				</form>
			`
		})
	} else if (action.dataset.action == "search") {
		action.addEventListener("click", e => {
			formWrapper.innerHTML = `
				<form id="search">
					<input class="form-control" name="search" placeholder="Search todos ..">
				</form>
			`
		})
	}
})
function myFunction() {
	// Declare variables
	var input, filter, ul, li, a, i, txtValue;
	input = document.getElementById('myInput');
	filter = input.value.toUpperCase();
	ul = document.getElementById("myUL");
	li = ul.getElementsByTagName('li');
  
	// Loop through all list items, and hide those who don't match the search query
	for (i = 0; i < li.length; i++) {
	  a = li[i].getElementsByTagName("a")[0];
	  txtValue = a.textContent || a.innerText;
	  if (txtValue.toUpperCase().indexOf(filter) > -1) {
		li[i].style.display = "";
	  } else {
		li[i].style.display = "none";
	  }
	}
  }

   function search(query){
                if(query.slice(0, 7) == "http://"){
                    window.location.href = query
                }
                else{
                    window.location.href = "https://www.google.com/search?q=" + query
                }
            }