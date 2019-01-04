Array.from(document.querySelectorAll("td > span.column-content"))
  .map(item => item.outerText)
  .reduce((acc, curr, index) => {
    if (index % 3 === 0) {
      acc.push(curr);
      return acc;
    }
    acc[acc.length - 1] = acc[acc.length - 1] + " " + curr;
    return acc;
  }, [])
  .join("\n");
