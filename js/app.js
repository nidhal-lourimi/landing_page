/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


var sections=document.querySelectorAll("section");
var s=document.querySelectorAll(".landing__container h2");
var nevbar=document.querySelector('ul');
let p=0;
for (let i=0;i <= s.length;i++) 
{
    
    //console.log( c[i].innerHTML);
    // build the nav
    const newlist= document.createElement("li") ;
    // Build menu 
    const newlink= document.createElement("a");
    newlink.className = 'menu__link';
   // Scroll to section on link click
    newlink.href="#section"+(i+1);
    newlink.textContent=s[i].textContent;
    /*newlink.addEventListener(click,active);*/

   
    newlist.appendChild(newlink);
    
    nevbar.appendChild(newlist);
    
    nevbar.children[i].addEventListener('click',function active(){
      if (sections[i].className!=sections[p].className) {
      
        
        sections[p].className="";
       sections[i].className="your-active-class";
       nevbar.children[p].children.item(0).className="menu__link";
       
           p=i;
      
      };
      
      nevbar.children[i].children.item(0).className="active";
      

       });

     sections[i].addEventListener("mouseover", function activeNevBar(){

        nevbar.children[i].children.item(0).className="active";
        if(i+1<sections.length){
        nevbar.children[i+1].children.item(0).className="menu__link";}
        if (i>0){    
        nevbar.children[i-1].children.item(0).className="menu__link";}
    }); 
};

