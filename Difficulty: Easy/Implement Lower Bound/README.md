<h2><a href="https://www.geeksforgeeks.org/problems/implement-lower-bound/1?page=1&sortBy=latest">Implement Lower Bound</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p dir="ltr" style="box-sizing: border-box; margin: 0px 0px 10px; padding: 0px; border: 0px; font-size: 18px; vertical-align: baseline; color: #273239; font-family: Nunito, sans-serif; letter-spacing: 0.162px; background-color: #ffffff;"><span style="font-size: 14pt;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; vertical-align: baseline;">Given a sorted array&nbsp;</span><strong style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; vertical-align: baseline;">arr[]&nbsp;</strong><span style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; vertical-align: baseline;">and a number&nbsp;</span><strong style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; vertical-align: baseline;">target</strong><span style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; vertical-align: baseline;">, the task is to find the&nbsp;</span><strong style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; vertical-align: baseline;">lower bound</strong><span style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; vertical-align: baseline;">&nbsp;of the&nbsp;</span><strong style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; vertical-align: baseline;">target</strong><span style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; vertical-align: baseline;">&nbsp;in this given array. The&nbsp;</span><strong style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; vertical-align: baseline;">lower bound</strong><span style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; vertical-align: baseline;">&nbsp;of a number is defined as the smallest&nbsp;</span><strong style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; vertical-align: baseline;">index</strong><span style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; vertical-align: baseline;">&nbsp;in the sorted array where the element is&nbsp;</span><strong style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; vertical-align: baseline;">greater than or equal to</strong><span style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; vertical-align: baseline;">&nbsp;the given number.</span></span></p>
<p><span style="font-size: 14pt;"><strong style="color: #273239; font-family: Nunito, sans-serif; letter-spacing: 0.162px; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; vertical-align: baseline;">Note:</strong><span style="color: #273239; font-family: Nunito, sans-serif; letter-spacing: 0.162px; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; vertical-align: baseline;">&nbsp;If all the elements in the given array are smaller than the&nbsp;</span><strong style="color: #273239; font-family: Nunito, sans-serif; letter-spacing: 0.162px; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; vertical-align: baseline;">target</strong><span style="color: #273239; font-family: Nunito, sans-serif; letter-spacing: 0.162px; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; vertical-align: baseline;">, the lower bound will be the length of the array</span>.&nbsp;</span></p>
<p><span style="font-size: 14pt;"><strong>Examples :</strong></span></p>
<pre><span style="font-size: 14pt;"><strong>Input: </strong> arr[] = [2, 3, 7, 10, 11, 11, 25], target = 9
<strong>Output:</strong> 3
<strong>Explanation:</strong> 3 is the smallest index in arr[] where element (arr[3] = 10) is greater than or equal to 9.</span></pre>
<pre><span style="font-size: 14pt;"><strong>Input:</strong> arr[] = [2, 3, 7, 10, 11, 11, 25], target = 11
<strong>Output:</strong> 4
<strong>Explanation:</strong> 4 is the smallest index in arr[] where element (arr[4] = 11) is greater than or equal to 11.<br></span></pre>
<pre><span style="font-size: 14pt;"><strong>Input:</strong> arr[] = [2, 3, 7, 10, 11, 11, 25], target = 100
<strong>Output:</strong> 7
<strong>Explanation:</strong> As no element in arr[] is greater than 100, return the length of array.</span></pre>
<p><span style="font-size: 14pt;"><strong>Constraints:</strong><br>1 ≤ arr.size() ≤ 10<sup>6</sup><br>1 ≤ arr[i] ≤ 10<sup>6</sup><br>1 ≤ target ≤ 10<sup>6</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Binary Search</code>&nbsp;<code>Arrays</code>&nbsp;<code>Algorithms</code>&nbsp;