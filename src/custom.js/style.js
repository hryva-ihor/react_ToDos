
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
        color = "green";
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
        todoItemStyle:{backgroundColor: !completed ? "transparent" : "#6890b0"},
        todoBtnStyle:{backgroundColor: !completed ? "#1db41d" : "yellow",color: !completed ? "white" : "black"},
        todoItemListStyle:{textDecoration: !completed ? "none" : "line-through" }
    ,
    };
};