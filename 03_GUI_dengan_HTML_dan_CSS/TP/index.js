const editorElement = document.getElementById("editor-kecil");
const charCountElement = document.getElementById("hf");
const upperCountElement = document.getElementById("hb");
const lowerCountElement = document.getElementById("hk");

editorElement.addEventListener("input", (event) => {
    const text = event.target.value;
    const textLength = text.length;

    charCountElement.textContent = textLength;

    let upper = 0;
    let lower = 0;

    for (let char of text) {
        if (char >= 'A' && char <= 'Z') {
            upper++;
        } else if (char >= 'a' && char <= 'z') {
            lower++;
        }
    }

    upperCountElement.textContent = upper;
    lowerCountElement.textContent = lower;

});