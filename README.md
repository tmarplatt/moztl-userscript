# moztl-userscript
A greasemonkey userscript which adds a simple copy-to-clipboard button to mozilla's [client-side live translator](https://mozilla.github.io/translate/).

**Workflow:** to paste and translate text before copying the result, which resets the tool so that the user may come back to the browser tab and paste more text.

How the userscript works:

- Adds a clipboard button which copies the translated text to the clipboard.
- Clears input text once the translation is copied.
- Focuses input textarea after clearing it.

## FAQ

**Permissions?**
This userscript requires no particular GreaseMonkey addon permissions. It will only acccess the browser's ClipboardAPI.

**Mozilla's text translator?**

Mozilla's [translate tool](https://github.com/mozilla/translate) is a static site that performs all text translation locally using your CPU for inference. It runs in your browser, you can [try it here](https://mozilla.github.io/translate/). It's very good on its own, but with clipboard access it's even better!

**There's all these great LLM models and APIs, why use Mozilla's neural machine translator at all?**
Depending on a translator's work, they may wish not to share the text with third party companies hosting LLM services. It's relatively costly (in time and money) to set up your own local instance of LLaMA just to get translations of text across languages.

Mozilla's Bergamot translator tool runs locally in your browser and produces great results at several languages. It realizes CPU inference at decent page load time and translation speeds.

**Can I run this UserSript with my local `translate` instance?**

Yes you can. Edit the script's header an change this line:

`// @match        https://mozilla.github.io/translate/`

Either add a new `@match` entry or edit the URL to point to your local instance.
