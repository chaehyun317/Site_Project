function route(pageName){
    switch(pageName){
        case 'Outline' : document.getElementById('container').innerHTML = Outline(); break;
        case 'Main' : document.getElementById('container').innerHTML = Main(); break;
    }
}