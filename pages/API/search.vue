<template>
	<view class="content">
		<view class="" style="width: 750rpx; height: 96rpx; background-color: #FFFFFF;">
			<!-- 图片 -->
			<view class="uni-flex uni-row">
				<view class="text" style="width: 558rpx;">
					<image style="width: 264rpx; height: 96rpx;" src="/static/Logomark.png"></image>
				</view>
				<view class="text" style="-webkit-flex: 1;flex: 1;">
					<image style="width: 96rpx; height: 96rpx;" src="/static/favorite.png"></image>
					<image style="width: 96rpx; height: 96rpx;" src="/static/account.png"></image>
				</view>
			</view>
		</view>
		<view style="margin-top: 200rpx;">
			<view class="text uni-flex" style="-webkit-flex: 1;flex: 1;width: 702rpx; height: 96rpx;-webkit-justify-content: center;justify-content: center;-webkit-align-items: center;align-items: center;">
				<image style="width: 264rpx; height: 96rpx;" src="/static/Logomark.png"></image>
			</view>
			<!-- 日期选择部分 -->
			<view style="width: 702rpx; height: 130rpx; background-color: #FFFFFF; border-radius: 16rpx;">
				<view class="uni-flex uni-row">
					<view class="text2" style="-webkit-flex: 1;flex: 1;">
						<view class="" style="width: 310rpx; height: 32rpx; font-size: 20rpx;">
							Check-in
						</view>
						<view class="" style="width: 310rpx; height: 40rpx; font-size: 28rpx; margin-top: 4rpx;">
							<view class="uni-list-cell-db">
								<!-- <ruiDatePicker
									fields="day"
									start="2010-00-00"
									end="2030-12-30"
									:value="check_in_date"
									@change="bindCheckInDateChange"
								></ruiDatePicker> -->
								<zzhPicker :selectTime='check_in_date' startYear='2019' endYear='2030' @callback='bindCheckInDateChange'>
									<!-- <view class="uni-input" style="color: #0044ea;" @click="bindCheckInDateChange">{{chek_in_date}}</view> -->
								</zzhPicker>
								<!-- <picker mode="date" :value="check_in_date" :start="startDate" :end="endDate" @change="bindCheckInDateChange">
									<view class="uni-input" style="color: #0044ea;">{{check_in_date}}</view>
								</picker> -->
							</view>
						</view>
					</view>
					<view class="text2" style="-webkit-flex: 1;flex: 1;">
						<view class="" style="width: 310rpx; height: 32rpx; font-size: 20rpx;">
							Check-out
						</view>
						<view class="" style="width: 310rpx; height: 40rpx; font-size: 28rpx; margin-top: 4rpx;">
							<view class="uni-list-cell-db">
								<!-- <ruiDatePicker
									fields="day"
									start="2010-00-00"
									end="2030-12-30"
									:value="check_out_date"
									@change="bindCheckOutDateChange"
								></ruiDatePicker> -->
								<!-- <picker mode="date" :value="check_out_date" :start="startDate" :end="endDate" @change="bindCheckOutDateChange">
									<view class="uni-input" style="color: #0044ea;">{{check_out_date}}</view>
								</picker> -->
								<zzhPicker :selectTime='check_out_date' startYear='2019' endYear='2030' @callback='bindCheckOutDateChange'>
									<!-- <view class="uni-input" style="color: #0044ea;" @click="bindCheckInDateChange">{{chek_in_date}}</view> -->
								</zzhPicker>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="uni-flex uni-row" style="margin-top: 20rpx;">
			<view class="text uni-flex" style="-webkit-flex: 1;flex: 1;width: 702rpx; height: 96rpx;-webkit-justify-content: center;justify-content: center;-webkit-align-items: center;align-items: center;background-color: #FFFFFF;">
				<input class="uni-input" focus placeholder="City or airport" v-model="city" value="Vegas"/>
				<image :class="[not_selectable_style_open ? 'not_selectable_style' : '']" style="width: 96rpx; height: 96rpx;background: #bebebe;" src="/static/search.png" @click="searchHotel"></image>
			</view>
		</view>
		<view class="" style="width: 100%; font-size: 24rpx;text-align: center;color: #7e7e7e;position: absolute;bottom: 10px;">
			Version: {{version}}
		</view>
		<dialog-bar v-model="showDialog" :type="dialogType" :title="dialogTitle" :content="dialogContent" v-on:cancel="clickCancel()" @danger="clickDanger()" @confirm="clickConfirm()" :dangerText="dialogDangerText" :confirmText="dialogConfirmText"></dialog-bar>
	</view>
</template>

