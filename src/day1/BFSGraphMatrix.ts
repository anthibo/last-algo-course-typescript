export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number): number[] | null {
    const seen = new Array(graph.length).fill(false);
    const prev = new Array(graph.length).fill(-1);
    seen[source] = true;
    const queue: number[] = [source];
    do{
        const currentVertex = queue.shift() as number;
        if(currentVertex === needle){
            break;
        }
        const adjacencies = graph[currentVertex];
        seen[currentVertex] = true;
        for(let i = 0; i < graph.length; ++i){
            if(adjacencies[i] ===0){
                continue;
            }
            if(seen[i]){
                continue;
            }
            seen[i] = true;
            prev[i] = currentVertex;
            queue.push(i)
        }
    }
    while(queue.length);

    if(prev[needle] === -1){
        return null;
    }
    // build it backwards
    
    let current = needle;
    const path:number [] = [];

    while(prev[current]!== -1)
    {
        path.push(current);
        current = prev[current];
    }

   return [source, ...path.reverse()]
}