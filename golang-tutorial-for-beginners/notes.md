# GO Tutorial @ https://www.youtube.com/watch?v=yyUHQIec83I

## what is Go? why Go?
- good for concurrency
- do multiple things at once without disrupting the other
    - multiple threads - threading

### challenges of multi-threading
- 2 ppl trying to book something at once - concurrency
- devs need to write code to prevent conflicts that prevent this. 
- Go has built in concurrency mechanism - designed for writing multi-threaded concurrent applications 
- best used for apps that are very performant w/ cloud platform and thousands of servers