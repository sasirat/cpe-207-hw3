class contact {
    constructor(subject,massage,name,gender,email,phone){
        this.subject = subject;
        this.massage = massage;
        this.name = name;
        this.gender = gender;
        this.email = email;
        this.phone = phone;
    }
}

function saveContact(e){
    e.preventDefault();

    if(!validateForm(contact)){
        return false;
    }
    
    var contact_input = {
        subject: subject,
        massage: massage,
        name: name,
        gender: gender,
        email: email,
        phone: phone
    }
    console.log(contact_input);

    if(localStorage.getItem('contacts') === ''){
        var contacts = [];
        contacts.push(contact_input);
        localStorage.setItem('contacts',JSON.stringify(contacts));
    }else{
        var contacts = JSON.parse(localStorage.getItem('contacts'))
        contacts.push(contact_input);
        localStorage.setItem('contacts',JSON.stringify(contacts));
    }
    document.querySelector('#subject').value = '';
    document.querySelector('#massage').value = '';
    document.querySelector('#name').value = '';
    document.querySelector('.gender').value = null;
    document.querySelector('#email').value = '';
    document.querySelector('#phone').value = '';

    fetchContact();
}

function fetchContact();