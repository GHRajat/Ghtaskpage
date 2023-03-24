const modal = document.getElementById("submitModal");
const submitBtn = document.getElementById("submitBtn");

const modalOptYes = document.getElementById("modalYes");
const modalOptNo = document.getElementById("modalNo");

const allInputs = document.getElementById("allInputs");

//submit button functionality starts

submitBtn.addEventListener("click", function () {
    modal.style.display = "block";
})

modalOptYes.addEventListener("click", () => {
    modal.style.display = "none";
    allInputs.reset();
})
modalOptNo.addEventListener("click", () => {
    modal.style.display = "none";
})

// submit button functionality ends

// photo upload funcitonality 

const uploadPhotoBox = document.getElementById("uploadPhotoBox");
const photoDisplayed = document.getElementById("photoDisplayed");

uploadPhotoBox.addEventListener("change", (e) => {
    const uploadedFile = uploadPhotoBox.files[0];
    console.log(uploadedFile);

    if (uploadedFile) {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            photoDisplayed.setAttribute("src", reader.result);
        });
        reader.readAsDataURL(uploadedFile);
    }
})