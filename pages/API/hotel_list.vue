<template>
	<view class="content">
		<view class="" style="top:0;position:fixed;width: 750rpx; height: 96rpx; background-color: #FFFFFF;z-index: 1000;">
			<!-- 图片 -->
			<view class="uni-flex uni-row">
				<view class="text" style="width: 558rpx;" @click="go_home">
					<image style="width: 264rpx; height: 96rpx;" src="/static/Logomark.png"></image>
				</view>
				<view class="text" style="-webkit-flex: 1;flex: 1;">
					<image style="width: 96rpx; height: 96rpx;" src="/static/favorite.png"></image>
					<image style="width: 96rpx; height: 96rpx;" src="/static/account.png"></image>
				</view>
			</view>
		</view>
		<view class="" style="margin-top: 96rpx;">
			<view v-for="(item,index) in dataList" :key="index">
				<view class="uni-flex uni-row">
					<view class="text uni-flex" style="-webkit-flex: 1;flex: 1;width: 702rpx; height: 260rpx;-webkit-justify-content: center;justify-content: center;-webkit-align-items: center;align-items: center; background-color: #FFFFFF; margin-top: 20rpx; border-radius: 18rpx;">
						<!-- 图片 -->
						<block class="" style="">
							<view class="text uni-flex" style="margin: 20rpx; width: 200rpx;height: 150rpx;-webkit-justify-content: center;justify-content: center;-webkit-align-items: center;align-items: center;">
								<dh-image :src="item.image" :errorSrc="'/static/hotel_images/' + index + '.jpg'" style="width: 200rpx;height: 150rpx; border-radius: 10rpx;"></dh-image>
								<!-- <image :src="item.image" style="width: 200rpx;height: 150rpx; border-radius: 10rpx; "></image> -->
							</view>
						</block>
						
						<!-- 介绍 -->
						<view class="uni-flex uni-column" style="-webkit-flex: 1;flex: 1;-webkit-justify-content: space-between;justify-content: space-between;">
							<view class="uni-flex uni-row" style="padding-left: 20upx;">
								<!-- <input style="display: none;" v-model="hotel_id"/> -->
								<view class="text" style="-webkit-flex: 1;flex: 1;">{{item.name}}</view>
							</view>
							<view class="text" style="height: 120upx;text-align: left;padding-top: 10upx;">
								<button :loading="loading && item.id == hotel_id" :class="[not_selectable_style_open && item.id == hotel_id ? 'not_selectable_style' : '']" style="width: 430rpx; height: 72rpx; line-height: 72rpx;color: #FFFFFF; background: #0044ea; font-size: 28rpx;font-weight: bold; display:block;margin:0 auto; "  @click="select_room(item.id)">
									Select room
								</button>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import dhImage from '@/components/dh-image/dh-image'
	export default {
		components:{
			dhImage
		},
		data() {
			return {
				loading: false,
				title: 'Hello',
				hotel_id : '',
				check_in_date: '',
				check_out_date: '',
				not_selectable_style_open: false,
				dataList: {}
			}
		},
		onLoad(options) {
			var data = JSON.parse(decodeURIComponent(options.hotelList));
			console.log('==='+JSON.stringify(data))
			this.dataList = data.hotels
			this.check_in_date = options.check_in_date
			this.check_out_date = options.check_out_date
			// console.log("options.check_in_date==："+JSON.stringify(options.check_in_date))
		},
		methods: {
			select_room(hotel_id) {
				this.loading = true;
				this.hotel_id = hotel_id
				this.not_selectable_style_open = true
				this.$api.getHotelInfo({
						hotel_id: hotel_id,
						check_in_date: this.check_in_date,
						check_out_date: this.check_out_date,
						noncestr: Date.now()
					}).then((res)=>{
						if(res.data.code == 1000){
							// console.log('==select_room==')
							var result = encodeURIComponent(JSON.stringify(res.data.data))
							uni.navigateTo({
								url: 'build_first?check_in_date='+this.check_in_date+'&check_out_date='+this.check_out_date+'&hotel_id='+hotel_id+'&result='+result
							});
							this.not_selectable_style_open = false
							this.loading = false;
						} else {
							uni.showToast({
								title: res.data.msg,
								icon: 'none',
								mask: true
							})
							this.loading = false;
							this.not_selectable_style_open = false
						}
				}).catch((err)=>{
					this.loading = false;
					this.not_selectable_style_open = false
					// console.log('request fail', err);
					// console.log("err=="+JSON.stringify(err))
					uni.showToast({
						title: 'Sold out',
						icon: 'none',
						mask: true
					});
					
				})
			},
			go_home(){
				uni.navigateTo({
				    url: 'search'
				});
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
</style>
