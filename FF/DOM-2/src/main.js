// jQuery 是全局变量
/*
const api = jQuery('.test')
api.addClass('red').addClass('blue') // 链式操作
*/

/*
jQuery('.test')
    .find('.child')
    .addClass('red')
    .addClass('blue')
    .addClass('green')
    .end()
    .addClass('yellow')

const arr1 = jQuery('.test')
    .find('.child')

arr1.each(value => console.log(value))

const arr2 = jQuery('.test')
arr2.parent().print()

arr2.children().print()
*/

const $div = $('<div><span>1</span></div>')
const $childList = $('.child')
$('body').append($childList)

//$('<div>1</div>').appendTo(document.body)