.PHONY: init test compile node run_localhost install_zeppelin
init:
	npx hardhat 
clear:
	rm contracts/* scripts/* test/* && rm -rf artifacts/ cache/
test:
	npx hardhat test
compile:
	npx hardhat compile
node:
	npx hardhat node
run_localhost:
	npx hardhat run --network localhost scripts/deploy.js
install_zeppelin:
	npm install --save @openzeppelin/contracts

.PHONY: deploy_node deploy_sepolia
deploy_node:
	npx hardhat run --network localhost scripts/deploy.js
deploy_sepolia:
	npx hardhat run --network sepolia scripts/deploy.js
verify_sepolia:
	npx hardhat verify --network sepolia 0xDE75a1F8ad101a1A6B610894e36Cf75081e2a886 
