export function getFromLocal() {

  const storageItem = window.localStorage.getItem('s3History') || ['sample...'];

  return storageItem;

}

export function setToLocal(data) {

}