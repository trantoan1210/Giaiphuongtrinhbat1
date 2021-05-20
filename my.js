let a = +prompt('Nhập giá trị a=') ;
let b = +prompt('Nhập giá trị b=');
X = -b/a;
if (a==0) {
    if (b==0) {
        alert("Phương trình vô số nghiệm");
    }
    else{alert("Phương trình vô nghiệm")};
}
else {alert ("Phương trình có 1 nghiệm X="+ X)};