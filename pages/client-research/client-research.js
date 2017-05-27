

// pages/client-research/client-research.js
var pageData = {}

//  picker
const _t1 = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"]
const _t2 = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00","20:00","21:00"]
const _d = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]


function tt(d, t1, t2) {
  //object tt (entry of the timetable)
  // + d -> day
  this.d = d;
  // + t1 -> start time
  this.t1 = t1;
  // + t2 -> end time
  this.t2 = t2;
}
function student(name, wxID) {
  //object student
  this.name = name;
  this.wxID = wxID;
  // + timetable -> array of all the objects tt (timetable entries)
  this.timetable = [];
  // + timetable_append -> method to push a new object tt (timetable entry)
  this.timetable_append = function (d, t1, t2) {
    var new_tt = new tt(d, t1, t2);
    this.timetable.push(new_tt);
  }
  // + print -> method to print to console the object student
  this.print = function () {
    console.log("\nTeacher: " + this.name + "\n");
    for (var i = this.timetable.length - 1; i >= 0; i--) {
      console.log(this.timetable[i].d + " " + this.timetable[i].t1 + ":00 - " + this.timetable[i].t2 + ":00");
    }
  }
}
var expool = {
  // expool (main database)
  // + teachers -> array of objects students
  teachers: [],
  // load database from a stringified JSON
  load: function (data) {
    this.teachers = JSON.parse(data);
  },
  // + teacher_append -> method to push a new object student
  teacher_append: function (name, wxID) {
    var new_teacher = new student(name, wxID);
    this.teachers.push(new_teacher);
  },
  // + query to the database result (array of teachers name)
  query_result: [],
  // + query method
  query: function (qd, qt1, qt2) {
    qt1 = parseInt(qt1,10);
    qt2 = parseInt(qt2, 10);
    console.log("Query start with",qt1,qt2,qd);
    for (var i = this.teachers.length - 1; i >= 0; i--) {
      for (var j = this.teachers[i].timetable.length - 1; j >= 0; j--) {
        if (this.teachers[i].timetable[j].d == qd && parseInt(this.teachers[i].timetable[j].t1, 10) <= qt1 && parseInt(this.teachers[i].timetable[j].t2,10) >= qt2) {
          console.log("teachers matched");
          this.query_result.push(this.teachers[i].name);
        }
      }
    }
  }
}

//load data to expool

