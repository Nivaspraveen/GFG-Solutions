<h2><a href="https://www.geeksforgeeks.org/problems/attend-all-meetings/1?page=2&sortBy=latest">Meeting Rooms</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18.6667px;">Given two arrays <strong>start[] and end[]</strong>&nbsp; such that start[i] is the starting time of i<sup>th</sup> meeting and end[i] is the ending time of ith meeting, check if it is possible for a person to <strong>attend all the meetings</strong> such that he can attend only one meeting at a particular time.</span></p>
<p><span style="font-size: 18.6667px;"><strong>Note</strong>: A person can also attend a meeting if its starting time is the same as the previous meeting’s ending time.</span></p>
<p><span style="font-size: 14pt;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 14pt;"><strong>Input: </strong>start[] = [1, 10, 7], end[] = [4, 15, 10]
<strong>Output:</strong> true
<strong>Explanation:</strong> </span><span style="font-size: 18.6667px;">Since all the meetings are held at different times, it is possible to attend all the meetings.</span></pre>
<pre><span style="font-size: 14pt;"><strong>Input: </strong>start[] = [2, 9, 6], end[] = [4, 12, 10]
<strong>Output:</strong> false
<strong>Explanation:</strong> It is not possible to attend the second and third meetings simultaneously.<br></span></pre>
<p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; font-size: medium; white-space: normal;"><span style="font-size: 12pt;"><strong>Constraints:</strong></span><br><span style="font-size: 12pt;">1 ≤ start.size() ≤ 10<sup>5</sup></span><br><span style="font-size: 12pt;">0 ≤ start[i] &lt; end[i] ≤ 10<sup>6</sup></span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Sorting</code>&nbsp;<code>Greedy</code>&nbsp;<code>Arrays</code>&nbsp;