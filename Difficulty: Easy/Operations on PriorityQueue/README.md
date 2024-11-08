<h2><a href="https://www.geeksforgeeks.org/problems/operations-on-priorityqueue/1?page=2&sortBy=accuracy">Operations on PriorityQueue</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given an array <strong>A</strong> of <strong>N</strong> integers, your task is to <strong>add </strong>these elements to the <strong>PriorityQueue</strong>. Also, given an array <strong>B </strong>of <strong>M</strong> integers, the task is to check<strong> if the given element is present in the PriorityQueue</strong> or not.<br>If the element is present, <strong>then 1 is printed by the driver code, after that the</strong> <strong>max element </strong>of priority queue is printed. Then the driver code deletes the max element.<br><strong>Note:</strong> Here the driver code has implemented the PriorityQueue as a max-heap.</span></p>
<p><strong><span style="font-size: 18px;">Example:</span></strong></p>
<pre><span style="font-size: 18px;"><strong>Input:</strong>
N = 8
A = {1, 2, 3, 4, 5, 2, 3, 1}
M = 5
B = {1, 3, 2, 9, 10}</span>

<span style="font-size: 18px;"><strong>Output:</strong>
1
5
1
4
1
3
-1
-1</span>

<span style="font-size: 18px;"><strong>Explanation:
</strong>After inserting elements present in A, when we find B[0]=1, 
which is present, so 1 gets printed, and then the 
top element of the PriorityQueue which is 5 gets 
printed, and then it gets deleted. Similarly, when 
element is not present,<strong> just -1 is printed.<br></strong></span></pre>
<p><span style="font-size: 18px;"><strong>Example 2:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input:</strong>
N = 4
A = {1, 2, 3, 4}
M = 2
B = {1, 10}</span>

<span style="font-size: 18px;"><strong>Output:</strong>
1
4
-1</span>

<span style="font-size: 18px;"><strong>Explanation:
</strong>After inserting elements present in A, when we find B[0]=1, 
which is present, so 1 gets printed, and then the 
top element of the PriorityQueue which is 4 gets 
printed, and then it gets deleted. Similarly, when 
element is not present,<strong> just -1 is printed.</strong></span></pre>
<p><span style="font-size: 18px;"><strong>Your Task:</strong><br>Your task is to complete the following functions:<br><strong>insert(PriorityQueue q, int k) </strong>: You just insert k into q.<br><strong>find(PriorityQueue q, int k) </strong>: You return true if k is in q, else you return false.<br><strong>delete(PriorityQueue q) </strong>: You delete the top element (which is also the max element) and return it.</span></p>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> O(NlogN)<br><strong>Expected Space Complexity: </strong>O(NlogN)</span></p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 &lt;= N &lt;= 10<sup>3</sup><br>1 &lt;= M &lt;= 10<sup>3</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Java</code>&nbsp;<code>Queue</code>&nbsp;<code>Java-Collections</code>&nbsp;<code>Data Structures</code>&nbsp;