// ==UserScript==
// @name         MozillaTranslator
// @namespace    moztl
// @version      0.1
// @description  Adds some GUI improvements to the client-side translation engine provided by Mozilla
// @author       tmarplatt
// @match        https://mozilla.github.io/translate/
// @license      https://github.com/tmarplatt/moztl-userscript/raw/main/LICENSE
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Goals: to add one additional button below the "swap" button, which:
    //   - selects the translated text and copies it to the clipboard
    //   - clears the user input textarea and focuses it
    // Procedure:
    //   - Add a button wrapper div around the original swap button element
    //   - Append a new text copy button to the button wrapper div
    //   - Activate the click event listener of the text copy button
    //   - TODO: Implement a hotkey to click the button

    // Find the existing swap button
    var swapButton = document.querySelector('.swap');

    // Create the new copy-and-clear button element
    var copyAndClearButton = document.createElement('button');
    copyAndClearButton.textContent = '📋';
    copyAndClearButton.classList.add('swap');
    // Enable copy to clipboard on click
    copyAndClearButton.addEventListener('click', function() {
        const toTextArea = document.getElementById('output');
        // Copy the contents of the translated text to the clipboard
        navigator.clipboard.writeText(toTextArea.value);

        // Clear the user input text
        const fromTextArea = document.getElementById('input');
        fromTextArea.value = '';

        // Focus the user input textarea
        fromTextArea.focus();
    });

    // Create a new div element to wrap both buttons
    var wrapperDiv = document.createElement('div');
    wrapperDiv.classList.add('swap');
    wrapperDiv.appendChild(copyAndClearButton);
    wrapperDiv.appendChild(document.createElement('br'));

    swapButton.parentNode.insertBefore(wrapperDiv, swapButton);
    wrapperDiv.appendChild(swapButton);
})();
