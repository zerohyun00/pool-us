fetch('Menu.json') 
    .then(function(response) {
        if(!response.ok) {
            throw new Error('에러에러');
        }
        return response.json();
    })
    .then(function(items) {
items.forEach(function(item, i) {
    const menusToShow = item.menus.slice(0, 2);

    const template = `
        <button>
        <div class="booth d-flex">
            <div class="boothimg"><img src="./gardenImg/boothimg.png" alt ="부스이미지"></div>
        <div class="boothinfo d-flex flex-column justify-content=center text-start">
            <p class="boothtitle mb-1">${item.department}</p>
            <p class="boothsub mb-0">${menusToShow.map(menu =>`<span>${menu.name}</span><br/>`).join('')}</p>
        </div>
        </div>
        </button>
    `;
    $(".boothSection").append(template);
})
    })
.catch(function(error) {
console.log(error);
});