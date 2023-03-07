//點擊顏色更換對應圖片
function changephoto1(){
    document.getElementById('change-img').src='img/UI/joyaccessory.jpg';
}
function changephoto2(){
    document.getElementById('change-img').src='img/UI/exercise.jpg';
}
function changephoto3(){
    document.getElementById('change-img').src='img/UI/department.jpg';
}
function changephoto4(){
    document.getElementById('change-img').src='img/UI/dessert.jpg';
}
function changephoto5(){
    document.getElementById('change-img').src='img/UI/renaissance.jpg';
}

//點擊顏色更換外框highlight
const colorActive = document.querySelectorAll('.img_btn')

function changeColor() {
    colorActive.forEach (c => c.classList.remove('highlight_main'));
    this.classList.add('highlight_main');
};

colorActive.forEach (c => c.addEventListener('click', changeColor));