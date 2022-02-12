/**
 * Câu lệnh điều kiện và vòng lặp trong ES
 */

let n = 2;
if(n % 2 == 0){
    console.log(n, "la so chan.");
}
else{
    console.log(n, "la so le.");
}

let m = 4;
switch(m){
    case 1:
        console.log("Chủ nhật");
        break;
    case 2: 
        console.log("Thứ 2");
        break;
    case 3:
        console.log("Thứ 3");
        break;
    case 4:
        console.log("Thứ 4");
        break;
    default:
        console.log("Dữ liệu không hợp lệ.");
}