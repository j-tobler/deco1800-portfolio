document.addEventListener("DOMContentLoaded", function() {
    selectFile("about-me-file-tag", "about-me-file-contents", "profile-img", "about-me-screen");
    selectFile("project-a-file-tag", "project-a-file-contents", "part-a-img", "assessments-screen");
    selectFile("what-i-learned-file-tag", "what-i-learned-file-contents", "what-i-learned-img", "course-screen");
});

function selectFile(fileTagID, fileContentsID, imagesClass, screenID) {
    // initialise variables
    const screen = document.getElementById(screenID);
    const window = screen.querySelector(".file-column").querySelector(".window");
    const fileTags = window.querySelector(".file-tag-group").querySelectorAll(".file-tag");
    const fileContents = window.querySelectorAll(".file-contents");
    const images = screen.querySelector(".image-column").querySelectorAll("img");
    const selectedImages = document.getElementsByClassName(imagesClass);

    // unselect everything in this screen
    for (let i = 0; i < fileTags.length; i++) {
        fileTags.item(i).classList.remove("selected-file-tag");
    }
    for (let i = 0; i < fileContents.length; i++) {
        fileContents.item(i).classList.remove("selected-file-contents");
    }
    for (let i = 0; i < images.length; i++) {
        images.item(i).classList.remove("selected-image");
    }

    // select the specified objects
    document.getElementById(fileTagID).classList.add("selected-file-tag");
    document.getElementById(fileContentsID).classList.add("selected-file-contents");
    for (let i = 0; i < selectedImages.length; i++) {
        selectedImages.item(i).classList.add("selected-image");
    }
}