const template=` <div class="modal">
<div class="modal-content">
  <img src="./Images/car4.jpg" alt="">
</div>
</div>`;
const imgs=document.querySelectorAll('.item-img img');
[...imgs].forEach(item=>item.addEventListener('click',function(e){
  console.log(e.target);
}))