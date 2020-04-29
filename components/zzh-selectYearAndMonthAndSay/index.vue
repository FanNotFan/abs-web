<template>
	<view class="">
		<view class="cp-date-wrapper" v-show="state">
		  <view class="bg" @click="esc"></view>
		  <view class="content-wrapper">
		    <view class="header">
		      <view class="left" @click="esc">Cancel</view>
		      <view class="center"></view>
		      <view class="right" @click="ok">Confirm</view>
		    </view>
		    <view class="content">
		      <view class="item">
		        <scroll-view id="scroll" scroll-y="true" class="scroll-Y" @scroll="yearCb" :scroll-top="yearTop" @touchend="yearEnd" :scroll-into-view="SelectStartYear">
		           <view v-for="(item, index) in yearData" 
		             :key="index" 
		             :class="item.className" 
		             :id="'_' + index"
		             :style="'height:' + listHeight + 'px;line-height:' + listHeight + 'px'"
		           >{{item.text}}
		           </view>
		        </scroll-view>
		      </view>
		      <view class="item">
		         <scroll-view scroll-y="true" class="scroll-Y" @scroll="monthCb" @touchend="monthEnd" :scroll-top="monthTop" :scroll-into-view="SelectStartMonth">
		          <view v-for="(item, index) in monthData" 
		            :key="index" 
		            :class="item.className" 
		            :id="'_' + index"
		            :style="'height:' + listHeight + 'px;line-height:' + listHeight + 'px'"
		          >{{item.text}}
		          </view>
		        </scroll-view>
		      </view>
		      <view class="item">
		        <scroll-view scroll-y="true" class="scroll-Y" @scroll="dayCb" @touchend="dayEnd" :scroll-top="dayTop" :scroll-into-view="SelectStartDay">
		          <view v-for="(item, index) in dayData" 
		            :key="index" 
		            :class="item.className" 
		            :id="'_' + index"
		            :style="'height:' + listHeight + 'px;line-height:' + listHeight + 'px'"
		          >{{item.text}}
		          </view>
		        </scroll-view>
		      </view>
		    </view>
		    <view class="pitchOn-wrapper">
		      <view class="pitchOn" :style="'top:' + (listHeight * 3) + 'px;height:' + listHeight + 'px'"></view>
		    </view>
		  </view>
		  <view class="getHeigth" id="getHeigth">{{selectTime}}</view>
		</view>
		<view class="uni-input" style="color: #0044ea;" @click="changeDate">{{selectTime}}</view>
		<!-- <view class="getHeigth" id="getHeigth">{{selectTime}}</view> -->
	</view>
  
</template>

