function route(pageName){
    switch(pageName){
        case 'Main' : document.getElementById('container').innerHTML = Main(); break;
        case 'Bon_menu1' : document.getElementById('container').innerHTML = Bon_menu1(); break;
        case 'Baby' : document.getElementById('container').innerHTML = Baby(); break;
        case 'Bonmall' : document.getElementById('container').innerHTML = Bonmall(); break;
    }
}