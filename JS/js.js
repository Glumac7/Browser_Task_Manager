var id = localStorage.length; //Putting the length of the localStorage in the variable "id"!

(function onload()
{
    document.getElementById('add-container').focus();

    if(localStorage.length >= 1)
    {
        let white_line = document.getElementById('add-container-bottom'); //Setting the white line element to the variable "white_line"!
        white_line.style.display = "block"; //Displaying the line as a block element

        for(let i in localStorage) //As long as there are elements in the localStorage, go through each of them!
        {
            if(localStorage.getItem(i) != null) //If the localStorage item at a given numerical address is not null...
            {
                document.getElementById('adding').innerHTML += localStorage.getItem(i); //...add the item to the HTML, that is, display a goal!
            }
        } //Do this for every single element in the localStorage!
    }   
    else localStorage.clear();
}()) //An IIFE function!

function add_button_clicked()
{
    setTimeout(() =>{
        if(document.getElementsByTagName('input')[0].value == "") //If the input field is empty, do not add that as a goal!
        {}
        else //If there is some content in the input field, add it to the goals list!
        {
            let white_line = document.getElementById('add-container-bottom'); //Setting the white line element to the variable "white_line"!
            white_line.style.display = "block"; //Displaying the line as a block element

            let content = document.getElementsByTagName('input')[0].value; //Setting the value of the input field to the variable "content"!
            let setDiv = 
            `<div data-id="${id}" id="display-content" class="display-content-${id} ">
                <p onclick="delete_me(this), white_line_check()" id="main-p">${content}</p>
            </div>`; // Setting the element that needs to be added to the variable "setDiv"!
        
            localStorage.setItem(id, setDiv); //Set the local storage item with the id of "id" to "setDiv"...
            document.getElementById('adding').innerHTML += localStorage.getItem(id); //...add that item to the HTML!

            document.getElementsByTagName('input')[0].focus(); //After the animation finishes, focus on the input feald...
            document.getElementsByTagName('input')[0].value = ""; //...and set it's value to an empty string!
        }

        $(".display-content-"+id).addClass("fade-in-top");

        setTimeout(() =>{
            $(".display-content-"+id).removeClass("fade-in-top");

            id++; //Increase the localStorage length by 1 each time the user adds a new goal!
        },300)

    },0)

} //Add a class and after the animation finishes remove the class

function white_line_check()
{
    if(localStorage.length < 1)
    {
        let white_line = document.getElementById('add-container-bottom');
        white_line.style.display = "none";
    }
    else
    {
        let white_line = document.getElementById('add-container-bottom');
        white_line.style.display = "block";
    }
}

function delete_me(clicked_goal)
{
    clicked_goal.parentNode.parentNode.removeChild(clicked_goal.parentNode); //Removes the whole node from the DOM when the user clicks on the text!

    let goal_container = clicked_goal.parentElement.getAttribute('data-id'); //Sets the varibale "goal_container" to the 'data-id''s value form the clicked goal.

    localStorage.removeItem(goal_container); //Removes an item from the localStorage with the 'data-id' from the element that was clicked!
}

function keydown(e) //This function checks to see if a user has clicked the 'enter' button on the keyboard, and adds an element if so(it add's it using the 'add_button_clicked()' function)! 
{
    let keynum;
    if(window.event) keynum = e.keyCode;

    else if(e.which) keynum = e.which;
    
    if(keynum == 13)
    {
        add_button_clicked();
        setTimeout(() =>{},300);
    }
}

/*Preloader*/
function preloader() {
    document.getElementById('spinner-container').classList.add("fade-out");
    setTimeout(() =>
    {
        document.getElementById('spinner-container').style.display = "none";
        document.querySelector("body").classList.add("puff-in-center");
    }, 700);
    document.querySelector("MAIN").style.display = "flex";
}