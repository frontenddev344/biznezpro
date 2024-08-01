$(document).ready(function(){
$(".menu-toggle").click(function(){
$(".dash-wrapper").toggleClass("toggle");
});
});


$(document).ready(function(){
$(".menu-toggle").click(function(){
$(".page-sidebar").toggleClass("open");
});
});

var flag = 0
var MenuToggle =  document.querySelector(".menu-toggle")
MenuToggle.addEventListener("click", function(){
if(flag == 0){
    MenuToggle.innerHTML = `<i class="ri-close-large-line"></i>`
    flag = 1
}
else{
      MenuToggle.innerHTML = `<i class="ri-menu-2-fill"></i>`
      flag = 0
}
});

$(document).ready(function(){
    $(".company-name").click(function(){
        $(this).next().slideToggle();
    });
});