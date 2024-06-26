const formLogin = document.querySelector('.formLogin');
const emailInput = formLogin.querySelector('input[type="email"]');
const passwordInput = formLogin.querySelector('input[type="password"]');

formLogin.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    try {
        const response = await fetch('http://localhost:3000/usuarios');
        const usuarios = await response.json();

        const usuario = usuarios.find(u => u.email === email && u.senha === password);
        if (usuario) {
            // Login bem-sucedido: armazene o ID do usuário (ou outras informações)
            // em localStorage ou sessionStorage e redirecione para index-logado.html
            localStorage.setItem('usuarioLogado', usuario.id);
            window.location.href = 'index-logado.html';
        } else {
            alert('Credenciais inválidas');
        }
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        alert('Ocorreu um erro durante o login');
    }
});