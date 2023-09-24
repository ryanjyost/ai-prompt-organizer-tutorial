const PromptOrganizer = require("ai-prompt-organizer");

const firstPrompt = PromptOrganizer.get("firstPrompt");
console.log(firstPrompt);

const nestedPromptInObject = PromptOrganizer.get(
  "level0.level1.level2.nestedPrompt"
);
console.log(nestedPromptInObject);

const namedExportPrompt = PromptOrganizer.get("namedExports.namedExportPrompt");
console.log(namedExportPrompt);

const longPrompt = PromptOrganizer.get("superLongPrompt");
console.log(longPrompt);

const nestedFilePrompt = PromptOrganizer.get(
  "folderA.folderB.folderC.nestedFile.promptInNestedFile"
);
console.log(nestedFilePrompt);

const inputs = { currentTimestamp: Date.now() };
const promptWithInputs = PromptOrganizer.use(
  "The current time is {{inputs.currentTimestamp}}",
  inputs
);
console.log(promptWithInputs);

const promptWithOtherPrompts = PromptOrganizer.get("full");
console.log(promptWithOtherPrompts);
