export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const traverseQueue: (BinaryNode<number>[]) = [head];
    while (traverseQueue.length) {
        const curr = traverseQueue.shift() as BinaryNode<number>;
        if (!curr) {
            continue
        }
        // search
        if (curr.value === needle) {
            return true
        }
        if (curr.left) {
            traverseQueue.push(curr.left)
        }

        if (curr.right) {
            traverseQueue.push(curr.right)
        }
    }
    return false
}