<script>
	import ruiDatePicker from '@/components/rattenking-dtpicker/rattenking-dtpicker.vue'
	import zzhPicker from '@/components/zzh-selectYearAndMonthAndSay/index.vue'
	function getDate(type) {
		const dateT = new Date();
		var dateTime = dateT.setMonth(dateT.getMonth()+1);
		const date = new Date(dateTime);
	
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();
	
		if (type === 'start') {
			year = year - 60;
		} else if (type === 'end') {
			year = year + 2;
		}
		month = month > 9 ? month : '0' + month;;
		day = day > 9 ? day : '0' + day;
	
		return `${year}-${month}-${day}`;
	}
	
	function getEndDate(type) {
		const dateT = new Date();
		dateT.setMonth(dateT.getMonth()+1);
		var dateTime = dateT.setDate(dateT.getDate()+1);
		const date = new Date(dateTime);
		
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();
	
		if (type === 'start') {
			year = year - 60;
		} else if (type === 'end') {
			year = year + 2;
		}
		month = month > 9 ? month : '0' + month;;
		day = day > 9 ? day : '0' + day;
	
		return `${year}-${month}-${day}`;
	}
	
	export default {
		components: {
			ruiDatePicker,
			zzhPicker
		},
		watch: {
			check_in_date:  function (val, oldVal) {
				console.log('new a: %s, old a: %s', val, oldVal)
				const dateT = new Date(this.check_in_date)
				var dateTime = dateT.setDate(dateT.getDate()+1);
				this.check_out_date = this.get_year_month_day_str(new Date(dateTime));
			},
			check_out_date: function (current_value) {
				console.log('new a: %s', current_value)
				var time1 = new Date(this.check_in_date).getTime();
				var time2 = new Date(current_value).getTime();
				if(time1 >= time2){
					this.showDialog = true;
					this.dialogTitle = 'Notes';
					this.dialogContent = 'Check-out less than check-in',
					this.dialogType = 'confirm';
					this.dialogCancelText = 'confirm';
					return;
					// uni.showToast({
					// 	title:'Check-out less than check-in',
					// 	icon: 'none',
					// 	mask: true,
					// 	duration: 3000
					// })
					// uni.showModal({
					//     title: 'Notes',
					//     content: 'Check-out time should be longer than check-in time',
					// 	showCancel: false,
					// 	confirmText: 'confirm',
					//     success: function (res) {
					//         if (res.confirm) {
					//             console.log('用户点击确定');
					// 			return
					//         } else if (res.cancel) {
					//             console.log('用户点击取消');
					//         }
					//     }
					// });
				}
			}
		},
		data() {
			return {
				showDialog: false,
				dialogTitle: '警告',
				dialogContent: '错误',
				dialogDangerText: '确定',
				dialogConfirmText: 'Confirm',
				dialogType: 'default',
				loading: false,
				city: 'Vegas',
				check_in_date: getDate({
					format: true
				}),
				check_out_date: getEndDate({
					format: true
				}),
				startDate: getDate('start'),
				endDate: getDate('end'),
				time: '12:01',
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 5000,
				duration: 500,
				not_selectable_style_open: false,
				version: '12.27.21'
			}
		},
		onLoad() {
			this.initPosition();
		},
		methods: {
			initPosition() {
				/**
				 * 使用 absolute 定位，并且设置 bottom 值进行定位。软键盘弹出时，底部会因为窗口变化而被顶上来。
				 * 反向使用 top 进行定位，可以避免此问题。
				 */
				this.positionTop = uni.getSystemInfoSync().windowHeight - 100;
			},
			get_year_month_day_str: function(transDate){
				let year = transDate.getFullYear();
				let month = transDate.getMonth() + 1;
				let day = transDate.getDate();
					
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
					
				return `${year}-${month}-${day}`;
			},
			bindCheckInDateChange: function(e) {
				console.log(" JSON.stringify=="+JSON.stringify(e))
				this.check_in_date = e.format
				// this.check_in_date = e
				// this.check_in_date = e.target.value
			},
			bindCheckOutDateChange: function(e) {
				this.check_out_date = e.format
				// this.check_out_date = e
				// this.check_out_date = e.target.value
			},
			clickConfirm(){
				console.log('点击了confirm');
			},
			searchHotel(e) {
				this.not_selectable_style_open = true
				var time1 = new Date(this.check_in_date).getTime();
				var time2 = new Date(this.check_out_date).getTime();
				if(time1 >= time2){
					this.showDialog = true;
					this.dialogTitle = 'Notes';
					this.dialogContent = 'Check-out time should be longer than check-in time',
					this.dialogType = 'confirm';
					this.dialogCancelText = 'confirm';
					this.not_selectable_style_open = false
					return;
					// uni.showModal({
					//     title: 'Notes',
					//     content: 'Check-out time should be longer than check-in time',
					// 	showCancel: false,
					// 	confirmText: 'confirm',
					//     success: function (res) {
					//         if (res.confirm) {
					//             console.log('用户点击确定');
					// 			return
					//         } else if (res.cancel) {
					//             console.log('用户点击取消');
					//         }
					//     }
					// });
					// this.not_selectable_style_open = false
					// return;
				}
				
				if (this.city.trim().length <= 0) {
					uni.showToast({
						icon: 'none',
						title: 'city or airport'
					});
					this.not_selectable_style_open = false
					return;
				}
				this.$api.search({
						city: this.$data.city.trim(), 
						noncestr: Date.now(),
						check_in_date: this.check_in_date,
						check_out_date: this.check_out_date
					}).then((res)=>{
						if(res.data.code == 1000){
							this.loading = false;
							var result = encodeURIComponent(JSON.stringify(res.data.data))
							// console.log('请求结果 : ' + result)
							uni.reLaunch({
							    url: 'hotel_list?check_in_date='+this.check_in_date+'&check_out_date='+this.check_out_date+'&hotelList='+result
							});
							this.not_selectable_style_open = false
						} else {
							uni.showToast({
								title: res.data.msg,
								icon: 'none',
								mask: true
							})
							this.not_selectable_style_open = false
						}
				}).catch((err)=>{
					this.loading = false;
					console.log('request fail', err);
					uni.showToast({
						title: '请求失败',
						icon: 'none',
						mask: true
					});
					this.not_selectable_style_open = false
				})
			}
		}
	}
</script>

<style>
	.not_selectable_style {
		color: #BEBEBE;
		pointer-events: none;
		opacity: 0.5;
		background: #BEBEBE;
	}
	
	.text2 {
		margin: 10upx 10upx;
		/* padding: 0 20upx; */
		height: 70upx;
		line-height: 70upx;
		text-align: center;
		color: #777;
		font-size: 26upx;
	}
	
	
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
