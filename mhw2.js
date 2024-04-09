//barra di ricerca
function Cerca_prodotto(){
    console.log("cliccato");
}
const button=document.querySelector("button")
button.addEventListener('click',Cerca_prodotto);


function Focus(){
const text=document.querySelector('input');
text.value='';
console.log('focus');
}

function Blur(){
    const text=document.querySelector('input');
    text.value='Cerca prodotto';
    console.log('Blur');
}
const text=document.querySelector("input")
text.addEventListener("focus",Focus);
text.addEventListener("blur",Blur);

//sezione scopri nascosto 

function C_Scopri(event){

    event.preventDefault();
    const p = document.querySelector('#Abbonamento');
    if(p.classList.contains('Nascosto'))
    {
        p.classList.remove('Nascosto');
    }
    else{
        p.classList.add('Nascosto');
    }

}

document.querySelector('.Scopri').addEventListener('click',C_Scopri);


//cambia con un click la prima foto
function change(event){
    const new_img1 = document.createElement('img');
    new_img1.src = 'https://jekoo.s3-eu-west-1.amazonaws.com/media/2024-03-18/images/94ea2a67bad340178b862365b5723aa1';
    
    const nuovo_container=document.querySelector('.look');
    nuovo_container.innerHTML='';

    nuovo_container.appendChild(new_img1);
}
const newCont=document.querySelector('.look img');
newCont.addEventListener('click',change);




//cambia con un click la seconda foto
function change_2(event){
    const new_img2 = document.createElement('img');
    new_img2.src = 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F48%2F14%2F4814dcc45c22dd6796b95f3e95956a051b897cd2.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]';
    
    const nuovo_container_2=document.querySelector('.cult');
    nuovo_container_2.innerHTML='';

    nuovo_container_2.appendChild(new_img2);
}
const newCont_2=document.querySelector('.cult img');
newCont_2.addEventListener('click',change_2);

//cambia le 4 foto passandoci con  il cursore
function Cambia_prod(event){
    const index=event.target.getAttribute('data-index');

    const img=event.target.querySelector('img');

    switch(index){
        case '0':
            img.src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fe4%2F44%2Fe444b2d674d9d113201ece6750fe0bd798490d14.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]";
            break;
            
        case '1':
            img.src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F35%2F5d%2F355d3c22c8775bddb96bf48ba8b6e46035b8d853.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]";
            break;
        
        case '2':
            img.src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb7%2Fff%2Fb7fffd3ae67b5e0fd9ac784a0fe00a72148a3077.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]";
            break;

        case '3':
            img.src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fc8%2Fb3%2Fc8b3f740de7f4b179546aefb73cb86ea120999e9.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]";
            break;    
    }
}

function Ripr_prod(event){
    const index = event.target.getAttribute('data-index');

    const img = event.target.querySelector('img');

    switch(index){
        case '0':
            img.src="https://lp2.hm.com/hmgoepprod?set=source%5B/a0/47/a047b70267f11665d7753902b3de3753d62e6e63.jpg%5D,origin%5Bdam%5D,category%5B%5D,type%5BLOOKBOOK%5D,res%5Bz%5D,hmver%5B1%5D&call=url%5Bfile:/product/main%5D";
            break;
        case '1':
            img.src="https://lp2.hm.com/hmgoepprod?set=source%5B/c3/1f/c31f44c4b9d8a86fdea4afbde165368777a2bfa7.jpg%5D,origin%5Bdam%5D,category%5B%5D,type%5BLOOKBOOK%5D,res%5Bz%5D,hmver%5B1%5D&call=url%5Bfile:/product/main%5D";
            break;
        case '2':
            img.src="https://lp2.hm.com/hmgoepprod?set=source%5B/6b/6c/6b6c1d6844f2857ef5ddb51251d41abf79df508c.jpg%5D,origin%5Bdam%5D,category%5B%5D,type%5BLOOKBOOK%5D,res%5Bz%5D,hmver%5B1%5D&call=url%5Bfile:/product/main%5D";
            break;
        case '3':
            img.src="https://lp2.hm.com/hmgoepprod?set=source%5B/90/78/907865e27684fa14afad7e9be2d325500958bc58.jpg%5D,origin%5Bdam%5D,category%5B%5D,type%5BLOOKBOOK%5D,res%5Bz%5D,hmver%5B1%5D&call=url%5Bfile:/product/main%5D";
            break;        
    }
}

const vest=document.querySelectorAll('.vestiti');

vest.forEach(div=>{
    div.addEventListener('mouseenter',Cambia_prod);
    div.addEventListener('mouseleave',Ripr_prod);
});


function changecasa(event){
const imgcasa=event.currentTarget;
imgcasa.src="https://www.arredo-casa.info/wp/wp-content/uploads/2017/02/libreria-in-bucaneve.jpg";
imgcasa.removeEventListener('click',changecasa);

}


function r_casa(event){
    const imgcasa=event.currentTarget;
    imgcasa.src="https://image.hm.com/content/dam/TOOLBOX/PRE_SEASON/2023_s-09/december_2023/TCH9003_Easter_1x1.jpg?imwidth=1260"
    imgcasa.addEventListener('click',changecasa);
    
    }

    const imgcasa=document.querySelector('.arredo img');
    imgcasa.addEventListener('click',changecasa);
    imgcasa.addEventListener('mouseover',changecasa);
    imgcasa.addEventListener('mouseout',r_casa);