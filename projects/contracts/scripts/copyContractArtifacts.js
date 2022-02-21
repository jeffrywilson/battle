const { basename, extname, join } = require("path")
const { copyFile, readdir } = require("fs")

const CONTRACTS_WORKSPACE_DIR = "contracts"
const CONTRACTS_WORKING_DIR = "src"
const HARDHAT_OUTPUT_DIR = "artifacts"

const FRONTEND_WORKSPACE_DIR = "frontend"
const FRONTEND_OUTPUT_DIR = "src/data/abi"

const projectRoot = join(__dirname, "../../")
const contractsWorkspaceRoot = join(projectRoot, CONTRACTS_WORKSPACE_DIR)
const frontendWorkspaceRoot = join(projectRoot, FRONTEND_WORKSPACE_DIR)

const artifactFilePath = (fileName) =>
  join(contractsWorkspaceRoot, `${HARDHAT_OUTPUT_DIR}/${CONTRACTS_WORKING_DIR}/${fileName}/`)

const frontendOutputFilePath = (artifactFilename) =>
  join(frontendWorkspaceRoot, `${FRONTEND_OUTPUT_DIR}/${artifactFilename}`)

readdir(join(contractsWorkspaceRoot, CONTRACTS_WORKING_DIR), (err, contractFiles) => {
  if (err) return console.log("Unable to scan directory: ", err)

  console.log("----------------------------------------------------")
  console.log(`There are ${contractFiles.length} Contracts to Copy`)
  console.log("----------------------------------------------------")

  contractFiles.forEach((contractFile) => {
    console.log(`${"Copying".padEnd(16)}${contractFile}`)

    const extension = extname(contractFile)
    const fileName = basename(contractFile, extension)

    readdir(artifactFilePath(contractFile), (err, artifactFiles) => {
      if (err) return console.log("Unable to scan artifacts: ", err)

      const toCopy = artifactFiles.filter(
        (artifactFile) => artifactFile.includes(`${fileName}`) && !artifactFile.includes("dbg"),
      )

      if (toCopy.length < 1) return console.log("No artifacts to copy")

      console.log(
        `${contractFile.padEnd(16)}${toCopy.length} ${
          toCopy.length > 1 ? "artifacts" : "artifact"
        }`,
      )

      toCopy.forEach((abi) => {
        const abiFileUrl = join(artifactFilePath(contractFile), abi)

        copyFile(abiFileUrl, frontendOutputFilePath(abi), (err) => {
          if (err) return console.log("Not able to copy: ", err)

          console.log(`${contractFile.padEnd(16)}${abi.padEnd(16)} copied!`)
        })
      })
    })
  })
})
