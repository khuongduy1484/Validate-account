let account = prompt("nhap account");
let request = /^[_a-z0-9]{6}$/;
let ckeck =request.test(account);
function checkaccount() {
    if (ckeck){
        alert("account đúng");
    } else {
        alert("account sai");
    }
}
checkaccount(account);