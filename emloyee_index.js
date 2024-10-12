// script.js

function login() {
    window.location.href = 'employee_list.html';
    return false; // Prevent form submission
}

function openModal(name, job, department, email, phone) {
    document.getElementById('modal-name').innerText = name;
    document.getElementById('modal-job').innerText = `Job Title: ${job}`;
    document.getElementById('modal-department').innerText = `Department: ${department}`;
    document.getElementById('modal-email').innerText = `Email: ${email}`;
    document.getElementById('modal-phone').innerText = `Phone: ${phone}`;
    document.getElementById('modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('modal').classList.add('hidden');
}
