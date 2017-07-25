const previewerMixin = {
  data() {
    return {
      previewerList: [],
    }
  },
  methods: {
    previewer(options) {
      let items=options.items ,
          index=options.index || 0,
          key=options.key,
          PromistList = [];
      if(!Array.isArray(items) || !items.length){
          return false
      }
      if (items[0].hasOwnProperty('w') && items[0].hasOwnProperty('h')) {   //是否传了图片地址

        key ? this[key] = items : this.previewerList = items;
        this.$nextTick(() => {
          this.$refs.previewer.show(index)
        })
      } else {

        items.forEach((ele, i) => {
          PromistList.push(imgLoad(ele))
        })

        Promise.all(PromistList).then((res) => {

          key ? this[key] = bigitems : this.previewerList = items;
          this.$nextTick(() => {
            this.$refs.previewer.show(index)
          })
        })
      }

      function imgLoad(img) {   //图片预加载
        return new Promise((resolve, reject) => {
          let image = new Image();
          image.src = img.src;
          image.onload = function() {
            img.w = image.width;
            img.h = image.height
            resolve()
          }
          image.onerror = function() {
            img.w = 0;
            img.h = 0;
            resolve()
          }
        })
      }

    },
  }
}
export default previewerMixin;
