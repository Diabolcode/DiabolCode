function mg() {
    var text = "button { \nborder: 1px solid #700; \npadding: 10px; \ncolor: #fff;\n background-color: #700; \nborder-radius: 20px; \ntransition: all 0.5s;\n font-size: 15px; \n} \nbutton:hover {\n color: #700; \nbackground-color: #fff; \ntransition: all 0.5s; \n}";
    var file_date = new Blob([text], {
        type: 'text/plain'
    });
    var file_test = window.URL.createObjectURL(file_date);
    var f = document.getElementById('file');
    f.href = file_test;
}
oncontextmenu = function() {
    return false
}