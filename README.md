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
[Iterating array with 10000 nodes              ]: 18.72     us
[Iterating tree with 10000 nodes               ]: 155.88    us
[Iterating tree with 50000 nodes               ]: 744.05    us
[Post Message to Worker                        ]: 368.46    ns
[Post Array with 10000 Elements to Worker      ]: 166.17    us
[Post Tree with 10000 Elements to Worker       ]: 3.56      ms
[Post Stringified tree10000 to Worker          ]: 230.84    us
[JSON Stringify tree10000                      ]: 3.82      ms
[JS ForLoop 1M                                 ]: 436.30    us
[WASM ForLoop 1M                               ]: 450.45    us
[Normal Add + Assignment                       ]: 12.23     ps
[Create Callback to Add                        ]: 10.48     ns
[Create ID Callback                            ]: 4.64      ns
[JS Recursive Fib 27                           ]: 1.65      ms
[WASM Recursive Fib 27                         ]: 708.22    us
[Create Object with 10000 elements             ]: 1.65      ms
[Create Object with 10 elements                ]: 1.24      us
[Create Object with 20 elements                ]: 2.46      us
[Create Array with 10000 elements              ]: 13.68     us
[Create Array with 10 elements                 ]: 17.52     ns
```

Huawei Mate 10 Pro - Chrome
```
[Iterating array with 10000 nodes              ]: 149.12    us
[Iterating tree with 10000 nodes               ]: 639.77    us
[Iterating tree with 50000 nodes               ]: 7.09      ms
[Post Message to Worker                        ]: 4.95      us
[Post Array with 10000 Elements to Worker      ]: 387.00    us
[Post Tree with 10000 Elements to Worker       ]: 10.17     ms
[Post Stringified tree10000 to Worker          ]: 444.14    us
[JSON Stringify tree10000                      ]: 13.64     ms
[JS ForLoop 1M                                 ]: 1.52      ms
[WASM ForLoop 1M                               ]: 1.09      ms
[Normal Add + Assignment                       ]: 52.80     ps
[Create Callback to Add                        ]: 5.10      ns
[Create ID Callback                            ]: 862.21    ps
[JS Recursive Fib 27                           ]: 9.73      ms
[WASM Recursive Fib 27                         ]: 1.64      ms
[Create Object with 10000 elements             ]: 9.24      ms
[Create Object with 10 elements                ]: 89.87     ns
[Create Object with 20 elements                ]: 17.51     us
[Create Array with 10000 elements              ]: 18.41     us
[Create Array with 10 elements                 ]: 88.06     ns
```

## Benchmark Pitfall

- You should avoid triggering compiler optimization when compiling C/Rust/C++ to WASM.
- Before benchmarking remember to close the browser devtool and disable all the plugins
