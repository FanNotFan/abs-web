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
					<block v-if="index<=4" v-for="(item,index) in build_second_page_data" :key="index">
						<swiper-item>
							<view class="swiper-item">
								<image class="background_image" :src="item.url"></image>
							</view>
						</swiper-item>
					</block>
				</swiper>
				<image style="position: absolute;  margin-left: 285rpx; margin-top: -50rpx;width: 120rpx;height: 24rpx" src="../../static/3_Middle.png"></image>
				<view class="" style="position: absolute;  margin-left: 590rpx; margin-top: -64rpx; font-size: 28rpx;font-weight: 500;color: #FFFFFF;">
					<view style="position: absolute;">{{build_second_page_data.length}}</view>
					<image style="width: 48rpx;height: 48rpx;margin-left: 36rpx;" src="../../static/photo_library.png"></image>
				</view>
			</view>
		</view>

		<!-- Base price part -->
		<view class="" style="width: 702rpx; border-bottom-right-radius: 18rpx; border-bottom-left-radius: 18rpx;">
			<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;margin-top: 30rpx;"
			 @click="go_back">
				<view class="text uni-flex" style="line-height: 36rpx; font-size: 28rpx; width: 100rpx;height: 36rpx;-webkit-justify-content: center;justify-content: center;-webkit-align-items: center;align-items: center;color: #005AEB;">
					<image src="../../static/Prev.png" style="width: 44rpx;height: 36rpx;color: #005AEB;"></image>
					Back
				</view>
			</view>
			
			<view v-if="radio_checked_value.AttributeName == 'RoomSize' || radio_checked_value.AttributeName == '' || radio_checked_value.AttributeName == undefined">
				<!-- RoomSize -->
				<view :class="ifMask['roomSizeMask'] ? 'overlay': 'lightbox'" style="width: 702rpx;" v-if="ifShowRoomSize && roomSizeItemsLength">
					<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
						<view class="text" style="margin-left: 25rpx ;font-weight: bold; font-family: Centra No1;font-size: 28rpx;font-style: normal;color: #001959;">Room
							Size ( m² )</view>
						<view v-show="!ifMask['roomSizeMask']" class="uni-flex uni-row" style="-webkit-justify-content: flex-end;justify-content: flex-end;">
							<!-- <view class="text" style="color: #005AEB; ">prev</view> -->
							<view class="text" style="color: #005AEB; margin-right: 28rpx;" @click="go_next('roomSizeMask', 'bedTypeMask', 'button')">next</view>
						</view>
					</view>
					<view class="uni-form-item uni-column">
						<view class="uni-list-cell-lennon uni-list-cell-pd" :class="[item.tag == '3' ? 'not_selectable_style' : '']" v-if="item.AttributeName == 'RoomSize'" v-for="(item,index) in sortAttributeItems"
						 :key="index">
							 <view>
								<jiuaiCheckbox :borderStyle="item.tag == '4' ? '1px solid #ff0000' : '1px solid #d1d1d1'" :checked="item.tag == '1'" :color="item.tag == '4' ? '#C0C0C0' : '#007bfa'" style='margin-right: 10rpx; font-size: 28rpx;' @change='radioChange' domId="roomSizeMask,bedTypeMask" :value="JSON.stringify(item)" :disabled="item.tag == '3' || item.tag == '4'" :class="[item.tag == '4' ? ['iconfont','jiuai-check-icon','icon-xuanzhong','active']: '']"></jiuaiCheckbox>
								<label class="label-2-text" :for="item.AttributeValue">
									<view v-if="item.Bundle != undefined && item.Bundle.length > 0" style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">
										{{item.AttributeValue}}
										<view style="margin-left: 8rpx; line-height: 48rpx; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 20rpx;color: gray;">
											({{item.Bundle[0].AttributeValue + ' '}}
											<view style="margin-left: 8rpx; line-height: 48rpx; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 26rpx;color: green;display: contents;font-weight: bold;">included</view>)
										</view>
									</view>
									<view v-else style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</view>
									<!-- <view style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</view>
									<view style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" v-if="item.Bundle != undefined && item.Bundle.length > 0">({{item.Bundle[0].AttributeValue}})</view> -->
								</label>
							</view>
							<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
								<view class="text" style="line-height: 50rpx; height: 50rpx;font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.tag == '4' ? 'included ' : '+ $'+item.Price}}</view>			
							</view>
						</view>
					</view>
				</view>
				
				<!-- BedType -->
				<view :class="ifMask['bedTypeMask'] ? 'overlay': 'lightbox'" style="width: 702rpx;" v-if="ifShowBedType && bedTypeItemsLength">
					<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
						<view class="text" style="margin-left: 25rpx ;font-weight: bold; font-family: Centra No1;font-size: 28rpx;font-style: normal;color: #001959;">Bed
							type</view>
						<view v-show="!ifMask['bedTypeMask']" class="uni-flex uni-row" style="-webkit-justify-content: flex-end;justify-content: flex-end;">
							<view class="text" style="color: #005AEB; " @click="go_prev('bedTypeMask','roomSizeMask')">prev</view>
							<view class="text" style="color: #005AEB; margin-right: 28rpx;" @click="go_next('bedTypeMask', 'roomViewMask', 'button')">next</view>
						</view>
					</view>
					<view class="uni-form-item uni-column">
						<view class="uni-list-cell-lennon uni-list-cell-pd" :class="[item.tag == '3' ? 'not_selectable_style' : '']" v-if="item.AttributeName == 'BedType'" v-for="(item,index) in sortAttributeItems"
						 :key="index">
							 <view>
								<jiuaiCheckbox :borderStyle="item.tag == '4' ? '1px solid #ff0000' : '1px solid #d1d1d1'" :checked="item.tag == '1'" :color="item.tag == '4' ? '#C0C0C0' : '#007bfa'" style='margin-right: 10rpx; font-size: 28rpx;' @change='radioChange' domId="bedTypeMask,roomViewMask" :value="JSON.stringify(item)" :disabled="item.tag == '3' || item.tag == '4'" :class="[item.tag == '4' ? ['iconfont','jiuai-check-icon','icon-xuanzhong','active']: '']"></jiuaiCheckbox>
								<label class="label-2-text" :for="item.AttributeValue">
									<view v-if="item.Bundle != undefined && item.Bundle.length > 0" style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">
										{{item.AttributeValue}}
										<view style="margin-left: 8rpx; line-height: 48rpx; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 20rpx;color: gray;">
											({{item.Bundle[0].AttributeValue + ' '}}
											<view style="margin-left: 8rpx; line-height: 48rpx; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 26rpx;color: green;display: contents;font-weight: bold;">included</view>)
										</view>
									</view>
									<view v-else style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</view>
									<!-- <text style="overflow: auto; overflow-x: hidden; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</text> -->
									<!-- <view style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</view> -->
								</label>
							</view>
							<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
								<view class="text" style="height: 50rpx; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.tag == '4' ? 'included ' : '+ $'+item.Price}}</view>
							</view>
						</view>
					</view>
				</view>
				
				<!-- RoomView -->
				<view :class="ifMask['roomViewMask'] ? 'overlay': 'lightbox'" style="width: 702rpx;" v-if="ifShowView && viewItemsLength">
					<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
						<view class="text" style="margin-left: 25rpx ;font-weight: bold; font-family: Centra No1;font-size: 28rpx;font-style: normal;color: #001959;">View</view>
						<view v-show="!ifMask['roomViewMask']" class="uni-flex uni-row" style="-webkit-justify-content: flex-end;justify-content: flex-end;">
							<view class="text" style="color: #005AEB; " @click="go_prev('roomViewMask', 'bedTypeMask')">prev</view>
							<view class="text" style="color: #005AEB; margin-right: 28rpx;" @click="go_next('roomViewMask', 'breakfastMask', 'button')">next</view>
						</view>
					</view>
					<view class="uni-form-item uni-column">
						<view class="uni-list-cell-lennon uni-list-cell-pd" :class="[item.tag == '3' ? 'not_selectable_style' : '']" v-if="item.AttributeName == 'RoomView'" v-for="(item,index) in sortAttributeItems"
						 :key="index">
							 <view>
								<jiuaiCheckbox :borderStyle="item.tag == '4' ? '1px solid #ff0000' : '1px solid #d1d1d1'" :checked="item.tag == '1'" :color="item.tag == '4' ? '#C0C0C0' : '#007bfa'" style='margin-right: 10rpx; font-size: 28rpx;' @change='radioChange' domId="roomViewMask,breakfastMask" :value="JSON.stringify(item)" :disabled="item.tag == '3' || item.tag == '4'" :class="[item.tag == '4' ? ['iconfont','jiuai-check-icon','icon-xuanzhong','active']: '']"></jiuaiCheckbox>
								<label class="label-2-text" :for="item.AttributeValue">
									<!-- <text style="overflow: auto; overflow-x: hidden; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</text> -->
									<!-- <view style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</view> -->
									<view v-if="item.Bundle != undefined && item.Bundle.length > 0" style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">
										{{item.AttributeValue}}
										<view style="margin-left: 8rpx; line-height: 48rpx; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 20rpx;color: gray;">
											({{item.Bundle[0].AttributeValue + ' '}}
											<view style="margin-left: 8rpx; line-height: 48rpx; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 26rpx;color: green;display: contents;font-weight: bold;">included</view>)
										</view>
									</view>
									<view v-else style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</view>
								</label>
							</view>
							<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
								<view class="text" style="height: 50rpx; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.tag == '4' ? 'included ' : '+ $'+item.Price}}</view>
							</view>
						</view>
					</view>
				</view>
				
				<!-- Breakfast -->
				<view :class="ifMask['breakfastMask'] ? 'overlay': 'lightbox'" style="width: 702rpx;" v-if="ifShowBreakfast && breakfastItemsLength">
					<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
						<view class="text" style="margin-left: 25rpx ;font-weight: bold; font-family: Centra No1;font-size: 28rpx;font-style: normal;color: #001959;">Breakfast</view>
						<view v-show="!ifMask['breakfastMask']" class="uni-flex uni-row" style="-webkit-justify-content: flex-end;justify-content: flex-end;">
							<view class="text" style="color: #005AEB; " @click="go_prev('breakfastMask','roomViewMask')">prev</view>
							<view class="text" style="color: #005AEB; margin-right: 28rpx;" @click="go_next('breakfastMask', 'freeCancellationMask', 'button')">next</view>
						</view>
					</view>
					<view class="uni-form-item uni-column">
						<view class="uni-list-cell-lennon uni-list-cell-pd" :class="[item.tag == '3' ? 'not_selectable_style' : '']" v-if="item.AttributeName == 'Breakfast'" v-for="(item,index) in sortAttributeItems"
						 :key="index">
							 <view>
								<jiuaiCheckbox :borderStyle="item.tag == '4' ? '1px solid #ff0000' : '1px solid #d1d1d1'" :checked="item.tag == '1'" :color="item.tag == '4' ? '#C0C0C0' : '#007bfa'" style='margin-right: 10rpx; font-size: 28rpx;' @change='radioChange' domId="breakfastMask,freeCancellationMask" :value="JSON.stringify(item)" :disabled="item.tag == '3' || item.tag == '4'" :class="[item.tag == '4' ? ['iconfont','jiuai-check-icon','icon-xuanzhong','active']: '']"></jiuaiCheckbox>
								<label class="label-2-text" :for="item.AttributeValue">
									<!-- <text style="overflow: auto; overflow-x: hidden; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</text> -->
									<!-- <view style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</view> -->
									<view v-if="item.Bundle != undefined && item.Bundle.length > 0" style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">
										{{item.AttributeValue}}
										<view style="margin-left: 8rpx; line-height: 48rpx; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 20rpx;color: gray;">
											({{item.Bundle[0].AttributeValue + ' '}}
											<view style="margin-left: 8rpx; line-height: 48rpx; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 26rpx;color: green;display: contents;font-weight: bold;">included</view>)
										</view>
									</view>
									<view v-else style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</view>
								</label>
							</view>
							<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
								<view class="text" style="line-height: 50rpx; height: 50rpx;font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.tag == '4' ? 'included ' : '+ $'+item.Price}}</view>
							</view>
						</view>
					</view>
				</view>
				
				<!-- FreeCancellation -->
				<view :class="ifMask['freeCancellationMask'] ? 'overlay': 'lightbox'" style="width: 702rpx;" v-if="ifShowFreeCancellation && freeCancellationItemsLength">
					<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
						<view class="text" style="margin-left: 25rpx ;font-weight: bold; font-family: Centra No1;font-size: 28rpx;font-style: normal;color: #001959;">FreeCancellation</view>
						<view v-show="!ifMask['freeCancellationMask']" class="uni-flex uni-row" style="-webkit-justify-content: flex-end;justify-content: flex-end;">
							<view class="text" style="color: #005AEB; margin-right: 28rpx;" @click="go_prev('freeCancellationMask','breakfastMask')">prev</view>
						</view>
					</view>
					<view class="uni-form-item uni-column">
						<view class="uni-list-cell-lennon uni-list-cell-pd" :class="[item.tag == '3' ? 'not_selectable_style' : '']" v-if="item.AttributeName == 'FreeCancellation'" v-for="(item,index) in sortAttributeItems"
						 :key="index">
							 <view>
								<jiuaiCheckbox :borderStyle="item.tag == '4' ? '1px solid #ff0000' : '1px solid #d1d1d1'" :checked="item.tag == '1'" :color="item.tag == '4' ? '#C0C0C0' : '#007bfa'" style='margin-right: 10rpx; font-size: 28rpx;' @change='radioChange' domId="freeCancellationMask," :value="JSON.stringify(item)" :disabled="item.tag == '3' || item.tag == '4'" :class="[item.tag == '4' ? ['iconfont','jiuai-check-icon','icon-xuanzhong','active']: '']"></jiuaiCheckbox>
								<label class="label-2-text" :for="item.AttributeValue">
									<!-- <text style="overflow: auto; overflow-x: hidden; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</text> -->
									<!-- <view style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</view> -->
									<view v-if="item.Bundle != undefined && item.Bundle.length > 0" style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">
										{{item.AttributeValue}}
										<view style="margin-left: 8rpx; line-height: 48rpx; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 20rpx;color: gray;">
											({{item.Bundle[0].AttributeValue + ' '}}
											<view style="margin-left: 8rpx; line-height: 48rpx; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 26rpx;color: green;display: contents;font-weight: bold;">included</view>)
										</view>
									</view>
									<view v-else style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</view>
								</label>
							</view>
							<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
								<view class="text" style="height: 50rpx; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.tag == '4' ? 'included ' : '+ $'+item.Price}}</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view v-if="radio_checked_value.AttributeName == 'BedType'">
				<!-- BedType -->
				<view :class="ifMask['bedTypeMask'] ? 'overlay': 'lightbox'" style="width: 702rpx;" v-if="ifShowBedType && bedTypeItemsLength">
					<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
						<view class="text" style="margin-left: 25rpx ;font-weight: bold; font-family: Centra No1;font-size: 28rpx;font-style: normal;color: #001959;">Bed
							type</view>
						<view v-show="!ifMask['bedTypeMask']" class="uni-flex uni-row" style="-webkit-justify-content: flex-end;justify-content: flex-end;">
							<!-- <view class="text" style="color: #005AEB; " @click="go_prev('bedTypeMask','roomSizeMask')">prev</view> -->
							<view class="text" style="color: #005AEB; margin-right: 28rpx;" @click="go_next('bedTypeMask', 'roomSizeMask', 'button')">next</view>
						</view>
					</view>
					<view class="uni-form-item uni-column">
						<view class="uni-list-cell-lennon uni-list-cell-pd" :class="[item.tag == '3' ? 'not_selectable_style' : '']" v-if="item.AttributeName == 'BedType'" v-for="(item,index) in sortAttributeItems"
						 :key="index">
							 <view>
								<jiuaiCheckbox :borderStyle="item.tag == '4' ? '1px solid #ff0000' : '1px solid #d1d1d1'" :checked="item.tag == '1'" :color="item.tag == '4' ? '#C0C0C0' : '#007bfa'" style='margin-right: 10rpx; font-size: 28rpx;' @change='radioChange' domId="bedTypeMask,roomSizeMask" :value="JSON.stringify(item)" :disabled="item.tag == '3' || item.tag == '4'" :class="[item.tag == '4' ? ['iconfont','jiuai-check-icon','icon-xuanzhong','active']: '']"></jiuaiCheckbox>
								<label class="label-2-text" :for="item.AttributeValue">
									<!-- <text style="overflow: auto; overflow-x: hidden; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</text> -->
									<!-- <view style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</view> -->
									<view v-if="item.Bundle != undefined && item.Bundle.length > 0" style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">
										{{item.AttributeValue}}
										<view style="margin-left: 8rpx; line-height: 48rpx; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 20rpx;color: gray;">
											({{item.Bundle[0].AttributeValue + ' '}}
											<view style="margin-left: 8rpx; line-height: 48rpx; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 26rpx;color: green;display: contents;font-weight: bold;">included</view>)
										</view>
									</view>
									<view v-else style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</view>
								</label>
							</view>
							<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
								<view class="text" style="height: 50rpx; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.tag == '4' ? 'included ' : '+ $'+item.Price}}</view>
							</view>
						</view>
					</view>
				</view>
				
				<!-- RoomSize -->
				<view :class="ifMask['roomSizeMask'] ? 'overlay': 'lightbox'" style="width: 702rpx;" v-if="ifShowRoomSize && roomSizeItemsLength">
					<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
						<view class="text" style="margin-left: 25rpx ;font-weight: bold; font-family: Centra No1;font-size: 28rpx;font-style: normal;color: #001959;">Room
							Size ( m² )</view>
						<view v-show="!ifMask['roomSizeMask']" class="uni-flex uni-row" style="-webkit-justify-content: flex-end;justify-content: flex-end;">
							<!-- <view class="text" style="color: #005AEB; ">prev</view> -->
							<view class="text" style="color: #005AEB; " @click="go_prev('roomSizeMask','bedTypeMask')">prev</view>
							<view class="text" style="color: #005AEB; margin-right: 28rpx;" @click="go_next('roomSizeMask', 'roomViewMask', 'button')">next</view>
						</view>
					</view>
					<view class="uni-form-item uni-column">
						<view class="uni-list-cell-lennon uni-list-cell-pd" :class="[item.tag == '3' ? 'not_selectable_style' : '']" v-if="item.AttributeName == 'RoomSize'" v-for="(item,index) in sortAttributeItems"
						 :key="index">
							 <view>
								<jiuaiCheckbox :borderStyle="item.tag == '4' ? '1px solid #ff0000' : '1px solid #d1d1d1'" :checked="item.tag == '1'" :color="item.tag == '4' ? '#C0C0C0' : '#007bfa'" style='margin-right: 10rpx; font-size: 28rpx;' @change='radioChange' domId="roomSizeMask,roomViewMask" :value="JSON.stringify(item)" :disabled="item.tag == '3' || item.tag == '4'" :class="[item.tag == '4' ? ['iconfont','jiuai-check-icon','icon-xuanzhong','active']: '']"></jiuaiCheckbox>
								<label class="label-2-text" :for="item.AttributeValue">
									<!-- <text style="overflow: auto; overflow-x: hidden; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</text> -->
									<!-- <view style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</view> -->
									<view v-if="item.Bundle != undefined && item.Bundle.length > 0" style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">
										{{item.AttributeValue}}
										<view style="margin-left: 8rpx; line-height: 48rpx; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 20rpx;color: gray;">
											({{item.Bundle[0].AttributeValue + ' '}}
											<view style="margin-left: 8rpx; line-height: 48rpx; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 26rpx;color: green;display: contents;font-weight: bold;">included</view>)
										</view>
									</view>
									<view v-else style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</view>
								</label>
							</view>
							<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
								<view class="text" style="line-height: 50rpx; height: 50rpx;font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.tag == '4' ? 'included ' : '+ $'+item.Price}}</view>
							</view>
						</view>
					</view>
				</view>
				
				<!-- RoomView -->
				<view :class="ifMask['roomViewMask'] ? 'overlay': 'lightbox'" style="width: 702rpx;" v-if="ifShowView && viewItemsLength">
					<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
						<view class="text" style="margin-left: 25rpx ;font-weight: bold; font-family: Centra No1;font-size: 28rpx;font-style: normal;color: #001959;">View</view>
						<view v-show="!ifMask['roomViewMask']" class="uni-flex uni-row" style="-webkit-justify-content: flex-end;justify-content: flex-end;">
							<view class="text" style="color: #005AEB; " @click="go_prev('roomViewMask', 'roomSizeMask')">prev</view>
							<view class="text" style="color: #005AEB; margin-right: 28rpx;" @click="go_next('roomViewMask', 'breakfastMask', 'button')">next</view>
						</view>
					</view>
					<view class="uni-form-item uni-column">
						<view class="uni-list-cell-lennon uni-list-cell-pd" :class="[item.tag == '3' ? 'not_selectable_style' : '']" v-if="item.AttributeName == 'RoomView'" v-for="(item,index) in sortAttributeItems"
						 :key="index">
							 <view>
								<jiuaiCheckbox :borderStyle="item.tag == '4' ? '1px solid #ff0000' : '1px solid #d1d1d1'" :checked="item.tag == '1'" :color="item.tag == '4' ? '#C0C0C0' : '#007bfa'" style='margin-right: 10rpx; font-size: 28rpx;' @change='radioChange' domId="roomViewMask,breakfastMask" :value="JSON.stringify(item)" :disabled="item.tag == '3' || item.tag == '4'" :class="[item.tag == '4' ? ['iconfont','jiuai-check-icon','icon-xuanzhong','active']: '']"></jiuaiCheckbox>
								<label class="label-2-text" :for="item.AttributeValue">
									<!-- <text style="overflow: auto; overflow-x: hidden; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</text> -->
									<!-- <view style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</view> -->
									<view v-if="item.Bundle != undefined && item.Bundle.length > 0" style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">
										{{item.AttributeValue}}
										<view style="margin-left: 8rpx; line-height: 48rpx; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 20rpx;color: gray;">
											({{item.Bundle[0].AttributeValue + ' '}}
											<view style="margin-left: 8rpx; line-height: 48rpx; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 26rpx;color: green;display: contents;font-weight: bold;">included</view>)
										</view>
									</view>
									<view v-else style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</view>
								</label>
							</view>
							<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
								<view class="text" style="line-height: 50rpx; height: 50rpx;font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.tag == '4' ? 'included ' : '+ $'+item.Price}}</view>
							</view>
						</view>
					</view>
				</view>
				
				<!-- Breakfast -->
				<view :class="ifMask['breakfastMask'] ? 'overlay': 'lightbox'" style="width: 702rpx;" v-if="ifShowBreakfast && breakfastItemsLength">
					<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
						<view class="text" style="margin-left: 25rpx ;font-weight: bold; font-family: Centra No1;font-size: 28rpx;font-style: normal;color: #001959;">Breakfast</view>
						<view v-show="!ifMask['breakfastMask']" class="uni-flex uni-row" style="-webkit-justify-content: flex-end;justify-content: flex-end;">
							<view class="text" style="color: #005AEB; " @click="go_prev('breakfastMask','roomViewMask')">prev</view>
							<view class="text" style="color: #005AEB; margin-right: 28rpx;" @click="go_next('breakfastMask', 'freeCancellationMask', 'button')">next</view>
						</view>
					</view>
					<view class="uni-form-item uni-column">
						<view class="uni-list-cell-lennon uni-list-cell-pd" :class="[item.tag == '3' ? 'not_selectable_style' : '']" v-if="item.AttributeName == 'Breakfast'" v-for="(item,index) in sortAttributeItems"
						 :key="index">
							 <view>
								<jiuaiCheckbox :borderStyle="item.tag == '4' ? '1px solid #ff0000' : '1px solid #d1d1d1'" :checked="item.tag == '1'" :color="item.tag == '4' ? '#C0C0C0' : '#007bfa'" style='margin-right: 10rpx; font-size: 28rpx;' @change='radioChange' domId="breakfastMask,freeCancellationMask" :value="JSON.stringify(item)" :disabled="item.tag == '3' || item.tag == '4'" :class="[item.tag == '4' ? ['iconfont','jiuai-check-icon','icon-xuanzhong','active']: '']"></jiuaiCheckbox>
								<label class="label-2-text" :for="item.AttributeValue">
									<!-- <text style="overflow: auto; overflow-x: hidden; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</text> -->
									<!-- <view style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</view> -->
									<view v-if="item.Bundle != undefined && item.Bundle.length > 0" style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">
										{{item.AttributeValue}}
										<view style="margin-left: 8rpx; line-height: 48rpx; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 20rpx;color: gray;">
											({{item.Bundle[0].AttributeValue + ' '}}
											<view style="margin-left: 8rpx; line-height: 48rpx; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 26rpx;color: green;display: contents;font-weight: bold;">included</view>)
										</view>
									</view>
									<view v-else style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</view>
								</label>
							</view>
							<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
								<view class="text" style="line-height: 50rpx; height: 50rpx;font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.tag == '4' ? 'included ' : '+ $'+item.Price}}</view>
							</view>
						</view>
					</view>
				</view>
				
				<!-- FreeCancellation -->
				<view :class="ifMask['freeCancellationMask'] ? 'overlay': 'lightbox'" style="width: 702rpx;" v-if="ifShowFreeCancellation && freeCancellationItemsLength">
					<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
						<view class="text" style="margin-left: 25rpx ;font-weight: bold; font-family: Centra No1;font-size: 28rpx;font-style: normal;color: #001959;">FreeCancellation</view>
						<view v-show="!ifMask['freeCancellationMask']" class="uni-flex uni-row" style="-webkit-justify-content: flex-end;justify-content: flex-end;">
							<view class="text" style="color: #005AEB; margin-right: 28rpx;" @click="go_prev('freeCancellationMask','breakfastMask')">prev</view>
						</view>
					</view>
					<view class="uni-form-item uni-column">
						<view class="uni-list-cell-lennon uni-list-cell-pd" :class="[item.tag == '3' ? 'not_selectable_style' : '']" v-if="item.AttributeName == 'FreeCancellation'" v-for="(item,index) in sortAttributeItems"
						 :key="index">
							 <view>
								<jiuaiCheckbox :borderStyle="item.tag == '4' ? '1px solid #ff0000' : '1px solid #d1d1d1'" :checked="item.tag == '1'" :color="item.tag == '4' ? '#C0C0C0' : '#007bfa'" style='margin-right: 10rpx; font-size: 28rpx;' @change='radioChange' domId="freeCancellationMask," :value="JSON.stringify(item)" :disabled="item.tag == '3' || item.tag == '4'" :class="[item.tag == '4' ? ['iconfont','jiuai-check-icon','icon-xuanzhong','active']: '']"></jiuaiCheckbox>
								<label class="label-2-text" :for="item.AttributeValue">
									<!-- <text style="overflow: auto; overflow-x: hidden; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</text> -->
									<!-- <view style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</view> -->
									<view v-if="item.Bundle != undefined && item.Bundle.length > 0" style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">
										{{item.AttributeValue}}
										<view style="margin-left: 8rpx; line-height: 48rpx; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 20rpx;color: gray;">
											({{item.Bundle[0].AttributeValue + ' '}}
											<view style="margin-left: 8rpx; line-height: 48rpx; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 26rpx;color: green;display: contents;font-weight: bold;">included</view>)
										</view>
									</view>
									<view v-else style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</view>
								</label>
							</view>
							<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
								<view class="text" style="line-height: 50rpx; height: 50rpx;font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.tag == '4' ? 'included ' : '+ $'+item.Price}}</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view v-if="radio_checked_value.AttributeName == 'RoomView'">
				<!-- RoomView -->
				<view :class="ifMask['roomViewMask'] ? 'overlay': 'lightbox'" style="width: 702rpx;" v-if="ifShowView && viewItemsLength">
					<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
						<view class="text" style="margin-left: 25rpx ;font-weight: bold; font-family: Centra No1;font-size: 28rpx;font-style: normal;color: #001959;">View</view>
						<view v-show="!ifMask['roomViewMask']" class="uni-flex uni-row" style="-webkit-justify-content: flex-end;justify-content: flex-end;">
							<!-- <view class="text" style="color: #005AEB; " @click="go_prev('roomViewMask', 'bedTypeMask')">prev</view> -->
							<view class="text" style="color: #005AEB; margin-right: 28rpx;" @click="go_next('roomViewMask', 'roomSizeMask', 'button')">next</view>
						</view>
					</view>
					<view class="uni-form-item uni-column">
						<view class="uni-list-cell-lennon uni-list-cell-pd" :class="[item.tag == '3' ? 'not_selectable_style' : '']" v-if="item.AttributeName == 'RoomView'" v-for="(item,index) in sortAttributeItems"
						 :key="index">
							 <view>
								<jiuaiCheckbox :borderStyle="item.tag == '4' ? '1px solid #ff0000' : '1px solid #d1d1d1'" :checked="item.tag == '1'" :color="item.tag == '4' ? '#C0C0C0' : '#007bfa'" style='margin-right: 10rpx; font-size: 28rpx;' @change='radioChange' domId="roomViewMask,roomSizeMask" :value="JSON.stringify(item)" :disabled="item.tag == '3' || item.tag == '4'" :class="[item.tag == '4' ? ['iconfont','jiuai-check-icon','icon-xuanzhong','active']: '']"></jiuaiCheckbox>
								<label class="label-2-text" :for="item.AttributeValue">
									<!-- <text style="overflow: auto; overflow-x: hidden; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</text> -->
									<!-- <view style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</view> -->
									<view v-if="item.Bundle != undefined && item.Bundle.length > 0" style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">
										{{item.AttributeValue}}
										<view style="margin-left: 8rpx; line-height: 48rpx; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 20rpx;color: gray;">
											({{item.Bundle[0].AttributeValue + ' '}}
											<view style="margin-left: 8rpx; line-height: 48rpx; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 26rpx;color: green;display: contents;font-weight: bold;">included</view>)
										</view>
									</view>
									<view v-else style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</view>
								</label>
							</view>
							<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
								<view class="text" style="line-height: 50rpx; height: 50rpx;font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.tag == '4' ? 'included ' : '+ $'+item.Price}}</view>
							</view>
						</view>
					</view>
				</view>
				
				<!-- RoomSize -->
				<view :class="ifMask['roomSizeMask'] ? 'overlay': 'lightbox'" style="width: 702rpx;" v-if="ifShowRoomSize && roomSizeItemsLength">
					<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
						<view class="text" style="margin-left: 25rpx ;font-weight: bold; font-family: Centra No1;font-size: 28rpx;font-style: normal;color: #001959;">Room
							Size ( m² )</view>
						<view v-show="!ifMask['roomSizeMask']" class="uni-flex uni-row" style="-webkit-justify-content: flex-end;justify-content: flex-end;">
							<view class="text" style="color: #005AEB; " @click="go_prev('roomSizeMask', 'roomViewMask')">prev</view>
							<view class="text" style="color: #005AEB; margin-right: 28rpx;" @click="go_next('roomSizeMask', 'bedTypeMask', 'button')">next</view>
						</view>
					</view>
					<view class="uni-form-item uni-column">
						<view class="uni-list-cell-lennon uni-list-cell-pd" :class="[item.tag == '3' ? 'not_selectable_style' : '']" v-if="item.AttributeName == 'RoomSize'" v-for="(item,index) in sortAttributeItems"
						 :key="index">
							 <view>
								<jiuaiCheckbox :borderStyle="item.tag == '4' ? '1px solid #ff0000' : '1px solid #d1d1d1'" :checked="item.tag == '1'" :color="item.tag == '4' ? '#C0C0C0' : '#007bfa'" style='margin-right: 10rpx; font-size: 28rpx;' @change='radioChange' domId="roomSizeMask,bedTypeMask" :value="JSON.stringify(item)" :disabled="item.tag == '3' || item.tag == '4'" :class="[item.tag == '4' ? ['iconfont','jiuai-check-icon','icon-xuanzhong','active']: '']"></jiuaiCheckbox>
								<label class="label-2-text" :for="item.AttributeValue">
									<!-- <text style="overflow: auto; overflow-x: hidden; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</text> -->
									<!-- <view style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</view> -->
									<view v-if="item.Bundle != undefined && item.Bundle.length > 0" style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">
										{{item.AttributeValue}}
										<view style="margin-left: 8rpx; line-height: 48rpx; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 20rpx;color: gray;">
											({{item.Bundle[0].AttributeValue + ' '}}
											<view style="margin-left: 8rpx; line-height: 48rpx; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 26rpx;color: green;display: contents;font-weight: bold;">included</view>)
										</view>
									</view>
									<view v-else style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</view>
								</label>
							</view>
							<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
								<view class="text" style="line-height: 50rpx; height: 50rpx;font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.tag == '4' ? 'included ' : '+ $'+item.Price}}</view>
							</view>
						</view>
					</view>
				</view>
				
				<!-- BedType -->
				<view :class="ifMask['bedTypeMask'] ? 'overlay': 'lightbox'" style="width: 702rpx;" v-if="ifShowBedType && bedTypeItemsLength">
					<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
						<view class="text" style="margin-left: 25rpx ;font-weight: bold; font-family: Centra No1;font-size: 28rpx;font-style: normal;color: #001959;">Bed
							type</view>
						<view v-show="!ifMask['bedTypeMask']" class="uni-flex uni-row" style="-webkit-justify-content: flex-end;justify-content: flex-end;">
							<view class="text" style="color: #005AEB; " @click="go_prev('bedTypeMask','roomSizeMask')">prev</view>
							<view class="text" style="color: #005AEB; margin-right: 28rpx;" @click="go_next('bedTypeMask', 'breakfastMask', 'button')">next</view>
						</view>
					</view>
					<view class="uni-form-item uni-column">
						<view class="uni-list-cell-lennon uni-list-cell-pd" :class="[item.tag == '3' ? 'not_selectable_style' : '']" v-if="item.AttributeName == 'BedType'" v-for="(item,index) in sortAttributeItems"
						 :key="index">
							 <view>
								<jiuaiCheckbox :borderStyle="item.tag == '4' ? '1px solid #ff0000' : '1px solid #d1d1d1'" :checked="item.tag == '1'" :color="item.tag == '4' ? '#C0C0C0' : '#007bfa'" style='margin-right: 10rpx; font-size: 28rpx;' @change='radioChange' domId="bedTypeMask,breakfastMask" :value="JSON.stringify(item)" :disabled="item.tag == '3' || item.tag == '4'" :class="[item.tag == '4' ? ['iconfont','jiuai-check-icon','icon-xuanzhong','active']: '']"></jiuaiCheckbox>
								<label class="label-2-text" :for="item.AttributeValue">
									<!-- <text style="overflow: auto; overflow-x: hidden; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</text> -->
									<!-- <view style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</view> -->
									<view v-if="item.Bundle != undefined && item.Bundle.length > 0" style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">
										{{item.AttributeValue}}
										<view style="margin-left: 8rpx; line-height: 48rpx; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 20rpx;color: gray;">
											({{item.Bundle[0].AttributeValue + ' '}}
											<view style="margin-left: 8rpx; line-height: 48rpx; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 26rpx;color: green;display: contents;font-weight: bold;">included</view>)
										</view>
									</view>
									<view v-else style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</view>
								</label>
							</view>
							<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
								<view class="text" style="line-height: 50rpx; height: 50rpx;font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.tag == '4' ? 'included ' : '+ $'+item.Price}}</view>
							</view>
						</view>
					</view>
				</view>
				
				<!-- Breakfast -->
				<view :class="ifMask['breakfastMask'] ? 'overlay': 'lightbox'" style="width: 702rpx;" v-if="ifShowBreakfast && breakfastItemsLength">
					<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
						<view class="text" style="margin-left: 25rpx ;font-weight: bold; font-family: Centra No1;font-size: 28rpx;font-style: normal;color: #001959;">Breakfast</view>
						<view v-show="!ifMask['breakfastMask']" class="uni-flex uni-row" style="-webkit-justify-content: flex-end;justify-content: flex-end;">
							<view class="text" style="color: #005AEB; " @click="go_prev('breakfastMask','bedTypeMask')">prev</view>
							<view class="text" style="color: #005AEB; margin-right: 28rpx;" @click="go_next('breakfastMask', 'freeCancellationMask', 'button')">next</view>
						</view>
					</view>
					<view class="uni-form-item uni-column">
						<view class="uni-list-cell-lennon uni-list-cell-pd" :class="[item.tag == '3' ? 'not_selectable_style' : '']" v-if="item.AttributeName == 'Breakfast'" v-for="(item,index) in sortAttributeItems"
						 :key="index">
							 <view>
								<jiuaiCheckbox :borderStyle="item.tag == '4' ? '1px solid #ff0000' : '1px solid #d1d1d1'" :checked="item.tag == '1'" :color="item.tag == '4' ? '#C0C0C0' : '#007bfa'" style='margin-right: 10rpx; font-size: 28rpx;' @change='radioChange' domId="breakfastMask,freeCancellationMask" :value="JSON.stringify(item)" :disabled="item.tag == '3' || item.tag == '4'" :class="[item.tag == '4' ? ['iconfont','jiuai-check-icon','icon-xuanzhong','active']: '']"></jiuaiCheckbox>
								<label class="label-2-text" :for="item.AttributeValue">
									<!-- <text style="overflow: auto; overflow-x: hidden; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</text> -->
									<!-- <view style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</view> -->
									<view v-if="item.Bundle != undefined && item.Bundle.length > 0" style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">
										{{item.AttributeValue}}
										<view style="margin-left: 8rpx; line-height: 48rpx; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 20rpx;color: gray;">
											({{item.Bundle[0].AttributeValue + ' '}}
											<view style="margin-left: 8rpx; line-height: 48rpx; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 26rpx;color: green;display: contents;font-weight: bold;">included</view>)
										</view>
									</view>
									<view v-else style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</view>
								</label>
							</view>
							<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
								<view class="text" style="line-height: 50rpx; height: 50rpx;font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.tag == '4' ? 'included ' : '+ $'+item.Price}}</view>
							</view>
						</view>
					</view>
				</view>
				
				<!-- FreeCancellation -->
				<view :class="ifMask['freeCancellationMask'] ? 'overlay': 'lightbox'" style="width: 702rpx;" v-if="ifShowFreeCancellation && freeCancellationItemsLength">
					<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
						<view class="text" style="margin-left: 25rpx ;font-weight: bold; font-family: Centra No1;font-size: 28rpx;font-style: normal;color: #001959;">FreeCancellation</view>
						<view v-show="!ifMask['freeCancellationMask']" class="uni-flex uni-row" style="-webkit-justify-content: flex-end;justify-content: flex-end;">
							<view class="text" style="color: #005AEB; margin-right: 28rpx;" @click="go_prev('freeCancellationMask','breakfastMask')">prev</view>
						</view>
					</view>
					<view class="uni-form-item uni-column">
						<view class="uni-list-cell-lennon uni-list-cell-pd" :class="[item.tag == '3' ? 'not_selectable_style' : '']" v-if="item.AttributeName == 'FreeCancellation'" v-for="(item,index) in sortAttributeItems"
						 :key="index">
							 <view>
								<jiuaiCheckbox :borderStyle="item.tag == '4' ? '1px solid #ff0000' : '1px solid #d1d1d1'" :checked="item.tag == '1'" :color="item.tag == '4' ? '#C0C0C0' : '#007bfa'" style='margin-right: 10rpx; font-size: 28rpx;' @change='radioChange' domId="freeCancellationMask," :value="JSON.stringify(item)" :disabled="item.tag == '3' || item.tag == '4'" :class="[item.tag == '4' ? ['iconfont','jiuai-check-icon','icon-xuanzhong','active']: '']"></jiuaiCheckbox>
								<label class="label-2-text" :for="item.AttributeValue">
									<!-- <text style="overflow: auto; overflow-x: hidden; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</text> -->
									<!-- <view style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</view> -->
									<view v-if="item.Bundle != undefined && item.Bundle.length > 0" style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">
										{{item.AttributeValue}}
										<view style="margin-left: 8rpx; line-height: 48rpx; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 20rpx;color: gray;">
											({{item.Bundle[0].AttributeValue + ' '}}
											<view style="margin-left: 8rpx; line-height: 48rpx; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 26rpx;color: green;display: contents;font-weight: bold;">included</view>)
										</view>
									</view>
									<view v-else style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</view>
								</label>
							</view>
							<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
								<view class="text" style="line-height: 50rpx; height: 50rpx;font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.tag == '4' ? 'included ' : '+ $'+item.Price}}</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view v-if="radio_checked_value.AttributeName == 'Breakfast'">
				<!-- Breakfast -->
				<view :class="ifMask['breakfastMask'] ? 'overlay': 'lightbox'" style="width: 702rpx;" v-if="ifShowBreakfast && breakfastItemsLength">
					<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
						<view class="text" style="margin-left: 25rpx ;font-weight: bold; font-family: Centra No1;font-size: 28rpx;font-style: normal;color: #001959;">Breakfast</view>
						<view v-show="!ifMask['breakfastMask']" class="uni-flex uni-row" style="-webkit-justify-content: flex-end;justify-content: flex-end;">
							<!-- <view class="text" style="color: #005AEB; " @click="go_prev('breakfastMask','roomViewMask')">prev</view> -->
							<view class="text" style="color: #005AEB; margin-right: 28rpx;" @click="go_next('breakfastMask', 'roomSizeMask', 'button')">next</view>
						</view>
					</view>
					<view class="uni-form-item uni-column">
						<view class="uni-list-cell-lennon uni-list-cell-pd" :class="[item.tag == '3' ? 'not_selectable_style' : '']" v-if="item.AttributeName == 'Breakfast'" v-for="(item,index) in sortAttributeItems"
						 :key="index">
							 <view>
								<jiuaiCheckbox :borderStyle="item.tag == '4' ? '1px solid #ff0000' : '1px solid #d1d1d1'" :checked="item.tag == '1'" :color="item.tag == '4' ? '#C0C0C0' : '#007bfa'" style='margin-right: 10rpx; font-size: 28rpx;' @change='radioChange' domId="breakfastMask,roomSizeMask" :value="JSON.stringify(item)" :disabled="item.tag == '3' || item.tag == '4'" :class="[item.tag == '4' ? ['iconfont','jiuai-check-icon','icon-xuanzhong','active']: '']"></jiuaiCheckbox>
								<label class="label-2-text" :for="item.AttributeValue">
									<!-- <text style="overflow: auto; overflow-x: hidden; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</text> -->
									<!-- <view style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</view> -->
									<view v-if="item.Bundle != undefined && item.Bundle.length > 0" style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">
										{{item.AttributeValue}}
										<view style="margin-left: 8rpx; line-height: 48rpx; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 20rpx;color: gray;">
											({{item.Bundle[0].AttributeValue + ' '}}
											<view style="margin-left: 8rpx; line-height: 48rpx; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 26rpx;color: green;display: contents;font-weight: bold;">included</view>)
										</view>
									</view>
									<view v-else style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</view>
								</label>
							</view>
							<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
								<view class="text" style="line-height: 50rpx; height: 50rpx;font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.tag == '4' ? 'included ' : '+ $'+item.Price}}</view>
							</view>
						</view>
					</view>
				</view>
				<!-- RoomSize -->
				<view :class="ifMask['roomSizeMask'] ? 'overlay': 'lightbox'" style="width: 702rpx;" v-if="ifShowRoomSize && roomSizeItemsLength">
					<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
						<view class="text" style="margin-left: 25rpx ;font-weight: bold; font-family: Centra No1;font-size: 28rpx;font-style: normal;color: #001959;">Room
							Size ( m² )</view>
						<view v-show="!ifMask['roomSizeMask']" class="uni-flex uni-row" style="-webkit-justify-content: flex-end;justify-content: flex-end;">
							<view class="text" style="color: #005AEB; " @click="go_prev('roomSizeMask','breakfastMask')">prev</view>
							<view class="text" style="color: #005AEB; margin-right: 28rpx;" @click="go_next('roomSizeMask', 'bedTypeMask', 'button')">next</view>
						</view>
					</view>
					<view class="uni-form-item uni-column">
						<view class="uni-list-cell-lennon uni-list-cell-pd" :class="[item.tag == '3' ? 'not_selectable_style' : '']" v-if="item.AttributeName == 'RoomSize'" v-for="(item,index) in sortAttributeItems"
						 :key="index">
							 <view>
								<jiuaiCheckbox :borderStyle="item.tag == '4' ? '1px solid #ff0000' : '1px solid #d1d1d1'" :checked="item.tag == '1'" :color="item.tag == '4' ? '#C0C0C0' : '#007bfa'" style='margin-right: 10rpx; font-size: 28rpx;' @change='radioChange' domId="roomSizeMask,bedTypeMask" :value="JSON.stringify(item)" :disabled="item.tag == '3' || item.tag == '4'" :class="[item.tag == '4' ? ['iconfont','jiuai-check-icon','icon-xuanzhong','active']: '']"></jiuaiCheckbox>
								<label class="label-2-text" :for="item.AttributeValue">
									<!-- <text style="overflow: auto; overflow-x: hidden; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</text> -->
									<!-- <view style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</view> -->
									<view v-if="item.Bundle != undefined && item.Bundle.length > 0" style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">
										{{item.AttributeValue}}
										<view style="margin-left: 8rpx; line-height: 48rpx; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 20rpx;color: gray;">
											({{item.Bundle[0].AttributeValue + ' '}}
											<view style="margin-left: 8rpx; line-height: 48rpx; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 26rpx;color: green;display: contents;font-weight: bold;">included</view>)
										</view>
									</view>
									<view v-else style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</view>
								</label>
							</view>
							<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
								<view class="text" style="line-height: 50rpx; height: 50rpx;font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.tag == '4' ? 'included ' : '+ $'+item.Price}}</view>
							</view>
						</view>
					</view>
				</view>
				
				<!-- BedType -->
				<view :class="ifMask['bedTypeMask'] ? 'overlay': 'lightbox'" style="width: 702rpx;" v-if="ifShowBedType && bedTypeItemsLength">
					<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
						<view class="text" style="margin-left: 25rpx ;font-weight: bold; font-family: Centra No1;font-size: 28rpx;font-style: normal;color: #001959;">Bed
							type</view>
						<view v-show="!ifMask['bedTypeMask']" class="uni-flex uni-row" style="-webkit-justify-content: flex-end;justify-content: flex-end;">
							<view class="text" style="color: #005AEB; " @click="go_prev('bedTypeMask','roomSizeMask')">prev</view>
							<view class="text" style="color: #005AEB; margin-right: 28rpx;" @click="go_next('bedTypeMask', 'roomViewMask', 'button')">next</view>
						</view>
					</view>
					<view class="uni-form-item uni-column">
						<view class="uni-list-cell-lennon uni-list-cell-pd" :class="[item.tag == '3' ? 'not_selectable_style' : '']" v-if="item.AttributeName == 'BedType'" v-for="(item,index) in sortAttributeItems"
						 :key="index">
							 <view>
								<jiuaiCheckbox :borderStyle="item.tag == '4' ? '1px solid #ff0000' : '1px solid #d1d1d1'" :checked="item.tag == '1'" :color="item.tag == '4' ? '#C0C0C0' : '#007bfa'" style='margin-right: 10rpx; font-size: 28rpx;' @change='radioChange' domId="bedTypeMask,roomViewMask" :value="JSON.stringify(item)" :disabled="item.tag == '3' || item.tag == '4'" :class="[item.tag == '4' ? ['iconfont','jiuai-check-icon','icon-xuanzhong','active']: '']"></jiuaiCheckbox>
								<label class="label-2-text" :for="item.AttributeValue">
									<!-- <text style="overflow: auto; overflow-x: hidden; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</text> -->
									<!-- <view style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</view> -->
									<view v-if="item.Bundle != undefined && item.Bundle.length > 0" style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">
										{{item.AttributeValue}}
										<view style="margin-left: 8rpx; line-height: 48rpx; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 20rpx;color: gray;">
											({{item.Bundle[0].AttributeValue + ' '}}
											<view style="margin-left: 8rpx; line-height: 48rpx; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 26rpx;color: green;display: contents;font-weight: bold;">included</view>)
										</view>
									</view>
									<view v-else style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</view>
								</label>
							</view>
							<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
								<view class="text" style="line-height: 50rpx; height: 50rpx;font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.tag == '4' ? 'included ' : '+ $'+item.Price}}</view>
							</view>
						</view>
					</view>
				</view>
				
				<!-- RoomView -->
				<view :class="ifMask['roomViewMask'] ? 'overlay': 'lightbox'" style="width: 702rpx;" v-if="ifShowView && viewItemsLength">
					<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
						<view class="text" style="margin-left: 25rpx ;font-weight: bold; font-family: Centra No1;font-size: 28rpx;font-style: normal;color: #001959;">View</view>
						<view v-show="!ifMask['roomViewMask']" class="uni-flex uni-row" style="-webkit-justify-content: flex-end;justify-content: flex-end;">
							<view class="text" style="color: #005AEB; " @click="go_prev('roomViewMask', 'bedTypeMask')">prev</view>
							<view class="text" style="color: #005AEB; margin-right: 28rpx;" @click="go_next('roomViewMask', 'freeCancellationMask', 'button')">next</view>
						</view>
					</view>
					<view class="uni-form-item uni-column">
						<view class="uni-list-cell-lennon uni-list-cell-pd" :class="[item.tag == '3' ? 'not_selectable_style' : '']" v-if="item.AttributeName == 'RoomView'" v-for="(item,index) in sortAttributeItems"
						 :key="index">
							 <view>
								<jiuaiCheckbox :borderStyle="item.tag == '4' ? '1px solid #ff0000' : '1px solid #d1d1d1'" :checked="item.tag == '1'" :color="item.tag == '4' ? '#C0C0C0' : '#007bfa'" style='margin-right: 10rpx; font-size: 28rpx;' @change='radioChange' domId="roomViewMask,freeCancellationMask" :value="JSON.stringify(item)" :disabled="item.tag == '3' || item.tag == '4'" :class="[item.tag == '4' ? ['iconfont','jiuai-check-icon','icon-xuanzhong','active']: '']"></jiuaiCheckbox>
								<label class="label-2-text" :for="item.AttributeValue">
									<!-- <text style="overflow: auto; overflow-x: hidden; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</text> -->
									<!-- <view style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</view> -->
									<view v-if="item.Bundle != undefined && item.Bundle.length > 0" style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">
										{{item.AttributeValue}}
										<view style="margin-left: 8rpx; line-height: 48rpx; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 20rpx;color: gray;">
											({{item.Bundle[0].AttributeValue + ' '}}
											<view style="margin-left: 8rpx; line-height: 48rpx; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 26rpx;color: green;display: contents;font-weight: bold;">included</view>)
										</view>
									</view>
									<view v-else style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</view>
								</label>
							</view>
							<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
								<view class="text" style="line-height: 50rpx; height: 50rpx;font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.tag == '4' ? 'included ' : '+ $'+item.Price}}</view>
							</view>
						</view>
					</view>
				</view>
				
				<!-- FreeCancellation -->
				<view :class="ifMask['freeCancellationMask'] ? 'overlay': 'lightbox'" style="width: 702rpx;" v-if="ifShowFreeCancellation && freeCancellationItemsLength">
					<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
						<view class="text" style="margin-left: 25rpx ;font-weight: bold; font-family: Centra No1;font-size: 28rpx;font-style: normal;color: #001959;">FreeCancellation</view>
						<view v-show="!ifMask['freeCancellationMask']" class="uni-flex uni-row" style="-webkit-justify-content: flex-end;justify-content: flex-end;">
							<view class="text" style="color: #005AEB; margin-right: 28rpx;" @click="go_prev('freeCancellationMask','roomViewMask')">prev</view>
						</view>
					</view>
					<view class="uni-form-item uni-column">
						<view class="uni-list-cell-lennon uni-list-cell-pd" :class="[item.tag == '3' ? 'not_selectable_style' : '']" v-if="item.AttributeName == 'FreeCancellation'" v-for="(item,index) in sortAttributeItems"
						 :key="index">
							 <view>
								<jiuaiCheckbox :borderStyle="item.tag == '4' ? '1px solid #ff0000' : '1px solid #d1d1d1'" :checked="item.tag == '1'" :color="item.tag == '4' ? '#C0C0C0' : '#007bfa'" style='margin-right: 10rpx; font-size: 28rpx;' @change='radioChange' domId="freeCancellationMask," :value="JSON.stringify(item)" :disabled="item.tag == '3' || item.tag == '4'" :class="[item.tag == '4' ? ['iconfont','jiuai-check-icon','icon-xuanzhong','active']: '']"></jiuaiCheckbox>
								<label class="label-2-text" :for="item.AttributeValue">
									<!-- <text style="overflow: auto; overflow-x: hidden; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</text> -->
									<!-- <view style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</view> -->
									<view v-if="item.Bundle != undefined && item.Bundle.length > 0" style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">
										{{item.AttributeValue}}
										<view style="margin-left: 8rpx; line-height: 48rpx; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 20rpx;color: gray;">
											({{item.Bundle[0].AttributeValue + ' '}}
											<view style="margin-left: 8rpx; line-height: 48rpx; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 26rpx;color: green;display: contents;font-weight: bold;">included</view>)
										</view>
									</view>
									<view v-else style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</view>
								</label>
							</view>
							<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
								<view class="text" style="line-height: 50rpx; height: 50rpx;font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.tag == '4' ? 'included ' : '+ $'+item.Price}}</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view v-if="radio_checked_value.AttributeName == 'FreeCancellation'">
				<!-- FreeCancellation -->
				<view :class="ifMask['freeCancellationMask'] ? 'overlay': 'lightbox'" style="width: 702rpx;" v-if="ifShowFreeCancellation && freeCancellationItemsLength">
					<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
						<view class="text" style="margin-left: 25rpx ;font-weight: bold; font-family: Centra No1;font-size: 28rpx;font-style: normal;color: #001959;">FreeCancellation</view>
						<view v-show="!ifMask['freeCancellationMask']" class="uni-flex uni-row" style="-webkit-justify-content: flex-end;justify-content: flex-end;">
							<view class="text" style="color: #005AEB; margin-right: 28rpx;" @click="go_next('freeCancellationMask', 'roomSizeMask', 'button')">next</view>
						</view>
					</view>
					<view class="uni-form-item uni-column">
						<view class="uni-list-cell-lennon uni-list-cell-pd" :class="[item.tag == '3' ? 'not_selectable_style' : '']" v-if="item.AttributeName == 'FreeCancellation'" v-for="(item,index) in sortAttributeItems"
						 :key="index">
							 <view>
								<jiuaiCheckbox :borderStyle="item.tag == '4' ? '1px solid #ff0000' : '1px solid #d1d1d1'" :checked="item.tag == '1'" :color="item.tag == '4' ? '#C0C0C0' : '#007bfa'" style='margin-right: 10rpx; font-size: 28rpx;' @change='radioChange' domId="freeCancellationMask,roomSizeMask" :value="JSON.stringify(item)" :disabled="item.tag == '3' || item.tag == '4'" :class="[item.tag == '4' ? ['iconfont','jiuai-check-icon','icon-xuanzhong','active']: '']"></jiuaiCheckbox>
								<label class="label-2-text" :for="item.AttributeValue">
									<!-- <text style="overflow: auto; overflow-x: hidden; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</text> -->
									<!-- <view style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</view> -->
									<view v-if="item.Bundle != undefined && item.Bundle.length > 0" style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">
										{{item.AttributeValue}}
										<view style="margin-left: 8rpx; line-height: 48rpx; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 20rpx;color: gray;">
											({{item.Bundle[0].AttributeValue + ' '}}
											<view style="margin-left: 8rpx; line-height: 48rpx; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 26rpx;color: green;display: contents;font-weight: bold;">included</view>)
										</view>
									</view>
									<view v-else style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</view>
								</label>
							</view>
							<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
								<view class="text" style="line-height: 50rpx; height: 50rpx;font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.tag == '4' ? 'included ' : '+ $'+item.Price}}</view>
							</view>
						</view>
					</view>
				</view>
				<!-- RoomSize -->
				<view :class="ifMask['roomSizeMask'] ? 'overlay': 'lightbox'" style="width: 702rpx;" v-if="ifShowRoomSize && roomSizeItemsLength">
					<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
						<view class="text" style="margin-left: 25rpx ;font-weight: bold; font-family: Centra No1;font-size: 28rpx;font-style: normal;color: #001959;">Room
							Size ( m² )</view>
						<view v-show="!ifMask['roomSizeMask']" class="uni-flex uni-row" style="-webkit-justify-content: flex-end;justify-content: flex-end;">
							<view class="text" style="color: #005AEB; margin-right: 28rpx;" @click="go_prev('roomSizeMask','freeCancellationMask')">prev</view>
							<view class="text" style="color: #005AEB; margin-right: 28rpx;" @click="go_next('roomSizeMask', 'bedTypeMask', 'button')">next</view>
						</view>
					</view>
					<view class="uni-form-item uni-column">
						<view class="uni-list-cell-lennon uni-list-cell-pd" :class="[item.tag == '3' ? 'not_selectable_style' : '']" v-if="item.AttributeName == 'RoomSize'" v-for="(item,index) in sortAttributeItems"
						 :key="index">
							 <view>
								<jiuaiCheckbox :borderStyle="item.tag == '4' ? '1px solid #ff0000' : '1px solid #d1d1d1'" :checked="item.tag == '1'" :color="item.tag == '4' ? '#C0C0C0' : '#007bfa'" style='margin-right: 10rpx; font-size: 28rpx;' @change='radioChange' domId="roomSizeMask,bedTypeMask" :value="JSON.stringify(item)" :disabled="item.tag == '3' || item.tag == '4'" :class="[item.tag == '4' ? ['iconfont','jiuai-check-icon','icon-xuanzhong','active']: '']"></jiuaiCheckbox>
								<label class="label-2-text" :for="item.AttributeValue">
									<!-- <text style="overflow: auto; overflow-x: hidden; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</text> -->
									<!-- <view style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</view> -->
									<view v-if="item.Bundle != undefined && item.Bundle.length > 0" style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">
										{{item.AttributeValue}}
										<view style="margin-left: 8rpx; line-height: 48rpx; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 20rpx;color: gray;">
											({{item.Bundle[0].AttributeValue + ' '}}
											<view style="margin-left: 8rpx; line-height: 48rpx; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 26rpx;color: green;display: contents;font-weight: bold;">included</view>)
										</view>
									</view>
									<view v-else style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</view>
								</label>
							</view>
							<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
								<view class="text" style="line-height: 50rpx; height: 50rpx;font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.tag == '4' ? 'included ' : '+ $'+item.Price}}</view>
							</view>
						</view>
					</view>
				</view>
				
				<!-- BedType -->
				<view :class="ifMask['bedTypeMask'] ? 'overlay': 'lightbox'" style="width: 702rpx;" v-if="ifShowBedType && bedTypeItemsLength">
					<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
						<view class="text" style="margin-left: 25rpx ;font-weight: bold; font-family: Centra No1;font-size: 28rpx;font-style: normal;color: #001959;">Bed
							type</view>
						<view v-show="!ifMask['bedTypeMask']" class="uni-flex uni-row" style="-webkit-justify-content: flex-end;justify-content: flex-end;">
							<view class="text" style="color: #005AEB; " @click="go_prev('bedTypeMask','roomSizeMask')">prev</view>
							<view class="text" style="color: #005AEB; margin-right: 28rpx;" @click="go_next('bedTypeMask', 'roomViewMask', 'button')">next</view>
						</view>
					</view>
					<view class="uni-form-item uni-column">
						<view class="uni-list-cell-lennon uni-list-cell-pd" :class="[item.tag == '3' ? 'not_selectable_style' : '']" v-if="item.AttributeName == 'BedType'" v-for="(item,index) in sortAttributeItems"
						 :key="index">
							 <view>
								<jiuaiCheckbox :borderStyle="item.tag == '4' ? '1px solid #ff0000' : '1px solid #d1d1d1'" :checked="item.tag == '1'" :color="item.tag == '4' ? '#C0C0C0' : '#007bfa'" style='margin-right: 10rpx; font-size: 28rpx;' @change='radioChange' domId="bedTypeMask,roomViewMask" :value="JSON.stringify(item)" :disabled="item.tag == '3' || item.tag == '4'" :class="[item.tag == '4' ? ['iconfont','jiuai-check-icon','icon-xuanzhong','active']: '']"></jiuaiCheckbox>
								<label class="label-2-text" :for="item.AttributeValue">
									<!-- <text style="overflow: auto; overflow-x: hidden; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</text> -->
									<!-- <view style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</view> -->
									<view v-if="item.Bundle != undefined && item.Bundle.length > 0" style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">
										{{item.AttributeValue}}
										<view style="margin-left: 8rpx; line-height: 48rpx; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 20rpx;color: gray;">
											({{item.Bundle[0].AttributeValue + ' '}}
											<view style="margin-left: 8rpx; line-height: 48rpx; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 26rpx;color: green;display: contents;font-weight: bold;">included</view>)
										</view>
									</view>
									<view v-else style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</view>
								</label>
							</view>
							<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
								<view class="text" style="line-height: 50rpx; height: 50rpx;font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.tag == '4' ? 'included ' : '+ $'+item.Price}}</view>
							</view>
						</view>
					</view>
				</view>
				
				<!-- RoomView -->
				<view :class="ifMask['roomViewMask'] ? 'overlay': 'lightbox'" style="width: 702rpx;" v-if="ifShowView && viewItemsLength">
					<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
						<view class="text" style="margin-left: 25rpx ;font-weight: bold; font-family: Centra No1;font-size: 28rpx;font-style: normal;color: #001959;">View</view>
						<view v-show="!ifMask['roomViewMask']" class="uni-flex uni-row" style="-webkit-justify-content: flex-end;justify-content: flex-end;">
							<view class="text" style="color: #005AEB; " @click="go_prev('roomViewMask', 'bedTypeMask')">prev</view>
							<view class="text" style="color: #005AEB; margin-right: 28rpx;" @click="go_next('roomViewMask', 'breakfastMask', 'button')">next</view>
						</view>
					</view>
					<view class="uni-form-item uni-column">
						<view class="uni-list-cell-lennon uni-list-cell-pd" :class="[item.tag == '3' ? 'not_selectable_style' : '']" v-if="item.AttributeName == 'RoomView'" v-for="(item,index) in sortAttributeItems"
						 :key="index">
							 <view>
								<jiuaiCheckbox :borderStyle="item.tag == '4' ? '1px solid #ff0000' : '1px solid #d1d1d1'" :checked="item.tag == '1'" :color="item.tag == '4' ? '#C0C0C0' : '#007bfa'" style='margin-right: 10rpx; font-size: 28rpx;' @change='radioChange' domId="roomViewMask,breakfastMask" :value="JSON.stringify(item)" :disabled="item.tag == '3' || item.tag == '4'" :class="[item.tag == '4' ? ['iconfont','jiuai-check-icon','icon-xuanzhong','active']: '']"></jiuaiCheckbox>
								<label class="label-2-text" :for="item.AttributeValue">
									<!-- <text style="overflow: auto; overflow-x: hidden; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</text> -->
									<!-- <view style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</view> -->
									<view v-if="item.Bundle != undefined && item.Bundle.length > 0" style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">
										{{item.AttributeValue}}
										<view style="margin-left: 8rpx; line-height: 48rpx; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 20rpx;color: gray;">
											({{item.Bundle[0].AttributeValue + ' '}}
											<view style="margin-left: 8rpx; line-height: 48rpx; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 26rpx;color: green;display: contents;font-weight: bold;">included</view>)
										</view>
									</view>
									<view v-else style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</view>
								</label>
							</view>
							<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
								<view class="text" style="line-height: 50rpx; height: 50rpx;font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.tag == '4' ? 'included ' : '+ $'+item.Price}}</view>
							</view>
						</view>
					</view>
				</view>
				
				<!-- Breakfast -->
				<view :class="ifMask['breakfastMask'] ? 'overlay': 'lightbox'" style="width: 702rpx;" v-if="ifShowBreakfast && breakfastItemsLength">
					<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
						<view class="text" style="margin-left: 25rpx ;font-weight: bold; font-family: Centra No1;font-size: 28rpx;font-style: normal;color: #001959;">Breakfast</view>
						<view v-show="!ifMask['breakfastMask']" class="uni-flex uni-row" style="-webkit-justify-content: flex-end;justify-content: flex-end;">
							<view class="text" style="color: #005AEB; " @click="go_prev('breakfastMask','roomViewMask')">prev</view>
						</view>
					</view>
					<view class="uni-form-item uni-column">
						<view class="uni-list-cell-lennon uni-list-cell-pd" :class="[item.tag == '3' ? 'not_selectable_style' : '']" v-if="item.AttributeName == 'Breakfast'" v-for="(item,index) in sortAttributeItems"
						 :key="index">
							 <view>
								<jiuaiCheckbox :borderStyle="item.tag == '4' ? '1px solid #ff0000' : '1px solid #d1d1d1'" :checked="item.tag == '1'" :color="item.tag == '4' ? '#C0C0C0' : '#007bfa'" style='margin-right: 10rpx; font-size: 28rpx;' @change='radioChange' domId="breakfastMask," :value="JSON.stringify(item)" :disabled="item.tag == '3' || item.tag == '4'" :class="[item.tag == '4' ? ['iconfont','jiuai-check-icon','icon-xuanzhong','active']: '']"></jiuaiCheckbox>
								<label class="label-2-text" :for="item.AttributeValue">
									<!-- <text style="overflow: auto; overflow-x: hidden; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</text> -->
									<!-- <view style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</view> -->
									<view v-if="item.Bundle != undefined && item.Bundle.length > 0" style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">
										{{item.AttributeValue}}
										<view style="margin-left: 8rpx; line-height: 48rpx; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 20rpx;color: gray;">
											({{item.Bundle[0].AttributeValue + ' '}}
											<view style="margin-left: 8rpx; line-height: 48rpx; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 26rpx;color: green;display: contents;font-weight: bold;">included</view>)
										</view>
									</view>
									<view v-else style="display: inline-flex; width: 380rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.AttributeValue}}</view>
								</label>
							</view>
							<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
								<view class="text" style="line-height: 50rpx; height: 50rpx;font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;" :class="[item.tag == '3' ? 'not_selectable_style' : '']">{{item.tag == '4' ? 'included ' : '+ $'+item.Price}}</view>
							</view>
						</view>
					</view>
				</view>
				
				
			</view>
			
			<view class="uni-flex uni-row" style="margin-bottom: 24rpx; margin-top: 10rpx;">
				<button :loading="loading" :class="[IsExistFinal == 'false' || IsExistFinal == false ? 'not_selectable_style' : '']" style="width: 315rpx; height: 72rpx; line-height: 72rpx; color: #FFFFFF; background: #0044ea; font-size: 28rpx;font-weight: bold; display:block;margin:0 auto;"
				 @click="confirm_selected">
					Continue
				</button>
				<button style="width: 315rpx; height: 72rpx; line-height: 72rpx; color: #005AEB; background: #FFFFFF; font-size: 28rpx;font-weight: bold; display:block;margin:0 auto;"
				 @click="cancel_selected">
					Clear selections
				</button>
			</view>
		</view>
		<dialog-bar v-model="showDialog" :type="dialogType" :title="dialogTitle" :content="dialogContent" v-on:cancel="clickCancel()" @danger="clickDanger()" @confirm="clickConfirm()" :dangerText="dialogDangerText" :confirmText="dialogConfirmText"></dialog-bar>
	</view>
