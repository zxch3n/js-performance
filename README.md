# JS Performance Benchmark

MacBook Pro (13-inch, M1, 2020) - Chrome
```
[JS ForLoop 1M                 ]: 345.781   us
[WASM ForLoop 1M               ]: 336.700   us
[Normal Add + Assignment 1M    ]: 15.246    us
[Create Callback to Add 1M     ]: 3768.973  us  (sub: JS ForLoop 1M)
[Create ID Callback 1M         ]: 364.446   us  (sub: JS ForLoop 1M)
[JS Recursive Fib 27           ]: 3718.519  us
[WASM Recursive Fib 27         ]: 570.125   us
```

iPad Pro 11-inch (2nd gen) - Safari
```
[JS ForLoop 1M                 ]: 412.541   us
[WASM ForLoop 1M               ]: 426.621   us
[Normal Add + Assignment 1M    ]: 12.053    us
[Create Callback to Add 1M     ]: 9356.690  us  (sub: JS ForLoop 1M)
[Create ID Callback 1M         ]: 4323.308  us  (sub: JS ForLoop 1M)
[JS Recursive Fib 27           ]: 1650.165  us
[WASM Recursive Fib 27         ]: 682.128   us
```

Huawei Mate 10 Pro - Chrome
```
[JS ForLoop 1M                 ]: 1597.444  us
[WASM ForLoop 1M               ]: 956.023   us
[Normal Add + Assignment 1M    ]: 52.013    us
[Create Callback to Add 1M     ]: 4994.661  us  (sub: JS ForLoop 1M)
[Create ID Callback 1M         ]: 781.703   us  (sub: JS ForLoop 1M)
[JS Recursive Fib 27           ]: 9750.000  us
[WASM Recursive Fib 27         ]: 1639.344  us
```

## Benchmark Pitfall

- You should avoid triggering compiler optimization when compiling C/Rust/C++ to WASM.
- Before benchmarking remember to close the browser devtool and disable all the plugins
