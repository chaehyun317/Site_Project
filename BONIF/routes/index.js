function route(pageName){
    switch(pageName){
        case 'Main' : document.getElementById('container').innerHTML = Main(); break;
        case 'Bon_menu1' : document.getElementById('container').innerHTML = Bon_menu1(); break;
        case 'Bon_menu2' : document.getElementById('container').innerHTML = Bon_menu2(); break;
        case 'Bon_menu3' : document.getElementById('container').innerHTML = Bon_menu3(); break;
        case 'Bon_menu4' : document.getElementById('container').innerHTML = Bon_menu4(); break;
        case 'Baby' : document.getElementById('container').innerHTML = Baby(); break;
        case 'Bonmall' : document.getElementById('container').innerHTML = Bonmall(); break;
        case 'Bon_detail' : document.getElementById('container').innerHTML = Bon_detail(); break;
    }
}