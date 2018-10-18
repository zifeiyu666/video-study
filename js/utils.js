
console.log(11111)
// function tabHandle(class) {
//  var index = ''
//  $(class).click(function() {
//   $(this).parent().children().removeClass('active')
//   $(this).addClass('active')
//   index = $(this).attr('data-index')
//  })
//  return index
// }
function tabHandle(val) {
   $(val).click(function() {
    $(this).parent().children().removeClass('active')
    $(this).addClass('active')
    var selIndex = $(this).index()
   })
}