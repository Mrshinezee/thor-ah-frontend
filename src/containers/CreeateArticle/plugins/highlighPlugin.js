import { RichUtils } from "draft-js";

const highlightPlugin = () => (
  {
    customStyleMap: {
      HIGHLIGHT: {
        background: "#fffe0d"
      }
    },
    keyBindingFn: e => {
      if (e.metaKey && e.key === "h") {
        return "highlight";
      }
      return null;
    },
    handleKeyCommand: (command, editorState, { setEditorState }) => {
      if (command === "highlight") {
        setEditorState(RichUtils.toggleInlineStyle(editorState, "HIGHLIGHT"));
      }
    }
  }
);

export default highlightPlugin;
