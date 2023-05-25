export const isEmpty = (value) => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  );
};

export const dateParser = (num) => {
  let options = {
    //hour: "2-digit",
    //minute: "2-digit",
    //second: "2-digit",
    weekday: "long",
    //year: "numeric",
    month: "long",
    day: "numeric",
  };

  let timestamp = Date.parse(num);

  let date = new Date(timestamp).toLocaleDateString("fr-FR", options);

  return date.toString();
};
export const timestampParser = (num) => {
  let options = {
    //hour: "2-digit",
    //minute: "2-digit",
    //second: "2-digit",
    //weekday: "short",
    year: "numeric",
    //month: "short",
    //day: "numeric",
  };

  let date = new Date(num).toLocaleDateString("fr-FR", options);

  return date.toString();
};

//  RECUPERER L'ID DEPUIS L'URL
export const get_id = (hash) => {
  let id = Number(hash.replace(/[^\d]/g, ""));
  return id;
};

// RELOAD TO HOME
export const gohome = () => {
  document.location.href = "/";
};

export const reload = (target) => {
  document.location.href = target;
};

// TRANSFORM A NODE LIST TO ARRAY
export function nodeListToArray(classe) {
  const nodesList = document.querySelectorAll("." + classe);
  const array = Array.prototype.slice.call(nodesList);
  console.log(array);

  return array;
}
