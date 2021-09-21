import { editor } from "monaco-editor";

export class PlaygroundEditor {
    static containerId = "playground-editor";
    editor: editor.IStandaloneCodeEditor;

    constructor() {
        this.editor = editor.create(document.getElementById(PlaygroundEditor.containerId), {
            value: "",
            language: "python",
            dimension: { width: 300, height: 300 },
            minimap: {
                enabled: false,
            },

            scrollbar: {
                vertical: "auto",
                horizontal: "auto",
            },
            fontSize: 14,
            lineHeight: 20,
        });
    }
}
