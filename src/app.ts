const compteur = document.querySelector('#compteur') as HTMLInputElement
let i = 0

const increment = (e: Event) => {
    e.preventDefault();
    i++;
    const span = compteur?.querySelector('span');
    if (span){
        span.innerText = i.toString()
    }
}

compteur?.addEventListener('click', increment)