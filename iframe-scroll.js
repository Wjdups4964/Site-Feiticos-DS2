document.addEventListener('DOMContentLoaded', function () {
    const iframe = document.querySelector('iframe.iframe-detalhes');
    const links = document.querySelectorAll('a.link-magia[target="tela_detalhes"]');

    if (!iframe || links.length === 0) {
        return;
    }

    function scrollToIframe() {
        iframe.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    }

    links.forEach((link) => {
        link.addEventListener('click', () => {
            scrollToIframe();
        });
    });
});
