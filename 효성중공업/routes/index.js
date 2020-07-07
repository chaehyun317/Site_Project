function route(pageName){
    switch(pageName){
        case 'Main' : document.getElementById('container').innerHTML = Main(); break;
        case 'About' : document.getElementById('container').innerHTML = About(); break;
        case 'Business' : document.getElementById('container').innerHTML = Business(); break;
        case 'News' : document.getElementById('container').innerHTML = News(); break;
        case 'Balance' : document.getElementById('container').innerHTML = Balance(); break;
    }
}