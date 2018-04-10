export class Init{
    load() {
        if(localStorage.getItem('todos') === null || localStorage.getItem('todos') === undefined) {
            console.log('No Todos in Local Storage..........');
        

        var todos = [

        ]

        localStorage.setItem('todos', JSON.stringify(todos));
        return
    } else {
        console.log('Todos Found.......');
        }
    }
}