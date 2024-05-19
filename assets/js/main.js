fetch('http://localhost:5010/quest')
  .then(function (response) {
    // 요청 성공 시 처리할 작업
    console.log(response);
    console.log(response.data.a);
  })
  .catch(function (error) {
    // 오류 발생 시 처리할 작업
    console.log(error);
  });
