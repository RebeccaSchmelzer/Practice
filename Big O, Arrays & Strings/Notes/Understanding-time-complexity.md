# Notes - Understanding Time Complexity with Simple Examples
## src - https://www.geeksforgeeks.org/understanding-time-complexity-simple-examples/?ref=lbp

### The Syntax
* O(n^2): Quadratic time - performance is proportional to the squared size of the data that was input.
* O(n): Linear time - performance is proportional to the size of the data set, the larger the data set, the more time is needed.
* O(log n): Log time - performance is proportional to the log of the size of input data.
* O(1): Constant time - No matter the size, the time taken is always the same.
* O-notation: To denote asymptotic upper bound, the worst case scenario.
* Omega-notation: To denote asymptotic lower bound, the best case scenario.
* Theta-notation: To denote asymptotic tight bound, the average case scenario.

### The Examples
```python
print("hello world")
```
In this first example, the string is only printed once to the string and therefore takes constant time as everytime this line is executed the same amount of time is needed.

```python
for i in range(8):
    print("Hello world\n")
```
In this next example, the string is printed out N timesso the time complexity will be O(N).

```java
int count = 0;
for (int i = 0; i < N; i++) 
    for (int j = 0; j < i; j++) 
        count++;
```
When i=0, it will run 0 times.
When i=1, it will run 1 times.
When i=2, it will run 2 times and so on.

Total number of times count++ will run is 0 + 1 + (N-1) = (N(N-1))/2. So the time complexity will be O(N^2).

```java
int count = 0;
for (int i = N; i > 0; i /= 2) 
    for (int j = 0; j < i; j++) 
        count++;
```
At first, I thought this complexity was O(N*logN).N for the j loop and logN for i loop. That is incorrect though. 
I thought about how many times count++ will run.

When i=N, it will run N times.
When i=N/2, it will run N/2 times.
When i=N/4, it will run N/4 times and so on.

Total number of times count++ will run is totalled to br 2N or O(N).