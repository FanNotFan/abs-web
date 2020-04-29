<template>
    <div class="dialog" v-show="showMask">
        <div class="dialog-container">
            <div class="dialog-title">{{title}}</div>
			<div class="" style="width: 100%; height: 1px;background-color: #EEEEEE;"></div>
            <div class="content" v-html="content"></div>
            <div class="btns">
                <div v-if="type != 'confirm'" class="default-btn" @click="closeBtn">
                    {{cancelText}}
                </div>
				<div v-if="type == 'danger'" class="confirm-btn" @click="dangerBtn">
					{{dangerText}}
				</div>
                <!-- <div v-if="type == 'danger'" class="danger-btn" @click="dangerBtn">
                    {{dangerText}}
                </div> -->
                <div v-if="type == 'confirm'" class="confirm-btn" @click="confirmBtn">
                    {{confirmText}}
                </div>
            </div>
            <div class="close-btn" @click="closeMask"><i class="iconfont icon-close"></i></div>
        </div>
        
    </div>
</template>
<script>
export default {
    props: {
        value: {},
        // 类型包括 defalut 默认， danger 危险， confirm 确认，
        type:{
            type: String,
            default: 'default'
        },
        content: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        cancelText: {
            type: String,
            default: 'Cancel'
        },
        dangerText: {
            type: String,
            default: '删除'
        },
        confirmText: {
            type: String,
            default: 'Confirm'
        },
    },
    data(){
        return{
            showMask: false,
        }
    },
    methods:{
        closeMask(){
            this.showMask = false;
        },
        closeBtn(){
            this.$emit('cancel');
            this.closeMask();
        },
        dangerBtn(){
            this.$emit('danger');
            this.closeMask();
        },
        confirmBtn(){
            this.$emit('confirm');
            this.closeMask();
        }
    },
    mounted(){
        this.showMask = this.value;
    },
    watch:{
        value(newVal, oldVal){
            this.showMask = newVal;
        },
        showMask(val) {
            this.$emit('input', val);
        }
    },
}
</script>
<style lang="less" scoped>
    .dialog{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.6);
        z-index: 9999;
        .dialog-container{
            width: 76%;
            height: 300upx;
            background: #ffffff;
            position: absolute;
            // top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 8px;
            position: relative;
			margin-top: 80%;
            .dialog-title{
                width: 100%;
                height: 42px;
                font-size: 16px;
                color: #696969;
                font-weight: 600;
                // padding: 5px 50px 0 71px;
                box-sizing: border-box;
				text-align: center;
				line-height: 42px;
            }
            .content{
				// 内容字体大小
				font-size: 16px;
                color: #797979;
                // padding: 0 20px;
                box-sizing: border-box;
				text-align: center;
				background-color: #FFFFFF; 
				padding: 0 20px 0 20px;
            }
            .inp{
                margin: 10px 0 0 20px;
                width: 200px;
                height: 40px;
                padding-left: 4px;
                border-radius: 4px;
                border: none;
                background: #efefef;
                outline: none;
                &:focus{
                    border: 1px solid #509EE3;
                }
            }
            .btns{
                width: 100%;
                height: 100upx;
                // line-height: 60px;
                position: absolute;
                bottom: 0;
                left: 0;
                text-align: right;
                padding: 0 16px;
                box-sizing: border-box;
				line-height: 100upx;
				text-align: center;
                & > div{
                    display: inline-block;
                    height: 30px;
                    line-height: 30px;
                    padding: 0 14px;
                    color: #ffffff;
                    background: #f1f1f1;
                    // border-radius: 8px;
                    margin-right: 12px;
                    cursor: pointer;
					// 两个按钮之间的间距
					margin: 0 20px 0 20px;
					// 按钮字体大小
					font-size: 14px;
                }
                .default-btn{
					color: #BBBBBB;
					border: 1px solid #BBBBBB;
					background: #FFFFFF;
                    // color: #787878;
                    &:hover{
                        color: #509EE3; 
                    }
                }
                .danger-btn{
					color: #BBBBBB;
					border: 1px solid #7ac8ef;
					background: #FFFFFF;
					
                    // background: #EF8C8C;
                    &:hover{
                        background: rgb(224, 135, 135);
                    }
                    &:active{
                        background: #EF8C8C;
                    }
                }
                .confirm-btn{
					// 新增样式-20181225—17:02
					color: #BBBBBB;
					border: 1px solid #7ac8ef;
					background: #FFFFFF;
                    // color: #ffffff;
                    // background: #509EE3;
                    &:hover{
                        background: #6FB0EB;
                    }
                }
            }
            .close-btn{
                position: absolute;
                top: 16px;
                right: 16px;
                width: 30px;
                height: 30px;
                line-height: 30px;
                text-align: center;
                font-size: 18px;
                cursor: pointer;
                &:hover{
                    font-weight: 600;
                }
            }
        }
    }
</style>
