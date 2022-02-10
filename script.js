let selection1 = document.getElementById('under')
let selection2 = document.getElementById('ok')
let selection3 = document.getElementById('over')
let selection4 = document.getElementById('fit')

let sedentario = document.getElementById('sedentario')
let poucoAtivo = document.getElementById('pouco')
let moderado = document.getElementById('moderado')
let ativo = document.getElementById('muito')
// let formula = ''

// HB FORMULA -> BMR = 10 × weight (kg) + 6.25 × height (cm) – 5 × age (years) – 161 
// For men, the formula is: BMR = 10 × weight (kg) + 6.25 × height (cm) – 5 × age (years) + 5


function select1() {
    selection1.style.backgroundColor = ('#00ff00');
    
    localStorage.setItem('formula', 'HB');
    
    window.location.href = "medidas.html";
}

function select2() {
    selection2.style.backgroundColor = ('#00ff00');

    localStorage.setItem('formula', 'HB');
    
    window.location.href = "medidas.html";
}

function select3() {
    selection3.style.backgroundColor = ('#00ff00');
    
    localStorage.setItem('formula', 'MJ');
    
    window.location.href = "medidas.html";
}

function select4() {
    selection4.style.backgroundColor = ('#00ff00');
   
    localStorage.setItem('formula', 'TS');
    
    window.location.href = "medidas.html";
}

function getMeasures() {

    if((!document.getElementById('genderMale').checked)  && (!document.getElementById('genderFemale').checked) ) {
        alert("Selecione o gênero")
    }else{

    let gender = document.querySelector('input[name="gender"]:checked').value;
    let sliderAge = document.getElementById('ageRange').value;
    let sliderHeight = document.getElementById('heightRange').value;
    let slidergeWeight = document.getElementById('weightRange').value;
    
    localStorage.setItem('gender', gender)
    localStorage.setItem('age', sliderAge);
    localStorage.setItem('height', sliderHeight)
    localStorage.setItem('weight', slidergeWeight)

    window.location.href = "atividade.html";
}    
    // if(gender.lenght == 0){
    //     alert('Selecione um gênero')
    // }else{
    //     window.location.href = "atividade.html";
    // }
    
    // window.location.href = "atividade.html";
}


function selectA() {
    sedentario.style.backgroundColor = ('#00ff00');
    
    localStorage.setItem('atividade', 'sedentario');
    
    window.location.href = "resultado.html";
}

function selectB() {
    poucoAtivo.style.backgroundColor = ('#00ff00');
    
    localStorage.setItem('atividade', 'pouco');
    
    window.location.href = "resultado.html";
}

function selectC() {
    moderado.style.backgroundColor = ('#00ff00');
    
    localStorage.setItem('atividade', 'moderado');
    
    window.location.href = "resultado.html";
}

function selectD() {
    ativo.style.backgroundColor = ('#00ff00');
    
    localStorage.setItem('atividade', 'ativo');
    
    window.location.href = "resultado.html";
}

// HB FORMULA -> BMR = 10 × weight (kg) + 6.25 × height (cm) – 5 × age (years) – 161 
// For men, the formula is: BMR = 10 × weight (kg) + 6.25 × height (cm) – 5 × age (years) + 5

let formula = localStorage.getItem('formula');
let gender = localStorage.getItem('gender');
let weight = localStorage.getItem('weight');
let height = localStorage.getItem('height');
let age = localStorage.getItem('age');
let conditioning = localStorage.getItem('atividade');

console.log(formula);
console.log(gender);
console.log(weight);
console.log(height);
console.log(age);
console.log(conditioning);

