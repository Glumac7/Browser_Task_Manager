var id = 0; //Putting the length of the localStorage in the variable "id"!

(function onload()
{

    document.getElementById("background").style.backgroundImage = "url('https://source.unsplash.com/1920x1080/?wallpapers')";

    var arr = [];
    document.getElementById('add-container').focus();

    white_line_check();
    
    if(localStorage.length >= 1)
    {
        for(let i in localStorage) //As long as there are elements in the localStorage, go through each of them!
        {
            if(localStorage.getItem(i) != null) //If the localStorage item at a given numerical address is not null...
            {
                arr.push(i); //Add every single element from the localStorage to the arr for further processing!
            }
        } //Do this for every single element in the localStorage!

        arr.sort(function(a, b) {return a - b;}); //Sort the elements from the localStorage in ascending order!

        for(let i = 0; i < arr.length; i++)
        {
            document.getElementById('adding').innerHTML += localStorage.getItem(+arr[i]); //Add the sorted array to the HTML!
        }
        id = +arr[arr.length-1]; //Because the sorted arr's value is of type string, we need to cast it to a number so that the last value from the array can be the representation of the last element that was added to the localStorage!
        id++; //Id is incremented by 1 so that the next element that is going to be added doesn't have the same id as the one before it!
    }   
    else localStorage.clear();

    
}()) //An IIFE function!

function add_button_clicked()
{
    if(document.getElementsByTagName('input')[0].value == "") //If the input field is empty, do not add that as a goal!
    {}
    else //If there is some content in the input field, add it to the goals list!
    {
        let content = document.getElementsByTagName('input')[0].value; //Setting the value of the input field to the variable "content"!
        let setDiv = 
        `<div data-id="${id}" id="display-content" class="display-content-${id}">
            <p onclick="delete_me(this)" id="main-p">${content}</p>
        </div>`; // Setting the element that needs to be added to the variable "setDiv"!
    
        localStorage.setItem(id, setDiv); //Set the local storage item with the id of "id" to "setDiv".

        if(localStorage.length == 1) //If the "setDiv" element is the first element in the app, add a white line with animation!
        {
            document.getElementById('add-container-bottom').style.display = "block";
            document.getElementById('add-container-bottom').classList.add("fade-in-height");
            setTimeout(() =>{document.getElementById('add-container-bottom').classList.remove("fade-in-height");}, 300);
        }

        document.getElementById('adding').innerHTML += setDiv; //Add the "setDive" item to the HTML!
        
        $(".display-content-"+id).addClass("fade-in-height");

        setTimeout(() =>{   
            if(document.body.offsetWidth >= 576) $(".display-content-"+id).css({height: "100px"});
            $(".display-content-"+id).removeClass("fade-in-height");
            document.getElementsByTagName('input')[0].focus(); //After the animation finishes, focus on the input feald...
            document.getElementsByTagName('input')[0].value = ""; //...and set it's value to an empty string!
            id++; //Increase the localStorage length by 1 each time the user adds a new goal!
        },300);
    }
}

function white_line_check()
{
    if(localStorage.length < 1)
    {
        let white_line = document.getElementById('add-container-bottom');
        white_line.classList.add("fade-out-height");
        
        setTimeout(() =>{
            white_line.classList.remove("fade-out-height");
            white_line.style.display = "none";
        }, 300);
    }
    else
    {
        let white_line = document.getElementById('add-container-bottom');
        white_line.style.display = "block";
    }
}

function delete_me(clicked_goal)
{
    clicked_goal = clicked_goal.parentNode; //The goal that was clicked is a text. We need to remove the whole element, so this changes the variables content from the text to the whole element!

    clicked_goal.classList.add("fade-out-height");

    let goal_container = clicked_goal.getAttribute('data-id'); //Sets the varibale "goal_container" to the 'data-id''s value form the clicked goal.
    localStorage.removeItem(goal_container); //Removes an item from the localStorage with the 'data-id' from the element that was clicked!

    white_line_check();

    setTimeout(() =>{
        clicked_goal.parentNode.removeChild(clicked_goal); //Removes the whole node from the DOM when the user clicks on the text!
    },300);
}

function keydown(e) //This function checks to see if a user has clicked the 'enter' button on the keyboard, and adds an element if so(it add's it using the 'add_button_clicked()' function)! 
{
    let keynum;
    if(window.event)  keynum = e.keyCode;

    else if(e.which)  keynum = e.which;
    
    if(keynum == 13)  add_button_clicked(); //If the button clicked on the keyboard is 'enter', activate the 'add_button_clicked()' function!
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