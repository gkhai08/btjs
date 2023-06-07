
// =========bài 1===========
function ex1(){
    let date = document.getElementById("input-date").value;

    let total = 0;
    if(date > 0){
        total = date * 100000;

    }
     alert(`Tiền lương: ${total}`)


}

// =========bài 2===========
function ex2(){
    let so1 = parseFloat(document.getElementById("input-so1").value);
    let so2 = parseFloat(document.getElementById("input-so2").value);
    let so3 = parseFloat(document.getElementById("input-so3").value);
    let so4 = parseFloat(document.getElementById("input-so4").value);
    let so5 = parseFloat(document.getElementById("input-so5").value);

    
    let trung5 = (so1 + so2 + so3 + so4 + so5) / 5;
    
    alert(`Giá trị trung bình là:${trung5}`);

}
// =========bài 3===========
function ex3(){
    let usd = parseFloat(document.getElementById("input-usd").value);

    let vnd = 23000;
    let tien = usd * vnd;

    alert(`Tiền quy đổi là:${tien.toLocaleString()}VND`);
}

// =========bài 4===========

function ex4(){
    let dai = parseFloat(document.getElementById("input-dai").value);
    let rong = parseFloat(document.getElementById("input-rong").value);

    let chuvi = 2 * (dai + rong);
    let dientich = dai * rong;

    alert(`Diện tích:${dientich}`);
    alert(`Chu vi:${chuvi}`);
    
}
// =========bài 5===========

function ex5(){
    let number = parseFloat(document.getElementById("input-number").value);

    let one = Math.floor(number /10);
    let two = number % 10;

    let sum = one + two;
    
    alert(`Tổng:${sum}`);
}