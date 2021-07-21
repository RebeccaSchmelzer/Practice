# Notes - Understanding Time Complexity with Simple Examples
## https://www.geeksforgeeks.org/practice-questions-time-complexity-analysis/?ref=lbp

1. 
```
int a = 0, b = 0;
for (i = 0; i < N; i++) {
    a = a + rand();
}
for (j = 0; j < M; j++) {
    b = b + rand();
}
```
The time complexity is O(N+M) and O(1) for space complexity. The first loop is O(N) and the second loop is O(M) so the total time woulf be O(N+M). Since no space is needed on top of what is already being used, the space complexity is constant.

2. 
```
int a = 0;
for (i = 0; i < N; i++) {
	for (j = N; j > i; j--) {
		a = a + i + j;
	}
}
```
The time complexity of this block is quadratic. This block of code runs N+(N-1)+(N-2)+...+1+0. This then equates to (N(N+1))/2 or O(N^2) time complexity.

3. 
```
int i, j, k = 0;
for (i = n / 2; i <= n; i++) {
	for (j = 2; j <= n; j = j * 2) {
		k = k + n / 2;
	}
}
```
Since i runs n/2 times and j doubles on every iteration until it's equal to n, the time complexity would be O(n/2 * logn) or O(nlogn).

4. What does it mean when we say that an algorithm X is asymptotically more efficient than Y?
X will always be better for large inputs as X is said to be asymptotically more efficient if X performs faster for all inputs n larger then a value greater then 0.

5. 
```
int a = 0, i = N;
while (i > 0) {
	a += i;
	i /= 2;
}
```
The time complexity for this code is O(log n). this is because the loop iterates by dividing the counter in two after each iteration. This equates to O(log n) time complexity.

6. Which of the following best describes the useful criterion for comparing the efficiency of algorithms?
Both time and memory, both of these factors compute the efficiency of the algorithm present.

7. How is time complexity measured?
By counting the number of primitive operations performed by the algorithm on given input size.

8. What will be the time complexity of the following code?
```javascript
for(var i=0;i<n;i++)
	i*=k
```
The time complexity is O(logk^N) as the loop iterates K^(n-1) times.

9. 
```javascript
var value = 0;
for(var i=0;i<n;i++)
	for(var j=0;j<i;j++)
	value += 1;
```
The time complexity is (N(N-1))/2 as the j loop runs n-1 times and the i loop runs n times.

10.  Algorithm A and B have a worst-case running time of O(n) and O(logn), respectively. Therefore, algorithm B always runs faster than algorithm A.
This statement is false as the time complexity given for these algorithms is exclusively worst case. There are cases when A could run faster then B still.