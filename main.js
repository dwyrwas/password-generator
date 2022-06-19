var password = document.getElementById('password');

function generatePassword(){
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 16;
    var password = "";

    for (let i =0; i <passwordLength; i++) {
        let randnum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randnum, randnum+1);
    }
    document.getElementById('password').value = password;
}
