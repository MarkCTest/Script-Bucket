' Copy the below and save it in a txt file named roi_calc.vbs
' Double click to run

Dim testCases, testRuns, duration, staff
Dim calculation

testCases = inputBox ("How many Test Cases?", "Test Cases")
testRuns= inputBox ("How many test runs per year?", "Test Runs")
duration = inputBox ("Duration of test runs (d)?", "Duration")
staff = inputBox ("How many staff?", "Staff")

calculation = (testCases * testRuns * duration * staff)

MsgBox "Total maximum days saving: " & calculation
MsgBox "Total maximum potential € saving: €" & (calculation * 200)