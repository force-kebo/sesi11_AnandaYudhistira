# 🧪 Selenium WebDriver Test Automation Suite

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![Selenium](https://img.shields.io/badge/Selenium-4.17+-blue.svg)](https://www.selenium.dev/)
[![Mocha](https://img.shields.io/badge/Mocha-10.4+-brown.svg)](https://mochajs.org/)
[![License](https://img.shields.io/badge/License-ISC-yellow.svg)](LICENSE)

## 📋 Overview

This is a comprehensive test automation suite built with Selenium WebDriver for testing the SauceDemo e-commerce website. The suite implements the Page Object Model (POM) design pattern and includes both functional and visual regression testing capabilities.

## 🎯 Project Description

The test suite automates end-to-end testing scenarios for the SauceDemo application, including:

- ✅ **Login Functionality**: Automated login with standard user credentials
- 🛒 **E-commerce Flow**: Product selection, sorting, cart management
- 📸 **Visual Regression Testing**: Screenshot comparison using pixelmatch
- 🌐 **Cross-browser Testing**: Support for Firefox and Chrome browsers
- 📊 **Rich Reporting**: Mochawesome HTML reports with detailed test results

### Key Features

- **Page Object Model**: Clean separation of test logic and page elements
- **Visual Testing**: Automated screenshot comparison for UI regression detection
- **Parallel Execution**: Tests run on multiple browsers simultaneously
- **Detailed Reporting**: Comprehensive test reports with screenshots and metrics
- **CI/CD Ready**: Configured for automated testing pipelines

## 🛠️ Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager
- Firefox and/or Chrome browsers installed

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sesi11_AnandaYudhistira-master
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Verify installation**
   ```bash
   npm test --dry-run
   ```

## 🚀 Usage

### Running Tests

**Run all tests with reporting:**
```bash
npm test
```

**Run tests without reporting:**
```bash
npm run cobain
```

### Test Execution Details

The test suite will:
1. Launch browsers in incognito mode (1920x1080 resolution)
2. Navigate to SauceDemo website
3. Perform login with standard credentials
4. Execute product selection and cart operations
5. Capture screenshots for visual regression testing
6. Generate detailed test reports

### Generated Files

After test execution, the following files are created:
- `full_ss.png` - Current screenshot
- `baseline.png` - Reference screenshot (created on first run)
- `diff.png` - Visual difference highlighting
- `mochawesome-report/` - HTML test reports

## 💻 System Requirements

- **Language**: JavaScript (ES6+)
- **Runtime**: Node.js 18+
- **Browsers**: Firefox, Chrome
- **OS**: Windows, macOS, Linux

## 📁 Project Structure

```
├── pages/
│   ├── login_page.js     # Login page object model
│   └── main_page.js      # Main page object model
├── test-sauce.js         # Main test file
├── package.json          # Project dependencies
├── baseline.png          # Visual regression baseline
├── full_ss.png           # Current test screenshot
├── diff.png              # Visual differences
└── mochawesome-report/   # Test reports
    ├── mochawesome.html
    └── assets/
```

## 🔧 Configuration

### Browser Configuration

Tests run on both Firefox and Chrome with the following settings:
- Incognito/Private mode enabled
- Window size: 1920x1080
- Timeout: 60 seconds per test

### Visual Testing Configuration

- Pixel threshold: 0.1 (10% difference tolerance)
- Automatic baseline creation on first run
- Difference highlighting in red

## 📊 Test Reports

View detailed test reports by opening:
```
mochawesome-report/mochawesome.html
```

Reports include:
- Test execution summary
- Pass/fail statistics
- Screenshots and visual diffs
- Execution time metrics
- Browser-specific results

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Add tests for new functionality
4. Ensure all tests pass
5. Submit a pull request

## 📝 License

This project is licensed under the ISC License - see the LICENSE file for details.

---

**Built with ❤️ using Selenium WebDriver and Mocha**
