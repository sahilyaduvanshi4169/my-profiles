const modal= document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

//modal open function
const openModal = ()=> {
    console.log("Modal is open");
    modal.classList.add("acive");
    overlay.classList.add("ovelayactive");
};

//modal close function
const closeModal =() =>{
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
};