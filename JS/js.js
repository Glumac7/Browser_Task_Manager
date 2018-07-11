function add_button_clicked()
{
    localStorage.setItem("asd", "dsa")
    console.log(localStorage.getItem("asd"));
}
/*Use the localStorage for saving data even after the browser closes, it retursn .toString
so be careful, PS. Don't fuck it up!*/