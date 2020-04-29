<template>
	<view class="content">
		<!-- Build your room -->
		<view class="" style="width: 702rpx; height: 120rpx;">
			<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
				<view class="text" style="font-size: 40rpx; font-weight: bolder; color: #000000;">Build your room</view>
				<view class="text" style="font-size: 24rpx; color: #0044ea; overflow: hidden;text-overflow: ellipsis;display:-webkit-box;-webkit-box-orient:vertical; -webkit-line-clamp:1;">{{BaseRoom.RoomBaseInfor.RoomName}}</view>
			</view>
		</view>

		<!-- 日期选择部分 -->
		<view style="width: 702rpx; height: 130rpx; background-color: #FFFFFF; border-radius: 16rpx;">
			<view class="uni-flex uni-row">
				<view class="text" style="-webkit-flex: 1;flex: 1;">
					<view class="" style="width: 310rpx; height: 32rpx; font-size: 20rpx;">
						Check-in
					</view>
					<view class="" style="width: 310rpx; height: 40rpx; font-size: 28rpx; margin-top: 4rpx;">
						<view class="uni-list-cell-db">
							<!-- <picker mode="date" :value="check_in_date" :start="startDate" :end="endDate" @change="bindCheckInDateChange"> -->
								<view class="uni-input" style="color: #0044ea;">{{check_in_date}}</view>
							<!-- </picker> -->
						</view>
					</view>
				</view>
				<view class="text" style="-webkit-flex: 1;flex: 1;">
					<view class="" style="width: 310rpx; height: 32rpx; font-size: 20rpx;">
						Check-out
					</view>
					<view class="" style="width: 310rpx; height: 40rpx; font-size: 28rpx; margin-top: 4rpx;">
						<view class="uni-list-cell-db">
							<!-- <picker mode="date" :value="check_out_date" :start="startDate" :end="endDate" @change="bindCheckOutDateChange"> -->
								<view class="uni-input" style="color: #0044ea;">{{check_out_date}}</view>
							<!-- </picker> -->
						</view>
					</view>

				</view>
			</view>
		</view>

		<!-- 轮播图部分 -->
		<view style="margin-top: 20rpx;">
			<view class="uni-margin-wrap">
				<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
					<block v-if="index<=4" v-for="(item,index) in build_thrid_page_data" :key="index">
						<swiper-item>
							<view class="swiper-item">
								<image class="background_image" :src="item.url"></image>
							</view>
						</swiper-item>
					</block>
				</swiper>
				<image style="position: absolute;  margin-left: 285rpx; margin-top: -50rpx;width: 120rpx;height: 24rpx" src="../../static/3_Middle.png"></image>
				<view class="" style="position: absolute;  margin-left: 590rpx; margin-top: -64rpx; font-size: 28rpx;font-weight: 500;color: #FFFFFF;">
					<view style="position: absolute;">{{build_thrid_page_data.length}}</view>
					<image style="width: 48rpx;height: 48rpx;margin-left: 36rpx;" src="../../static/photo_library.png"></image>
				</view>
			</view>
		</view>

		<!-- Base price part -->
		<view class="" style="background-color: #FFFFFF; width: 702rpx;">
			<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;margin-top: 30rpx;margin-bottom: 10rpx;" @click="go_back">
				<view class="text uni-flex" style="font-size: 28rpx; width: 100rpx;height: 36rpx;-webkit-justify-content: center;justify-content: center;-webkit-align-items: center;align-items: center;color: #005AEB;">
					<image src="../../static/Prev.png" style="width: 44rpx;height: 36rpx;color: #005AEB;"></image>
					Back
				</view>
			</view>
			<!-- <view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between; ">
				<view class="text" style="font-size: 28rpx; font-weight: bolder; color: #000000; margin-left: 24rpx;">2 Queen beds</view>
				<view class="text" style="font-size: 28rpx; font-weight: bolder; color: #000000; margin-right: 24rpx;">+$152/night</view>
			</view> -->
			<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between; ">
				<view class="">
					<view class="text" style="text-align: left; width: 460rpx; font-size: 28rpx; font-weight: bolder; color: #000000; margin-left: 24rpx;">{{BaseRoom.RoomBaseInfor.RoomName}}</view>
				</view>
				<view class="text" style="font-size: 28rpx; font-weight: bolder; color: #000000; margin-right: 24rpx;">+${{BaseRoom.RoomBaseInfor.Price}}/night</view>
			</view>
			<view v-for="(item,index) in FinalRoom.Attribute" :key="index">
				<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
					<view class="text" style="left: 24rpx; font-size: 28rpx; color: #465280;font-family: Centra No1; font-style: normal; font-weight: normal; margin-left: 24rpx;">
						<image v-show="item.AttributeName == 'RoomSize'" style="width: 27rpx; height: 28.5rpx; margin-right: 8px;" src="/static/room_size.png"></image>
						<image v-show="item.AttributeName == 'BedType'" style="width: 27rpx; height: 28.5rpx; margin-right: 8px;" src="/static/bed_type.png"></image>
						<image v-show="item.AttributeName == 'RoomView'" style="width: 27rpx; height: 28.5rpx; margin-right: 8px;" src="/static/view.png"></image>
						<image v-show="item.AttributeName == 'Breakfast'" style="width: 27rpx; height: 28.5rpx; margin-right: 8px;" src="/static/free_breakfast.png"></image>
						<image v-show="item.AttributeName == 'FreeCancellation'" style="width: 27rpx; height: 28.5rpx; margin-right: 8px;" src="/static/check.png"></image>
					</view>
					<view style="display: inline; flex: auto;">{{item.AttributeValue}}</view>
					<view class="text" style="font-size: 28rpx; color: #465280;font-family: Centra No1; font-style: normal; font-weight: normal;margin-right: 24rpx;">+${{item.Price}}/night</view>
				</view>
			</view>
			
			<!-- <view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
				<view class="text" style="left: 24rpx; font-size: 28rpx; color: #465280;font-family: Centra No1; font-style: normal; font-weight: normal; margin-left: 24rpx;">
					<image style="width: 27rpx; height: 28.5rpx; margin-right: 8px;" src="/static/shape.png"></image>
					Resort view
				</view>
				<view class="text" style="font-size: 28rpx; color: #465280;font-family: Centra No1; font-style: normal; font-weight: normal;margin-right: 24rpx;">+$15/night</view>
			</view>
			
			<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between; ">
				<view class="text" style="left: 24rpx; font-size: 28rpx; color: #465280;font-family: Centra No1; font-style: normal; font-weight: normal; margin-left: 24rpx;">
					<image style="width: 27rpx; height: 28.5rpx; margin-right: 8px;" src="/static/accessible.png"></image>
					Not accessible
				</view>
				<view class="text" style="font-size: 28rpx; color: #465280;font-family: Centra No1; font-style: normal; font-weight: normal;margin-right: 24rpx;"></view>
			</view>
			
			<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
				<view class="text" style="left: 24rpx; font-size: 28rpx; color: #465280;font-family: Centra No1; font-style: normal; font-weight: normal;margin-left: 24rpx;">
					<image style="width: 27rpx; height: 28.5rpx; margin-right: 8px;" src="/static/smoke_free.png"></image>
					Non-smoking
				</view>
				<view class="text" style="font-size: 28rpx; color: #465280;font-family: Centra No1; font-style: normal; font-weight: normal;margin-right: 24rpx;"></view>
			</view>
			
			<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between; ">
				<view class="text" style="left: 24rpx; font-size: 28rpx; color: #465280;font-family: Centra No1; font-style: normal; font-weight: normal; margin-left: 24rpx;">
					<image style="width: 27rpx; height: 28.5rpx; margin-right: 8px;" src="/static/free_breakfast.png"></image>
					Continental breakfast for 2
				</view>
				<view class="text" style="font-size: 28rpx; color: #465280;font-family: Centra No1; font-style: normal; font-weight: normal;margin-right: 24rpx;"></view>
			</view> -->
			
			<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
				<view class="text" style="color: #007864; font-size: 28rpx; margin-left: 24rpx;">Free cancellation before Jun22, 2020</view>
				<view class="text" style="font-size: 16rpx;margin-right: 24rpx;"></view>
			</view>
			<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
				<view class="text" style="font-size: 28rpx; margin-left: 24rpx;color: #005AEB;" @click="more_details">More details ></view>
			</view>
			<view class="uni-flex uni-row" style="-webkit-justify-content: flex-end;justify-content: flex-end;">
				<view class="text" style="margin-right: 24rpx;font-size:44rpx; font-weight: bold;color: #001959;">${{FinalRoom.RoomBaseInfor.Price}}</view>
			</view>
			<view class="uni-flex uni-row" style="-webkit-justify-content: flex-end;justify-content: flex-end;">
				<view class="text" style="margin-right: 24rpx;font-size:20rpx; color: #465280;">per night</view>
			</view>
			<view class="uni-flex uni-row" style="-webkit-justify-content: flex-end;justify-content: flex-end;">
				<view class="text" style="margin-right: 24rpx;font-size:20rpx; color: #465280;">Excludes $24 daily resort fee</view>
			</view>

			<view class="uni-flex uni-row" style="margin-bottom: 24rpx;">
				<button :class="[not_selectable_style_open ? 'not_selectable_style' : '']" style="width: 315rpx; height: 72rpx; line-height: 72rpx; color: #005AEB; background: #FFFFFF; font-size: 28rpx;font-weight: bold; display:block;margin:0 auto;"
				 @click="start_over">
					Start over
				</button>
				<button :loading="loading" :class="[not_selectable_style_open ? 'not_selectable_style' : '']" style="width: 315rpx; height: 72rpx; line-height: 72rpx; color: #FFFFFF; background: #0044ea; font-size: 28rpx;font-weight: bold; display:block;margin:0 auto;"
				 @click="reserve">
					Reserve
				</button>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				loading: false,
				FinalRoom: '',
				BaseRoom: '',
				title: 'picker',
				check_in_date: '',
				check_out_date: '',
				indicatorDots: false,
				autoplay: true,
				interval: 5000,
				duration: 500,
				build_thrid_page_data: '',
				not_selectable_style_open: false
			}
		},
		onLoad(options) {
			this.check_in_date = options.check_in_date
			this.check_out_date = options.check_out_date
			this.BaseRoom = JSON.parse(decodeURIComponent(options.BaseRoom))
			this.FinalRoom = JSON.parse(decodeURIComponent(options.FinalRoom))
			this.build_thrid_page_data = JSON.parse(decodeURIComponent(options.build_thrid_page_data));
			console.log("options.BaseRoom==："+JSON.stringify(this.BaseRoom))
		},
		methods: {
			go_back() {
				uni.navigateBack({
					 delta: 1
				})
			},
			start_over(e) {
				this.not_selectable_style_open = true
				this.loading = true
				this.$api.test({
					check_in_date: this.check_in_date,
					check_out_date: this.check_out_date,
					noncestr: Date.now()
				}).then((res) => {
					this.loading = false;
					// console.log('request success', res)
					this.res = '请求结果 : ' + JSON.stringify(res);
					uni.navigateTo({
						url: 'search?' + JSON.stringify(res)
					});
					this.not_selectable_style_open = false
				}).catch((err) => {
					this.loading = false;
					console.log('request fail', err);
					uni.showToast({
						title: 'Sold out',
						icon: 'none',
						mask: true
					});
				})
			},
			reserve(e) {
				
				this.loading = true;
				this.not_selectable_style_open = true
				setTimeout(() => {
					uni.reLaunch({
						url: 'pay_success'
					});
					this.not_selectable_style_open = false
					this.loading = false;
				}, 2000);
			},
			more_details() {
				uni.showToast({
					icon: "none",
					title: "show more details"
				})
			}
			
		}
	}
