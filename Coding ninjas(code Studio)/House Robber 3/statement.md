* Problem statement:
<hr>
The ninja visits an amusement park but finds himself confused because he wants to ride the rides such that he gets maximum fun. The amusement park has only one entrance that is root.

Each ride has a fun number assigned to it and ninja wants to maximize this fun but there is a rule in the park that no one is allowed to ride two directly connected rides.

As the ninja is smart and good in programming because he did a course from coding ninja, he found immediately that park rides are connected like binary tree where the root is the root of the binary tree. Help the ninja to get the maximum fun this time.

Detailed explanation ( Input/output format, Notes, Images )
<hr>

* Sample Input 1:
    2
    3 5 9 -1 -1 -1 -1
    4 2 6 1 3 5 7 -1 -1 -1 -1 -1 -1 -1 -1
    Sample Output 1:
    14    
    20
    Explanation of Sample Input 1:
    Test Case 1 : 
    Maximum fun that ninja can get is by visiting green color rides i.e 5 + 9 = 14.

    ![alt text](https://files.codingninjas.in/screenshot-from-2021-03-25-09-09-46-8528.png)

* Test Case 2 :     
    Maximum fun in this tree is 1 + 3 + 5 + 7 + 4 = 20.

    Sample Input 2:
    1
    5 4 8 -1 6 1 2 -1 -1 -1 -1 -1 -1
    Sample Output 2:
    14

    ![alt text](https://files.codingninjas.in/screenshot-from-2021-03-25-09-10-09-8527.png)