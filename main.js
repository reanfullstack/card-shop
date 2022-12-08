function handleAdd(event){
    const card = event.target.closest('.card')
    card.classList.add('add-active')
}

function plusLess(event, type){
    const card = event.target.closest('.card')
    const input = card.querySelector('input')
    let oldVal = Number(input.value)
    if(type == 'less'){
        if(oldVal == 1){
            card.classList.remove('add-active')
            return
        }
        input.value = oldVal -= 1
    }else{
        input.value = oldVal += 1
    }
}