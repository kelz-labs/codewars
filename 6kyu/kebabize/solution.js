// TODO

function kebabize(str) {
  return (
    str[0].toLowerCase() +
    str
      .slice(1)
      .match(/[A-Za-z]/gi)
      .map((value) =>
        value === value.toUpperCase() ? `-${value.toLowerCase()}` : value
      )
      .join("")
  );
}
