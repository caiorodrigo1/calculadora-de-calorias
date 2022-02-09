// var btn = document.getElementById("under");
// btn.addEventListener("click", function() {
// 	btn.style.backgroundColor = "rgb(0, 255, 0)";
// }, false);

// function advance(){
//     let pessoa = {
//         formula: 
//         genero: 
//         idade
//         altura
//         peso
        
//     }
// }

// function person(gender, age, height, weight){
//     this.gender = gender;
//     this.age = age;
//     this.height = height;
//     this.weight = weight;
// }

// var divs = document.getElementById('under')

// function change(){

//     divs.addEventListener('click', activateClass);
// }

// let links = document.querySelectorAll('card');
//    for (var i = 0; i < links.length; i++) {
//     links[i].addEventListener('click', activateClass);
//    }
// function activateClass(e) {
// for (var i = 0; i < links.length; i++) {
//     links[i].classList.remove('active');
//    }
//     e.target.classList.add('active');
// }

var addclass = 'color';
var $cols = $('.cards').click(function(e) {
    e.preventDefault();
    $cols.removeClass(addclass);
    $(this).addClass(addclass);
});

