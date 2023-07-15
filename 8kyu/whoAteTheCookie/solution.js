function cookie(x) {
  function generateTemplate(name) {
    return `Who ate the last cookie? It was ${name}!`;
  }

  switch (typeof x) {
    case "string":
      return generateTemplate("Zach");

    case "number":
      return generateTemplate("Monica");

    default:
      return generateTemplate("the dog");
  }
}
