export class Node<T> {
  data: T;
  adjNodes: Node<T>[];
  comparator: (a: T, b: T) => number;

  constructor(data: T, comparator: (a: T, b: T) => number) {
    this.data = data;
    this.adjNodes = new Array<Node<T>>();
    this.comparator = comparator;
  }

  addNewNeighbour(node: Node<T>): void {
    this.adjNodes.push(node);
  }

  removeNeighbour(data: T): Node<T> | null {
    let index = this.adjNodes.findIndex(
      (node) => this.comparator(node.data, data) == 0
    );
    if (index != -1) {
      return this.adjNodes.splice(index, 1)[0];
    }
    return null;
  }
}

export class Graph<T> {
  nodes: Map<T, Node<T>> = new Map<T, Node<T>>();
  comparator: (a: T, b: T) => number;
  root: Node<T>;

  constructor(comparator: (a: T, b: T) => number, data: T) {
    this.comparator = comparator;
    this.root = new Node<T>(data, comparator);
  }

  addNewNode(data: T): Node<T> {
    let node = this.nodes.get(data);

    if (node != null) {
      return node;
    }

    node = new Node(data, this.comparator);
    this.nodes.set(data, node);
    return node;
  }

  removeNode(data: T) {
    let nodeToRemove = this.nodes.get(data);

    this.nodes.forEach((node) => {
      if (nodeToRemove && node.adjNodes.includes(nodeToRemove)) {
        node.removeNeighbour(nodeToRemove.data);
      }
    });
    this.nodes.delete(data);
    return nodeToRemove;
  }

  addEdge(source: T, destination: T): void {
    let sourceNode: Node<T> = this.addNewNode(source);
    let destinationNode: Node<T> = this.addNewNode(destination);

    sourceNode.addNewNeighbour(destinationNode);
  }

  removeEdge(source: T, destination: T): void {
    let sourceNode: Node<T> | undefined = this.nodes.get(source);

    let destinationNode: Node<T> | undefined = this.nodes.get(destination);

    if (sourceNode && destinationNode) {
      sourceNode.removeNeighbour(destinationNode.data);
    }
  }
}
