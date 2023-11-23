$("#submit").click(function (e) {
  e.preventDefault();
  const arrayData = $("#contact-form-main").serializeArray();
  const data = arrayData.reduce((prev, curr) => {
    prev[curr.name] = curr.value;
    return prev;
  }, {});
  fetch(
    "https://script.google.com/macros/s/AKfycbwcIsJzsj5yBZtSdxOVX67XRZlilzpeLPU22kXHlHeZ1fAr57tRgAZ8rBbBGU6S506D9A/exec",
    {
      redirect: "follow",
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      mode: "no-cors",
      body: JSON.stringify(data),
    }
  ).then(() => {
    $("#success").show(1000);
  });
});
