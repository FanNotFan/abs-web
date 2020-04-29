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
			<view class="uni-margin-wrap">
				<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
					<block v-if="index<=4" v-for="(item,index) in build_first_page_data" :key="index">
						<swiper-item>
							<view class="swiper-item">
								<image class="background_image" :src="item.url"></image>
							</view>
						</swiper-item>
					</block>
				</swiper>
				<image style="position: absolute;  margin-left: 285rpx; margin-top: -50rpx;width: 120rpx;height: 24rpx" src="../../static/3_Middle.png"></image>
				<view class="" style="position: absolute;  margin-left: 590rpx; margin-top: -64rpx; font-size: 28rpx;font-weight: 500;color: #FFFFFF;">
					<view style="position: absolute;">{{build_first_page_data.length}}</view>
					<image style="width: 48rpx;height: 48rpx;margin-left: 36rpx;" src="../../static/photo_library.png"></image>
				</view>
			</view>
		</view>

		<!-- Base price part -->
		<view class="" style="background-color: #FFFFFF; width: 702rpx; border-bottom-right-radius: 18rpx; border-bottom-left-radius: 18rpx;">
			<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;margin-top: 30rpx;" @click="go_back">
				<view class="text uni-flex" style="font-size: 28rpx; width: 100rpx;height: 36rpx;-webkit-justify-content: center;justify-content: center;-webkit-align-items: center;align-items: center;color: #005AEB;">
					<image src="../../static/Prev.png" style="width: 44rpx;height: 36rpx;color: #005AEB;"></image>
					Back
				</view>
			</view>
			
			<view class="text" style="font-weight: bold; font-family: Centra No1;font-size: 32rpx;font-style: normal;color: #001959;">First,
				select what is most important to you</view>

			<!-- 图片展示部分 -->
			<view class="uni-flex uni-row">
				<!-- <view class="text" :style="ifShowAccessibility ? selected_background_color : ''" style="height: 112rpx; -webkit-flex: 1;flex: 1;border: #c1c4d3; border-style:solid; border-width:2rpx;border-radius: 18rpx;"
				 @click="select_accessibility">
					<image src="../../static/accessibility.png" style="margin-top: 16rpx; width: 48rpx;height: 48rpx; "></image>
					<view class="" style="line-height: 0rpx;">
						Accessibility
					</view>
				</view> -->
				<view class="text" :style="ifShowRoomSize ? selected_background_color : ''" style="height: 112rpx; -webkit-flex: 1;flex: 1;border: #c1c4d3; border-style:solid; border-width:2rpx;border-radius: 18rpx;"
				 @click="select_room_size">
					<image src="../../static/room_size.png" style="margin-top: 16rpx; width: 48rpx;height: 48rpx; "></image>
					<view class="" style="line-height: 0rpx;">
						Room size
					</view>
				</view>
				<view class="text" :style="ifShowBedType ? selected_background_color : ''" style="height: 112rpx; -webkit-flex: 1;flex: 1;border: #c1c4d3; border-style:solid; border-width:2rpx;border-radius: 18rpx;"
				 @click="select_bed_type">
					<image src="../../static/bed_type.png" style="margin-top: 16rpx; width: 48rpx;height: 48rpx; "></image>
					<view class="" style="line-height: 0rpx;">
						Bed type
					</view>
				</view>
			</view>
			<view class="uni-flex uni-row">
				<view class="text" :style="ifShowView ? selected_background_color : ''" style="height: 112rpx; -webkit-flex: 1;flex: 1;border: #c1c4d3; border-style:solid; border-width:2rpx;border-radius: 18rpx;"
				 @click="select_view">
					<image src="../../static/view.png" style="margin-top: 16rpx; width: 48rpx;height: 48rpx; "></image>
					<view class="" style="line-height: 0rpx;">
						View
					</view>
				</view>
				<view class="text" :style="ifShowBreakfast ? selected_background_color : ''" style="height: 112rpx; -webkit-flex: 1;flex: 1;border: #c1c4d3; border-style:solid; border-width:2rpx;border-radius: 18rpx;"
				 @click="select_breakfast">
					<image src="../../static/free_breakfast.png" style="margin-top: 16rpx; width: 48rpx;height: 48rpx; "></image>
					<view class="" style="line-height: 0rpx;">
						Breakfast
					</view>
				</view>
			</view>
			
			<view class="uni-flex uni-row">
				<view class="text" :style="ifShowFreeCancellation ? selected_background_color : ''" style="height: 112rpx; -webkit-flex: 1;flex: 1;border: #c1c4d3; border-style:solid; border-width:2rpx;border-radius: 18rpx;"
				 @click="select_freeCancellation">
					<image src="../../static/check.png" style="margin-top: 16rpx; width: 48rpx;height: 48rpx; "></image>
					<view class="" style="line-height: 0rpx;">
						FreeCancellation
					</view>
				</view>
				<view class="text" :style="ifShowNotChooseNow ? selected_background_color : ''" style="height: 112rpx; -webkit-flex: 1;flex: 1;border: #c1c4d3; border-style:solid; border-width:2rpx;border-radius: 18rpx;"
				 @click="select_not_choose_now">
					<image src="../../static/visibility_off.png" style="margin-top: 16rpx; width: 48rpx;height: 48rpx; "></image>
					<view class="" style="line-height: 0rpx;">
						Don't choose now
					</view>
				</view>
			</view>

			<!-- Accessibility -->
			<view class="" style="width: 702rpx;" v-if="ifShowAccessibility">
				<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
					<view class="text" style="margin-left: 25rpx ;font-weight: bold; font-family: Centra No1;font-size: 28rpx;font-style: normal;color: #001959;">Accessibility</view>
				</view>
				<view class="uni-form-item uni-column">
					<radio-group class="" @change="radioChange">
						<view class="uni-list-cell-lennon uni-list-cell-pd" v-if="item.AttributeName == 'WheelchairAccessible'" v-for="(item,index) in sortAttributeItems" :key="index">
							<view>
								<radio :id="item.AttributeValue" :value="JSON.stringify(item)" :checked="index==1"></radio>
								<label class="label-2-text" :for="item.AttributeValue">
									<!-- <text style="font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;">{{item.AttributeValue}}</text> -->
									<!-- <view style="display: inline-flex; width: 400rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;">{{item.AttributeValue}}</view> -->
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
								<view class="text" style="font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;">+${{item.Price}}</view>
							</view>
						</view>
					</radio-group>
				</view>
			</view>

			<!-- room size -->
			<view class="" style="width: 702rpx;" v-if="ifShowRoomSize">
				<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
					<view class="text" style="margin-left: 25rpx ;font-weight: bold; font-family: Centra No1;font-size: 28rpx;font-style: normal;color: #001959;">Room
						size ( m² )</view>
				</view>
				<view class="uni-form-item uni-column">
				<radio-group class="" @change="radioChange">
						<view class="uni-list-cell-lennon uni-list-cell-pd" v-if="item.AttributeName == 'RoomSize'" v-for="(item,index) in roomSizeItems" :key="index">
							<view>
								<radio :checked="index==0" :id="item.AttributeValue" :value="JSON.stringify(item)"></radio>
								<label class="label-2-text" :for="item.AttributeValue">
									<!-- <text style="font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;">{{item.AttributeValue}}</text> -->
									<!-- <view style="display: inline-flex; width: 400rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;">{{item.AttributeValue}}</view> -->
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
								<view class="text" style="font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;">+${{item.Price}}</view>
							</view>
						</view>
					</radio-group>
				</view>
			</view>

			<!-- BedType -->
			<view class="" style="width: 702rpx;" v-if="ifShowBedType">
				<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
					<view class="text" style="margin-left: 25rpx ;font-weight: bold; font-family: Centra No1;font-size: 28rpx;font-style: normal;color: #001959;">Bed
						type</view>
				</view>
				<view class="uni-form-item uni-column">
					<radio-group class="" @change="radioChange">
						<view class="uni-list-cell-lennon uni-list-cell-pd" v-if="item.AttributeName == 'BedType'" v-for="(item,index) in bedTypeItems" :key="index">
							<view>
								<radio :id="item.AttributeValue" :value="JSON.stringify(item)" :checked="index==0"></radio>
								<label class="label-2-text" :for="item.AttributeValue">
									<!-- <text style="font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;">{{item.AttributeValue}}</text> -->
									<!-- <view style="display: inline-flex; width: 400rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;">{{item.AttributeValue}}</view> -->
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
								<view class="text" style="font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;">+${{item.Price}}</view>
							</view>
						</view>
					</radio-group>
				</view>
			</view>

			<!-- room view -->
			<view class="" style="width: 702rpx;" v-if="ifShowView">
				<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
					<view class="text" style="margin-left: 25rpx ;font-weight: bold; font-family: Centra No1;font-size: 28rpx;font-style: normal;color: #001959;">View</view>
				</view>
				<view class="uni-form-item uni-column">
					<radio-group class="" @change="radioChange">
						<view class="uni-list-cell-lennon uni-list-cell-pd" v-if="item.AttributeName == 'RoomView'" v-for="(item,index) in viewItems" :key="index">
							<view>
								<radio :id="item.AttributeValue" :value="JSON.stringify(item)" :checked="index==0"></radio>
								<label class="label-2-text" :for="item.AttributeValue">
									<!-- <text style="font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;">{{item.AttributeValue == 'None'? 'Default' : item.AttributeValue}}</text> -->
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
								<view class="text" style="font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;">+${{item.Price}}</view>
							</view>
						</view>
					</radio-group>
				</view>
			</view>
			
			<!-- ifShowBreakfast -->
			<view class="" style="width: 702rpx;" v-if="ifShowBreakfast">
				<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
					<view class="text" style="margin-left: 25rpx ;font-weight: bold; font-family: Centra No1;font-size: 28rpx;font-style: normal;color: #001959;">Breakfast</view>
				</view>
				<view class="uni-form-item uni-column">
					<radio-group class="" @change="radioChange">
						<view class="uni-list-cell-lennon uni-list-cell-pd" v-if="item.AttributeName == 'Breakfast'" v-for="(item,index) in breakfastItems" :key="index">
							<view>
								<radio :id="item.AttributeValue" :value="JSON.stringify(item)" :checked="index==0"></radio>
								<label class="label-2-text" :for="item.AttributeValue">
									<!-- <text style="font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;">{{item.AttributeValue}}</text> -->
									<!-- <view style="display: inline-flex; width: 400rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;">{{item.AttributeValue}}</view> -->
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
								<view class="text" style="font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;">+${{item.Price}}</view>
							</view>
						</view>
					</radio-group>
				</view>
			</view>
			
			<!-- ifShowFreeCancellation -->
			<view class="" style="width: 702rpx;" v-if="ifShowFreeCancellation">
				<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
					<view class="text" style="margin-left: 25rpx ;font-weight: bold; font-family: Centra No1;font-size: 28rpx;font-style: normal;color: #001959;">FreeCancellation</view>
				</view>
				<view class="uni-form-item uni-column">
					<radio-group class="" @change="radioChange">
						<view class="uni-list-cell-lennon uni-list-cell-pd" v-if="item.AttributeName == 'FreeCancellation'" v-for="(item,index) in freeCancellationItems" :key="index">
							<view>
								<radio :id="item.AttributeValue" :value="JSON.stringify(item)" :checked="index==0"></radio>
								<label class="label-2-text" :for="item.AttributeValue">
									<!-- <text style="font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;">{{item.AttributeValue}}</text> -->
									<!-- <view style="display: inline-flex; width: 400rpx; overflow:hidden; text-overflow:ellipsis; font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;">{{item.AttributeValue}}</view> -->
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
								<view class="text" style="font-family: Centra No1; font-style: normal; font-weight: normal; font-size: 28rpx;color: #465280;">+${{item.Price}}</view>
							</view>
						</view>
					</radio-group>
				</view>
			</view>
			
			<!-- ifShowNotChooseNow -->
			<view class="" style="width: 702rpx;" v-if="ifShowNotChooseNow">
			</view>
			<view class="text" style="height: 120upx;text-align: left;padding-top: 10upx;" v-if="ifShowAccessibility|ifShowBedType|ifShowRoomSize|ifShowView|ifShowBreakfast|ifShowFreeCancellation|ifShowNotChooseNow">
				<button :loading="loading" :class="[not_selectable_style_open ? 'not_selectable_style' : '']" style="width: 430rpx; height: 72rpx; line-height: 72rpx; color: #FFFFFF; background: #0044ea; font-size: 28rpx;font-weight: bold; display:block;margin:0 auto;"
				 @click="continue_select">
					Continue
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
				not_selectable_style_open: false,
				selected_background_color: 'background-color: #999999;',
				ifShowAccessibility: false,
				ifShowBedType: false,
				ifShowRoomSize: false,
				ifShowView: false,
				ifShowBreakfast: false,
				ifShowFreeCancellation: false,
				ifShowNotChooseNow: false,
				attributeItems: [],
				accessibilityItems: [],
				bedTypeItems: [],
				roomSizeItems: [],
				viewItems: [],
				breakfastItems: [],
				freeCancellationItems: [],
				check_in_date: '',
				check_out_date: '',
				indicatorDots: false,
				autoplay: true,
				interval: 5000,
				duration: 500,
				hotel_id: '',
				call_model_data: '',
				radio_checked_value: {},
				build_first_page_data: '',
				encode_call_model_data: ''
			}
		},
		computed:{
			sortAttributeItems(){
				return this.sortByKey(this.attributeItems,'Price')
			}
		},
		onLoad(options) {
			this.hotel_id = options.hotel_id
			this.check_in_date = options.check_in_date
			this.check_out_date = options.check_out_date
			this.encode_call_model_data = options.call_model_data
			this.call_model_data = JSON.parse(decodeURIComponent(this.encode_call_model_data))
			this.build_first_page_data = JSON.parse(decodeURIComponent(options.build_first_page_data))
			this.attributeItems = this.call_model_data.RegularModel.model.Attribute
			this.data_statistics()
		},
		methods: {
			sortByKey: function(array,key){
				return array.sort(function(a,b){
					var x = a[key]
					var y = b[key]
					return x-y
				})
			},
			go_back() {
				uni.navigateBack({
					 delta: 1
				})
			},
			getAttributeValue(attributeName) {
				var sortAttributeItemsCopy = this.sortAttributeItems
				for (var i = 0; i < sortAttributeItemsCopy.length; i++) {
					if(sortAttributeItemsCopy[i].AttributeName == attributeName){
						return sortAttributeItemsCopy[i]
					}
				}
				return {}
			},
			select_accessibility() {
				console.log("select_accessibility")
				this.data_statistics()
				this.radio_checked_value = this.getAttributeValue('WheelchairAccessible')
				// this.radio_checked_value = {}
				this.$nextTick(function(){
					this.ifShowAccessibility = true
				})
				this.ifShowBedType = false
				this.ifShowRoomSize = false
				this.ifShowView = false
				this.ifShowBreakfast = false
				this.ifShowFreeCancellation = false
				this.ifShowNotChooseNow = false
			},
			select_bed_type() {
				console.log("select_bed_type")
				this.data_statistics()
				this.radio_checked_value = this.getAttributeValue('BedType')
				// this.radio_checked_value = {}
				this.ifShowAccessibility = false
				this.$nextTick(function(){
					this.ifShowBedType = true
				})
				this.ifShowRoomSize = false
				this.ifShowView = false
				this.ifShowBreakfast = false
				this.ifShowFreeCancellation = false
				this.ifShowNotChooseNow = false
			},
			select_room_size() {
				console.log("select_room_size")
				this.data_statistics()
				this.radio_checked_value = this.getAttributeValue('RoomSize')
				// this.radio_checked_value = {}
				this.ifShowAccessibility = false
				this.ifShowBedType = false
				this.$nextTick(function(){
					this.ifShowRoomSize = true
				})
				this.ifShowView = false
				this.ifShowBreakfast = false
				this.ifShowFreeCancellation = false
				this.ifShowNotChooseNow = false
			},
			select_view() {
				console.log("select_view")
				this.data_statistics()
				this.radio_checked_value = this.getAttributeValue('RoomView')
				// this.radio_checked_value = {}
				this.ifShowAccessibility = false
				this.ifShowBedType = false
				this.ifShowRoomSize = false
				this.$nextTick(function(){
					this.ifShowView = true
				})
				this.ifShowBreakfast = false
				this.ifShowFreeCancellation = false
				this.ifShowNotChooseNow = false
			},
			select_breakfast() {
				console.log("select_breakfast")
				this.data_statistics()
				this.radio_checked_value = this.getAttributeValue('Breakfast')
				// this.radio_checked_value = {}
				this.ifShowAccessibility = false
				this.ifShowBedType = false
				this.ifShowRoomSize = false
				this.ifShowView = false
				this.$nextTick(function(){
					this.ifShowBreakfast = true
				})
				this.ifShowFreeCancellation = false
				this.ifShowNotChooseNow = false
			},
			select_freeCancellation() {
				console.log("select_freeCancellation")
				this.data_statistics()
				this.radio_checked_value = this.getAttributeValue('FreeCancellation')
				// this.radio_checked_value = {}
				this.ifShowAccessibility = false
				this.ifShowBedType = false
				this.ifShowRoomSize = false
				this.ifShowView = false
				this.ifShowBreakfast = false
				this.$nextTick(function(){
					this.ifShowFreeCancellation = true
				})
				this.ifShowNotChooseNow = false
			},
			select_not_choose_now(){
				console.log("select_not_choose_now")
				this.radio_checked_value = {}
				this.ifShowAccessibility = false
				this.ifShowBedType = false
				this.ifShowRoomSize = false
				this.ifShowView = false
				this.ifShowBreakfast = false
				this.ifShowFreeCancellation = false
				this.$nextTick(function(){
					this.ifShowNotChooseNow = true
				})
			},
			radioChange: function(e) {
				var radioValue = JSON.stringify(e.target.value)
				console.log("radioValue:"+radioValue)
				if(e.detail.value.length <=0 || radioValue == "" || radioValue == 'undefined' || radioValue == "[]"){
					this.radio_checked_value = {}
				}else{
					this.radio_checked_value = JSON.parse(e.target.value)
				}
			},
			continue_select: function(e) {
				this.loading = true
				this.not_selectable_style_open = true
				var select_attribute = ''
				console.log("this.radio_checked_value.ID == "+this.radio_checked_value.ID)
				if(this.radio_checked_value.ID == undefined || this.radio_checked_value.ID.length <= 0){
					console.log("select_attribute == null")
					select_attribute = ""
				}else{
					select_attribute = this.radio_checked_value.ID
				}
				this.$api.attributeCall({
					select_attribute: select_attribute,
					call_model_data: this.encode_call_model_data
				}).then((res) => {
					console.log('===== attributeCall then ===='+JSON.stringify(res))
					if (res.data.code == 1000) {
						if (res.data.data != null && res.data.data != '') {
							console.log("data not null success")
							var radio_checked_value = encodeURIComponent(JSON.stringify(this.radio_checked_value))
							var call_model_data = encodeURIComponent(JSON.stringify(this.call_model_data))
							var build_second_page_data = encodeURIComponent(JSON.stringify(this.build_first_page_data))
							var showDataValue = encodeURIComponent(JSON.stringify(res.data.data))
							var IsExistFinal = res.data.details.IsExistFinal
							var BaseRoom = encodeURIComponent(JSON.stringify(res.data.details.BaseRoom))
							var FinalRoom = encodeURIComponent(JSON.stringify(res.data.details.FinalRoom))
							uni.navigateTo({
								url: 'build_thrid?check_in_date='+this.check_in_date+'&check_out_date='+this.check_out_date+'&build_second_page_data='+build_second_page_data+'&call_model_data='+call_model_data+'&radio_checked_value='+radio_checked_value+'&showDataValue='+showDataValue+'&IsExistFinal='+IsExistFinal+'&FinalRoom='+FinalRoom+'&BaseRoom='+BaseRoom
							});
							this.loading = false
							this.not_selectable_style_open = false
						} else{
							uni.showToast({
								title: res.data.msg,
								icon: 'none',
								mask: true
							})
							this.loading = false
							this.not_selectable_style_open = false
						}
					} else{
						this.loading = false
						this.not_selectable_style_open = false
						uni.showToast({
							title: res.data.msg,
							icon: 'none',
							mask: true
						})
					}
				}).catch((err) => {
					this.loading = false
					this.not_selectable_style_open = false
					console.log('===== call_extract fail ====');
					uni.showToast({
						title: 'call extract fail ',
						icon: 'none',
						mask: true
					});
				})
			},
			continue_select_old: function(e) {
				var radio_checked_value = encodeURIComponent(JSON.stringify(this.radio_checked_value))
				var call_model_data = encodeURIComponent(JSON.stringify(this.call_model_data))
				var build_second_page_data = encodeURIComponent(JSON.stringify(this.build_first_page_data))
				uni.navigateTo({
					url: 'build_thrid?check_in_date='+this.check_in_date+'&check_out_date='+this.check_out_date+'&build_second_page_data='+build_second_page_data+'&call_model_data='+call_model_data+'&radio_checked_value='+radio_checked_value
				});
			},
			data_statistics() {
				var accessibilityItems = []
				var bedTypeItems = []
				var roomSizeItems = []
				var viewItems = []
				var breakfastItems = []
				var freeCancellationItems = []
				for (var i = 0; i < this.sortAttributeItems.length; i++) {
					var temp = this.sortAttributeItems[i]
					if (temp.AttributeName == "WheelchairAccessible") {
						accessibilityItems.push(temp)
					}
					if (temp.AttributeName == "BedType") {
						bedTypeItems.push(temp)
					}
					if (temp.AttributeName == "RoomSize") {
						roomSizeItems.push(temp)
					}
					if (temp.AttributeName == "RoomView") {
						viewItems.push(temp)
					}
					if (temp.AttributeName == "Breakfast") {
						breakfastItems.push(temp)
					}
					if (temp.AttributeName == "FreeCancellation") {
						freeCancellationItems.push(temp)
					}
				}
				this.accessibilityItems = accessibilityItems
				this.bedTypeItems = bedTypeItems
				this.roomSizeItems = roomSizeItems
				this.viewItems = viewItems
				this.breakfastItems = breakfastItems
				this.freeCancellationItems = freeCancellationItems
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
	
	.uni-list-cell-pd {
		padding: 5rpx 30rpx
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
