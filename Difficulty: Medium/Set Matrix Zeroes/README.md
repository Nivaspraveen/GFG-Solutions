<h2><a href="https://www.geeksforgeeks.org/problems/set-matrix-zeroes/1?page=3&sortBy=latest">Set Matrix Zeroes</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given a Matrix arr of size n x m, the task is to set all rows and columns to zeroes if a particular element is zero, in <strong>constant space complexity</strong>.</span></p>
<p><span style="font-size: 18px;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr[][] = [[1, 1, 1],<br>                  [1, 0, 1],<br>                  [1, 1, 1]]
<strong>Output:</strong> [[1, 0, 1],<br>         [0, 0, 0],<br>         [1, 0, 1]]
<strong>Explanation:</strong> <br><img src="https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/problem_desc/Web/Other/blobid0_1727620972.png" width="448" height="224"><br></span></pre>
<pre><span style="font-size: 18px;"><strong>Input: </strong>arr[][] = [[0, 1, 2, 0], <br>                  [3, 4, 5, 2],<br>                  [1, 3, 1, 5]]
<strong>Output:</strong> [[0, 0, 0, 0],<br>         [0, 4, 5, 0],<br>         [0, 3, 1, 0]]
<strong>Explanation:</strong> </span><span style="font-size: 18px;">There are zeroes present in the 1st row at 1st column and 4th column.</span></pre>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong> O(2*(n*m))&nbsp;<br><strong>Expected Auxiliary Space:</strong>&nbsp;O(1)</span></p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 ≤ number of rows,&nbsp;</span><span style="font-size: 18px;">number of columns</span><span style="font-size: 18px;"> ≤ 800</span><sup><br></sup><span style="font-size: 18px;">0 ≤ arr[i][j] ≤ 10<sup>3</sup></span></p></div>