import { network } from 'hardhat'
import { DeployResult } from 'hardhat-deploy/types';

module.exports = async ({ getNamedAccounts, deployments }: any) => {
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts();

  log("--------------------------------------")
  const myArgs: Array<any> = [];
  const SimpleStorage: DeployResult = await deploy("SimpleStorage", {
    from: deployer,
    args: myArgs,
    log: true,
    waitConfirmations: 1
  })

  log(SimpleStorage)
}

module.exports.tags = ["all", "simplestorage", "main"]