<h2><a href="https://www.geeksforgeeks.org/problems/closest-pair-sum-in-an-unsorted-array/1?page=2&sortBy=latest">Closest Pair Sum in an unsorted Array</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given an array&nbsp;<strong>arr[]</strong>&nbsp;and an integer&nbsp;<strong>target</strong>.&nbsp;</span><span style="font-size: 18px;">You have to find a&nbsp;</span><span style="background-color: #ffffff; color: #273239; font-family: Nunito, sans-serif; font-size: 18px; letter-spacing: 0.162px; text-align: justify;">pair in an array whose sum is closest to&nbsp;<strong>target</strong>.</span></p>
<p><strong><span style="background-color: #ffffff; color: #273239; font-family: Nunito, sans-serif; font-size: 18px; letter-spacing: 0.162px; text-align: justify;">Note:&nbsp;</span></strong><span style="background-color: #ffffff; color: #273239; font-family: Nunito, sans-serif; font-size: 18px; letter-spacing: 0.162px; text-align: justify;">Return the pair in sorted order and i</span><span style="background-color: #ffffff; color: #273239; font-family: Nunito, sans-serif; font-size: 18px; letter-spacing: 0.162px;">f there are multiple such pairs return the pair with maximum absolute difference. If no such pair exists return an empty array.</span></p>
<p><strong style="font-size: 18px;">Examples:</strong></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong></span><span style="font-size: 18px;">arr[] = [40, 10, 29, 28, 22, 1, 30], target = 54 </span><span style="font-size: 18px;">
<strong>Output: </strong>[22, 30]<strong>
Explanation: </strong></span><span style="font-size: 18px;">The pair 22 and 30 sums to 52 which is the closest sum to 54.</span></pre>
<pre><span style="font-size: 14pt;"><strong>Input: </strong>arr[] = [10, 3, 4, 7, 1], target = 15 
<strong>Output: </strong>[4, 10]<strong>
Explanation: </strong></span><span style="font-size: 18.6667px;">The pair 4 and 10 sums to 14 which is the closest sum to 15.</span></pre>
<p><span style="font-size: 18px;"><strong>Constraints:<br></strong>1 &lt;= arr.size() &lt;= 10<sup>5</sup><strong><br></strong></span><span style="font-size: 18px;">0 &lt;= arr[i]&nbsp;</span><span style="font-size: 18px;">&lt;= 10<sup>4</sup></span><span style="font-size: 18px;"><br></span><span style="font-size: 18px;">1 &lt;= target &lt;= 10<sup>4</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Sorting</code>&nbsp;<code>two-pointer-algorithm</code>&nbsp;<code>Arrays</code>&nbsp;