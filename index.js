const updateMyCourse = document.getElementById('update-btn');
const updateText = document.getElementById('updateCourse');

updateMyCourse.addEventListener('click', function UpdateMyBio() {
    updateMyCourse.innerHTML = 'Updated';
    updateText.innerHTML = 'I am currently learning JavaScript.';
})