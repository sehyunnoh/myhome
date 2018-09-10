$.getJSON(
  "http://www.apilayer.net/api/live?access_key=3edb78e07afd701d8a3ac5ef767744c5&currencies=KRW,CAD",
  function(result) {
    // 환율 정보
    var excRate =
      Math.round((result.quotes.USDKRW / result.quotes.USDCAD) * 100) / 100;

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
