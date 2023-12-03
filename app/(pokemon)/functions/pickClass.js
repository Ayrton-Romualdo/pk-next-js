export const corClass = function(tipo){

    let cor = null;
    switch (tipo) {
        case 'NORMAL':
            cor = 'bg-stone-400';
            break;
        case 'FIRE':
            cor = 'bg-orange-400';
            break;
        case 'WATER':
            cor = 'bg-blue-400';
            break;
        case 'GRASS':
            cor = 'bg-green-400';
            break;
        case 'BUG':
            cor = 'bg-lime-400';
            break;
        case 'POISON':
            cor = 'bg-fuchsia-700';
            break;

        case 'FAIRY':
            cor = 'bg-pink-200';
            break;
        case 'PSYCHIC':
            cor = 'bg-pink-500';
            break;
        case 'GHOST':
            cor = 'bg-purple-900';
            break;
        case 'FIGHTING':
            cor = 'bg-red-700';
            break;
        case 'ELECTRIC':
            cor = 'bg-yellow-300';
            break;
        case 'ICE':
            cor = 'bg-cyan-200';
            break;
        case 'ROCK':
            cor = 'bg-yellow-600';
            break;
        case 'FLYING':
            cor = 'bg-violet-400';
            break;
        case 'GROUND':
            cor = 'bg-amber-300 ';
            break;
        case 'DRAGON':
            cor = 'bg-violet-600';
            break;

        default:
            break;
    }

    return cor;
}


export const bordaClass = function(tipo){

    let cor = null;
    switch (tipo) {
        case 'NORMAL':
            cor = 'border-stone-200';
            break;
        case 'FIRE':
            cor = 'border-orange-200';
            break;
        case 'WATER':
            cor = 'border-blue-200';
            break;
        case 'GRASS':
            cor = 'border-green-200';
            break;
        case 'BUG':
            cor = 'border-lime-200';
            break;
        case 'POISON':
            cor = 'border-fuchsia-500';
            break;

        case 'FAIRY':
            cor = 'border-pink-50';
            break;
        case 'PSYCHIC':
            cor = 'border-pink-300';
            break;
        case 'GHOST':
            cor = 'border-purple-700';
            break;
        case 'FIGHTING':
            cor = 'border-red-500';
            break;
        case 'ELECTRIC':
            cor = 'border-yellow-100';
            break;
        case 'ICE':
            cor = 'border-cyan-50';
            break;
        case 'ROCK':
            cor = 'border-yellow-400';
            break;
        case 'FLYING':
            cor = 'border-violet-200';
            break;
        case 'GROUND':
            cor = 'border-amber-100 ';
            break;
        case 'DRAGON':
            cor = 'border-violet-400';
            break;

        default:
            break;
    }

    return cor;
}
