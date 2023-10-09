function saveImage() {
  var cardImage = document.getElementById("cardImage");
  console.log("cardImage:", cardImage);
  //滚动当前元素，进入浏览器的可见区域
  document.getElementById("cardImage").scrollIntoView();
  var canvas = document.getElementById("cardImage"); //获取dom
  var width = canvas.offsetWidth; //dom宽
  var height = canvas.offsetHeight; //dom高
  html2canvas(canvas, {
    scale: 2, //缩放比例,默认为1
    allowTaint: false, //是否允许跨域图像污染画布
    useCORS: true, //是否尝试使用CORS从服务器加载图像
    width: width, //画布的宽度
    height: height, //画布的高度
  }).then((canvas) => {
    //将canvas转为base64格式
    var imgUri = canvas.toDataURL("image/png"); //图片格式
    // 把url放到我们的a标签中，并得到a标签对象
    var triggerDownload = $("#saveImg")
      .attr("href", imgUri)
      .attr("download", "image.png");
    triggerDownload[0].click(); //模拟点击！
  });
}