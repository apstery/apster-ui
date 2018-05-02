window.addEventListener('load', function () {
    var embeds, embed, iframe, ratio, ratioDiv;

    embeds = document.querySelectorAll('.embed');
    for (let i = 0; i < embeds.length; i++) {
        embed = embeds[i];
        iframe = embed.querySelector('iframe');
        if (iframe) {
            ratio = parseFloat(iframe.getAttribute('height')) / parseFloat(iframe.getAttribute('width'));
            ratioDiv = document.createElement('div');
            ratioDiv.className = 'ratio';
            ratioDiv.style.paddingTop = (100 * ratio) + '%';
            embed.appendChild(ratioDiv);
            iframe.removeAttribute('width');
            iframe.removeAttribute('height');
        }
    }

});
