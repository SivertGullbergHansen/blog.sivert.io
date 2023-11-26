import { visit } from "unist-util-visit";

function emojiPlugin() {
  return transformer;

  function transformer(tree) {
    visit(tree, "text", visitor);
  }

  function visitor(node, index, parent) {
    const regexPattern = /:([^:]+):/g;

    // Check if the text matches the regex pattern
    const matches = node.value.match(regexPattern);

    if (matches) {
      matches.forEach((match) => {
        const emojiName = match.replace(/:/g, ""); // Remove colons
        const emojiNode = {
          type: "jsx",
          value: `<Emoji name='${emojiName}' />`,
        };

        // Replace the matching text with the new emoji node
        parent.children.splice(index, 1, emojiNode);
      });
    }
  }
}

export { emojiPlugin };
