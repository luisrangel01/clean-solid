interface Bird {
  eat(): void;
}

interface FlyingBird {
  fly(): void;
}

interface RunningBird {
  run(): void;
}

interface SwimmerBird {
  swin(): void;
}

class Tucan implements Bird, FlyingBird {
  eat(): void {}

  fly(): void {}
}

class Humminbird implements Bird, FlyingBird {
  eat(): void {}

  fly(): void {}
}

class Ostrich implements Bird, RunningBird {
  eat(): void {}

  run(): void {}
}

class Penguin implements Bird, SwimmerBird {
  eat(): void {}

  swin(): void {}
}
