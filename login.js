function openModal(name) {
    const employee = employees[name];
    document.getElementById('employee-name').innerText = name;
    document.getElementById('employee-job-title').innerText = employee.jobTitle;
    document.getElementById('employee-department').innerText = employee.department;
    document.getElementById('employee-email').innerText = employee.email;
    document.getElementById('employee-contact').innerText = employee.contact;
    document.getElementById('employee-address').innerText = employee.address;
    document.getElementById('employee-sex').innerText = employee.sex;
    document.getElementById('employee-status').innerText = employee.status;
    document.getElementById('employee-modal').classList.remove('hidden');
  }
  
  function closeModal() {
    document.getElementById('employee-modal').classList.add('hidden');
  }
  


