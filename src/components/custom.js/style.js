// export const loadStatusColor = (status) => {
//     let color;
//     switch (status) {
//     case "Idle":
//         color = "gray";
//         break;
//     case "Progress":
//         color = "orange";
//         break;
//     case "Error":
//         color = "red";
//         break;
//     case "Loaded":
//         color = "green";
//         break;
//     default:
//         color = "red";
//     }
//     return color;
// };
// export const displayOption = (status) => {
//     let displayStatus;
//     switch (status) {
//     case "Error":
//         displayStatus = false;
//         break;
//     case "Progress":
//         displayStatus = false;
//         break;
//     case "Idle":
//         displayStatus = false;
//         break;
//     case "Done":
//         displayStatus = true;
//         break;
//     default:
//         displayStatus = true;
//     }
//     return displayStatus;
// };
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
export const todoItemStyle = (completed) => {
    return {
    backgroundColor: !completed ? "transparent" : "#6890b0",
    };
};
export const todoItemListStyle = (completed) => {
    return { textDecoration: !completed ? "none" : "line-through" };
};
export const todoBtnStyle = (completed) => {
    return {
    backgroundColor: !completed ? "#1db41d" : "yellow",
    color: !completed ? "white" : "black",
    };
};