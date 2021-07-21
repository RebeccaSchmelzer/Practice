1. What is the time, space complexity of following code :
```
        int a = 0, b = 0;    
        for (i = 0; i < N; i++) {
            a = a + rand();  
        }
        for (j = 0; j < M; j++) {
            b = b + rand();
        }
```
Assume that rand() is O(1) time, O(1) space function.
Ans: O(N+M) time, O(1) space

2. What is the time, space complexity of following code :
```
    int a = 0, b = 0;    
    for (i = 0; i < N; i++) {
        for (j = 0; j < N; j++) {
            a = a + j;
        }
    }
    for (k = 0; k < N; k++) {
        b = b + k;
    } 
```
Ans: O(N*N) Time, O(1) space

3. What is the time complexity of the following code :
```
    int a = 0;
    for (i = 0; i < N; i++) {
        for (j = N; j > i; j--) {
            a = a + i + j;
        }
    }
```
Ans: O(N*N) (see other practice file)

4. What does it mean when we say that an algorithm X is asymptotically more efficient than Y?
Ans: X is better for large inputs.

5. What is the time complexity of the following code :
```
        int a = 0, i = N;
        while (i > 0) {
            a += i;
            i /= 2;
        }
```
Ans: O(logn)

6. What is time complexity of following code :
```
        int count = 0;
        for (int i = N; i > 0; i /= 2) {
            for (int j = 0; j < i; j++) {
                count += 1;
            }
        }
```
Ans: In the first iteration, the j loop runs N times. In the second iteration, the j loop runs N / 2 times. In the ith iteration, the j loop runs N / 2^i times. So, the total number of runs of loop = N + N / 2 + N / 4 + ... 1 = N

7. What is the time complexity of the following code :
```
    int i, j, k = 0;
    for (i  = n/2; i <= n; i++) {
        for (j = 2; j <= n; j = j * 2) {
            k = k + n/2;
        }
    }
```
Ans: O(nlogn)

8. In the following C++ function, let n >= m.
```
    int gcd(int n, int m) {
            if (n%m ==0) return m;
            if (n < m) swap(n, m);
            while (m > 0) {
                n = n%m;
                swap(n, m);
            }
            return n;
    }
```
Ans: O(logn)

9. In a competition, four different functions are observed. All the functions use a single for loop and within the for loop, same set of statements are executed.

Consider the following for loops:

  A) for(i = 0; i < n; i++)
 
  B) for(i = 0; i < n; i += 2)
 
  C) for(i = 1; i < n; i *= 2)
 
  D) for(i = n; i > -1; i /= 2)
If n is the size of input(positive), which function is the most efficient? In other words, which loop completes the fastest.

Ans: C.

10. Which of the following is not bounded by O(n^2)?
Ans: n^3/(sqrt(n))

11. Which of the given options provides the increasing order of complexity of functions f1, f2, f3 and f4:

f1(n) = 2^n

f2(n) = n^(3/2)

f3(n) = nLogn

f4(n) = n^(Logn)

Ans: f3, f2, f4, f1

12. What is the worst case time complexity of the following code :
```
/* 
 * V is sorted 
 * V.size() = N
 * The function is initially called as searchNumOccurrence(V, k, 0, N-1)
 */
int searchNumOccurrence(vector<int> &V, int k, int start, int end) {
    if (start > end) return 0;
    int mid = (start + end) / 2;
    if (V[mid] < k) return searchNumOccurrence(V, k, mid + 1, end);
    if (V[mid] > k) return searchNumOccurrence(V, k, start, mid - 1);
    return searchNumOccurrence(V, k, start, mid - 1) + 1 + searchNumOccurrence(V, k, mid + 1, end);
}
```
Ans: O(N)
Explanation: It might seem at the first look that the program is O(log N). 
However, the last case 

return searchNumOccurrence(V, k, start, mid - 1) + 1 + searchNumOccurrence(V, k, mid + 1, end);
is the bottleneck step. 
Assuming all the values in the array are the same, we get the following relation : 
```
T(N) = 2 * T(N/2) + constant

     = 4 * T(N/4) + constant     ( 2 * constant = another constant ) 

     = 8 * T(N/8) + constant 

     …

     = N * T(N/N) + constant 

     = N + constant 

     = O(N)
```

13. What is the worst case time complexity of the following code:
```
int findMinPath(vector<vector<int> > &V, int r, int c) {
  int R = V.size();
  int C = V[0].size();
  if (r >= R || c >= C) return 100000000; // Infinity
  if (r == R - 1 && c == C - 1) return 0;
  return V[r][c] + min(findMinPath(V, r + 1, c), findMinPath(V, r, c + 1));
}
Assume R = V.size() and C = V[0].size().
```
Ans: O(2^(R+C))
Explanation: 
Note that in every function call, we end up making 2 calls.

So, the function calls ends up looking like a tree :

                   F(0,0)
                /          \ 
            F(0, 1)         F(1, 0)
             /    \         /       \ 
          F(0, 2)  F(1,1)  F(1, 1)  F(2, 0)
             ....
The function calls end up making a complete binary tree.

  Number of calls on Level 0 = 1
  Number of calls on Level 1 = 2
  Number of calls on Level 2 = 4
  ...
  Number of calls on level i = 2^i. 
Total number of calls = 1 + 2 + 4 + ... 2^i + ... 2^(M + N - 2)  
                      = O(2^(M + N))

14. What is the worst case time complexity of the following code:
```
int memo[101][101];
int findMinPath(vector<vector<int> >& V, int r, int c) {
  int R = V.size();
  int C = V[0].size();
  if (r >= R || c >= C) return 100000000; // Infinity
  if (r == R - 1 && c == C - 1) return 0;
  if (memo[r][c] != -1) return memo[r][c];
  memo[r][c] =  V[r][c] + min(findMinPath(V, r + 1, c), findMinPath(V, r, c + 1));
  return memo[r][c];
}

Callsite : 
memset(memo, -1, sizeof(memo));
findMinPath(V, 0, 0);
Assume R = V.size() and C = V[0].size() and V has positive elements
```
Ans: O(R*C)
Explanation:
```
Note that for a given `(r, c)`
 
the following code will not be executed more than once : 

memo[r][c] =  V[r][c] + min(findMinPath(V, r + 1, c), findMinPath(V, r, c + 1));


Once memo[r][c] is set, the functions will return at 

if (memo[r][c] != -1) return memo[r][c];


So, every function ends up calling other functions at most 1 time. 
In other words, every function ends up executing atmost O(1) times (Note that you can shift the part about checking for memo[r][c] != -1 at the callsite ).

`O(R * C)` possible number of combinations are possible for `(r, c)`
Hence, the time complexity of the function : O(R*C)
```

15. What is the time complexity of the following code :
```
        int j = 0;
        for(int i = 0; i < n; ++i) {
            while(j < n && arr[i] < arr[j]) {
                j++;
            }
        }
```
Ans: O(N), the variable j is not initialized for each value of variable i.
Hence, the inner j++ will be executed at most n times.
The i loop also runs n times.
So, the whole thing runs for O(n) times.