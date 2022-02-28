
const imgs=document.querySelectorAll('.item-img img');
[...imgs].forEach(item=>item.addEventListener('click',function(e){
  const src=e.target.getAttribute("src");
  const template=` <div class="modal">
<div class="modal-content">
  <img src="${src}" alt="">
</div>
</div>`;
  document.body.insertAdjacentHTML("beforeend",template);
}))
document.body.addEventListener('click',function(e){
  if(e.target.matches(".modal")){
    const md=document.body.querySelector('.modal');
  }
})