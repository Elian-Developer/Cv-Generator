const form = document.getElementById('form');
const inputName = document.getElementById('name');
const inputAddress = document.getElementById('address');
const inputEmail = document.getElementById('email');
const inputPhone = document.getElementById('phone');
const inputSite = document.getElementById('site');
const inputAbout = document.getElementById('about');
const inputLanguage = document.getElementById('lang');
const inputExperience = document.getElementById('experience');
const inputEducation = document.getElementById('education');
const inputSkills = document.getElementById('skills');
const inputCertifications = document.getElementById('certifications');
const buttonSubmit = document.getElementById('submit');
const buttonReset = document.getElementById('reset');

form.addEventListener('click', (event) =>{
    event.preventDefault();
})

buttonSubmit.addEventListener('click', () =>{
    CreateCv();
})

buttonReset.addEventListener('click', () =>{
    Reset();
})

function validateMessage (input, message) {
    const Input = input.parentElement;
    const Message = Input.querySelector('small');
    Message.innerHTML = message;
}

// CreateCv Function

function CreateCv(){
    if(Validate()){
        const valueName = inputName.value;
        const valueAddress = inputAddress.value;
        const valueEmail = inputEmail.value;
        const valuePhone = inputPhone.value;
        const valueSite = inputSite.value;
        const valueAbout = inputAbout.value;
        const valueLanguages = inputLanguage.value;
        const valueExperience = inputExperience.value;
        const valueEducation = inputEducation.value;
        const valueSkills = inputSkills.value;
        const valueCertification = inputCertifications.value;

        const mainContainer = document.getElementById('cv-container');

        const divContainerFluid = document.createElement("div");
        divContainerFluid.setAttribute("class", "container-fluid");

        const h1Item = document.createElement("h1");
        h1Item.setAttribute('class', 'text-center fst-italic mb-4 mt-4 border');
        h1Item.innerText = `~${valueName}, your cv generated~`

        const divRowCol6 = document.createElement("div");
        divRowCol6.setAttribute("class", "row col-6 offset-3 mt-5 mb-5 border");

        const divCol5 = document.createElement("div")
        divCol5.setAttribute("class", "col-5")

        const headerCol5 = document.createElement("header")
        headerCol5.setAttribute("class", "heading")

        const divCol5Mt5 = document.createElement("div");
        divCol5Mt5.setAttribute("class", "mt-5 mb-5 text-center");

        const divCol5h2 = document.createElement("h2");
        divCol5h2.innerText = valueName;

        const divContact = document.createElement("div");
        divContact.setAttribute("class", "ms-4");

        const divContactH4 = document.createElement("h4");
        divContactH4.setAttribute("class", "fw-bold")
        divContactH4.innerText = "Contact";

        const divContactHr = document.createElement("hr");

        const divContactAddress = document.createElement("h6");
        divContactAddress.setAttribute("class", "fw-bold")
        divContactAddress.innerText = "Address:";

        const divContactAddressP = document.createElement("p");
        divContactAddressP.innerText = valueAddress;

        const divContactPhone = document.createElement("h6");
        divContactPhone.setAttribute("class", "fw-bold");
        divContactPhone.innerText = "Phone:";

        const divContactPhoneP = document.createElement("p");
        divContactPhoneP.innerText = valuePhone;

        const divContactEmail = document.createElement("h6");
        divContactEmail.setAttribute("class", "fw-bold");
        divContactEmail.innerText = "Email:";

        const divContactEmailP = document.createElement("p");
        divContactEmailP.innerText = valueEmail;

        const divContactWeb = document.createElement("h6");
        divContactWeb.setAttribute("class", "fw-bold");
        divContactWeb.innerText = "Web Site:"

        const divContactWebP = document.createElement("p");
        divContactWebP.innerText = valueSite;

        const divLang = document.createElement("div");
        divLang.setAttribute("class", "ms-4");

        const divLangH4 = document.createElement("h4")
        divLangH4.setAttribute("class", "fw-bold")
        divLangH4.innerText = "Languages"

        const divLangHr = document.createElement("hr");

        const divCol7 = document.createElement("div")
        divCol7.setAttribute("class", "col-7")

        const headerCol7 = document.createElement("header");
        headerCol7.setAttribute("class", "heading-right")
        
        const divSummary = document.createElement("div");
        
        const divSummaryH4 = document.createElement("h4");
        divSummaryH4.setAttribute("class", "fw-bold mt-3 mb-3 ms-4")
        divSummaryH4.innerText = "Summary"

        const divSummaryHr = document.createElement("hr");

        const divSummaryP = document.createElement("p")
        divSummaryP.setAttribute("class", "justify mx-3 px-2")
        divSummaryP.innerText = valueAbout;

        const divRow = document.createElement("div")
        divRow.setAttribute("class", "row");

        const divRowSkills = document.createElement("div")

        const divRowSkillsH4 = document.createElement("h4");
        divRowSkillsH4.setAttribute("class", "fw-bold ms-4")
        divRowSkillsH4.innerText = "Skills";

        const divRowSkillsHr = document.createElement("hr");

        const divRowSkillsCol6 = document.createElement("div")
        divRowSkillsCol6.setAttribute("class", "col-8");

        const divCol6Ul = document.createElement("ul");
        divCol6Ul.setAttribute("class", "ms-3")

        const divExperience = document.createElement("div");

        const divExperienceH4 = document.createElement("h4");
        divExperienceH4.setAttribute("class", "fw-bold ms-4");
        divExperienceH4.innerText = "Experience";

        const divExperienceHr = document.createElement("hr");

        const divExperienceUl = document.createElement("ul");
        divExperienceUl.setAttribute("class", "ms-3")

        const divExperienceLi = document.createElement("li");
        divExperienceLi.innerText = valueExperience;

        const divEducation = document.createElement("div")

        const divEducationH4 = document.createElement("h4");
        divEducationH4.setAttribute("class", "fw-bold ms-4");
        divEducationH4.innerText = "Education:";

        const divEducationHr = document.createElement("hr");

        const divEducationUl = document.createElement("ul");
        divEducationUl.setAttribute("class", "ms-3")

        const divEducationLi = document.createElement("li");
        divEducationLi.innerText = valueEducation;

        const divCertifications = document.createElement("div");
        
        const divCertificationsH4 = document.createElement("h4");
        divCertificationsH4.setAttribute("class", "fw-bold ms-4");
        divCertificationsH4.innerText = "Certifications";

        const divCertificationsHr = document.createElement("hr");

        const divCertificationsUl = document.createElement("ul");
        divCertificationsUl.setAttribute("class", "ms-3")
        const divCertificationsLi = document.createElement("li");
        const divCertificationsH6 = document.createElement("p");
        divCertificationsH6.innerText = valueCertification;

        const footer = document.createElement("footer");
        footer.setAttribute("class", "footer-right");

        const divRowBtnDelete = document.createElement("div")
        divRowBtnDelete.setAttribute('class', 'row container-fluid');

        const divButtonDelete = document.createElement("div")
        divButtonDelete.setAttribute("class", "col-9");

        const buttonDelete = document.createElement("button");
        buttonDelete.setAttribute("class", "btn btn-lg btn-outline-danger float-end mb-4");
        buttonDelete.innerText = "Remove Cv";
        buttonDelete.addEventListener('click', () =>{
            if(confirm(`Are you sure you want remove the ${valueName} cv? `)){
                mainContainer.removeChild(divContainerFluid);
                mainContainer.removeChild(divRowBtnDelete);
            }
        })
        

        divContainerFluid.appendChild(h1Item);
        
        divCol5Mt5.appendChild(divCol5h2);

        divContact.appendChild(divContactH4);
        divContact.appendChild(divContactHr);
        divContact.appendChild(divContactAddress);
        divContact.appendChild(divContactAddressP);
        divContact.appendChild(divContactPhone);
        divContact.appendChild(divContactPhoneP);
        divContact.appendChild(divContactEmail);
        divContact.appendChild(divContactEmailP);
        divContact.appendChild(divContactWeb);
        divContact.appendChild(divContactWebP);

        divLang.appendChild(divLangH4);
        divLang.appendChild(divLangHr);

        languages = valueLanguages.split(",");

        languages.forEach((language) => {
          const divLangP = document.createElement('p');
          divLangP.textContent = language.trim();
          divLang.appendChild(divLangP);
        });

        divCol5.appendChild(headerCol5);
        divCol5.appendChild(divCol5Mt5);
        divCol5.appendChild(divContact);
        divCol5.appendChild(divLang);

        divSummary.appendChild(divSummaryH4);
        divSummary.appendChild(divSummaryHr);
        divSummary.appendChild(divSummaryP);

        divRowSkills.appendChild(divRowSkillsH4);
        divRowSkills.appendChild(divRowSkillsHr)
        
        divRowSkillsCol6.appendChild(divCol6Ul);

         Skills = valueSkills.split(',');

         Skills.forEach((skill) => {
           const divCol6Li = document.createElement('li');
           divCol6Li.innerHTML = skill;
           divCol6Ul.appendChild(divCol6Li);
         });

        divRow.appendChild(divRowSkills);
        divRow.appendChild(divRowSkillsCol6);

        divExperience.appendChild(divExperienceH4);
        divExperience.appendChild(divExperienceHr);
        divExperience.appendChild(divExperienceUl);

        const Experiences = valueExperience.split(",");

        Experiences.forEach(experience => {
            const divExperienceLi = document.createElement("li");
            divExperienceLi.innerText = experience;
            divExperienceUl.appendChild(divExperienceLi); 
        })

        divEducation.appendChild(divEducationH4);
        divEducation.appendChild(divEducationHr);
        divEducation.appendChild(divEducationUl);

        const Educations = valueEducation.split(",");

        Educations.forEach(education => {
            const divEducationLi = document.createElement("li");
            divEducationLi.innerText = education;
            divEducationUl.appendChild(divEducationLi);
        })

        divCertifications.appendChild(divCertificationsH4);
        divCertifications.appendChild(divCertificationsHr);
        divCertifications.appendChild(divCertificationsUl);

        const Certifications = valueCertification.split(",")

        Certifications.forEach(certification => {
            const divCertificationsLi = document.createElement("li")
            divCertificationsLi.innerText = certification;
            divCertificationsUl.appendChild(divCertificationsLi);
        })


        divCol7.appendChild(headerCol7);
        divCol7.appendChild(divSummary);
        divCol7.appendChild(divRow);
        divCol7.appendChild(divExperience);
        divCol7.appendChild(divEducation);
        divCol7.appendChild(divCertifications);
        divCol7.appendChild(footer);

        divRowCol6.appendChild(divCol5);
        divRowCol6.appendChild(divCol7);

        divContainerFluid.appendChild(divRowCol6);
        mainContainer.appendChild(divContainerFluid);

        divRowBtnDelete.appendChild(divButtonDelete);
        divButtonDelete.appendChild(buttonDelete);
        mainContainer.appendChild(divRowBtnDelete);

        Reset()
    }
}

