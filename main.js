// bài tập 1:

document.getElementById("sapxep").onclick = function(){
    var sothu1 = document.getElementById("so1").value *1;
    var sothu2 = document.getElementById("so2").value *1;
    var sothu3 = document.getElementById("so3").value *1;
    var xep = "" ;
    console.log(sothu1, sothu2, sothu3)
    if (sothu1 > sothu2 && sothu2 > sothu3 && sothu1 > sothu3) {
        xep = "<p>"+ sothu1 + "," + sothu2 + ","+ sothu3 +"</p>"
        console.log(xep)
    }
    else if(sothu2 > sothu1 && sothu2 > sothu3 && sothu1 > sothu3){
        xep = "<p>"+ sothu2+ ","+sothu1+ ","+sothu3 +"</p>"
    }
    else if(sothu2 > sothu1 && sothu2 > sothu3 && sothu3> sothu1){
        xep = "<p>"+ sothu2 + "," +sothu3 + "," + sothu1 + "</p>"
    }
    else if(sothu3 > sothu1 && sothu3 > sothu2 && sothu1 > sothu2){
        xep = "<p>"+ sothu3+ ","+sothu1 + "," + sothu2 +"</p>"
    }
    else if(sothu3 > sothu1 && sothu3 > sothu2 && sothu1 > sothu2){
        xep = "<p>"+ sothu3+ ","+sothu2 + "," + sothu1 +"</p>"
    }
    document.getElementById("infosapxep").innerHTML = xep;z
}
// Bài 1 không biết làm luôn @@


// bài tập 2

document.getElementById("guiloichao").onclick = function(){
    var bo = document.getElementById("bo").value
    var me = document.getElementById("me").value
    var anhtrai = document.getElementById("anhtrai").value
    var emgai = document.getElementById("emgai").value
    var loichao = ""
    var loichao = document.getElementById("thanhvien").value
    console.log(loichao)
    switch (loichao) {
        case bo:
            loichao = document.getElementById("bo").value
            break;
        case me:
            loichao = document.getElementById("me").value
            break;
        case anhtrai:
            loichao = document.getElementById("anhtrai").value
            break;
        case emgai:
            loichao = document.getElementById("emgai").value
            break;
        default:
            break;
    }
    document.getElementById("infoloichao").innerHTML = "<p>Xin chào: "+ loichao+"</p>"; 
}

// Bài tập 3:

document.getElementById("dem").onclick = function(){
    var number1 = document.getElementById("Number1").value * 1
    var number2 = document.getElementById("Number2").value * 1
    var number3 = document.getElementById("Number3").value * 1
    var count = 0;
    var sole = 0;
    if(number1 % 2 == 0){
        count ++
    } if ( number2 % 2 == 0){
        count ++
    } if (number3 % 2 == 0){
        count ++
    }
    sole = 3 -count;
    console.log(count)
    console.log(sole)
    document.getElementById("infodem").innerHTML = "<p> Số chẵn là: "+ count +"</p>" + "<p> Số lẽ là: " + sole + "</p>" 
}

// Bài tập 4:
document.getElementById("dudoan").onclick = function(){
    var canh1 = document.getElementById("canha").value * 1
    var canh2 = document.getElementById("canhb").value * 1
    var canh3 = document.getElementById("canhc").value * 1
    var result = "";
    if(canh1 === canh2 && canh1 === canh3 && canh2 === canh3 ){
        result = "Tam giác đều"
    }else if(canh1 === canh2 || canh1 === canh3 || canh2 === canh3){
        result = "Tam giác cân"
    }else if (canh3*canh3 === canh1*canh1 + canh2*canh2){
        result = "Tam giác vuông"
    }else{
        result = "Đây là tam giác thường!"
    }
    document.getElementById("infodudoan").innerHTML = "<p>Đây là: "+ result +"</p>"
}
