export class Utility {
    static decodeAndExtractHTML(content) {
        const div = document.createElement('div');
        div.innerHTML = content;
        return div.textContent || div.innerText || '';
    }
}