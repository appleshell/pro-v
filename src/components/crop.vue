<template>
  <div class="uploadC">
    <input type="file" @change="getFile" value="图片" id="upload" style="display:none;">
    <label for="upload">{{name}}</label>
    <button @click="move">move</button>
    <button @click="get">get</button>
    <div v-show="imgCropState === 2"><img :src="imgUrl" alt=""></div>
    <div v-show="imgCropState === 1">
      <img :src="imgUrl" height="200" width="200" alt="" id="image" ref="image">
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
        imgUrl:'./src/assets/logo.png',
        imgCropState:0
      };
    },
    mounted(){
      this.cropper = new Cropper(this.$refs.image,{
        aspectRatio: 1 / 1,
        viewMode: 1,
      })
      
    },
    methods: {
      getFile(e){
        let files = e.target.files;
        this.imgUrl = window.URL.createObjectURL(files[0])
        this.cropper.replace(this.imgUrl)
        this.imgCropState = 1;
      },
      move(){
        this.cropper.move(1)
      },
      get(){
        let _this = this;
        let img = this.cropper.getCroppedCanvas();
        //获取裁剪后图片的blob对象
        img.toBlob(function(blob){
          //blob对象转成可用img元素展示的图片地址
          let url = URL.createObjectURL(blob);
          _this.imgUrl = url;
          //提交裁剪后的图片数据
          var fd = new FormData();
          fd.append('file',blob);

          axios({
            method:'post',
            url:'http://172.16.36.234:8889/file/upload',
            data:fd,
          })
          .then(function(response){
            alert(12)
            console.log(response)
          })
          .catch(function(error){
            alert(34)
            console.log(error)
          })
        })
        this.imgCropState = 2;
      },
      // handleAvatarSuccess(res, file) {
      //   this.imageUrl = URL.createObjectURL(file.raw);
      // },
      // beforeAvatarUpload(file) {
      //   console.log(file)
      //   const isJPG = file.type === 'image/jpeg';
      //   const isLt2M = file.size / 1024 / 1024 < 2;

      //   if (!isJPG) {
      //     this.$message.error('上传头像图片只能是 JPG 格式!');
      //   }
      //   if (!isLt2M) {
      //     this.$message.error('上传头像图片大小不能超过 2MB!');
      //   }
      //   return isJPG && isLt2M;
      // }
    }
  }
</script>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px !important;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>