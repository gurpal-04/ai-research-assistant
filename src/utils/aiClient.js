export async function runAI(apiType, text, options = {}) {
    try {
        switch (apiType) {
            case "summarizer":
                const availability = await Summarizer.availability();
                console.log("availability", availability);
                return await chrome.ai.summarizer.summarize({ text });
            case "translator":
                return await chrome.ai.translator.translate({
                    text,
                    targetLanguage: options.language || "en"
                });
            case "proofreader":
                return await chrome.ai.proofreader.correct({ text });
            case "rewriter":
                return await chrome.ai.rewriter.rewrite({ text });
            case "prompt":
                const promptAvailability = await LanguageModel.availability();
                console.log("promptAvailability", promptAvailability);
                return await chrome.ai.prompt.generate({ text });
            default:
                return { text: "⚠️ Unknown API type" };
        }
    } catch (err) {
        console.error(err);
        return { text: "❌ Error running API" };
    }
}
