import * as core from '@actions/core'
import { VERSION } from './version.mjs'

async function run() {
  console.log(`Action version: ${VERSION}`)
  console.log(JSON.stringify(process.versions, undefined, 2))

  const inputKebabCase = core.getInput('kebab-case')
  const inputSnakeCase = core.getInput('snake_case')

  core.info(`kebab-case ${inputKebabCase}`)
  core.info(`snake_case: ${inputSnakeCase}`)

  core.exportVariable('KEBAB-CASE', inputKebabCase)
  core.exportVariable('SNAKE_CASE', inputSnakeCase)

  core.setOutput('kebab-case', inputKebabCase)
  core.setOutput('snake_case', inputSnakeCase)
}

await run()
