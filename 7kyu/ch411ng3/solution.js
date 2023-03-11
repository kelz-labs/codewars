function nerdify(txt) {
  return (
    txt[0] +
    txt
      .slice(1)
      .split("")
      .map((value) => {
        const valueLowerCase = value.toLowerCase();

        return valueLowerCase === "a"
          ? (value = "4")
          : valueLowerCase === "e"
          ? "3"
          : valueLowerCase === "l"
          ? "1"
          : value;
      })
      .join("")
  );
}
