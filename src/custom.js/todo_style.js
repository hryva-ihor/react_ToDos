
export const loadStatusFunc = (status) => {
    let color;
    let displayStatus;
    switch (status) {
    case "Idle":
        color = "gray";
        displayStatus = false;
        break;
    case "Progress":
        color = "orange";
        displayStatus = false;
        break;
    case "Error":
        color = "red";
        displayStatus = false;
        break;
    case "Loaded":
        color = "lightgreen";
        displayStatus = true;
        break;
    default:
        color = "red";
        displayStatus = false;
    }
    return [color,displayStatus];
};
export const todoElementStyle = (completed) => {
    return {
        todoItemStyle:{backgroundColor: !completed ? "transparent" : "rgb(48,81,107,0.4)"},
        todoBtnStyle: !completed ? "success" : "secondary",
        todoItemListStyle:{textDecoration: !completed ? "none" : "line-through" },
        redactBtnStyle:{visibility: !completed ? "visible" : "hidden" }
    ,
    };
};
// add/remove classes for redact input for todo title
const returnElementForRedactInput = (id) => {
    let li = document.querySelector(`#list${id}`);
    let input = document.querySelector(`#input${id}`);
    let redBtn = document.querySelector(`#redBtn${id}`);
    let saveBtn = document.querySelector(`#saveBtn${id}`);
    let none = "classDisplayNone"
    let block = "classDisplayBlock"
    return {li,input,redBtn,saveBtn,none,block}
}

export const reductInputTitleClasses = (id) => {
    let {li,input,redBtn,saveBtn,none,block} = returnElementForRedactInput(id)
    li.classList.contains(none) ? li.classList.remove(none) : li.classList.add(none);
    saveBtn.classList.contains(block) ? saveBtn.classList.remove(block) : saveBtn.classList.add(block);
    redBtn.classList.contains(none) ? redBtn.classList.remove(none) : redBtn.classList.add(none);
    input.classList.contains(block) ? input.classList.remove(block) : input.classList.add(block);

} 




