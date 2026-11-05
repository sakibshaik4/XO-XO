const formatData = (rawData) => {
  let data = {};
  let fromData = new FormData(rawData);
  for (let [key, value] of fromData.entries()) {
    data[key] = value;
  }
  return data;
};

export default formatData;
