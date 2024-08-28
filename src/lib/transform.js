export const replaceMongoIdInArray = (array) => {
  const mappedArray = array
    .map((item) => {
      return {
        ...item,
        _id: item._id.toString(),
      };
    })
    .map(({ _id, ...rest }) => rest);
};
