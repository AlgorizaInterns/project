let field = document.querySelector('.container');
let li = Array.from(field.children);
let select = document.getElementsByTagName('select');
let ar = [];

for(let i of li){
    const last = i.lastElementChild;
    const x = last.textContent.trim();
    const y = Number(x.substring(1));
    i.setAttribute('data_price', y);
    ar.push(i);
}
select.oncahnge = sortingValue ; 
function sortingValue(){
    if(this.value == 'Default'){
        while(field.firstChild){
            field.removeChild(field.firstChild);
        }
        field.append(...ar);

    }
    if(this.value === "LowToHigh"){
        sortElem(field, li, true);
    }
    if(this.value === "HighToLow"){
        sortElem(field, li, false);
    }
}

function sortElem(field, li, asc){
    let dm, sortLi;
    dm = asc ? 1:-1;
    sortLi = li.sort((a,b)=>{
        const ax = a.getAttribute('data_price');
        const bx = a.getAttribute('data_price');
        return ax>bx ? (1*dm) : (-1*dm);
    });
    while(field.firstChild){
        field.removeChild(field.firstChild);
    }
    field.append(...sortLi);
}
