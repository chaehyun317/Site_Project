function route(pageName){
    switch(pageName){
        case 'Main' : document.getElementById('container').innerHTML = Main(); break;
        case 'About' : document.getElementById('container').innerHTML = About(); break;
        case 'Greeting' : document.getElementById('container').innerHTML = Greeting(); break;
        case 'Ourvalue' : document.getElementById('container').innerHTML = Ourvalue(); break;
        case 'Sustainability' : document.getElementById('container').innerHTML = Sustainability(); break;
        case 'Rnd' : document.getElementById('container').innerHTML = Rnd(); break;
    }
}