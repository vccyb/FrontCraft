import * as monaco from "monaco-editor";

//@ts-ignore
import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
//@ts-ignore
import jsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker";
//@ts-ignore
import cssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker";
//@ts-ignore
import htmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker";
//@ts-ignore
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";

/**
 * 编辑器配置
 */
export const editorOptions: monaco.editor.IStandaloneEditorConstructionOptions =
  {
    // 外观
    theme: "vs-dark",
    fontSize: 14,
    fontFamily: 'Menlo, Monaco, "Courier New", monospace',
    minimap: { enabled: false },
    scrollBeyondLastLine: false,

    // 编辑器功能
    tabSize: 2,
    automaticLayout: true,
    formatOnPaste: true,
    lineNumbers: "on",
    lineNumbersMinChars: 3,
    folding: true,
    wordWrap: "on",

    // 滚动条
    scrollbar: {
      vertical: "auto",
      horizontal: "auto",
      verticalScrollbarSize: 10,
      horizontalScrollbarSize: 10,
    },

    // 智能提示
    quickSuggestions: true,
    suggestOnTriggerCharacters: true,

    // 括号对
    bracketPairColorization: {
      enabled: true,
    },
  };

/**
 * 初始化主题
 */
export const initTheme = () => {
  monaco.editor.defineTheme("customDarkTheme", {
    base: "vs-dark",
    inherit: true,
    rules: [],
    colors: {
      "editorGutter.background": "#1f2937",
      "editorLineNumber.foreground": "#6B7280",
    },
  });

  monaco.editor.setTheme("customDarkTheme");
};

/**
 * Worker配置
 */
export const initWorkers = () => {
  (self as any).MonacoEnvironment = {
    getWorker(_: any, label: string) {
      if (label === "json") {
        return new jsonWorker();
      }
      if (label === "css" || label === "scss" || label === "less") {
        return new cssWorker();
      }
      if (label === "html" || label === "handlebars" || label === "razor") {
        return new htmlWorker();
      }
      if (label === "typescript" || label === "javascript") {
        return new tsWorker();
      }
      return new editorWorker();
    },
  };
};

/**
 * 默认代码配置
 * */
export const defaultCode = {
  html: '<div class="greeting">Hello World</div>',
  css: ".greeting { color: blue; font-size: 24px; text-align: center; margin-top: 20px; }",
  js: 'console.log("Hello World")',
};
