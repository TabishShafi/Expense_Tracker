# Expense_Tracker
Smart Contract Deployed on ropsten testnet
address = "0xe31De61ecf2118e82a9D7E0B5F969058f0759184"

TO run the Dapp 
1) clone the repository
2) inside expense folder run npm install
3) now run this project on Local Web Server
4) to have localhost on your system run "npm install -g http-server"
5) in the project directory use "http-server" command to run the project on localhost 
output should be like this
--------------
"Starting up http-server, serving ./
Available on:
  http://192.168.0.5:8080
  http://127.0.0.1:8080
Hit CTRL-C to stop the server"
--------------
6) after running project should ask permission to connect metamask with metamask popup on right corner
7) if you don't have metamask installed install it first and run the project again 
8) it will only work with ropsten addresses and ropsten testnet
9) the account using dapp for first time will be unable to see any outputs 
it should look like this 
![image](https://user-images.githubusercontent.com/55992155/119503413-61424d80-bd84-11eb-9802-926e84461231.png)
10) first add some income 
like this
![image](https://user-images.githubusercontent.com/55992155/119503643-a23a6200-bd84-11eb-87f6-38638a3de2e2.png)
11) after first income transaction other transactions will work too.
it should look like this 
![image](https://user-images.githubusercontent.com/55992155/119503962-f1809280-bd84-11eb-9e35-233abbeb86b9.png)
12) every transactions description and amount is shown in history section 
13) income, expense, balance, everytransaction discription is stored on blockchain 
14) for every address seprate details are maintained using mappings arrays and structs
