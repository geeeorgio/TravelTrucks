export const urlBuilder = (params) => {
  let url = "";

  const info = Object.entries(params);

  url = `/campers?page=${params.page}&limit=${params.limit}&${params.key}`;

  return url;
};