var data = "[{\"name\":\"George\",\"wxID\":\"GiourgB\",\"timetable\":[{\"d\":\"Monday\",\"t1\":\"15:00\",\"t2\":\"18:00\"},{\"d\":\"Tuesday\",\"t1\":\"8:00\",\"t2\":\"20:00\"},{\"d\":\"Thursday\",\"t1\":\"17:00\",\"t2\":\"20:00\"},{\"d\":\"Friday\",\"t1\":\"14:00\",\"t2\":\"20:00\"},{\"d\":\"Saturday\",\"t1\":\"8:00\",\"t2\":\"20:00\"},{\"d\":\"Sunday\",\"t1\":\"8:00\",\"t2\":\"20:00\"}]},{\"name\":\"Helen\",\"wxID\":\"helinkongar\",\"timetable\":[{\"d\":\"Monday\",\"t1\":\"15:00\",\"t2\":\"20:00\"},{\"d\":\"Tuesday\",\"t1\":\"8:00\",\"t2\":\"15:00\"},{\"d\":\"Wednesday\",\"t1\":\"15:00\",\"t2\":\"20:00\"},{\"d\":\"Thursday\",\"t1\":\"15:00\",\"t2\":\"20:00\"},{\"d\":\"Friday\",\"t1\":\"8:00\",\"t2\":\"20:00\"}]},{\"name\":\"Alexandro\",\"wxID\":\"Atoschi\",\"timetable\":[{\"d\":\"Monday\",\"t1\":\"8:00\",\"t2\":\"15:00\"},{\"d\":\"Tuesday\",\"t1\":\"13:00\",\"t2\":\"20:00\"},{\"d\":\"Wednesday\",\"t1\":\"8:00\",\"t2\":\"17:00\"},{\"d\":\"Thursday\",\"t1\":\"10:00\",\"t2\":\"17:00\"}]},{\"name\":\"Leo\",\"wxID\":\"leonardofiocchi\",\"timetable\":[{\"d\":\"Monday\",\"t1\":\"14:00\",\"t2\":\"20:00\"},{\"d\":\"Saturday\",\"t1\":\"8:00\",\"t2\":\"20:00\"},{\"d\":\"Sunday\",\"t1\":\"17:00\",\"t2\":\"20:00\"}]},{\"name\":\"Rea\",\"wxID\":\"ReaDidzari\",\"timetable\":[{\"d\":\"Tuesday\",\"t1\":\"8:00\",\"t2\":\"20:00\"},{\"d\":\"Wednesday\",\"t1\":\"14:00\",\"t2\":\"20:00\"},{\"d\":\"Saturday\",\"t1\":\"14:00\",\"t2\":\"20:00\"},{\"d\":\"Sunday\",\"t1\":\"14:00\",\"t2\":\"20:00\"}]},{\"name\":\"Antony\",\"wxID\":\"headdy44\",\"timetable\":[{\"d\":\"Tuesday\",\"t1\":\"16:00\",\"t2\":\"20:00\"},{\"d\":\"Monday\",\"t1\":\"8:00\",\"t2\":\"20:00\"},{\"d\":\"Wednesday\",\"t1\":\"8:00\",\"t2\":\"15:00\"},{\"d\":\"Thursday\",\"t1\":\"8:00\",\"t2\":\"12:00\"},{\"d\":\"Saturday\",\"t1\":\"8:00\",\"t2\":\"20:00\"},{\"d\":\"Sunday\",\"t1\":\"8:00\",\"t2\":\"20:00\"}]},{\"name\":\"Pier\",\"wxID\":\"Askeladd10\",\"timetable\":[{\"d\":\"Tuesday\",\"t1\":\"8:00\",\"t2\":\"12:00\"},{\"d\":\"Monday\",\"t1\":\"17:00\",\"t2\":\"20:00\"},{\"d\":\"Wednesday\",\"t1\":\"8:00\",\"t2\":\"20:00\"},{\"d\":\"Thursday\",\"t1\":\"18:00\",\"t2\":\"20:00\"},{\"d\":\"Saturday\",\"t1\":\"8:00\",\"t2\":\"20:00\"},{\"d\":\"Sunday\",\"t1\":\"8:00\",\"t2\":\"20:00\"}]},{\"name\":\"Micheal\",\"wxID\":\"Michele_Tartari\",\"timetable\":[{\"d\":\"Tuesday\",\"t1\":\"8:00\",\"t2\":\"20:00\"},{\"d\":\"Thursday\",\"t1\":\"8:00\",\"t2\":\"12:00\"},{\"d\":\"Saturday\",\"t1\":\"8:00\",\"t2\":\"20:00\"},{\"d\":\"Sunday\",\"t1\":\"8:00\",\"t2\":\"20:00\"}]}]"
;



//Global variable for the query
var qd = "";
var qt1 = 0;
var qt2 = 0;

//Page scrolling
var order = ['demo1', 'demo2', 'demo3']

//Page object
Page({

  /**
   * 页面的初始数据
   */
  pageData,
  
  data: {
    distance: "80",
    //date picker
    _d : _d,
    _t1 : _t1,
    _t2 : _t2,
    d : _d[3],
    t1 : _t1[6],
    t2 : _t2[8],
    value: [3, 6, 8],
    toView: 'green',
    userInfo: {}
  }, 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setStorageSync("expool", expool);
    this.setData({
      userInfo: wx.getStorageSync("UserInfo")
    })
    
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
  
  },

  bindClientResearch: function() {
    //query to the database, the object query_result is populated
    expool.load(data);
    expool.query(this.data.d,this.data.t1,this.data.t2);
    console.log(this.data.d,this.data.t1,this.data.t2);
    console.log(expool.query_result);
    console.log(expool);
    this.setData({
      //query uploaded in the page data
      research_result: expool.query_result
    })
    //query_result is cleaned
    for (var i = expool.query_result.length - 1; i >= 0; i--) {
      expool.query_result.pop();
    }
  },

  //date picker
  bindChange: function (e) {
    const val = e.detail.value
    this.setData({
      d: this.data._d[val[0]],
      t1: this.data._t1[val[1]],
      t2: this.data._t2[val[2]]
    })
  },

  //distance
  slider_distance: function (e) {
    console.log(`distanza cambiata a`, e.detail.value)
    this.setData({
      distance: e.detail.value
    })
  },

  //page scroll
  pper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  },
  scrollToTop: function (e) {
    this.setAction({
      scrollTop: 0
    })
  },
  tap: function (e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1],
          scrollTop: (i + 1) * 200
        })
        break
      }
    }
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }
})