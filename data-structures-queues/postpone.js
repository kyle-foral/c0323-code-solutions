export default function postpone(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  const top = queue.dequeue();
  queue.enqueue(top);
}
