
const employees = {
  "Ivan Petrov": {
      jobTitle: "Software Engineer",
      department: "IT",
      email: "ivan.petrov@sinksrus.com",
      contact: "555-6789",
      address: "12 Red Square, Moscow",
      sex: "Male",
      status: "Single"
  },
  "Pedro Los Baños": {
      jobTitle: "Marketing Manager",
      department: "Marketing",
      email: "pedro_los_banos@sinksrus.com",
      contact: "",
      address: "123 Mabini St",
      sex: "Male",
      status: "Married"
  },
};


document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'admin' && password === 'password') {
      
      window.location.href = 'employee_index.html';
  } else {
      const errorMessage = document.getElementById('error-message');
      errorMessage.classList.remove('hidden');
  }
});


function openModal(name) {
  const employee = employees[name];
  if (employee) {
      document.getElementById('employee-name').innerText = name;
      document.getElementById('employee-job-title').innerText = employee.jobTitle;
      document.getElementById('employee-department').innerText = employee.department;
      document.getElementById('employee-email').innerText = employee.email;
      document.getElementById('employee-contact').innerText = employee.contact || "N/A";
      document.getElementById('employee-address').innerText = employee.address || "N/A";
      document.getElementById('employee-sex').innerText = employee.sex;
      document.getElementById('employee-status').innerText = employee.status;
      document.getElementById('employee-modal').classList.remove('hidden');
  }
}

function closeModal() {
  document.getElementById('employee-modal').classList.add('hidden');
}