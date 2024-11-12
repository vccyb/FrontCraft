<template>
  <div ref="editorContainer" class="h-[300px]"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, onBeforeUnmount } from "vue";

const props = defineProps<{
  modelValue: string;
  language: string;
}>();

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

const editorContainer = ref<HTMLElement | null>(null);
let editor: any = null;
let monaco: any = null;

onMounted(async () => {
  if (!editorContainer.value) return;

  // 动态导入 monaco-editor
  monaco = await import("monaco-editor");

  editor = monaco.editor.create(editorContainer.value, {
    value: props.modelValue,
    language: props.language,
    theme: "vs-dark",
    minimap: { enabled: false },
    fontSize: 14,
    automaticLayout: true,
    scrollBeyondLastLine: false,
    lineNumbers: "on",
    roundedSelection: false,
  });

  editor.onDidChangeModelContent(() => {
    emit("update:modelValue", editor?.getValue() || "");
  });

  watch(
    () => props.modelValue,
    (newValue) => {
      if (editor && newValue !== editor.getValue()) {
        editor.setValue(newValue);
      }
    }
  );
});

onBeforeUnmount(() => {
  if (editor) {
    editor.dispose();
  }
});
</script>

<style>
.monaco-editor {
  padding-top: 12px;
}
</style>
