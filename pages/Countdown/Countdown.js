// pages/Countdown/Countdown.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    span: null,
    time: null,
    timer:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.record()
    // this.timer = window.setInterval(() => { this.record() },1000);
        // if(time<=0) {
        //     clearInterval(timer)
        //     span.innerHTML = '00:00:00'
        // }
  },
  record(){
    this.time = new Date('2020/11/21') - new Date(); //时间差
    //换算单位把time换算成h/m/s
    //先换算成天
    let d = Math.floor( this.time/(1000*60*60*24) );
    console.log(d)
    //先换算成小时
    let h = Math.floor( (this.time - d*1000*60*60*24)/(1000*60*60) ); // 向下取整
    // 换算分钟  => 需要把h小时所占用的ms数减去，然后再换算分钟
    let m = Math.floor( (this.time - d*1000*60*60*24 - h*60*60*1000)/(1000*60) );
    // 换算s  => 把小时和分钟所占用的ms数都减去，然后再换算成s
    let s = Math.floor( (this.time - d*1000*60*60*24 - h*60*60*1000 - m*60*1000)/1000 );
    this.setData({
      // span:this.addZero(h) + ":" + this.addZero(m) + ":" + this.addZero(s)
      span:d
    })
    },
  addZero(n) { //给不足10的数前面添加一个0
    return n < 10 ? '0' + n : n;
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})