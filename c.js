const n = Number(prompt("Nhập số n:"));

//Phần 1

// 1. Cách truyền thống
function kiemTraChanLe1(n) {
    return n % 2 === 0 ? "Chẵn" : "Lẻ";
}
console.log("Kiểm tra Chẵn/Lẻ: " + kiemTraChanLe1(n))

// 2. Cách biểu thức hàm
const kiemTraChanLe2 = function(n) {
    return n % 2 === 0 ? "Chẵn" : "Lẻ";
};
console.log("Kiểm tra Chẵn/Lẻ: " + kiemTraChanLe2(n))

// 3. Cách hàm mũi tên
const kiemTraChanLe3 = n => n % 2 === 0 ? "Chẵn" : "Lẻ";
console.log("Kiểm tra Chẵn/Lẻ: " + kiemTraChanLe3(n))



// Phần 2

// 1. Cách truyền thống
function laSoNguyenTo1(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}
console.log("Có phải SNT không: " + laSoNguyenTo1(n));

// 2. Cách biểu thức hàm

const laSoNguyenTo2 = function(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
};
console.log("Có phải SNT không: " + laSoNguyenTo2(n));

// 3. Cách hàm mũi tên
const laSoNguyenTo3 = n => {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
};
console.log("Có phải SNT không: " + laSoNguyenTo3(n));


// Vòng lặp
// Phần 1

function inSoNguyenTo(limit) {
    let result = "";
    for (let i = 1; i <= limit; i++) {
        if (laSoNguyenTo1(i)) result += i + " ";
    }
    console.log("SNT: " + result);
}

inSoNguyenTo(n);


// Phần 2

function tinhTong(limit) {
    let tong = 0;
    for (let i = 1; i <= limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) tong += i;
    }
    return tong;
}
console.log("Tổng chia hết cho 3 hoặc 5 là: " + tinhTong(n));
