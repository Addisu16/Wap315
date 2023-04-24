function builForm(){
    let checkBox=doument.querySelector('input:checked');
    if(checkBox){
        let myDiv=document.createElement('div');
        if(!myDiv){
            myDiv=document.querySelector('div');
            document.body.append(div);
        }
        myDiv.innerHTML = '<form action="./q12.html">'
                    + "Image address <input type='text' name='address'/>"
                    + '<br />'
                    + ' Image Shape <select name="shape">'
                    + ' <option value="round">round</option>'
                    + '<option value="square">square</option>'
                    + '</select>'
                    + '<input type="submit" />'
                    + '</form>';
    }

}