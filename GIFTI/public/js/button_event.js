var choiced_id;
//추가할 것 : DB 연동해서 n,s,t,f 값 0부터 올려가기

var html_list = ['q1','q2','q3','q4','q5.html',
'q6.html','q7.html','q8.html','q9.html','q10.html'];

function btn_event (id) {
    choiced_id = id;
}
//document.write(`<script type='text/javascript' src='./input_data.js'></script>`);  

function next_event (page) {
    if (choiced_id != null) {
        location.href=html_list[page]; //이거를 아래 if/else문으로 대체
        //function addJavascript(jsname) {
        //    var th = document.getElementsByTagName('head')[0];
        //    var s = document.createElement('script');
        //    s.setAttribute('type','text/javascript');
        //    s.setAttribute('src',jsname);
        //    th.appendChild(s);
        //}
        
        //addJavascript('./input_data.js');
        /*calculate_score();
        
        if(page==10){
            //10번째 페이지인 경우, 개인화 페이지로 간다.
            db에 타입 저장하는 함수();
        }
        else {
            location.href=html_list[page];
        }
        */
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

