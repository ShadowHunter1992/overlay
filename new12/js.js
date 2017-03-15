var img=document.querySelector("#wekil");
var overlay=document.createElement("div");
var mainimg=document.createElement("div");

var row=document.createElement("div");
var innerimg=document.createElement("img");
var leftbtn=document.createElement('button');
var rightbtn=document.createElement('button');


var wekiller=["1.jpg",
               "3.jpg",
               "4.jpg",
               "5.jpg",
               "int1.jpg",
               "int2.jpg",
               "int3.jpg",
              ]


overlay.className="overlay"
overlay.style.height=window.innerHeight+"px";

img.addEventListener("click",function(){
	/*overlay yaratdim*/
	document.body.appendChild(overlay)
     overlay.appendChild(mainimg)
	mainimg.className=("mainimg")
	/*icine weklim olacaq divi qoydum*/
	mainimg.appendChild(innerimg)
	 wekil=img.getAttribute("src")

   innerimg.setAttribute("src",wekil)
   innerimg.style.width="100%"
   innerimg.style.height="100%"
	/*  <  >  knopkalari qoydum*/
   mainimg.appendChild(leftbtn)
   leftbtn.innerHTML="<"
   leftbtn.className=("leftbtn")
   mainimg.appendChild(rightbtn)
   rightbtn.innerHTML=">"
   rightbtn.className=("rightbtn")

   /*row yaradacam slide ucun*/
   mainimg.appendChild(row)
   row.className="row"
/*wekilleri yaratdim*/
   for(i=0;i<wekiller.length;i++){
   	miniwekil=document.createElement("img")
   	miniwekil.className=("miniwekil")
   	row.appendChild(miniwekil)
   	miniwekil.setAttribute("src",wekiller[i]);

   }
   /* sekil+border+esas ekran wekili */
a=0;
 
for(a=0;a<wekiller.length;a++){
	row.childNodes[a].addEventListener("click",function(){
		for(b=0;b<wekiller.length;b++){
			row.childNodes[b].style.border="none"
		}
		this.style.border="3px solid white"
		this.style.boxShadow="0 0 2px white"
		 imagesrc=this.getAttribute("src")
         innerimg.setAttribute("src",imagesrc)
 		console.log(this)
		
	})
 }

 


})

count=0;
rightbtn.addEventListener("click",function(){
	count++
	for(c=0;c<wekiller.length;c++){
	row.childNodes[c].style.border="none"
}
if(count==7){
	count=0
}
	row.childNodes[count].style.border="2px solid white"
	btnImg=row.childNodes[count].getAttribute("src")
   innerimg.setAttribute("src",btnImg)
   console.log(count)
 
})
leftbtn.addEventListener("click",function(){
	count--
	for(x=0;x<wekiller.length;x++){
	row.childNodes[x].style.border="none"
}
if(count==-1){
	count=6
}
row.childNodes[count].style.border="2px solid white"
	btnImg=row.childNodes[count].getAttribute("src")
   innerimg.setAttribute("src",btnImg)
   console.log(count)
 
})