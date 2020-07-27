const creatList = (value) => {
    return creatNode(value)
}

const appendList = (list, value) => {
    const node = creatNode(value)
    let current = list
    while (current.next) {
        current = current.next
    }

    current.next = node
    return node
}

const removeFromList = (list, node) => {
    let current = list
    let previous = node
    // 如果删除第二个节点
    // 第1个节点.next = 第2个节点.next
    while (current !== node && current !== null) {
        previous = current
        current = current.next
    }

    if (current === null) {
        return false
    } else if (previous === current) {
        return current.next
    } else {
        previous.next = current.next
        return list
    }
}

const creatNode = (value) => {
    return {
        data: value,
        next: null
    }
}

const travelList = (list, fn) => {
    let current = list
    while (current !== null) {
        fn(current)
        current = current.next
    }
}

const list = creatList(10)
const node2 = appendList(list, 12)
const node3 = appendList(list, 20)
const node4 = appendList(list, 30)
console.log('list')
console.log(list)
travelList(list, (node)=>{console.log(node.data)})
const newList = removeFromList(list, list)
console.log('newList')
console.log(newList)
travelList(newList, (node)=>{console.log(node.data)})


