let ul = document.querySelector("#expense-list");
let btn = document.querySelector("#add-expense");
let textinput = document.querySelector("#text");
let amount = document.querySelector("#amount");
let container = document.querySelector(".container");

let totalAmount = 0; 
let totalDisplay = document.createElement("p"); 
container.appendChild(totalDisplay); 

btn.addEventListener("click", () => {
    if (textinput.value === "" || amount.value === "") {
        alert("Please Enter Complete Value");
    } else {
        let li = document.createElement("li");
        ul.appendChild(li);

    
        li.setAttribute("data-amount", amount.value);


      
        li.innerHTML = `${textinput.value} - ₹${amount.value}`;

        let dbtn = document.createElement("button");
        li.appendChild(dbtn);
        dbtn.innerHTML = "Delete";
        dbtn.classList.add("delete-btn");


        totalAmount += Number(amount.value);
        updatatotle();


        textinput.value = "";
        amount.value = "";

        dbtn.addEventListener("click", () => {
            let expenseAmount = Number(li.getAttribute("data-amount")); 
            totalAmount -= expenseAmount;
            updatatotle();

            ul.removeChild(li); 
        });
    }
});

function updatatotle() {
    totalDisplay.innerHTML = `Total: ₹${totalAmount}`;
}
