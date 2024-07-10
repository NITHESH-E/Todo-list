
var inputBox = document.getElementById("inputBox");
var div = document.getElementById("div");
function add()
{
    var newElement = document.createElement("li");
    newElement.innerHTML = inputBox.value+' <button style="background-color: #2F3645; color: #E6B9A6; margin-left:2%;margin-bottom:2%; border:none; font-size: large; padding: 5px 1% 5px 1%;" onclick="del(event)">delete</button';
    div.append(newElement);
}
function del(event)
{
    event.target.parentElement.remove()
}
function strick()
{
    
}