<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/* #ifndef APP-PLUS-NVUE */
	@import './common/uni.css';
	/*每个页面公共css */
	page {
	    background-color: #e6e7ec;
	    height: 100%;
	    font-size: 28upx;
	    line-height: 1.8;
	}
	/* #endif*/
</style>
