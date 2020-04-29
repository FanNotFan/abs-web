<template>
	<view style="width: 100%;">
		<view class="" style="top:0;position:fixed;width: 750rpx; height: 96rpx; background-color: #FFFFFF;z-index: 1000;">
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
		
		<view class="" style="width: 100%; height: 200upx; margin-top: 200rpx;">
			<view class="" style="width: 100%; text-align: center; line-height: 40upx;height: 140upx;">
				<image src="../../static/pay_success.png" style="width: 140upx; height: 140upx;" mode="">
					
				</image>
			</view>
			
			<view class="" style="width: 100%; height: 60upx;">
				<view class="" style="color: #0FAEFF; text-align: center;">
					{{paySuccessTitle}}
				</view>
			</view>
		</view>
		<view class="" style="width: 100%; margin-top: 100upx;">
			<view class="" style="height: 40upx; width: 50%;float: left;">
				<view class="" style="margin-left: 56%; font-size: 34upx;">
					{{paymentDescription}}
				</view>
			</view>
			<view class="" style="height: 40upx; width: 50%;float: left;">
				<view class="" style="margin-left: 4upx;font-size: 34upx;">
					{{paymentDisplayContent}}
				</view>
			</view>
		</view>
		<!-- 按钮 -->
		<view class="text">
			<button class="" style="width: 654rpx; height: 96rpx; color: #FFFFFF; background: #0044ea; font-size: 28rpx;font-weight: bold; display:block;margin:0 auto; line-height: 96rpx;" @click="finishClick">
				Reserve Over
			</button>
		</view>
	</view>
</template>

<script>
	const LOGINFO_PREFIX = '[pay_success]_';
	var _self;
	export default {
		data() {
			return {
				paySuccessTitle: 'Reserve Success',
				paymentDescription: '',
				paymentDisplayContent: '',
				parkingDuration: '',
				paymentInformation : {}
			};
		},
		onLoad(e) {
			console.log(LOGINFO_PREFIX+ "onLoad_" + JSON.stringify(e));
			_self = this;
			_self.paymentInformation = e;
			if(_self.paymentInformation.paySuccessTitle !== undefined){
				_self.paySuccessTitle = _self.paymentInformation.paySuccessTitle;
			}
			if(_self.paymentInformation.paymentDescription !== undefined){
				_self.paymentDescription = _self.paymentInformation.paymentDescription;
			}
			if(_self.paymentInformation.paymentDisplayContent !== undefined){
				_self.paymentDisplayContent = _self.paymentInformation.paymentDisplayContent;
			}
			if(_self.paymentInformation.parkingDuration !== undefined){
				_self.paymentDisplayContent = _self.paymentInformation.parkingDuration;
			}
		},
		methods:{
			finishClick(){
				console.log("完成");
				uni.reLaunch({
					url:'search'
				})
			}
		}
	}
</script>

<style>
</style>
