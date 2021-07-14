const getBookByID = async id => {
  const res = await fetch(
    `http://openlibrary.org/api/books?bibkeys=ISBN:${id}`,
  );
  return res.json();
};

export default getBookByID;
