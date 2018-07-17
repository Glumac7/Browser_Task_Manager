let id = localStorage.length;

(function onload()
{
    if(localStorage.length > 1)
    {
        let white_line = document.getElementById('add-container-bottom');
        white_line.style.display = "block";

        for(let i in localStorage)
        {
            if(localStorage.getItem(i) == null 
            || localStorage.getItem(i) == '0'
            || localStorage.getItem(i) == '1'
            || localStorage.getItem(i) == '2'
            || localStorage.getItem(i) == '3'
            || localStorage.getItem(i) == '4'
            || localStorage.getItem(i) == '5'
            || localStorage.getItem(i) == '6'
            || localStorage.getItem(i) == '7'
            || localStorage.getItem(i) == '8'
            || localStorage.getItem(i) == '9')
            {}
            else
            {
                document.getElementById('adding').innerHTML += localStorage.getItem(i);
            }
        }
    }
    else
    {
        localStorage.clear();
    }
    
}())

function add_button_clicked()
{
    if(document.getElementsByTagName('input')[0].value == "")
    {}
    
    else
    {
        let white_line = document.getElementById('add-container-bottom');
        white_line.style.display = "block";

        let content = document.getElementsByTagName('input')[0].value;
        let setDiv = `<div data-id="${id}" id="display-content"><p onclick="delete_me(this), white_line_check()" id="main-p">${content}</p></div>`;

        localStorage.setItem(id, setDiv);
        document.getElementById('adding').innerHTML += localStorage.getItem(id);
        
        document.getElementsByTagName('input')[0].value = "";
        document.getElementsByTagName('input')[0].focus();

        localStorage.setItem('id', id);

        id++;
    }
    
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

function keydown(e)
{
    let keynum;
    if(window.event)
    {
        keynum = e.keyCode;
    }
    else if(e.which)
    {
        keynum = e.which;
    }
    
    if(keynum == 13)
    {
        add_button_clicked();
    }
}