# AVL Trees & Rotations
An AVL Tree is a self-balancing binary search tree.<br>

Given an array of integers items and a threshold threshold, return the tree resulting from performing insertions of each element items[i] while maintaining the AVL balance property with threshold threshold.

Example 1:
```
Input: 
items = [1,2,3]
threshold = 1

Output:
          2
        /   \
       1     3

Explanation:
        1
         \
          2
           \
            3

Do a Left Rotation
Left Rotation (Rooted On 1):

          2
        /   \
       1     3

```
```
Example 2:
Input:
items = [3, 1, 2]
threshold = 1

Output:
          2
        /   \
       1     3

Explanation:
        3
       /
      1
       \
        2

Do a Left-Right Rotation
Left Rotation (Rooted On 1):

        3
       /
      2
     /
    1

Right Rotation (Rooted On 3):

          2
        /   \
       1     3

```

Constraints:
All values to be inserted will be unique