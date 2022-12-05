import { App, Plugin, MarkdownPostProcessor, MarkdownPostProcessorContext } from 'obsidian';

export default function ReaderPostProcessor(root: HTMLElement, ctx: MarkdownPostProcessorContext) {
    const linkElements = root.querySelectorAll('a.internal-link');
    let barIndex, alias;

    for(let i = 0; i < linkElements.length; i++) {
        let linkAsHTML = (linkElements[i] as HTMLElement).innerText;

        barIndex = linkAsHTML.indexOf(">");
        if(barIndex < 0) continue;
        alias = linkAsHTML.substr(barIndex+2);
        (linkElements[i] as HTMLElement).innerText = alias;
    }

}
