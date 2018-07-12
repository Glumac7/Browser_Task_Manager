function add_button_clicked()
{
    let id = 0;

    let white_line = document.getElementById('add-container-bottom');
    white_line.style.display = "block";
        
    let content = document.getElementsByTagName('input')[0].value;
    let setDiv = document.getElementById('container').innerHTML += `<div id="display-content"><p id="main-p">${content}</p></div>`;

    localStorage.setItem(`${id}`, setDiv);

    id++;

    document.getElementsByTagName('input')[0].value = "";
}