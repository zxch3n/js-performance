# JS Performance Benchmark

MacBook Pro (13-inch, M1, 2020) - Chrome - ([without optimization](https://stackoverflow.com/a/59013122))
```
[Iterating array with 10000 nodes              ]: 380.84    us
[Iterating tree with 10000 nodes               ]: 136.24    us
[Iterating tree with 50000 nodes               ]: 672.15    us
[Post Message to Worker                        ]: 3.49      us
[Post Array with 10000 Elements to Worker      ]: 57.16     us
[Post Tree with 10000 Elements to Worker       ]: 1.51      ms
[Post Stringified tree10000 to Worker          ]: 44.71     us
[JSON Stringify tree10000                      ]: 2.48      ms
[JS ForLoop 1M                                 ]: 7.28      ms
[WASM ForLoop 1M                               ]: 1.02      ms
[Normal Add + Assignment                       ]: 2.25      ns
[Create Callback to Add                        ]: 61.92     ns
[Create ID Callback                            ]: 37.77     ns
[JS Recursive Fib 27                           ]: 3.45      ms
[Create Object with 10000 elements             ]: 1.99      ms
[Create Object with 10 elements                ]: 30.16     ns
[Create Object with 20 elements                ]: 2.84      us
[Create Array with 10000 elements              ]: 1.93      us
[Create Array with 10 elements                 ]: 26.01     ns
```

MacBook Pro (13-inch, M1, 2020) - Chrome
```
[Iterating array with 10000 nodes              ]: 24.55     us
[Iterating tree with 10000 nodes               ]: 177.95    us
[Iterating tree with 50000 nodes               ]: 738.86    us
[Post Message to Worker                        ]: 5.29      us
[Post Message to Worker 1MB                    ]: 194.27    us
[Post Message to Worker 10MB                   ]: 1.88      ms
[Post Array with 10000 Elements to Worker      ]: 62.56     us
[Post Tree with 10000 Elements to Worker       ]: 2.62      ms
[Post Stringified tree10000 to Worker          ]: 60.20     us
[JSON Stringify tree10000                      ]: 4.53      ms
[JS ForLoop 1M                                 ]: 593.47    us
[WASM ForLoop 1M                               ]: 1.80      ms
[Normal Add + Assignment                       ]: 34.82     ps
[Create Callback to Add                        ]: 5.89      ns
[Create ID Callback                            ]: 543.18    ps
[JS Recursive Fib 27                           ]: 6.38      ms
[WASM Recursive Fib 27                         ]: 894.05    us
[Create Object with 10000 elements             ]: 2.17      ms
[Create Object with 10 elements                ]: 19.37     ns
[Create Object with 20 elements                ]: 2.97      us
[Create Array with 10000 elements              ]: 2.07      us
[Create Array with 10 elements                 ]: 14.98     ns
```

MacBook Pro (13-inch, M1, 2020) - Safari
```
[Iterating array with 10000 nodes              ]: 16.50     us
[Iterating tree with 10000 nodes               ]: 109.46    us
[Iterating tree with 50000 nodes               ]: 511.25    us
[Post Message to Worker                        ]: 273.37    ns
[Post Array with 10000 Elements to Worker      ]: 147.49    us
[Post Tree with 10000 Elements to Worker       ]: 2.57      ms
[Post Stringified tree10000 to Worker          ]: 43.35     us
[JSON Stringify tree10000                      ]: 2.70      ms
[JS ForLoop 1M                                 ]: 336.47    us
[WASM ForLoop 1M                               ]: 346.98    us
[Normal Add + Assignment                       ]: 9.39      ps
[Create Callback to Add                        ]: 7.91      ns
[Create ID Callback                            ]: 3.55      ns
[JS Recursive Fib 27                           ]: 1.38      ms
[WASM Recursive Fib 27                         ]: 523.01    us
[Create Object with 10000 elements             ]: 1.05      ms
[Create Object with 10 elements                ]: 703.23    ns
[Create Object with 20 elements                ]: 1.41      us
[Create Array with 10000 elements              ]: 8.86      us
[Create Array with 10 elements                 ]: 13.01     ns
```

iPad Pro 11-inch (2nd gen) - Safari
```
[Iterating array with 10000 nodes              ]: 104.32    us
[Iterating tree with 10000 nodes               ]: 1.19      ms
[Iterating tree with 50000 nodes               ]: 9.55      ms
[Post Message to Worker                        ]: 2.63      us
[Post Message to Worker 1MB                    ]: 1.12      ms
[Post Message to Worker 10MB                   ]: 10.91     ms
[Post Array with 10000 Elements to Worker      ]: 1.80      ms
[Post Tree with 10000 Elements to Worker       ]: 23.95     ms
[Post Stringified tree10000 to Worker          ]: 278.71    us
[JSON Stringify tree10000                      ]: 24.10     ms
[JS ForLoop 1M                                 ]: 1.20      ms
[WASM ForLoop 1M                               ]: 2.48      ms
[Normal Add + Assignment                       ]: 35.45     ps
[Create Callback to Add                        ]: 41.47     ns
[Create ID Callback                            ]: 11.05     ns
[JS Recursive Fib 27                           ]: 7.65      ms
[WASM Recursive Fib 27                         ]: 2.42      ms
[Create Object with 10000 elements             ]: 9.04      ms
[Create Object with 10 elements                ]: 6.56      us
[Create Object with 20 elements                ]: 12.70     us
[Create Array with 10000 elements              ]: 51.01     us
[Create Array with 10 elements                 ]: 63.98     ns
```

Huawei Mate 10 Pro - Chrome
```
[Iterating array with 10000 nodes              ]: 180.64    us
[Iterating tree with 10000 nodes               ]: 673.99    us
[Iterating tree with 50000 nodes               ]: 16.75     ms
[Post Message to Worker                        ]: 4.37      us
[Post Message to Worker 1MB                    ]: 3.43      ms
[Post Message to Worker 10MB                   ]: 34.08     ms
[Post Array with 10000 Elements to Worker      ]: 382.71    us
[Post Tree with 10000 Elements to Worker       ]: 9.72      ms
[Post Stringified tree10000 to Worker          ]: 462.66    us
[JSON Stringify tree10000                      ]: 15.43     ms
[JS ForLoop 1M                                 ]: 1.34      ms
[WASM ForLoop 1M                               ]: 1.03      ms
[Normal Add + Assignment                       ]: 63.61     ps
[Create Callback to Add                        ]: 5.20      ns
[Create ID Callback                            ]: 1.06      ns
[JS Recursive Fib 27                           ]: 9.64      ms
[WASM Recursive Fib 27                         ]: 1.64      ms
[Create Object with 10000 elements             ]: 9.12      ms
[Create Object with 10 elements                ]: 96.01     ns
[Create Object with 20 elements                ]: 22.85     us
[Create Array with 10000 elements              ]: 18.41     us
[Create Array with 10 elements                 ]: 98.99     ns
```

## Benchmark Pitfall

- You should avoid triggering compiler optimization when compiling C/Rust/C++ to WASM.
- Before benchmarking remember to close the browser devtool and disable all the plugins
