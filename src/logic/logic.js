function count(data, field) {
  const counts = {};
  data.forEach((company) => {
    let values = company[field].data;
    if (!Array.isArray(values)) {
      values = [values];
    }

    if (field === 'codeDepth') {
      values = company[field].data.split('/');
    }

    // remove duplicates
    values = values.filter((e, i) => values.indexOf(e) === i);

    values.forEach((v) => {
      let value = v;
      if (field === 'colorNaming') {
        // skip difference between example color names
        value = value.split(' ')[0];
      }

      // get rid of some mistyped characters
      value = value.trim().replace(',', '').replace(':', '');

      // skip difference based on case
      const normalizedValue = value.toLowerCase();

      if (normalizedValue in counts) {
        counts[normalizedValue].count += 1;
      } else {
        counts[normalizedValue] = {
          label: value,
          count: 1,
        };
      }
    });
  });

  const output = {};
  Object.keys(counts).forEach((key) => {
    const label = counts[key].label;
    output[label] = counts[key].count;
  });

  // check if there's need for aggregation of unpopular values
  let otherCount = 0;
  Object.keys(output).forEach((key) => {
    if (output[key] === 1) {
      otherCount += 1;
    }
  });
  if (otherCount > 2) {
    Object.keys(output).forEach((key) => {
      if (output[key] === 1) {
        delete output[key];
      }
    });
    output.other = otherCount;
  }

  return output;
}

function sort(data) {
  const arr = Object.keys(data).map(key => ({
    key,
    value: data[key],
  }));
  const sorted = arr.sort((first, second) => second.value - first.value);

  // move special values to the end
  const other = sorted.find(e => e.key === 'other');
  const noData = sorted.find(e => e.key === 'no data');
  const filtered = sorted.filter(e => e.key !== 'no data' && e.key !== 'other');

  if (other !== undefined) {
    filtered.push(other);
  }
  if (noData !== undefined) {
    filtered.push(noData);
  }

  return filtered;
}

function capitalize(string) {
  const words = string.split(' ');
  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  return capitalizedWords.join(' ');
}

export { capitalize, count, sort };
