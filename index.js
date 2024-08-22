document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.btn-comprar');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert("Produto adicionado ao carrinho!");
        });
    });
});