</template>

<script>
	import Vue from 'vue'
	// import callAbsModel from '@/json/callAbsModel.json';
	import jiuaiCheckbox from "@/components/jiuai-checkbox/jiuai-checkbox.vue"
	export default {
		components:{
			jiuaiCheckbox
		},
		data() {
			return {
				BaseRoom: '',
				FinalRoom: '',
				showDialog: false,
				dialogTitle: 'Notes',
				dialogContent: 'Error',
				dialogDangerText: 'Sure',
				dialogConfirmText: 'Confirm',
				dialogType: 'default',
				ifMask:{
					'accessibilityMask': true,
					'roomSizeMask': false,
					'bedTypeMask': true,
					'roomViewMask': true,
					'breakfastMask': true,
					'freeCancellationMask': true
				},
				radio_checked_values: [],
				IsExistFinal: false,
				loading: false,
				button_not_selectable_style_open: false,
				ifShowAccessibility: true,
				ifShowBedType: true,
				ifShowRoomSize: true,
				ifShowView: true,
				ifShowBreakfast: true,
				ifShowFreeCancellation: true,
				check_in_date: '',
				check_out_date: '',
				indicatorDots: false,
				autoplay: true,
				interval: 5000,
				duration: 500,
				showDataValue: [],
				call_model_data: '',
				radio_checked_value: '',
				build_second_page_data: '',
				accessibilityItemsLength: 1,
				bedTypeItemsLength: 1,
				roomSizeItemsLength: 1,
				viewItemsLength: 1,
				breakfastItemsLength: 1,
				freeCancellationItemsLength: 1
			}
		},
		computed:{
			sortAttributeItems(){
				return this.sortByKey(this.showDataValue,'Price')
			}
		},
		onLoad(options) {
			this.check_in_date = options.check_in_date
			this.check_out_date = options.check_out_date
			console.log("onload options.IsExistFinal::"+options.IsExistFinal)
			this.IsExistFinal = options.IsExistFinal
			this.FinalRoom = JSON.parse(decodeURIComponent(options.FinalRoom))
			this.BaseRoom = JSON.parse(decodeURIComponent(options.BaseRoom))
			this.showDataValue = JSON.parse(decodeURIComponent(options.showDataValue));
			this.radio_checked_value = JSON.parse(decodeURIComponent(options.radio_checked_value));
			this.call_model_data = JSON.parse(decodeURIComponent(options.call_model_data));
			this.build_second_page_data = JSON.parse(decodeURIComponent(options.build_second_page_data));
			if(this.radio_checked_value.ID != undefined && this.radio_checked_value.ID != ''){
				this.radio_checked_values.push(this.radio_checked_value.ID)
			}
			// console.log("onload this.radio_checked_value::"+JSON.stringify(this.radio_checked_value))
			if(this.radio_checked_value.AttributeName == 'RoomSize'){
				this.ifMask = {
					'accessibilityMask': true,
					'roomSizeMask': false,
					'bedTypeMask': true,
					'roomViewMask': true,
					'breakfastMask': true,
					'freeCancellationMask': true
				}
			}
			if(this.radio_checked_value.AttributeName == 'BedType'){
				this.ifMask={
					'accessibilityMask': true,
					'roomSizeMask': true,
					'bedTypeMask': false,
					'roomViewMask': true,
					'breakfastMask': true,
					'freeCancellationMask': true
				}
			}
			if(this.radio_checked_value.AttributeName == 'RoomView'){
				this.ifMask={
					'accessibilityMask': true,
					'roomSizeMask': true,
					'bedTypeMask': true,
					'roomViewMask': false,
					'breakfastMask': true,
					'freeCancellationMask': true
				}
			}
			if(this.radio_checked_value.AttributeName == 'Breakfast'){
				this.ifMask={
					'accessibilityMask': true,
					'roomSizeMask': true,
					'bedTypeMask': true,
					'roomViewMask': true,
					'breakfastMask': false,
					'freeCancellationMask': true
				}
			}
			if(this.radio_checked_value.AttributeName == 'FreeCancellation'){
				this.ifMask={
					'accessibilityMask': true,
					'roomSizeMask': true,
					'bedTypeMask': true,
					'roomViewMask': true,
					'breakfastMask': true,
					'freeCancellationMask': false
				}
			}
		},
		methods: {
			go_back() {
				uni.navigateBack({
					delta: 1
				})
			},
			go_next(keyName, nextKeyName, from) {
				var compareStr = keyName.slice(0,-4).toLowerCase();
				console.log("str="+compareStr)
				var tagList = []
				for (var i = 0; i < this.sortAttributeItems.length; i++) {
					if(this.sortAttributeItems[i].AttributeName.toLowerCase() == compareStr){
						tagList.push(this.sortAttributeItems[i].tag)
					}
				}
				console.log("tagList:"+JSON.stringify(tagList))
				if(this.isInArray(tagList, "2") && from == 'button'){
					uni.showToast({
						title: 'please choose',
						icon: 'none',
						mask: true,
						duration: 3000
					})
				}else{
					this.ifMask[keyName] = true
					this.ifMask[nextKeyName] = false
				}
			},
			go_prev(keyName, prevKeyName) {
				var compareStr = keyName.slice(0,-4).toLowerCase();
				console.log("str="+compareStr)
				var tagList = []
				for (var i = 0; i < this.sortAttributeItems.length; i++) {
					if(this.sortAttributeItems[i].AttributeName.toLowerCase() == compareStr){
						tagList.push(this.sortAttributeItems[i].tag)
					}
				}
				console.log("tagList:"+JSON.stringify(tagList))
				if(this.isInArray(tagList, "1")){
					uni.showToast({
						title: 'please deselect',
						icon: 'none',
						mask: true,
						duration: 3000
					})
				}else{
					this.ifMask[keyName] = true
					this.ifMask[prevKeyName] = false
				}
			},
			sortByKey: function(array,key){
				return array.sort(function(a,b){
					var x = a[key]
					var y = b[key]
					return x-y
				})
			},
			isInArray: function(arr,value){
				for(var i = 0; i < arr.length; i++){
					if(value === arr[i]){
						return true;
					}
				}
				return false;
			},
			radioChange: function(e) {
				console.log("e===="+JSON.stringify(e))
				for (var i = 0; i < this.showDataValue.length; i++) {
					if (this.showDataValue[i].tag == '1' && !this.isInArray(this.radio_checked_values,this.showDataValue[i].ID)) {
						this.radio_checked_values.push(this.showDataValue[i].ID)
					}
				}
				var addSelectedValue = ''
				if(e.detail.checked == true){
					if(e.detail.value != '' && e.detail.value != 'undefined'){
						addSelectedValue = JSON.parse(e.detail.value)
						if(!this.isInArray(this.radio_checked_values,addSelectedValue.ID)){
							this.radio_checked_values.push(addSelectedValue.ID)
							console.log("==== true ===="+e.detail.domId)
							if (e.detail.domId != '' && e.detail.domId != undefined){
								var temp = e.detail.domId.split(',')
								console.log("temp=="+JSON.stringify(temp))
								if(temp[1] != '' || temp[1] != undefined){
									this.go_next(temp[0],temp[1],'click')
								}
							}
						}
					}
				}else{
					console.log("==== false ====")
					if(e.detail.value != '' && e.detail.value != 'undefined'){
						addSelectedValue = JSON.parse(e.detail.value)
						if(addSelectedValue.ID != '' || addSelectedValue.ID == 0){
							this.radio_checked_values = this.radio_checked_values.filter(t => t != addSelectedValue.ID)
						}
					}
				}
				var radio_checked_values_str = this.radio_checked_values.join(',')
				console.log("radio_checked_values::::"+radio_checked_values_str)
				// var encode_radio_checked_values = encodeURIComponent(JSON.stringify(this.radio_checked_values))
				var encode_call_model_data = encodeURIComponent(JSON.stringify(this.call_model_data))
				this.call_extract(radio_checked_values_str,encode_call_model_data)
			},
			confirm_selected() {
				console.log("confirm_selected=="+ this.IsExistFinal)
				if (this.IsExistFinal == false || this.IsExistFinal == 'false'){
					console.log("this.IsExistFinal0002")
					this.showDialog = true;
					this.dialogTitle = 'Notes';
					this.dialogContent = 'Please continue to build';
					this.dialogType = 'confirm';
					this.dialogCancelText = 'Confirm';
					return;
				}
				this.loading = true;
				this.button_not_selectable_style_open = true
				
				setTimeout(() => {
					var BaseRoom = encodeURIComponent(JSON.stringify(this.BaseRoom))
					var FinalRoom = encodeURIComponent(JSON.stringify(this.FinalRoom))
					var build_thrid_page_data = encodeURIComponent(JSON.stringify(this.build_second_page_data))
					uni.navigateTo({
						url: 'reserve?check_in_date=' + this.check_in_date + '&check_out_date=' + this.check_out_date +
							'&build_thrid_page_data=' + build_thrid_page_data + '&FinalRoom=' + FinalRoom + '&BaseRoom=' + BaseRoom
					});
					this.button_not_selectable_style_open = false
					this.loading = false;
				}, 2000);
			},
			cancel_selected() {
				this.dialogType = 'danger';
				this.dialogTitle = 'Notes';
				this.dialogContent = 'Are you sure to clear it?';
				this.dialogCancelText = 'Cancel';
				this.dialogDangerText = 'Clear';
				this.showDialog = true;
				return;
			},
			call_extract(selectedAttributes, call_model_data) {
				this.$api.attributeCall({
					select_attribute: selectedAttributes,
					call_model_data: call_model_data
				}).then((res) => {
					if (res.data.code == 1000) {
						console.log('===== thrid call_extract sucess ====')
						if (res.data.data != null && res.data.data != '') {
							console.log("success last")
							this.IsExistFinal = res.data.details.IsExistFinal
							this.showDataValue = res.data.data
							this.FinalRoom = res.data.details.FinalRoom
							// this.data_statistics(this.showDataValue)
							console.log("call_extract this.IsExistFinal==="+this.IsExistFinal)
						} else{
							uni.showToast({
								title: res.data.msg,
								icon: 'none',
								mask: true
							})
							return
						}
					} else{
						uni.showToast({
							title: res.data.msg,
							icon: 'none',
							mask: true
						})
					}
				}).catch((err) => {
					console.log('===== call_extract fail ===='+JSON.stringify(err));
					uni.showToast({
						title: 'call extract fail ',
						icon: 'none',
						mask: true
					});
				})
			},
			data_statistics(showDataValue) {
				var accessibilityItemsLength = 0
				var bedTypeItemsLength = 0
				var roomSizeItemsLength = 0
				var viewItemsLength = 0
				var breakfastItemsLength = 0
				var freeCancellationItemsLength = 0
				for (var i = 0; i < showDataValue.length; i++) {
					var temp = showDataValue[i]
					if (temp.AttributeName == "WheelchairAccessible") {
						accessibilityItemsLength += 1
					}
					if (temp.AttributeName == "BedType") {
						bedTypeItemsLength += 1
					}
					if (temp.AttributeName == "RoomSize") {
						roomSizeItemsLength += 1
					}
					if (temp.AttributeName == "RoomView") {
						viewItemsLength += 1
					}
					if (temp.AttributeName == "Breakfast") {
						breakfastItemsLength += 1
					}
					if (temp.AttributeName == "FreeCancellation") {
						freeCancellationItemsLength += 1
					}
				}
				this.accessibilityItemsLength = accessibilityItemsLength
				this.bedTypeItemsLength = bedTypeItemsLength
				this.roomSizeItemsLength = roomSizeItemsLength
				this.viewItemsLength = viewItemsLength
				this.breakfastItemsLength = breakfastItemsLength
				this.freeCancellationItemsLength = freeCancellationItemsLength
			},
			clickCancel(){
				console.log('点击了取消');
			},
			clickDanger(){
				console.log('这里是danger回调')
				if(this.dialogDangerText === 'Clear'){
					uni.navigateBack({
						delta: 1
					})
				}
			},
			clickConfirm(){
				console.log('点击了confirm');
			}
		}
	}
