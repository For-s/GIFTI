var NF_list = ['NF-q1.html','NF-q2.html','NF-q3.html'];
var NT_list = ['NT-q1.html','NT-q2.html','NT-q3.html'];
var SF_list = ['SF-q1.html','SF-q2.html','SF-q3.html'];
var ST_list = ['ST-q1.html','ST-q2.html','ST-q3.html'];

// DB값 기준으로 나누어지도록 수정하기.

function db에 타입 저장하는 함수 () {
    switch(/*여기에 DB에 저장된 nstf값 불러온다, 배열로? */) {
        case /*n>3 && t>3*/: 
            NF 저장
            break;

        case /*n>3 && f>3*/:
            NT 저장
            break;

        case /*s>3 && t>3*/:
            SF 저장
            break;

        case /*s>3 && f>3*/:
            ST 저장
            break;
    }
    
    personality(0);
}

function personality (next_page) {
    //인성별로 페이지 이동
    switch(/* 타입값 받아온다 */) {
        case 'nf': 
            location.href=NF_list[page];
            break;

        case 'nt':
            location.href=NT_list[page];
            break;

        case 'sf':
            location.href=SF_list[page];
            break;

        case 'st':
            location.href=ST_list[page];
            break;
        }   
}

function next_event (page) {
    if (choiced_id != null) {
        // calculate_score(); 이거 아예 JS 파일로 하나 만들기, 알고리즘 돌아가는 JS 파일
        personality(page);

    }
    else  {
            document.getElementById("btn_1").classList.toggle('shaking');
            document.getElementById("btn_2").classList.toggle('shaking');   
    }
}



