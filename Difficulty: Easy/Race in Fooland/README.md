<h2><a href="https://www.geeksforgeeks.org/problems/race-in-fooland4522/1?page=3&sortBy=latest">Race in Fooland</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 14pt;">There is a multi-lane running track with lanes numbered from 1 to <strong>tracks</strong>&nbsp;(Tracks). There are some horizontal barriers placed across the lanes. Each barrier spans from lane <code>start_i</code> to lane <code>end_i</code> (both inclusive). The <strong>barriers</strong> may overlap, and athletes cannot run on lanes covered by a barrier.</span></p>
<p><span style="font-size: 14pt;">Determine how many lanes are free from barriers and can be used by athletes.</span></p>
<p><span style="font-size: 14pt;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 14pt;"><strong>Input: </strong>tracks = 20, barriers = [(1, 3), (5, 8), (8, 13), (14, 15), (9, 12)]<br></span><span style="font-size: 14pt;"><strong>Output: </strong>6
<strong>Explanation:<br></strong>The barriers cover the following lanes:
1 to 3, 5 to 8, 8 to 13, 14 to 15, 9 to 12
So, the lanes blocked by barriers are: {1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15}.
The lanes that are free and not covered by barriers are: {4, 16, 17, 18, 19, 20}.
Therefore, 6 lanes are available for athletes to run.<strong><br></strong></span></pre>
<pre><span style="font-size: 14pt;"><strong>Input:</strong> tracks = 10, barriers = [(1, 10), (3, 6)]<br></span><span style="font-size: 14pt;"><strong>Output:</strong> 0</span><br><span style="font-size: 14pt;"><strong>Explanation:</strong></span><br><span style="font-size: 14pt;">The barriers cover the following lanes:</span><br><span style="font-size: 14pt;">1 to 10 (first barrier), 3 to 6 (second barrier, but already covered by the first one)</span><br><span style="font-size: 14pt;">All lanes from 1 to 10 are blocked, so no lanes are available for athletes to run.</span></pre>
<p><span style="font-size: 14pt;"><strong>Expected Time Complexity:</strong> O(max(</span><span style="font-size: 14pt;">tracks, </span><span style="font-size: 14pt;">barriers.size())</span><span style="font-size: 14pt;">)<br></span><span style="font-size: 14pt;"><strong>Expected Auxiliary Space:</strong> O(tracks)</span></p>
<p><span style="font-size: 14pt;"><strong>Constraints:</strong><br>1 ≤ n ≤ 10<sup>6</sup><br>1 ≤&nbsp;barriers.size()&nbsp;≤ 10<sup>6<br></sup>1 ≤&nbsp;<span style="font-family: monospace; background-color: #b4d7ff;">start_i</span>&nbsp;≤&nbsp;<span style="font-family: monospace; background-color: #b4d7ff;">end_i</span> ≤ n<br>The barriers may overlap.</span></p></div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Sorting</code>&nbsp;<code>STL</code>&nbsp;<code>Data Structures</code>&nbsp;<code>Algorithms</code>&nbsp;