function calcular(){
    
    switch (formula){
        case 'HB':
            if(gender == 'male' && conditioning == 'sedentario'){
                let BMR = 10 * weight + 6.25 * height -5 * age +5;
                let kcal = parseInt(BMR * 1.2);
                let prot = 2 * weight;
                document.getElementById("kcal1").innerHTML = `<strong>Gasto energético diário<br> ${kcal} kcal</strong>`
                document.getElementById("prot").innerHTML = `<strong>Meta de proteínas<br> ${prot}g`
                
            }else if(gender == 'male' && conditioning == 'pouco'){
                let BMR = 10 * weight + 6.25 * height -5 * age +5;
                let kcal = parseInt(BMR * 1.4);
                let prot = 2 * weight;
                document.getElementById("kcal1").innerHTML = `<strong>Gasto energético diário<br> ${kcal} kcal</strong>`
                document.getElementById("prot").innerHTML = `<strong>Meta de proteínas<br> ${prot}g`

            }else if(gender == 'male' && conditioning == 'moderado'){
                let BMR = 10 * weight + 6.25 * height -5 * age +5;
                let kcal = parseInt(BMR * 1.5);
                let prot = 2 * weight;
                document.getElementById("kcal1").innerHTML = `<strong>Gasto energético diário<br> ${kcal} kcal</strong>`
                document.getElementById("prot").innerHTML = `<strong>Meta de proteínas<br> ${prot}g`

            }else if(gender == 'male' && conditioning == 'ativo'){
                let BMR = 10 * weight + 6.25 * height -5 * age +5;
                let kcal = parseInt(BMR * 1.7);
                let prot = 2 * weight;
                document.getElementById("kcal1").innerHTML = `<strong>Gasto energético diário<br> ${kcal} kcal</strong>`
                document.getElementById("prot").innerHTML = `<strong>Meta de proteínas<br> ${prot}g`

            }else if(gender == 'female' && conditioning == 'sedentario'){
                let BMR = 10 * weight + 6.25 * height -5 * age -161;
                let kcal = parseInt(BMR * 1.2);
                let prot = 2 * weight;
                document.getElementById("kcal1").innerHTML = `<strong>Gasto energético diário<br> ${kcal} kcal</strong>`
                document.getElementById("prot").innerHTML = `<strong>Meta de proteínas<br> ${prot}g`

            }else if(gender == 'female' && conditioning == 'pouco'){
                let BMR = 10 * weight + 6.25 * height -5 * age -161;
                let kcal = parseInt(BMR * 1.4);
                let prot = 2 * weight;
                document.getElementById("kcal1").innerHTML = `<strong>Gasto energético diário<br> ${kcal} kcal</strong>`
                document.getElementById("prot").innerHTML = `<strong>Meta de proteínas<br> ${prot}g`

            }else if(gender == 'female' && conditioning == 'moderado'){
                let BMR = 10 * weight + 6.25 * height -5 * age -161;
                let kcal = parseInt(BMR * 1.5);
                let prot = 2 * weight;
                document.getElementById("kcal1").innerHTML = `<strong>Gasto energético diário<br> ${kcal} kcal</strong>`
                document.getElementById("prot").innerHTML = `<strong>Meta de proteínas<br> ${prot}g`
                
            }else if(gender == 'female' && conditioning == 'ativo'){
                let BMR = 10 * weight + 6.25 * height -5 * age -161;
                let kcal = parseInt(BMR * 1.7);
                let prot = 2 * weight;
                document.getElementById("kcal1").innerHTML = `<strong>Gasto energético diário<br> ${kcal} kcal</strong>`
                document.getElementById("prot").innerHTML = `<strong>Meta de proteínas<br> ${prot}g`
                
            }
            break;

        case 'MJ':
            if(gender == 'male' && conditioning == 'sedentario'){
                let BMR = 10 * weight + 6.25 * height -5 * age +5;
                let kcal = parseInt(BMR * 1.2);
                let prot = 1.5 * weight;
                document.getElementById("kcal1").innerHTML = `<strong>Gasto energético diário<br> ${kcal} kcal</strong>`
                document.getElementById("prot").innerHTML = `<strong>Meta de proteínas<br> ${prot}g`
                
            }else if(gender == 'male' && conditioning == 'pouco'){
                let BMR = 10 * weight + 6.25 * height -5 * age +5;
                let kcal = parseInt(BMR * 1.4);
                let prot = 1.5 * weight;
                document.getElementById("kcal1").innerHTML = `<strong>Gasto energético diário<br> ${kcal} kcal</strong>`
                document.getElementById("prot").innerHTML = `<strong>Meta de proteínas<br> ${prot}g`

            }else if(gender == 'male' && conditioning == 'moderado'){
                let BMR = 10 * weight + 6.25 * height -5 * age +5;
                let kcal = parseInt(BMR * 1.5);
                let prot = 1.5 * weight;
                document.getElementById("kcal1").innerHTML = `<strong>Gasto energético diário<br> ${kcal} kcal</strong>`
                document.getElementById("prot").innerHTML = `<strong>Meta de proteínas<br> ${prot}g`

            }else if(gender == 'male' && conditioning == 'ativo'){
                let BMR = 10 * weight + 6.25 * height -5 * age +5;
                let kcal = parseInt(BMR * 1.7);
                let prot = 1.5 * weight;
                document.getElementById("kcal1").innerHTML = `<strong>Gasto energético diário<br> ${kcal} kcal</strong>`
                document.getElementById("prot").innerHTML = `<strong>Meta de proteínas<br> ${prot}g`

            }else if(gender == 'female' && conditioning == 'sedentario'){
                let BMR = 10 * weight + 6.25 * height -5 * age -161;
                let kcal = parseInt(BMR * 1.2);
                let prot = 1.5 * weight;
                document.getElementById("kcal1").innerHTML = `<strong>Gasto energético diário<br> ${kcal} kcal</strong>`
                document.getElementById("prot").innerHTML = `<strong>Meta de proteínas<br> ${prot}g`

            }else if(gender == 'female' && conditioning == 'pouco'){
                let BMR = 10 * weight + 6.25 * height -5 * age -161;
                let kcal = parseInt(BMR * 1.4);
                let prot = 1.5 * weight;
                document.getElementById("kcal1").innerHTML = `<strong>Gasto energético diário<br> ${kcal} kcal</strong>`
                document.getElementById("prot").innerHTML = `<strong>Meta de proteínas<br> ${prot}g`

            }else if(gender == 'female' && conditioning == 'moderado'){
                let BMR = 10 * weight + 6.25 * height -5 * age -161;
                let kcal = parseInt(BMR * 1.5);
                let prot = 1.5 * weight;
                document.getElementById("kcal1").innerHTML = `<strong>Gasto energético diário<br> ${kcal} kcal</strong>`
                document.getElementById("prot").innerHTML = `<strong>Meta de proteínas<br> ${prot}g`
                
            }else if(gender == 'female' && conditioning == 'ativo'){
                let BMR = 10 * weight + 6.25 * height -5 * age -161;
                let kcal = parseInt(BMR * 1.7);
                let prot = 1.5 * weight;
                document.getElementById("kcal1").innerHTML = `<strong>Gasto energético diário<br> ${kcal} kcal</strong>`
                document.getElementById("prot").innerHTML = `<strong>Meta de proteínas<br> ${prot}g`
                
            }
            
            break;

        case 'TS':
            if(gender == 'male' && conditioning == 'sedentario'){
                let BMR = 24.8 * weight + 10;
                let kcal = parseInt(BMR * 1.2);
                let prot = 2 * weight;
                document.getElementById("kcal1").innerHTML = `<strong>Gasto energético diário<br> ${kcal} kcal</strong>`
                document.getElementById("prot").innerHTML = `<strong>Meta de proteínas<br> ${prot}g`
                
            }else if(gender == 'male' && conditioning == 'pouco'){
                let BMR = 24.8 * weight + 10;
                let kcal = parseInt(BMR * 1.4);
                let prot = 2 * weight;
                document.getElementById("kcal1").innerHTML = `<strong>Gasto energético diário<br> ${kcal} kcal</strong>`
                document.getElementById("prot").innerHTML = `<strong>Meta de proteínas<br> ${prot}g`

            }else if(gender == 'male' && conditioning == 'moderado'){
                let BMR = 24.8 * weight + 10;
                let kcal = parseInt(BMR * 1.5);
                let prot = 2 * weight;
                document.getElementById("kcal1").innerHTML = `<strong>Gasto energético diário<br> ${kcal} kcal</strong>`
                document.getElementById("prot").innerHTML = `<strong>Meta de proteínas<br> ${prot}g`

            }else if(gender == 'male' && conditioning == 'ativo'){
                let BMR = 24.8 * weight + 10;
                let kcal = parseInt(BMR * 1.7);
                let prot = 2 * weight;
                document.getElementById("kcal1").innerHTML = `<strong>Gasto energético diário<br> ${kcal} kcal</strong>`
                document.getElementById("prot").innerHTML = `<strong>Meta de proteínas<br> ${prot}g`

            }else if(gender == 'female' && conditioning == 'sedentario'){
                let BMR = 24.8 * weight + 10;
                let kcal = parseInt(BMR * 1.2);
                let prot = 2 * weight;
                document.getElementById("kcal1").innerHTML = `<strong>Gasto energético diário<br> ${kcal} kcal</strong>`
                document.getElementById("prot").innerHTML = `<strong>Meta de proteínas<br> ${prot}g`

            }else if(gender == 'female' && conditioning == 'pouco'){
                let BMR = 24.8 * weight + 10;
                let kcal = parseInt(BMR * 1.4);
                let prot = 2 * weight;
                document.getElementById("kcal1").innerHTML = `<strong>Gasto energético diário<br> ${kcal} kcal</strong>`
                document.getElementById("prot").innerHTML = `<strong>Meta de proteínas<br> ${prot}g`

            }else if(gender == 'female' && conditioning == 'moderado'){
                let BMR = 24.8 * weight + 10;
                let kcal = parseInt(BMR * 1.5);
                let prot = 2 * weight;
                document.getElementById("kcal1").innerHTML = `<strong>Gasto energético diário<br> ${kcal} kcal</strong>`
                document.getElementById("prot").innerHTML = `<strong>Meta de proteínas<br> ${prot}g`
                
            }else if(gender == 'female' && conditioning == 'ativo'){
                let BMR = 24.8 * weight + 10;
                let kcal = parseInt(BMR * 1.7);
                let prot = 2 * weight;
                document.getElementById("kcal1").innerHTML = `<strong>Gasto energético diário<br> ${kcal} kcal</strong>`
                document.getElementById("prot").innerHTML = `<strong>Meta de proteínas<br> ${prot}g`
                
            }
            
            break;
        
    }
}