// Reset Function

function Reset(){

   inputName.value = '';
   inputName.classList.remove('success');
   inputName.classList.remove('failed');
   validateMessage(inputName, '');
   inputName.focus();

   inputAddress.value = '';
   inputAddress.classList.remove('success');
   inputAddress.classList.remove('failed');
   validateMessage(inputAddress, '');
   
   inputEmail.value = '';
   inputEmail.classList.remove('success');
   inputEmail.classList.remove('failed');
   validateMessage(inputEmail, '');

   inputPhone.value = '';
   inputPhone.classList.remove('success');
   inputPhone.classList.remove('failed');
   validateMessage(inputPhone, '');

   inputSite.value = '';
   inputSite.classList.remove('success');
   inputSite.classList.remove('failed');
   validateMessage(inputSite, '');

   inputAbout.value = '';
   inputAbout.classList.remove('success');
   inputAbout.classList.remove('failed');
   validateMessage(inputAbout, '');

   inputLanguage.value = '';
   inputLanguage.classList.remove('success');
   inputLanguage.classList.remove('failed');
   validateMessage(inputLanguage, '');

   inputExperience.value = '';
   inputExperience.classList.remove('success');
   inputExperience.classList.remove('failed');
   validateMessage(inputExperience, '');

   inputEducation.value = '';
   inputEducation.classList.remove('success');
   inputEducation.classList.remove('failed');
   validateMessage(inputEducation, '');

   inputSkills.value = '';
   inputSkills.classList.remove('success');
   inputSkills.classList.remove('failed');
   validateMessage(inputSkills, '');
   
   inputCertifications.value = '';
   inputCertifications.classList.remove('success')
   inputCertifications.classList.remove('failed')
   validateMessage(inputCertifications, '');
}

