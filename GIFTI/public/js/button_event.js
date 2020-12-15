var choiced_id;
//추가할 것 : DB 연동해서 n,s,t,f 값 0부터 올려가기

var html_list = ['q1','q2.html','q3','q4','q5.html',
'q6.html','q7.html','q8.html','q9.html','q10.html'];

function btn_event (id) {
    choiced_id = id;
} 

function next_event (page) {
    
    if(page==1) {
        var data = { s:0, n:0, t:0, f:0, type: null};
    }
    
    else {
        var data = localStorage.getItem("data");
        data = JSON.parse(data);
    }

    if (choiced_id != null) {
        switch(choiced_id) {
            case 's': 
                data.s++;
                break;
    
            case 'n':
                data.n++;
                break;
    
            case 't':
                data.t++;
                break;
    
            case 'f':
                data.f++;
                break;
        }
        

        localStorage.setItem("data", JSON.stringify(data));
        console.log(data);
        window.location.href= html_list[page];




     
    }
    else  {
        if(page<=5) {
            document.getElementById("s").classList.toggle('shaking');
            document.getElementById("n").classList.toggle('shaking');   
        }
        else {
            document.getElementById("t").classList.toggle('shaking');
            document.getElementById("f").classList.toggle('shaking');   
        }
    }
}
