.PHONY: ignore_node install_zeppelin truffle_compile truffle_develop truffle_test truffle_ganache truffle_dashboard

ignore_node:
	echo node_modules >> .gitignore 
install_zeppelin:
	npm install --save @openzeppelin/contracts
truffle_compile:
	truffle compile
truffle_develop:
	truffle develop
truffle_test:
	truffle test
truffle_ganache:
	truffle console --network ganache
truffle_dashboard:
	truffle dashboard

.PHONY: truffle_migrate_ganache truffle_migrate_dashboard 
truffle_migrate_ganache:
	truffle migrate --network ganache
truffle_migrate_dashboard:
	truffle migrate --network dashboard
