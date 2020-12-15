var choiced_id;
var NF_list = ['NF-q1.html','NF-q2.html','NF-q3.html'];
var NT_list = ['NT-q1.html','NT-q2.html','NT-q3.html'];
var SF_list = ['SF-q1.html','SF-q2.html','SF-q3.html'];
var ST_list = ['ST-q1.html','ST-q2.html','ST-q3.html','ST-q4.html'];


var data = localStorage.getItem("data");
data = JSON.parse(data);

function type () {
    if (data.n>=3 && data.f>=3) {
       data.type = 'NF'
    }

    else if (data.n>=3 && data.t>=3) {
        data.type = 'NS';
    }

    else if (data.s>=3 && data.f>=3) {
        data.type = 'SF';
    }

    else if (data.s>=3 && data.t>=3) {
        data.type = 'ST';
    }
}

function type_next (page) {
    if(page == 0) {
        var item_list = {'book' :0, 'electronic':0, 'furniture':0, 'leisure':0, 'cosmetic':0,
        'clothes':0, 'accessory':0, 'kitchen':0, 'innerwear':0};
    }

    else {
        var item_list = localStorage.getItem("item_list");
        item_list = JSON.parse(item_list);
    }

    switch(data.type) {
        case 'NF': 
            NF(item_list);
            console.log(item_list);
            localStorage.setItem("item_list", JSON.stringify(item_list));
            location.href=NF_list[page];
            break;

        case 'NT':
            NT(item_list);
            localStorage.setItem("item_list", JSON.stringify(item_list));
            console.log(item_list);
            location.href=NT_list[page];
            break;

        case 'SF':
            SF(item_list);
            localStorage.setItem("item_list", JSON.stringify(item_list));
            console.log(item_list);
            location.href=SF_list[page];
            break;

        case 'ST':
            ST(item_list);
            localStorage.setItem("item_list", JSON.stringify(item_list));
            console.log(item_list);
            location.href=ST_list[page];
            break;
        }   
}

function btn_event (id) {
    choiced_id = id;
}

function next_page (page) {
    if (choiced_id != null) {
        if(data.type == null) {
            if(choiced_id =='t') {
                data.t++;
            }
            else {
                data.f++;
            }
        }    
        type();
        type_next(page);
    }

    else  {
        if(data.type == null) {
            document.getElementById("t").classList.toggle('shaking');
            document.getElementById("f").classList.toggle('shaking');
        }
        
        else {
            document.getElementById("book").classList.toggle('shaking');
            document.getElementById("electronic").classList.toggle('shaking');
            document.getElementById("furniture").classList.toggle('shaking');
            document.getElementById("leisure").classList.toggle('shaking');
            document.getElementById("cosmetic").classList.toggle('shaking');
            document.getElementById("clothes").classList.toggle('shaking');
            document.getElementById("accessory").classList.toggle('shaking');
            document.getElementById("kitchen").classList.toggle('shaking');
            document.getElementById("innerwear").classList.toggle('shaking');
        }
        
    }
}

function NF (item_list) {
    if(choiced_id == 'cosmetic') {
        for(var key in item_list){
            item_list[key] += 0.5; 
        }
        console.log(item_list);
    }

    if(choiced_id =='accessory') {
        for(var key in item_list){
            item_list[key] += 0.5; 
        }
        console.log(item_list);
    }

    if(choiced_id =='leisure') {
        for(var key in item_list){
            item_list[key] += 0.5; 
        }
        console.log(item_list);
    }

    if(choiced_id =='clothes') {
        for(var key in item_list){
            item_list[key] += 0.5; 
        }
        console.log(item_list);
    }

    if(choiced_id =='innerwear') {
        for(var key in item_list){
            item_list[key] += 0.5; 
        }
        console.log(item_list);
    }
}

function NT (item_list) {
    if(choiced_id =='book') {
        for(var key in item_list){
            item_list[key] += 0.2; 
        }
    }

    if(choiced_id =='leisure') {
        for(var key in item_list){
            item_list[key] += 0.2; 
        }
    }

    if(choiced_id =='furniture') {
        for(var key in item_list){
            item_list[key] += 0.2; 
        }
    }

    if(choiced_id =='electronic') {
        for(var key in item_list){
            item_list[key] += 0.2; 
        }
    }
}

function SF (item_list) {
    if(choiced_id =='clothes') {
        for(var key in item_list){
            item_list[key] += 0.2; 
        }
    }

    if(choiced_id =='innerwear') {
        for(var key in item_list){
            item_list[key] += 0.2; 
        }
    }

    if(choiced_id =='bag') {
        for(var key in item_list){
            item_list[key] += 0.2; 
        }
    }

    if(choiced_id =='accessory') {
        for(var key in item_list){
            item_list[key] += 0.2; 
        }
    }

    if(choiced_id =='kitchen') {
        for(var key in item_list){
            item_list[key] += 0.2; 
        }
    }
}

function ST (item_list) {
    if(choiced_id =='furniture') {
        for(var key in item_list){
            item_list[key] += 0.2; 
        }
    }

    if(choiced_id =='electronic') {
        for(var key in item_list){
            item_list[key] += 0.2; 
        }
    }

    if(choiced_id =='kitchen') {
        for(var key in item_list){
            item_list[key] += 0.2; 
        }
    }

    if(choiced_id =='book') {
        for(var key in item_list){
            item_list[key] += 0.2; 
        }
    }
}

