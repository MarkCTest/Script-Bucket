# Copy the text below and save it in a file called roi_calc.rb
# Run once you have Ruby installed

puts "How many test cases?"
	testCases = gets.chomp

puts "How many test runs per year?"
	testRuns = gets.chomp 

puts "Duration of test runs (d)?"
	duration = gets.chomp

puts "How many staff per run?"
	staff = gets.chomp
	
calculation = (testCases.to_i * testRuns.to_i * duration.to_i * staff.to_i)

puts "Total maximum days saving is: #{calculation}"
puts "Maximum potential saving from automation: #{calculation * 200}"