function foo(n: number): number {
  if (n === 1) {
    return 1;
  }

  return n + foo(n - 1);
}
