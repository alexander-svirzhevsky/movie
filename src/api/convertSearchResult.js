function convertMovie(serchResult) {
  return {
    id: serchResult.id,
    imgSrc: serchResult.i?.imageUrl,
    year: serchResult.y,
    title: serchResult.l,
  };
}
function convertActor(serchResult) {
  return {
    id: serchResult.id,
    imgSrc: serchResult.i?.imageUrl,
    name: serchResult.l,
  };
}

export default function convertSearchResult(searchResult) {
  return searchResult.d.map((res) => {
    if ("y" in res) {
      return convertMovie(res);
    } else {
      return convertActor(res);
    }
  });
}
