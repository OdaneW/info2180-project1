/* Add your JavaScript to this file */
window.onload = function(){
const submiter = document.getElementsByTagName('button');
submiter[0].addEventListener("click", function(){
    let formItem = document.getElementById('email').value;
    if (formItem != ''){
        alert('Thank you! Your email address '+formItem+' has been added to our mailing list!');
    }
    else{
        alert('Please enter a valid email address');
    }
    submiter.preventDefault();
})
}