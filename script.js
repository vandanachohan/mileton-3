// // listing element 
// document.getElementById(`resumeFrom`)?.addEventListener(`submit`, function(event){
//     event.preventDefault();
var _a;
//     // type assertion
//      const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
//      const nameElement = document.getElementById(`name`) as HTMLInputElement;
//      const emailElement = document.getElementById(`email`) as HTMLInputElement;
//      const phoneElement = document.getElementById(`phone`) as HTMLInputElement;
//      const educationElement = document.getElementById(`education`) as HTMLInputElement;
//      const exprienceElement = document.getElementById(`exprience`) as HTMLInputElement;
//      const skillsElement = document.getElementById(`skills`) as HTMLInputElement;
//      // check the all element  are present
//      if (profilePictureInput && nameElement  && emailElement && phoneElement && educationElement && exprienceElement && skillsElement){
//         const name = nameElement.value;
//         const email = emailElement.value;
//         const phone = phoneElement.value;
//         const education = educationElement.value;
//         const exprience = exprienceElement.value;
//         const skills = skillsElement.value;
//    // picture elements
//        const profilePictureFile = profilePictureInput.files?.[0]
//        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile): "";
//         //create resume output
//         const resumeOutput =`
//         <h2> Resume </h2>
//         ${profilePictureURL} ? '<img src="${profilePictureURL}" alt="profile Picture" class="profilePicture">' : "";
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>email:</strong> ${email}</p>
//         <p><strong>phone:</strong> ${phone}</p>
//         <h3>Education</h3>
//         <p>${education}</p>
//         <h3>Exprience</h3>
//         <p>${exprience}</p>
//         <h3>Skulls</h3>
//         <p>${skills}</p>
//        `;
//         const resumeOutputEliment = document.getElementById('resumeOutput')
//          if (resumeOutputEliment){
//             resumeOutputEliment.innerHTML = resumeOutput 
//          } else {
//             console.error('the resume output element are missing')
//          } 
//          }else{
//             console.error('one or more output element are missnig')
//          }
//       })
// Listen to form submission
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // Type assertion
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('work-experience');
    var skillsElement = document.getElementById('skills');
    // Check if all elements are present
    if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // Profile picture handling
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
        // Create resume output
        var resumeOutput = "\n           <h2>Resume</h2>\n           ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : "", "\n           <p><strong>Name:</strong> ").concat(name_1, "</p>\n           <p><strong>Email:</strong> ").concat(email, "</p>\n           <p><strong>Phone:</strong> ").concat(phone, "</p>\n\n           <h3>Education</h3>\n           <p>").concat(education, "</p>\n\n           <h3>Experience</h3>\n           <p>").concat(experience, "</p>\n\n           <h3>Skills</h3>\n           <p>").concat(skills, "</p>\n       ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('The resume output element is missing');
        }
    }
    else {
        console.error('One or more form elements are missing');
    }
});
