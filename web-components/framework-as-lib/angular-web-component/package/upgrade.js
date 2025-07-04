const fs = require('fs');
const path = require('path');

// Function to update package.json version
function updatePackageVersion() {
  const packagePath = path.join(__dirname, 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  
  // Increment patch version
  const versionParts = packageJson.version.split('.');
  versionParts[2] = (parseInt(versionParts[2]) + 1).toString();
  packageJson.version = versionParts.join('.');
  
  // Write updated package.json
  fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
  console.log(`Updated package version to ${packageJson.version}`);
  
  return packageJson.version;
}

// Function to copy package files to dist folder
function copyPackageToDist() {
  const sourceDir = __dirname;
  const targetDir = path.join(__dirname, '..', 'dist', 'angular-web-component', 'browser');
  
  // Ensure target directory exists
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  
  // Copy package.json
  const packagePath = path.join(sourceDir, 'package.json');
  const targetPackagePath = path.join(targetDir, 'package.json');
  fs.copyFileSync(packagePath, targetPackagePath);
  
  console.log('Copied package.json to dist folder');
}

// Main publish function
function publish() {
  try {
    console.log('Starting publish process...');
    
    // Update version
    const newVersion = updatePackageVersion();
    
    // Copy package to dist
    copyPackageToDist();
    
    console.log(`Publish process completed. Version ${newVersion} ready for publishing.`);
    console.log('Run: npm publish dist/angular-web-component/browser --access public');
    
  } catch (error) {
    console.error('Error during publish process:', error);
    process.exit(1);
  }
}

// Run publish if this script is executed directly
if (require.main === module) {
  publish();
}

module.exports = { publish, updatePackageVersion, copyPackageToDist };
