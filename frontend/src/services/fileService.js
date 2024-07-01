const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    // console.log(reader);
    reader.onload = function () {
      const result = reader.result;
      return resolve(result);
    };
    reader.onerror = function (error) {
      return reject(error);
    };
    reader.readAsDataURL(file);
  });
};

export default {
  getBase64,
};
