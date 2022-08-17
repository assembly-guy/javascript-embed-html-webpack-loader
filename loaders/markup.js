const rules = {
  returnsHtml: /(?<=(?<=return).+?)\<\w+>+.+?(<\/\w+).+?(?=};|\);|;)/gms,
};

const replacers = {
  quoteHtml: (markup) => `\`${markup}\``,
};

function addRule(source, regex, replacer) {
  return source.replace(regex, replacer);
}

module.exports = function loader(source) {
  let parsed = source;
  parsed = addRule(parsed, rules.returnsHtml, replacers.quoteHtml);
  return parsed;
};
