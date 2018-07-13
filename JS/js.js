let id = localStorage.length;

(function onload()
{
    if(localStorage.length > 0)
    {
        let white_line = document.getElementById('add-container-bottom');
        white_line.style.display = "block";

        for(let i in localStorage)
        {
            if(localStorage.getItem(i) == null){}
            else
            {
                document.getElementById('adding').innerHTML += localStorage.getItem(i);
            }
        }
    }
    console.log(localStorage.length);
}())

function add_button_clicked()
{
    let white_line = document.getElementById('add-container-bottom');
    white_line.style.display = "block";
        
    let content = document.getElementsByTagName('input')[0].value;
    let setDiv = `<div data-id="${id}" id="display-content"><p onclick="delete_me(this), white_line_check()" id="main-p">${content}</p></div>`;

    localStorage.setItem(id, setDiv);
    document.getElementById('adding').innerHTML += localStorage.getItem(id);
    
    document.getElementsByTagName('input')[0].value = "";

    localStorage.setItem('id', id);

    id++;
} 

function white_line_check()
{
    if(localStorage.length <= 1)
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

function delete_me(as)
{
    as.parentElement.style.display = "none";
    let ss = as.parentElement.getAttribute('data-id');
    localStorage.removeItem(ss);
}