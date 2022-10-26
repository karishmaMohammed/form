

 function validate(isSubmitted = false){
    let fullName = document.getElementById('full-name').value 
    let gender = document.getElementById('gender').value 
    let gardening = document.getElementById('gardening').checked; 
    let readingNovel = document.getElementById('reading-novals').checked; 
    let dancing = document.getElementById('dancing').checked; 
    let singing = document.getElementById('singing').checked;
    let error = false
        
    
        if(fullName.length >= 5 && fullName.includes(" ") && fullName.length - fullName.lastIndexOf(" ") >= 2){
            document.getElementById('full-name-valid').style.display = 'block'
            document.getElementById('full-name-invalid').style.display = 'none'
        }else{
            document.getElementById('full-name-invalid').style.display = 'block'
            document.getElementById('full-name-valid').style.display = 'none'
            error = true
        }
        if(gender != 'None') {
			document.getElementById('gender-valid').style.display = 'block'
			document.getElementById('gender-invalid').style.display = 'none'
		} else {
			document.getElementById('gender-invalid').style.display = 'block'
			document.getElementById('gender-valid').style.display = 'none'
			error = true
		}
        if(gardening || readingNovel || dancing || singing) {
            document.getElementById('hobbies-valid').style.display = 'block'
            document.getElementById('hobbies-invalid').style.display = 'none'
        }else{
            document.getElementById('hobbies-valid').style.display = 'none'
            document.getElementById('hobbies-invalid').style.display = 'block'
            error = true
        }

        if(!error && isSubmitted) {
           // alert(`Hobbies of ${fullName} (${gender}) are ${gardening}`)
           let alertMessage = `Hobbies of ${fullName} (${gender}) are `
           if(gardening){
            alertMessage = alertMessage + 'Gardening';
           }
           if(readingNovel){
            alertMessage = alertMessage + ' Reading Novels';
           }
           if(dancing) {
            alertMessage = alertMessage + ' Dancing';
           }
           if(singing) {
            alertMessage = alertMessage + ' Singing';
           }
           
           alert(alertMessage)
            document.getElementById('registration-form').reset()
        
            let validFeedbacks = document.getElementsByClassName('valid-feedback')
            for(let i = 0; i < validFeedbacks.length; i++) {
              validFeedbacks[i].style.display = 'none'
            }
            let invalidFeedbacks = document.getElementsByClassName('invalid-feedback')
            for(let i = 0; i < invalidFeedbacks.length; i++) {
              invalidFeedbacks[i].style.display = 'none'
            }
          }
       
        
       
}