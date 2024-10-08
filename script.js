/**
 * Question 1
 */
const question1 = () => {
  const sidebarButton = document.querySelector("#sidebar-button");
  const sidebar = document.querySelector("#sidebar");

  // Listen for a "click" event on the sidebar's button.
  //
  // Browsers emit lots of different kinds of events, for
  // a full list see the following link:
  //   https://www.javatpoint.com/javascript-events
  //
  // addEventListener will then call the function we provide
  // whenever the button is clicked.
  sidebarButton.addEventListener("click", (event) => {
    const sidebarIsOpen = sidebar.classList.contains("opened");

    if (sidebarIsOpen) {
      // Close the sidebar
      sidebar.classList.remove("opened");
      
    } else {
      // Open the sidebar
      sidebar.classList.add("opened");
    }
  });
};

/**
 * Question 2
 */
const question2 = () => {
  const taskName = document.querySelector("#task-name");
  const addTodoButton = document.querySelector("#add-todo");
  const todoListUl = document.querySelector("#todo-list");

  addTodoButton.addEventListener("click", (event) => {
    const taskValue = taskName.value;
    if (taskValue !== ""){
      const newTodo = document.createElement("li");
      newTodo.textContent = taskValue;
      todoListUl.append(newTodo);
      taskName.value = "";
    }
  })

};

/**
 * Question 3
 */
const question3 = () => {
  const firstNameInput = document.querySelector("#first-name");
  const lastNameInput = document.querySelector("#last-name");
  const message = document.querySelector("#message");

  // using this function is reccomended but not necessary
  const updateMessage = () => {
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    message.textContent = `Hello ${firstName} ${lastName}!`;
  };

  firstNameInput.addEventListener('input', updateMessage);
  lastNameInput.addEventListener('input', updateMessage);

};

/**
 * We need to wait for the HTML file to fully load before running
 * our JavaScript, otherwise it won't be able to operate on the HTML
 * since it hasn't loaded.
 */
document.addEventListener("DOMContentLoaded", (event) => {
  // We wrap each question in a try-catch so that way even if
  // your code for one question errors, the other ones
  // will work.
  try {
    question1();
  } catch (e) {
    console.error(e);
  }

  try {
    question2();
  } catch (e) {
    console.error(e);
  }

  try {
    question3();
  } catch (e) {
    console.error(e);
  }
});
