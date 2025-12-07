# Software Testing Course – Project Repository

This repository is created as part of the Software Testing course

The repository contains the source code that is under testing, the implemented test files, the package.json/lock files, and the required LICENSE file.
It also includes a GitHub Actions workflow integrated with Coveralls for automated testing and coverage reporting

Source code folder contains a separate license file that must **NOT** be removed under any circumstances!
Removing this license file directly violates terms and conditions of the software under testing.
Individuals who remove or modify the license file will also carry the consequences.
## Test Environment

### Environment

- Node.js: v23.2.0
- Test Framework: Jest
- Coverage Tool: Coveralls
### Dependencies

| Package | Version |
|---------|---------|
| `cross-env` | `^10.1.0` |
| `jest` | `^30.2.0` |
| `jest-junit` | `^16.0.0` |
| `coveralls` | `^3.1.1` |

## Installation and Commands

### Installation
```npm install```
### Run Tests
```npm test```
### Run with Coverage
```npm run test:coverage```
### Run in CI
```npm run test:ci```