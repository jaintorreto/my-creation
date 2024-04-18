var popupoverlayer = document.querySelector(".popup-overlayer") 
var popupbox = document.querySelector(".popup-box")
var popupbtn = document.getElementById("addbtn")


popupbtn.addEventListener("click",function(){
    popupoverlayer.style.display="block"
    popupbox.style.display="block"
}) 

var cancelpopup =document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlayer.style.display="none"
    popupbox.style.display="none"
})

var container= document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitle=document.getElementById("book-title-input")
var bookauthor=document.getElementById("book-author-input")
var bookdes=document.getElementById("book-des-in")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","bookcon")
    div.innerHTML=`<h2>${booktitle.value}</h2>
                   <h5>${bookauthor.value}</h5>
                   <p>${bookdes.value}</p>
                   <button onclick="deletebook(event)">delete</button>`
    container.append(div)
    popupoverlayer.style.display="none"
    popupbox.style.display="none"
})

function deletebook(event){
    event.target.parentElement.remove()
}