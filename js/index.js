// Selecionar todos os inputs de radio
const options = document.querySelectorAll('input[name="investigar"]');

// Adicionar evento de mudança a cada um deles
options.forEach((input) => {
    input.addEventListener('change', function() {
        const valor = this.value;
        const params = new URLSearchParams(window.location.search);
        params.set('pessoa', valor);

        // Redireciona para a próxima página assim que a opção é selecionada
        window.location.href = `https://radarfiel.github.io/numeromulher/`;
		// Redireciona para a próxima página assim que a opção é selecionada
        window.location.href = `https://radarfiel.github.io/numerohomem/`;
    });
});
