function getRandInt(min, max) {
    return Math.floor(Math.random() * (max-min + 1)) + min;
};

const password = (passwordLength) => {
    let newPasswordArr = [];
    for (let i = 0; i < passwordLength; i++) {
        newPasswordArr.push(String.fromCharCode(getRandInt(1, 95)));
    }
    const newPassword = newPasswordArr.join('');
    return newPassword;
};