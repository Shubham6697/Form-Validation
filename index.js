
let validateName = (name) => {
    //[A-Z] || [a-z]  || [" "]
    
    let valid = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;
    
    if(valid.test(name.value)){
        return true;
    }
    else
        return false;

}


function handle(){
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let pass = document.getElementById('pass');
    let conf_pass = document.getElementById('conf_pass');
    let gender = document.getElementById('gender');
    let contact = document.getElementById('contact');
    let bio = document.getElementById('bio');
    let rem_Me = document.getElementById('rem_Me');
    let doc = document.getElementById('doc');
    // let name = document.getElementById('name');

    let flag =  validateName(name);
    console.log(flag);
}