<script>
  export default{
    props: {
      show: {
        type: Boolean,
        default: false
      },
	  selectTime: {
	    type: String,
	    default: ''
	  },
      startYear: {
        type: String,
        default: '1960'
      },
	  startMonth: {
	    type: String,
	    default: '01'
	  },
	  startDay: {
		type: String,
		default: '01'  
	  },
      endYear: {
        type: String,
        default: () => {
          return String(new Date().getFullYear());
        }
      }
      
    },
    data () {
      return {
        state: this.show,
        yearData: [],
        monthData: [],
        dayData: [],
        dayScrollIndex: 3,
        currentMonth: null,
        currentYear: null,
        currentDay: null,
        yearId: '',
        monthId: '',
        dayId: '',
        MstartYear: this.startYear,
        MendYear: this.endYear,
        SelectStartYear: null,
        SelectStartMonth: null,
        SelectStartDay: null,
        yearTop: 0,
        monthTop: 0,
        dayTop: 0,
        oldTop: {
          year: {
            top: 0
          },
          month: {
            top: 0
          },
          day: {
            top: 0
          }
        },
        yearScrollState: false,
        monthScrollState: false,
        dayScrollState: false,
        srcollListHeight: 0
      }
    },
    watch: {
      show (val) {
		console.log("show")
        this.state = val
        if (val) {
			console.log("this.selectTime=="+this.selectTime)
			let time = this.selectTime.split('-');
			this.SelectStartYear = `_${time[0] * 1 - this.startYear}`;
			this.SelectStartMonth = `_${time[1] * 1 - 1}`;
			this.SelectStartDay = `_${time[2] * 1 - 1}`;
        }
      },
      state (val) {
		console.log("state=="+val)
		this.$emit('update:show', val);
		if (val) {
			console.log("this.selectTime=="+this.selectTime)
			let time = this.selectTime.split('-');
			this.SelectStartYear = `_${time[0] * 1 - this.startYear}`;
			this.SelectStartMonth = `_${time[1] * 1 - 1}`;
			this.SelectStartDay = `_${time[2] * 1 - 1}`;
		}
      }
    },
    computed: {
      amTime () {
        if (uni.getSystemInfoSync().platform === 'android') {
          return 300;
        } else {
          return 1000;
        }
      },
      listHeight () {
        return this.srcollListHeight;
      }
    },
    methods: {
		changeDate(e){
			  this.state = true
		},
      setYearData () {
        let year = this.MendYear * 1;
        let arr = []
        for (let i = this.MstartYear * 1; i < year + 4; i++) {
          let obj = {
            text: '',
            className: ''
          }
          if (i > year) {
            arr.push(obj)
          }  else {
           obj.text = i
           arr.push(obj) 
          }
        }
        for(let i = 0; i < 3;i++) {
          arr.unshift({
            text: '',
            className: ''
          });
        }
        this.yearData = arr;
      },
      setMonthData () {
        let arr = [];
		// for (let i = this.MstartMonth * 1; i < 16; i++) {
        for (let i = 1; i < 16; i++) {
          let obj = {
            text: '',
            className: ''
          }
          if (i > 12) {
            arr.push(obj)
          }  else {
            if (i < 10) {
              obj.text = '0' + i 
            } else {
              obj.text = i
            }
           arr.push(obj)  
          }
        }
        for(let i = 0; i < 3;i++) {
         arr.unshift({
           text: '',
           className: ''
         });
        }
        this.monthData = arr;
      },
      setDayData () {
        let month = this.currentMonth * 1;
        let num = 0;
        let months = [1, 3, 5, 7, 8, 10, 12]
        if (months.indexOf(month) > -1) {
          num = 31;
        } else {
          num = 30
          console.log()
          if (month === 2) {
            if (this.currentYear % 400 === 0 || this.currentYear % 4 === 0 && this.currentYear % 100 !== 0) {
             num = 29;
            } else {
             num = 28;
            }
          }
        }
        let arr = []
        for (let i = 1; i < num + 4; i++) {
          let obj = {
            text: '',
            className: ''
          }
          if (i < 10) {
           obj.text = '0' + i
           arr.push(obj);
          } else {
            if (!(i >= num + 1)) {
              obj.text = i
            }
            arr.push(obj);
          }
        }
        for(let i = 0; i < 3;i++) {
         arr.unshift({
           text: '',
           className: ''
         });
        }
        this.dayData = arr;
      },
      yearCb (data) {
        this.yearScrollState = true;
        let scrollHeight =  data.detail.scrollHeight;
        let scrollTop = data.detail.scrollTop;
        let num = scrollHeight / this.yearData.length;
        let index = Math.round(scrollTop / num) + 3;
        this.oldTop.year.top = scrollTop;
        this.currentYear = this.yearData[index].text;
        this.setStyle(this.yearData, index);
        this.setDayData();
        this.setStyle(this.dayData, this.currentDay * 1 + 2);
      },
      monthCb (data) {
        this.monthScrollState = true;
        let scrollHeight =  data.detail.scrollHeight;
        let scrollTop = data.detail.scrollTop;
        let num = scrollHeight / this.monthData.length;
        let index = Math.round(scrollTop / num) + 3;
        this.oldTop.month.top = scrollTop;
        this.currentMonth = this.monthData[index].text;
        this.setStyle(this.monthData, index)
        this.setDayData()
        this.setStyle(this.dayData, this.currentDay * 1 + 2)
      },
      dayCb (data) {
        this.dayScrollState = true;
        let scrollHeight =  data.detail.scrollHeight;
        let scrollTop = data.detail.scrollTop;
        let num = scrollHeight / this.dayData.length;
        let index = Math.round(scrollTop / num) + 3;
        this.oldTop.day.top = scrollTop;
        this.dayScrollIndex = index;
        this.currentDay = this.dayData[index].text;
        this.setStyle(this.dayData, index)
      },
      yearEnd () {
        this.yearScrollState = false;
        let fn = () => {
          this.yearTop = this.oldTop.year.top;
          this.$nextTick(() => {
           let num = this.currentYear * 1 - this.startYear * 1
           this.yearTop = this.listHeight * num;
          })
        }
        setTimeout(() => {
          if (!this.yearScrollState) {
            fn()
          } else {
            if (this.yearTimer) {
              clearInterval(this.yearTimer)
            }
            this.yearTimer = setInterval(() => {
              fn()
            }, this.amTime)
          }
        }, 50)
      },
      monthEnd () {
        this.monthScrollState = false;
        let fn = () => {
          this.monthTop = this.oldTop.month.top;
          this.$nextTick(() => {
            let num = this.currentMonth * 1 - 1
            this.monthTop = this.listHeight * num;
          })
        }
        setTimeout(() => {
          if (!this.monthScrollState) {
            fn();
          } else {
            if (this.monthTimer) {
              clearInterval(this.monthTimer)
            }
            this.monthTimer = setInterval(() => {
              fn();
            }, this.amTime)
          }
        }, 100)
      },
      dayEnd () {
        this.dayScrollState = false;
        let fn = () => {
          this.dayTop = this.oldTop.day.top;
          this.$nextTick(() => {
            let num = this.currentDay * 1 - 1
            this.dayTop = this.listHeight * num;
          })
        }
        setTimeout(() => {
          if (!this.dayScrollState) {
            fn();
          } else {
            if (this.dayTimer) {
              clearInterval(this.dayTimer)
            }
            this.dayTimer = setInterval(() => {
              fn();
            }, this.amTime)
          }
        }, 100)
      },
      setStyle (data, index) {
        if (data[index - 3] && data[index + 3]) {
          data[index - 1].className = 'font1'
          data[index - 2].className = 'font2'
          data[index - 3].className = 'font3'
          data[index].className = 'font'
          data[index + 1].className = 'font1'
          data[index + 2].className = 'font2'
          data[index + 3].className = 'font3'
        }
      },
      ok () {
        this.clearTimer();
        let obj = {
          format: `${this.currentYear}-${this.currentMonth}-${this.currentDay}`,
          year: this.currentYear,
          month: this.currentMonth,
          day: this.currentDay
        }
        this.$emit('callback', obj);
        this.esc();
      },
      esc () {
        this.state = false;
        this.clearTimer();
      },
      init () {
        this.setYearData();
        this.setMonthData();
        this.setDayData();
        let month = 3;
        let day = 3;
        this.setStyle(this.yearData, 3)
        this.setStyle(this.monthData, month)
        this.setStyle(this.dayData, day)
        this.currentYear = this.yearData[3].text;
        this.currentMonth = this.monthData[month].text;
        this.currentDay = this.dayData[day].text;
      },
      clearTimer () {
        if (this.yearTimer) {
          clearInterval(this.yearTimer)
        }
        if (this.monthTimer) {
          clearInterval(this.monthTimer)
        }
        if (this.dayTimer) {
          clearInterval(this.dayTimer)
        }
      }
    },
    created () {
      let height = uni.upx2px(80);
      if (height % 2 !== 0) {
         height += 1
      }
      this.srcollListHeight = height;
      this.init();
    },
    beforeDestroy () {
      this.clearTimer();
    }
  }
