<template>
	<view class="content">
		<!-- Build your room -->
		<view class="" style="width: 702rpx; height: 120rpx;">
			<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
				<view class="text" style="font-size: 40rpx; font-weight: bolder; color: #000000;">Build your room</view>
				<view class="text" style="font-size: 24rpx; color: #0044ea;"></view>
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
			<view class="uni-margin-wrap" style="position: relative;">
				<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
					<block v-if="index<=4" v-for="(item,index) in result_data.Picture" :key="index">
						<swiper-item>
							<view class="swiper-item">
								<image class="background_image" :src="item.url"></image>
							</view>
						</swiper-item>
					</block>
				</swiper>
				<image style="position: absolute;  margin-left: 285rpx; margin-top: -50rpx;width: 120rpx;height: 24rpx" src="../../static/3_Middle.png"></image>
				<view class="" style="position: absolute;  margin-left: 590rpx; margin-top: -64rpx; font-size: 28rpx;font-weight: 500;color: #FFFFFF;">
					<view style="position: absolute;">{{result_data.Picture.length}}</view>
					<image style="width: 48rpx;height: 48rpx;margin-left: 36rpx;" src="../../static/photo_library.png"></image>
				</view>
			</view>
		</view>

		<!-- Base price part -->
		<view class="" style="background-color: #FFFFFF; width: 702rpx;">
			<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;margin-top: 30rpx;"
			 @click="go_back">
				<view class="text uni-flex" style="font-size: 28rpx; width: 100rpx;height: 36rpx;-webkit-justify-content: center;justify-content: center;-webkit-align-items: center;align-items: center;color: #005AEB;">
					<image src="../../static/Prev.png" style="width: 44rpx;height: 36rpx;color: #005AEB;"></image>
					Back
				</view>
			</view>

			<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
				<view class="text" style="font-size: 26rpx; font-weight: bolder; color: #000000; margin-left: 24rpx;">All rooms
					include:</view>
				<view class="text" style="font-size: 42rpx; font-weight: bolder; color: #000000; margin-right: 24rpx;">${{result_data.min_price}}
					- ${{result_data.max_price}}</view>
			</view>
			
			<view v-if="ifShowMore">
				<view v-for="(item,index) in result_data.Amenity" :key="index">
					<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
						<view class="text" style="font-size: 26rpx;margin-left: 24rpx;">{{item}}</view>
						<view class="text" style="font-size: 16rpx;margin-right: 24rpx;"></view>
					</view>
				</view>
			</view>
			<view v-else>
				<view v-if="index<=4" v-for="(item,index) in result_data.Amenity" :key="index">
					<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
						<view class="text" style="font-size: 26rpx;margin-left: 24rpx;">{{item}}</view>
						<view class="text" style="font-size: 16rpx;margin-right: 24rpx;"></view>
					</view>
				</view>
			</view>
			<view v-if="!ifShowMore" class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;margin-bottom: 30rpx;"
			 @click="showMore">
				<view class="text uni-flex" style="font-size: 28rpx; width: 200rpx;height: 36rpx;-webkit-justify-content: center;justify-content: center;-webkit-align-items: center;align-items: center;color: #005AEB;">
					Show More
					<image src="../../static/Next.png" style="width: 44rpx;height: 36rpx;color: #005AEB;webkit-transform: rotate(90deg);"></image>
				</view>
			</view>
			<view v-else class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;margin-bottom: 30rpx;"
			 @click="collapse">
				<view class="text uni-flex" style="font-size: 28rpx; width: 184rpx;height: 36rpx;-webkit-justify-content: center;justify-content: center;-webkit-align-items: center;align-items: center;color: #005AEB;">
					Collapse
					<image src="../../static/Prev.png" style="width: 44rpx;height: 36rpx;color: #005AEB;webkit-transform: rotate(90deg); "></image>
				</view>
			</view>
			
		</view>
		<view class="" style="background-color: #FFFFFF; width: 702rpx;height: 120rpx; border-bottom-left-radius: 16rpx; border-bottom-right-radius: 16rpx;">
			<button :loading="loading" :class="[not_selectable_style_open ? 'not_selectable_style' : '']" style="width: 654rpx; height: 96rpx; color: #FFFFFF; background: #0044ea; font-size: 28rpx;font-weight: bold; display:block;margin:0 auto; line-height: 96rpx;"
			 @click="build_room">
				Build your room
			</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ifShowMore: false,
				hotelImagesInfo: [],
				loading: false,
				check_in_date: '',
				check_out_date: '',
				indicatorDots: false,
				autoplay: true,
				interval: 5000,
				duration: 500,
				hotel_id: '',
				result_data: '',
				not_selectable_style_open: false,
			}
		},
		onLoad(options) {
			var result_data = JSON.parse(decodeURIComponent(options.result));
			console.log('===' + JSON.stringify(result_data))
			this.result_data = result_data
			this.hotel_id = options.hotel_id
			this.check_in_date = options.check_in_date
			this.check_out_date = options.check_out_date
		},
		methods: {
			go_back() {
				uni.navigateBack({
					delta: 1
				})
			},
			showMore(){
				this.ifShowMore = true
			},
			collapse(){
				this.ifShowMore = false
			},
			build_room(e) {
				this.loading = true
				this.not_selectable_style_open = true
				this.$api.callAbsModel({
					check_in_date: this.check_in_date,
					check_out_date: this.check_out_date,
					hotel_id: this.hotel_id,
					noncestr: Date.now()
				}).then((res) => {
					if (res.data.RegularModel != null) {
						var call_model_data = encodeURIComponent(JSON.stringify(res.data))
						var build_first_page_data = encodeURIComponent(JSON.stringify(this.result_data.Picture))
						console.log('build_room-hotel_id===' + this.hotel_id)
						uni.navigateTo({
							url: 'build_second?check_in_date=' + this.check_in_date + '&check_out_date=' + this.check_out_date +
								'&hotel_id=' + this.hotel_id +
								'&build_first_page_data=' + build_first_page_data + '&call_model_data=' + call_model_data
						});
						this.not_selectable_style_open = false
						this.loading = false
					} else {
						uni.showToast({
							title: 'Model is null',
							icon: 'none',
							mask: true
						});
						this.not_selectable_style_open = false
						this.loading = false
					}
				}).catch((err) => {
					this.loading = false;
					console.log('request fail', err);
					uni.showToast({
						title: 'Sold out',
						icon: 'none',
						mask: true
					});
					this.loading = false
					this.not_selectable_style_open = false
				})
			}
		}
	}
</script>

<style>
	.not_selectable_style {
		color: #BEBEBE;
		background: gray;
		opacity: 0.5;
		pointer-events: none;
	}
	
	.text {
		margin: 15upx 10upx;
		/* padding: 0 20upx; */
		/* height: 70upx; */
		line-height: 60upx;
		text-align: center;
		color: #777;
		font-size: 26upx;
	}

	.text2 {
		margin: 15upx 10upx;
		padding: 0 20upx;
		background-color: #ebebeb;
		height: 70upx;
		line-height: 70upx;
		text-align: center;
		color: #777;
		font-size: 26upx;
		width: 100%;
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
