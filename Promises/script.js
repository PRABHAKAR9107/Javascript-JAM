const birthday = (isprabhuBirthday) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!isprabhuBirthday) {
        resolve(1);
      } else {
        rejected();
      }
    }, 2000);
  });
};

birthday(false).then((result) => {
  alert(`i have ${result} cake`);
});