</script>

<style lang="scss">
  .cp-date-wrapper{
    width:100%;
    position: fixed;
    height:100%;
    bottom:0;
    left:0;
    z-index: 999;
    .bg{
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,.6);
    }
    .content-wrapper{
      background-color:#FFFFFF;
      position: absolute;
      bottom: 0;
      left: 0;
      overflow: hidden;
      border-top-left-radius: 20rpx;
      border-top-right-radius: 20rpx;
      width: 100%;
      height: 620rpx;
      .header{
        display: flex;
        justify-content: space-between;
        padding: 0 20rpx;
        box-sizing: border-box;
        font-size: 30rpx;
        line-height:60rpx;
        .left{
			display: block;
			max-width: 50%;
			top: 0;
			height: 100%;
			box-sizing: border-box;
			padding: 0 28rpx;
			font-size: 30rpx;
			line-height: 90rpx;
			overflow: hidden;
          color: #888;
        }
        .right{
			display: block;
			max-width: 50%;
			top: 0;
			height: 100%;
			box-sizing: border-box;
			padding: 0 28rpx;
			font-size: 30rpx;
			line-height: 90rpx;
			overflow: hidden;
          color: #007aff;
        }
        .center{
          text-align: center;
        }
      }
      .content{
        position: absolute;
        display: flex;
        left: 0;
        top: 60rpx;
        height: 560rpx;
        width: 100%;
        z-index: 100;
        .item{
          width: 33.33%;
          overflow: hidden;
        }
        scroll-view{
          width: 110%;
          height: 560rpx;
          padding-left: 10rpx;
          view{
            font-size: 30rpx;
            text-align: center;
            color: #333333;
          }
          .font{
            font-size: 30rpx;
            opacity: 1;
          }
          .font1{
            font-size: 28rpx;
            opacity: .7;
          }
          .font2{
            font-size: 26rpx;
            opacity: .5;
          }
          .font3{
            font-size: 24rpx;
            opacity: .3;
          }
        }
      }
      .pitchOn-wrapper{
        position: absolute;
        left: 0;
        width: 100%;
        height: 560rpx;
        top: 60rpx;
        .pitchOn{
          position: absolute;
          width: 100%;
          left: 0;
          box-sizing: border-box;
          border-top: 1px solid #eee;
          border-bottom: 1px solid #eee;
        }
      }
    }
  }
</style>
