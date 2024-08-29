export const replaceMongoIdInArray = (array) => {
  const mappedArray = array
    .map((item) => {
      return {
        ...item,
        id: item._id.toString(),
      };
    })
    .map(({ _id, ...rest }) => rest);
  return mappedArray;
};
