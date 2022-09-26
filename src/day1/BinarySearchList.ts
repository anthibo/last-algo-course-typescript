// on assumption that array is sorted
// time complexity of O(Log(N))
export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length
    while (low < high) {
        const mid = Math.floor(low + (high - low) / 2)
        const currentValue = haystack[mid]
        if (currentValue === needle) { return true }
        else if (currentValue > needle) { high = mid }
        else { low = mid + 1 }
    }
    return false
}