// Form Validate Function

function Validate(){
    let isValid = true;
    const valueName = inputName.value;
    const valueAddress = inputAddress.value;
    const valueEmail = inputEmail.value;
    const valuePhone = inputPhone.value;
    const valueSite = inputSite.value;
    const valueAbout = inputAbout.value;
    const valueLanguages = inputLanguage.value;
    const valueExperience = inputExperience.value;
    const valueEducation = inputEducation.value;
    const valueSkills = inputSkills.value;
    const valueCertification = inputCertifications.value;

    if(valueName == '' || valueName == undefined || valueName == null){
        isValid = false;
        inputName.classList.add('failed');
        inputName.classList.remove('success');
        validateMessage(inputName, 'You must put your name.');
    }else{
        inputName.classList.add('success');
        inputName.classList.remove('failed');
        validateMessage(inputName, '');
    }

    if(valueAddress == '' || valueAddress == undefined || valueAddress == null){
        isValid = false;
        inputAddress.classList.add('failed');
        inputAddress.classList.remove('success');
        validateMessage(inputAddress, 'You must put your Address.');
    }else{
        inputAddress.classList.add('success');
        inputAddress.classList.remove('failed');
        validateMessage(inputAddress, '');
    }

    if (valueEmail == '' || valueEmail == undefined || valueEmail == null){
        isValid = false;
        inputEmail.classList.add('failed');
        inputEmail.classList.remove('success');
        validateMessage(inputEmail, 'You must put your Email Address.');
    } else {
        inputEmail.classList.add('success');
        inputEmail.classList.remove('failed');
        validateMessage(inputEmail, '');
    }

    if (valuePhone == '' || valuePhone == undefined || valuePhone == null){
        isValid = false;
        inputPhone.classList.add('failed');
        inputPhone.classList.remove('success')
        validateMessage(inputPhone, 'You must put your Phone Number.')
    } else {
        inputPhone.classList.add('success');
        inputPhone.classList.remove('failed');
        validateMessage(inputPhone, '');
    }

    if (valueSite == '' || valueSite == undefined || valueSite == null){
        isValid = false;
        inputSite.classList.add('failed');
        inputSite.classList.remove('success');
        validateMessage(inputSite, 'You must put your Web Site.');
    } else {
        inputSite.classList.add('success');
        inputSite.classList.remove('failed');
        validateMessage(inputSite, '');
    }

    if(valueAbout == '' || valueAbout == undefined || valueAbout == null){
        isValid = false;
        inputAbout.classList.add('failed');
        inputAbout.classList.remove('success');
        validateMessage(inputAbout, 'You mus put a resume about you.');
    }else{
        inputAbout.classList.add('success');
        inputAbout.classList.remove('failed');
        validateMessage(inputAbout, '');
    }

    if (valueLanguages == '' || valueLanguages == undefined || valueLanguages == null){
        isValid = false;
        inputLanguage.classList.add('failed');
        inputLanguage.classList.remove('success');
        validateMessage(inputLanguage, 'You must put the languages you know');
    } else {
        inputLanguage.classList.add('success');
        inputLanguage.classList.remove('failed');
        validateMessage(inputLanguage, '');
    }

    if (valueExperience == '' || valueExperience == undefined || valueExperience == null){
        isValid = false;
        inputExperience.classList.add('failed');
        inputExperience.classList.remove('success');
        validateMessage(inputExperience, 'You must put your work experience.');
    } else {
        inputExperience.classList.add('success');
        inputExperience.classList.remove('failed');
        validateMessage(inputExperience, '');
    }

    if (valueEducation == '' || valueEducation == undefined || valueEducation == null){
        isValid = false;
        inputEducation.classList.add('failed');
        inputEducation.classList.remove('success');
        validateMessage(inputEducation, 'You must put your education.');
    } else {
        inputEducation.classList.add('success');
        inputEducation.classList.remove('failed');
        validateMessage(inputEducation, '');
    }

    if (valueSkills == '' || valueSkills == undefined || valueSkills == null) {
        isValid = false;
        inputSkills.classList.add('failed');
        inputSkills.classList.remove('success');
        validateMessage(inputSkills, 'You must put your skills.');
    } else {
        inputSkills.classList.add('success');
        inputSkills.classList.remove('failed');
        validateMessage(inputSkills, '');
    }

    if (valueCertification == '' || valueCertification == undefined || valueCertification == null) {
        isValid = false;
        inputCertifications.classList.add('failed');
        inputCertifications.classList.remove('success'); 
        validateMessage(inputCertifications, 'You must put your certifications earned.');
    } else {
        inputCertifications.classList.add('success');
        inputCertifications.classList.remove('failed'); 
        validateMessage(inputCertifications, '');
    } 

    return isValid;
}
