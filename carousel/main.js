
let time_out = 3000;
const max_size = document.getElementsByClassName("point").length;

let currentIndex = 0;
let timeProcess;
let process = function(index) {
    if(index === max_size) index = 0;
    currentIndex = index;
    let baseWidth = -800 * index;

    document.getElementsByTagName("li")[0].style.marginLeft = baseWidth+"px";
    for( const ele of document.getElementsByClassName("point") ){
        ele.classList.remove("point-active");
    }
    document.getElementsByClassName("point")[index].classList.add("point-active");
    clearTimeout(timeProcess)
    timeProcess = setTimeout(() => process(++currentIndex), time_out);
}

let element_index = 0;
for (const element of document.getElementsByClassName("point")){
    (function (index) {
        element.addEventListener("click", ()=>process(index));
    })(element_index++);
}

timeProcess = setTimeout(() =>process(++currentIndex), time_out);