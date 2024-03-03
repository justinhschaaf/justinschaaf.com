// marked.js -- it's not the best, but it actually fucking works
// I tried 2 different parsers before this that didn't even import
import { Marked } from "marked";
import markedAlert from "marked-alert";
import markedFootnote from "marked-footnote";
import { markedHighlight } from "marked-highlight";

// Helpers
import hljs from "highlight.js";

/** 
 * A MarkedJS instance already configured with alerts, footnotes, and syntax 
 * highlighting
 */
export const marked: Marked = new Marked(
    markedAlert(), 
    markedFootnote(), 
    markedHighlight({
        // Taken from https://github.com/markedjs/marked-highlight?tab=readme-ov-file#usage
        langPrefix: 'hljs language-',
        highlight(code, lang, info) {
            const language = hljs.getLanguage(lang) ? lang : 'plaintext';
            return hljs.highlight(code, { language }).value;
        }
    })
);
