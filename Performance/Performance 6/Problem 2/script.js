
document.getElementById('studentForm').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value.trim();
    const studentId = document.getElementById('student_id').value.trim();
    const email = document.getElementById('email').value.trim();
  
    let valid = true;
  
    
    const idPattern = /^\d{3}-\d{2}-\d{4}$/;
    const emailPattern = /^[a-z0-9._%+-]+@diu\.edu\.bd$/;
  
    
    document.getElementById('nameError').textContent = '';
    document.getElementById('idError').textContent = '';
    document.getElementById('emailError').textContent = '';
  
   
    if (name.length < 4) {
      document.getElementById('nameError').textContent = 'Name must be at least 4 characters.';
      valid = false;
    }
  
    
    if (!idPattern.test(studentId)) {
      document.getElementById('idError').textContent = 'ID must be like 221-15-5330.';
      valid = false;
    }
  
  
    if (!emailPattern.test(email)) {
      document.getElementById('emailError').textContent = 'Email must end with @diu.edu.bd';
      valid = false;
    }
  
    if (!valid) {
      e.preventDefault(); 
    }
  });
  