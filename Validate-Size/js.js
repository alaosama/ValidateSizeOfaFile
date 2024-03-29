const input = document.querySelector('input[type="file"');
const userInfo = document.getElementById('infos');

input.addEventListener('change', () => {
    validatesize();
})

document.querySelector('form').addEventListener('Select', (e) => {
    e.preventDefault();
    const result = validatesize();
    if (result) {
        throw result;
    }

    // Upload Code
    userInfo.textContent = "Uploading starting !!!"

})

// Validate Size

function validatesize() {
    const file = input.files[0];
    if (!file) {
        const error = new Error ("No File To Selected");
        userInfo.textContent = error.message;
        return error;
    }

    const limit = 2000;
    const size = file.size / 1024;
    if (size > limit) {
        const error = new Error(`File :${(size / 1000).toFixed(2)} MB`);
        userInfo.textContent = err.message;
        return error;
    } else {
        userInfo.textContent = "Great";
        return false;
    }

}