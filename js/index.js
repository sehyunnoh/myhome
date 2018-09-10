$.getJSON(
  "https://openexchangerates.org/api/latest.json?app_id=b11b449e47fe4bb38a721619eccc7eab",
  function(result) {
    // 환율 정보
    var excRate =
      Math.round((result.rates.KRW / result.rates.CAD) * 100) / 100;

    // update 날짜 갖고 오기
    var a = new Date(result.timestamp * 1000);
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = pad(a.getDate(), 2);
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time =
      date + "/" + month + "/" + year + " " + hour + ":" + min + ":" + sec;

    $("#excRate").text(excRate);
    $("#updateInfo").html("( updated at <b>"+time+"</b> )");

  }
);

function pad(n, width) {
  n = n + "";
  return n.length >= width ? n : new Array(width - n.length + 1).join("0") + n;
}
