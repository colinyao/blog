<template>
    <div class="c_editor">
        <textarea id="editor_id" name="content"></textarea>
    </div>
</template>
<script>
import '../../../../static/plugins/kindeditor/kindeditor-all.js'
import '../../../../static/plugins/kindeditor/lang/zh-CN.js'
export default {
    props: {
        width: {
            type: [String],
            default: '100%'
        },
        height: {
            type: [String],
            default: '100%'
        },
        minWidth: {
            type: [String],
            default: '650'
        },
        minHeight: {
            type: [String],
            default: '100'
        },
        filterMode: {
            type: Boolean,
            default: true
        },
        items: {
            type: Array,
            default: res => [
                'source', '|', 'undo', 'redo', '|', 'preview', 'print', 'template', 'code', 'cut', 'copy', 'paste',
                'plainpaste', 'wordpaste', '|', 'justifyleft', 'justifycenter', 'justifyright',
                'justifyfull', 'insertorderedlist', 'insertunorderedlist', 'indent', 'outdent', 'subscript',
                'superscript', 'clearhtml', 'quickformat', 'selectall', '|', 'fullscreen', '/',
                'formatblock', 'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold',
                'italic', 'underline', 'strikethrough', 'lineheight', 'removeformat', '|', 'image', 'multiimage',
                'flash', 'media', 'insertfile', 'table', 'hr', 'emoticons', 'baidumap', 'pagebreak',
                'anchor', 'link', 'unlink', '|', 'about'
            ]
        },
        colorTable: {
            type: Array,
            defalut: res => [
                ['#E53333', '#E56600', '#FF9900', '#64451D', '#DFC5A4', '#FFE500'],
                ['#009900', '#006600', '#99BB00', '#B8D100', '#60D978', '#00D5FF'],
                ['#337FE5', '#003399', '#4C33E5', '#9933E5', '#CC33E5', '#EE33EE'],
                ['#FFFFFF', '#CCCCCC', '#999999', '#666666', '#333333', '#000000']
            ]
        },
        resizeType: {
            type: Number,
            default: 0
        },
        fontSizeTable: {
            type: Array,
            default: res => ['9px', '10px', '12px', '14px', '16px', '18px', '24px', '32px']
        },
        uploadJson: {
            type: String
        },
        allowImageUpload: {
            type: Boolean,
            defalut: true
        },
        allowFlashUpload: {
            type: Boolean,
            default: true
        },
        allowMediaUpload: {
            type: Boolean,
            default: true
        },
        allowFileUpload:{
             type:Boolean,
             default:true
        }
    },
    data() {
        return {
             editor:''
        }
    },
    mounted() {
        let options = {
            width: this.width,
            height: this.height,
            minWidth: this.minWidth,
            minHeight: this.minHeight,
            items: this.items,
            fontSizeTable:this.fontSizeTable,
            resizeType: this.resizeType,
            colorTable: this.colorTable,
            filterMode: true,
            afterFocus: this.handleFocus,
            afterBlur: this.handleBlur,
            afterUpload: this.handleUpload,
            uploadJson: this.uploadJson //文件上传地址
        }
        KindEditor.ready((K) => {
            this.editor = K.create('#editor_id', options)
        })
    },
    methods: {
        handleFocus() {
            this.$emit('on-foucs', true)
        },
        handleBlur() {
            this.$emit('on-blur', true)
        },
        handleUpload(url) {
            this.$emit('on-upload', url)
        },
        getHtml(){
            return this.editor.html()
        },
        setHtml(data){
            this.editor.html(data)
        }
    }
}
</script>
<style lang="less">
.c_editor {
    width: 100%;
    height: 100%;
}
</style>
