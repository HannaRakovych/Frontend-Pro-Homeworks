function pow(N, S) {
    if (S == 1) {
        return N ;
    } else {
        return N * pow(N, S - 1);
    }
}

console.log(pow(2, 2));