</script>

<style lang="scss">
	@font-face {
		font-family: 'iconfont';
		src: url('https://at.alicdn.com/t/font_1436714_gz0bwdt261o.eot?t=1569480027812'); /* IE9 */
		src: url('https://at.alicdn.com/t/font_1436714_gz0bwdt261o.eot?t=1569480027812#iefix') format('embedded-opentype'),
			/* IE6-IE8 */
				url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAJwAAsAAAAABiQAAAIkAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCcAosSQE2AiQDCAsGAAQgBYRtBzMbcgXInpo8KVKJjaUIYHobMHZDiIf/9mv3zZ81QZNqJIpmlUzidAuJBLFRMqHgoe/GXOZhKCdURu7Z7dWI1JMvJC2nl6YdKHZ6RsyiMJtwy3m/+oaY+ZLt81xObwIdyPxA53rNSWNNmjSAenFAge6BUWQFFHLD2AUv8DGBujEdjb3T6xmsyuxVgbiPAgdWC1FZZoWqUG44mMWbkmp6SR/Aa/T9+DOKVZJSwW45vDvxYf+TU1I89B7cBoQYAR0vocAKkInTxuy+lmBcSz3bNgWO1Rh86vUCjziqU7C/zq5vghGYCz55KwVI8FiU4fak54nys88zutnb+AF35/P6/uIc9mG0+Eo/2q+C/27e11m72sjg491EjmyYH1RX9AU/QB04kA2t7U5ZUxvHk/KO2+rq6MHBfn9TbUNnK4aqoQn+itEMhaoZMrMrKGlYRVnVJuqWnR1vGKBaItew5BUgdL0haXtHoeuTzOwvSob9o6wbLdSdx8CFDXMRre8qOUY+uncYeZKz67X1uHFCQZU6mtdG/IK0jBI47A3KhTPKSZfYUtbByIyRVTI8Bc9RmgoWKjF51gvNinG/z01v6nmSwbpdijgM8SHXHRTxiBwHk8165fMTJFBJObSjr65cIKoUzY6GegYDyDNTPqjvUV4p1QIjxjDElMigUzCPpFICFc3zYsRjesIJ6cJY3xnFQ0297S3Z352COtuewtlRqD1UTn4fSh4AAAAA')
				format('woff2'),
			url('https://at.alicdn.com/t/font_1436714_gz0bwdt261o.woff?t=1569480027812') format('woff'),
			url('https://at.alicdn.com/t/font_1436714_gz0bwdt261o.ttf?t=1569480027812') format('truetype'),
			/* chrome, firefox, opera, Safari, Android, iOS 4.2+ */ url('https://at.alicdn.com/t/font_1436714_gz0bwdt261o.svg?t=1569480027812#iconfont') format('svg'); /* iOS 4.1- */
	}

	.iconfont {
		font-family: 'iconfont' !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.icon-xuanzhong:before {
		content: '\e610';
	}

	.jiuai-check-box {
		display: inline-grid;
		// display: inline-block;
		text-align: center;
		color: #BBBBBB;
	}

	.jiuai-check-icon {
		opacity: 0;
		&.active {
			opacity: 1;
		}
	}
	.overlay {
		border: 1px solid #BBBBBB;
		border-radius: 10px;
		margin-top: 5px;
		pointer-events: none;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		// background-color: rgba(30, 30, 20, 0.3);
		background-color: silver;
	}
	
	.lightbox {
		margin-top: 5px;
		border: 2rpx solid #0e0e0e;
		border-radius: 10px;
		z-index: 1;
		background-color: #FFFFFF;
	}
	
	.not_selectable_style {
		color: #BEBEBE;
		pointer-events: none;
		opacity: 0.5;
	}
	
	.uni-list-cell-pd {
		padding: 0rpx 20rpx
	}

	.uni-list-cell-lennon {
		position: relative;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: horizontal;
		-webkit-box-direction: normal;
		-webkit-flex-direction: row;
		-ms-flex-direction: row;
		flex-direction: row;
		-webkit-box-pack: justify;
		-webkit-justify-content: space-between;
		-ms-flex-pack: justify;
		justify-content: space-between;
		-webkit-box-align: center;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center;

	}

	.text {
		margin: 15upx 10upx;
		/* padding: 0 20upx; */
		height: 70upx;
		line-height: 70upx;
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
