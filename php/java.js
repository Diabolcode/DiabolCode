oncontextmenu=function(){
    return false
    }

    function g (){
            var date =new Date;
            var ma=date.getMonth()+1 ;
            document.getElementById('year').innerHTML= date.getDate()+'/'+ma+'/'+date.getFullYear()+" "+" _ " ;
             document.getElementById("ho").innerHTML=" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    }
             var live_a_Time=setInterval(g,1000);