import { fetchJSON } from "./functions/api.js";
import {createElement} from "./functions/dom.js";

try{
    const todos = await fetchJSON('https://jasonplaceholder.typicode.com/todos?_limit=5')
    console.log(todos)
}catch (e) {
    const alertElement = createElement("div",{
        class: 'alert alert-danger',
        role: 'alert'
    })
    alertElement.innerText = 'Impossible de charger les éléments'
    document.body.append(alertElement)
}
