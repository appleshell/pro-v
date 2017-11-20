<template>
  <div class="uploadC">
    <input type="file" @change="getFile" value="图片" id="upload" :accept="imgType">
    <label for="upload"  v-show="imgCropState !== 1">
      <slot></slot>
    </label>
    <!-- 图片裁剪区 -->
    <div v-show="imgCropState === 1">
      <img :src="imgUrl" alt="" id="image" ref="image">
    </div>
    <div>
      <button @click="move" v-show="imgCropState === 1">move</button>
      <button @click="get" v-show="imgCropState === 1">get</button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Cropper from 'cropperjs'
  export default {
    data() {
      return {
        name:'选择图片',
        cropper:'',
        imgUrl:'',
        imgCropState:0,//1:显示图片裁剪区，2：裁剪结束
      };
    },
    props:{
      action:{
        type:String,
        default:''
      },
      onSuccess:{
        type:Function,
        default:function(){}
      },
      imgSize:{
        type:String,
        default:'2MB'
      },
      imgType:{
        type:String,
        default:'image/jpeg,image/jpg,image/png'
      },
      quality:{
        type:Number,
        default:0.8
      },
      compressWidth:{
        type:Number,
        default:360
      },
      compressHeight:{
        type:Number,
        default:360
      }
    },
    mounted(){
      //实例化裁剪对象
      this.cropper = new Cropper(this.$refs.image,{
        aspectRatio: 1 / 1,
        viewMode: 1,
      })
    },
    methods: {
      //选择图片并判断图片大小。
      getFile(e){
        let files = e.target.files;
        let imgSize = this.imgSize.toUpperCase()
        let unit = imgSize.slice(imgSize.length-2);
        let sizeNum = imgSize.slice(0,imgSize.length-2)
        if (unit === 'MB') {
          if (files[0].size/1024/1024 > sizeNum) {
            alert('上传头像图片大小不能超过'+imgSize)
            return;
          }
        } else if(unit === 'KB'){
          if (files[0].size/1024 > sizeNum) {
            alert('上传头像图片大小不能超过'+imgSize)
            return;
          }
        }
        this.imgUrl = window.URL.createObjectURL(files[0])
        this.cropper.replace(this.imgUrl)
        this.imgCropState = 1;
      },
      move(){
        this.cropper.move(1)
      },
      //上传裁剪后的图片
      get(){
        let _this = this;
        let originCrop = this.cropper.getCroppedCanvas();
        let compressedCrop = this.compressImg(originCrop)
        //获取裁剪后图片的blob对象
        compressedCrop.toBlob(function(blob){
          //blob对象转成可用img元素展示的图片地址
          let url = URL.createObjectURL(blob);
          _this.imgUrl = url;
          //提交裁剪后的图片数据
          var fd = new FormData();
          fd.append('file',blob);

          axios({
            method:'post',
            url:_this.action,
            data:fd,
          })
          .then(function(response){
            _this.onSuccess(response,url)
          })
          .catch(function(error){
            _this.onSuccess(error,url)
            alert('上传图片失败')
          })
        },'image/jpex',this.quality)
        this.imgCropState = 2;
      },
      //压缩裁剪后的图片
      compressImg(image){
        let imgWidth = image.width;
        let imgHeight = image.height; 
        let canvasEle = document.createElement('canvas');
        let canvasCtx = canvasEle.getContext('2d');
        canvasEle.width = this.compressWidth;
        canvasEle.height = this.compressHeight;
        canvasCtx.drawImage(image,0,0,imgWidth,imgHeight,0,0,canvasEle.width,canvasEle.height);
        return canvasEle;
      }
    }
  }
</script>

<style>
  #upload{
    display: none;
  }
  #image{
    width:100%;
    height: 360px;
  }
  label{
    display: flex;
    justify-content: center;
    align-items: center;
    width:180px;
    height: 180px;
    border:1px dotted #999;
    cursor: pointer;
  }
</style>