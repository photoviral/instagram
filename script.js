document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Ajoutez ici la logique pour vérifier les identifiants
    alert('Connexion en cours...');
});
