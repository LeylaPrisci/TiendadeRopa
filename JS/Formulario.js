var imputs = document.getElementsByClassName('Input');
for(var i=0; i < imputs.length; i++){
    imputs[i].addEventListener('keyup', function(){
        if(this.value.length >=1){
            this.nextElementSibling.classList.add('fijar');
        }else{
            this.nextElementSibling.classList.remove('fijar');
        }
    });
}
