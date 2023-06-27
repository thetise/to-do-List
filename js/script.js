let formDOM = document.querySelector("#useForm")
formDOM.addEventListener("submit", formSubmit)

const userListDOM = document.querySelector("#userList")
let toInput = document.querySelector("#toDo")


document.querySelectorAll("#list > li").forEach((element) => {
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = `<i class="fa-sharp fa-solid fa-xmark"></i>`;
    deleteBtn.classList.add("removeBtn")
    element.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", removeElement);
  });
    // butonun kaldırma işlemi yapması için fonksiyon
function removeElement() {
    this.parentElement.remove();
    console.log("Atanan iş silindi.")
}

document.querySelectorAll("#userList > li").forEach((element) => {
    element.addEventListener("click", () => {
      //element.classList.toggle("done")
    })
  })



function formSubmit(event){
    event.preventDefault()

    console.log(toInput.value)
    //localStorage.setItem("toDo", toInput.value)

    let liDOM = document.createElement("li")
    liDOM.style.background = "lightgray"
    liDOM.style.color = "blue"
    liDOM.innerHTML = `${toInput.value}`
    userListDOM.appendChild(liDOM)

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = `<i class="fa-sharp fa-solid fa-xmark"></i>`;
    //deleteBtn.classList.add("removeBtn") // butona görev verdik
    liDOM.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", removeElement); // silme fonksiyonunu butona gömdük

    deleteBtn.addEventListener("click", removeElement); // silme fonksiyonunu butona gömdük
    deleteBtn.addEventListener("click", removeStorage); // stroage a kaydetmek için fonksiyonu newElement fonksionunda kullanıyoruz ki işlemi buton a basıldığında yapılsın daha sonra tanımlayacaz
    addStorage() 


    console.log("Yeni yapılacak iş eklendi.")
}

let localArray;

  if (localStorage.getItem("livalue")) {
    localArray = JSON.parse(localStorage.getItem("livalue"))
  } else {
    localArray = [];
  }

  function addStorage() {
    localArray.push(toInput.value);    
    localStorage.setItem("livalue", JSON.stringify(localArray))
  }

    localArray.forEach((element) => {
    let liDOM = document.createElement("li")
    liDOM.innerHTML = element;
    userList.appendChild(liDOM)

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = `<i class="fa-sharp fa-solid fa-xmark"></i>`;
    deleteBtn.classList.add("removeBtn")
    liDOM.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", removeElement); 
    deleteBtn.addEventListener("click", removeStorage);

    liDOM.addEventListener("click", () => {
        liDOM.classList.toggle("done")
      })
    })

    function removeStorage() {
        let indexNo= localArray.indexOf(this.parentElement.textContent) 
        localArray.splice(indexNo,1)
        localStorage.setItem("livalue",JSON.stringify(localArray))
        }