    let intro = document.querySelector('.intro'),
        nav1 = document.querySelector('.nav');
    
    function marginBody(){
        intro.style.marginTop = `${nav1.offsetHeight + 100}px`;
    }

    marginBody();

/////////////   borger list /////////////////
let berger = document.querySelector('.nav-in-s-screen i.fas.fa-align-justify');
let nav = document.querySelector('.nav nav');
let logo = document.querySelector('.nav .logo');
let hiddenList = document.querySelector('.hidden-list');

function showBerger(){
    if(window.innerWidth < 750){
    berger.classList.add('nav-toogle');
    nav.style.display = 'none';
    }
}
showBerger();

function showHiddenList(){
    berger.addEventListener('click',function(){
        hiddenList.classList.toggle('nav-toogle');
        this.style.color = '#fff';
    })
}
showHiddenList()

/////////////////   check email msg ///////////////////
let loginBtn = document.querySelector('.intro .login-form input[type="submit"]'),
    emailInput = document.querySelector('.intro .login-form input[type="email"]'),
    pwInput = document.querySelector('.intro .login-form input[type="password"]'),
    emailCheck = document.querySelector('.check.email-check-msg'),
    pwCheck = document.querySelector('.check.pw-check-msg');

////////////    CHECKING FUNCTIONS    
function pwChecking(){
    if(pwInput.value==''){
        pwCheck.style.color = 'red';
        pwCheck.textContent = 'Please enter your password';
    }
    else{
        pwCheck.textContent = '';
    }
}
function emailChecking(){
    if(emailInput.value==''){
        emailCheck.style.color = 'red';
        emailCheck.textContent = 'Please enter your email';
    }
    else{
        emailCheck.textContent = '';
    }
}
function varifyPw(){
    pwCheck.style.color ='green';
    pwCheck.textContent = 'password most contains capital and lowers latters and numbers';
}

loginBtn.addEventListener('click', function(){
    emailChecking();
    pwChecking();
});

pwInput.addEventListener('focus',function(){
    varifyPw();
    pwInput.addEventListener('blur',function(){
        pwCheck.textContent = '';
    });
});

/////   create select options   ////////////////////

let selectYears = document.querySelector('.create-account select#year'),
    selectMonths = document.querySelector('.create-account select#months'),
    selectDays = document.querySelector('.create-account select#days');


function createYearOptions(){
    let dates = new Date;
        date = dates.getFullYear();
        for(let i=1980;i <= date; i++){
            let option = document.createElement('option');
            selectYears.appendChild(option);
            option.textContent = i;
            
        }}

function createMonthsOptions(){
    let months = 12;
        for(let i=1;i <= months; i++){
            let optionM = document.createElement('option');
            selectMonths.appendChild(optionM);
            optionM.textContent = i;
        }}

function createDaysOptions(){
        let days = 31;
        for(let i=1;i <= days; i++){
        let optionD = document.createElement('option');
        selectDays.appendChild(optionD);
        optionD.textContent = i;
                    
}}

createYearOptions();
createMonthsOptions();
createDaysOptions();

////////    hide placeholder    //////////////
let inputHolder = document.querySelectorAll('.create-account input');
inputHolder.forEach(input => {
    let placeText = '';
    input.addEventListener('focus', function(){

       placeText = input.placeholder;
       input.placeholder = '';

       input.addEventListener('blur',function(){
        input.placeholder = placeText;
    })
    });
});

///////     close creat account     //////////
let closeNewAccountBtn = document.querySelector('.create-account-box .fas.fa-window-close'),
    createAccountPage = document.querySelector('.create-account'),
    createAccount = document.querySelector('.login-form .createAccount');

closeNewAccountBtn.addEventListener('click',function(){
    createAccountPage.style.display = 'none';
});

createAccount.addEventListener('click',function(){
    createAccountPage.style.display = 'block';
})

////////    CREATE SLIDE SHOW

let slideImgs = ["slide1/1.jpg","slide1/2.jpg","slide1/3.jpg","slide1/4.jpg","slide1/5.jpg","slide1/6.jpg","slide1/7.jpg","slide1/8.jpg","slide1/9.jpg","slide1/10.jpg",],

    slideDescription = ["Wolves and snow",
    "Cat eyes",
    "Cayac for every one",
    "Sport is wonderful in morning",
    "Cat jump awesome",
    "Camp, who batter",
    "Again, Camp Who batter",
    "Parkour in night",
    "nice picture for eagle in hunts",
    `ì don't know what i should say about this picture`],

    slideImg = document.querySelector('.img-slide img'),
    slideheding = document.querySelector('.img-slide h4'),
    slideSpan = document.querySelector('.img-slide span'),
    nextSlide = document.querySelector('i.fa-chevron-right'),
    prevSlide = document.querySelector('i.fa-chevron-left');

function crateSlideShow(){
    
    let i = 0;
    console.log(i);
    slideImg.src = `../images/${slideImgs[i]}`;
    slideheding.textContent = `${slideDescription[i]}`;
    slideSpan.textContent = `pic ${i+1} :`

    /////////////////   next and previeus sliding
    nextSlide.addEventListener('click',function(){
    i++;
    slideImg.src = `../images/${slideImgs[i]}`;
    slideheding.textContent = `${slideDescription[i]}`;
    slideSpan.textContent = `pic ${i+1} :`
     if(i>=slideImgs.length - 1){
            i = -1;
        }
    });

    /////////////////////////////////////////////////////:
    prevSlide.addEventListener('click',function(){

        i--;
        if(i<= -1){
            i = slideImgs.length-1;
        } 
        
        slideImg.src = `../images/${slideImgs[i]}`;
        slideheding.textContent = `${slideDescription[i]}`;  
        slideSpan.textContent = `pic ${i+1} :`

        });
}
crateSlideShow();



















