export default function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  for (let i = 0; i < index; i++) {
    const top = queue.dequeue();
    queue.enqueue(top);
  }
  return queue.dequeue();
}
