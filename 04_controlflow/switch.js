const month =3
switch (month) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;//it is used to break the control flow if condition fulfilled
    case 3:
        console.log("March");
        // break;//if we use break then it will go to the next statement one after another except default
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;

    default:
        console.log("month after june");
        break;
}