</script>

<style>
	.text {
		/* margin: 15upx 10upx; */
		/* padding: 0 20upx; */
		/* height: 70upx; */
		line-height: 60upx;
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

	.background_image {
		height: 394rpx;
		width: 702rpx;
	}

	.uni-margin-wrap {
		width: 690upx;
		margin: 0 30upx;
	}

	.swiper {
		height: 300upx;
	}

	.swiper-item {
		display: block;
		height: 300upx;
		line-height: 300upx;
		text-align: center;
	}

	.swiper-list {
		margin-top: 40upx;
		margin-bottom: 0;
	}

	.uni-common-mt {
		margin-top: 60upx;
		position: relative;
	}

	/* 头条小程序组件内不能引入字体 */
	/* #ifdef MP-TOUTIAO */
	@font-face {
		font-family: uniicons;
		font-weight: normal;
		font-style: normal;
		src: url('~@/static/uni.ttf') format('truetype');
	}

	/* #endif */

	/* #ifndef APP-NVUE */
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #efeff4;
		min-height: 100%;
		height: auto;
	}

	view {
		font-size: 28rpx;
		line-height: inherit;
	}

	.example {
		padding: 0 30rpx 30rpx;
	}

	/* #endif */
	.example {
		padding: 0 30rpx;
	}

	.word-btn-white {
		font-size: 18px;
		color: #FFFFFF;
	}

	.word-btn {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;
		border-radius: 6px;
		height: 48px;
		margin: 15px;
		background-color: #007AFF;
	}

	.word-btn--hover {
		background-color: #4ca2ff;
	}


	.calendar-button {
		flex: 1;
		font-weight: bold;
		font-size: 32rpx;
	}
</style>
