module.exports = {
    plugins: [
                require('autoprefixer')({
                     browsers: ['last 2 versions','>5%','iOS >= 7', 'Android >= 4.1']
                })
    ]
}
