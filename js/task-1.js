const categoriesList=document.querySelector("#categories");
const items=categoriesList.querySelectorAll(".item");

console.log(`Number of categories:${items.length}`);

items.forEach(item=>{
const title=item.querySelector("h2").textContent;
const elementCount=item.querySelectorAll("ul li");

console.log(`Category:${title}`);
console.log(`Elements:${elementCount.length}`);
});
images.forEach(image=>{
const img=document.createElement("img");
const li=document.createElement("li");

img.src=image.url;
img.alt=image.alt;

li.appendChild(img);
imageList.appendChild(li);
});