import { CustomEmoji } from "components/CustomEmoji";

export const replaceEmojisInText = (
  text: string,
  asString: boolean = false
) => {
  const regex = /:(\w+):/g;
  const matches = text.match(regex);

  if (!matches) {
    return asString ? text : [text];
  }

  const elements: (JSX.Element | string)[] = [];
  let lastIndex = 0;

  matches.forEach((match, index) => {
    const startIndex = text.indexOf(match, lastIndex);
    const endIndex = startIndex + match.length;

    // Add the text before the emoji
    elements.push(text.substring(lastIndex, startIndex));

    // Add either the CustomEmoji component or the emoji name as a string
    if (asString) {
      elements.push(`<Emoji name='${match.substring(1, match.length - 1)}' />`);
    } else {
      elements.push(
        <CustomEmoji key={index} name={match.substring(1, match.length - 1)} />
      );
    }

    // Update the last index to the end of the matched string
    lastIndex = endIndex;
  });

  // Add the remaining text after the last emoji
  elements.push(text.substring(lastIndex));

  return elements;
};
