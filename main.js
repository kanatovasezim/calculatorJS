function insert(num){
    document.form.textView.value += num;
}

function clean(){
    document.form.textView.value = "";
}

function back(){
    let text = document.form.textView.value;
    document.form.textView.value = text.substring(0, (text.length-1));
}

function equal(){
    let text = document.form.textView.value;
    if (text){
        document.form.textView.value = eval(text);
    }
}