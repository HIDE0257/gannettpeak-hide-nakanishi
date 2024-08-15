// Contact: Email JS
const contactForm = document.querySelector("#contact-form");
const submitBtn = document.querySelector(".submit-btn");
const nameInput = document.querySelector("#user_name");
const emailInput = document.querySelector("#user_email");
const subjectInput = document.querySelector("#subject");
const messageInput = document.querySelector("#message");

//Get needed data from email JS
const publicKey = "psvfIL_Xk0GsRk21c";
const serviceID = "gmail";
const templateID = "template_m0ywsrg";

//Initialize email JS with public key
emailjs.init(publicKey);

//Add submit event to the form 
contactForm.addEventListener("submit", e => {
    //Prevent from default behaviour
    e.preventDefault();
    //Change button text
    submitBtn.innerText = "Sending...";
    //Get all input field values
    const inputFields = {
        name: nameInput.value,
        email: emailInput.value,
        subject: subjectInput.value,
        message: messageInput.value,
    }
    /* Send the email (Add service, template ID and input field values) */
    emailjs.send(serviceID, templateID, inputFields)
    .then(() => {
        //Change button text
        submitBtn.innerText = "Message Sent Successfully";
        //Clear out all inut fields
        nameInput.value = "";
        emailInput.value = "";
        subjectInput.value = "";
        messageInput.value = "";
    }, (error) => {
        //Console log the error
        console.log(error);
        //Change button text
        submitBtn.innerText = "Something went wrong, try again";
    });
})