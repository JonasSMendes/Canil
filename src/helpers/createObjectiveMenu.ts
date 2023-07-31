type OptionObjective = '' | 'all' | 'dog' | 'cat' | 'fish'

export const ObjectiveMenu = (objective: OptionObjective) =>{

    const ObjectiveOption = {
        all:false,
        dog:false,
        cat:false,
        fish:false
    }

    if(objective != ''){
        ObjectiveOption[objective] = true
    }

    return ObjectiveOption
}