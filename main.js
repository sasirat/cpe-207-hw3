document.querySelector('#need-validation').addEventListener('submit,saveContact');

function saveContact(e){
    e.preventDefalt();
    let subject = document.querySelector('#subject').value;
    let massage = document.querySelector('#massage').value;
    let name = document.querySelector('#name').value;
    let male = document.querySelector('#male').value;
    let female = document.querySelector('#female').value;
    let email = document.querySelector('#email').value;
    let phone = document.querySelector('#phone').value;

    let contact = {
        subject: subject,
        massage: massage,
        name: name,
        gender: male,female,
        email: email,
        phone: phone
    }

    console.log(contact);

    document.querySelector('#subject').value = '';
    document.querySelector('#massage').value = '';
    document.querySelector('#name').value = '';
    document.querySelector('#male').value = '';
    document.querySelector('#female').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#phone').value = '';

}