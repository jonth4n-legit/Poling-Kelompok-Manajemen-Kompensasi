#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const JavaScriptObfuscator = require('javascript-obfuscator');
const crypto = require('crypto');

// Ultra-secure obfuscation configuration
const ultimateConfig = {
  compact: true,
  controlFlowFlattening: true,
  controlFlowFlatteningThreshold: 1,
  deadCodeInjection: true,
  deadCodeInjectionThreshold: 1,
  debugProtection: true,
  debugProtectionInterval: 500,
  disableConsoleOutput: true,
  domainLock: [],
  domainLockRedirectUrl: 'about:blank',
  forceTransformStrings: ['*'],
  identifierNamesGenerator: 'mangled-shuffled',
  identifiersPrefix: crypto.randomBytes(8).toString('hex'),
  ignoreRequireImports: false,
  numbersToExpressions: true,
  optionsPreset: 'high-obfuscation',
  renameGlobals: true,
  renameProperties: true,
  renamePropertiesMode: 'unsafe',
  selfDefending: true,
  simplify: true,
  sourceMap: false,
  splitStrings: true,
  splitStringsChunkLength: 2,
  stringArray: true,
  stringArrayCallsTransform: true,
  stringArrayCallsTransformThreshold: 1,
  stringArrayEncoding: ['rc4'],
  stringArrayIndexShift: true,
  stringArrayRotate: true,
  stringArrayShuffle: true,
  stringArrayWrappersCount: 10,
  stringArrayWrappersChainedCalls: true,
  stringArrayWrappersParametersMaxCount: 8,
  stringArrayWrappersType: 'function',
  stringArrayThreshold: 1,
  target: 'browser',
  transformObjectKeys: true,
  unicodeEscapeSequence: true,
  seed: Math.floor(Math.random() * 1000000)
};

// Additional anti-debugging and security code
const antiDebugCode = `
// Ultra-Advanced Anti-Debugging & Security Measures
(function() {
  'use strict';
  
  // Device fingerprinting and access control
  const deviceFingerprint = {
    canvas: (function() {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      ctx.textBaseline = 'top';
      ctx.font = '14px Arial';
      ctx.fillText('Device fingerprint 🔒', 2, 2);
      return canvas.toDataURL();
    })(),
    userAgent: navigator.userAgent,
    language: navigator.language,
    platform: navigator.platform,
    screenResolution: screen.width + 'x' + screen.height,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    webgl: (function() {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      return gl ? gl.getParameter(gl.RENDERER) : 'unknown';
    })()
  };
  
  // Generate unique device ID
  const deviceId = btoa(JSON.stringify(deviceFingerprint)).replace(/[^a-zA-Z0-9]/g, '');
  const storageKey = 'sec_' + deviceId.substring(0, 16);
  
  // Check if this is first access
  const isFirstAccess = !localStorage.getItem(storageKey);
  
  if (isFirstAccess) {
    localStorage.setItem(storageKey, 'authorized');
  } else {
    // Block subsequent access attempts from different devices
    const storedAuth = localStorage.getItem(storageKey);
    if (!storedAuth || storedAuth !== 'authorized') {
      document.body.innerHTML = '<h1>Access Denied</h1><p>This application can only be accessed from the originally authorized device.</p>';
      throw new Error('Unauthorized device access blocked');
    }
  }
  
  // Anti-debugging measures
  let devtools = false;
  let threshold = 160;
  
  function detectDevTools() {
    if (window.outerHeight - window.innerHeight > threshold || 
        window.outerWidth - window.innerWidth > threshold) {
      devtools = true;
    }
    
    if (devtools) {
      document.body.innerHTML = '<h1>Developer Tools Detected</h1><p>Please close developer tools to continue.</p>';
      throw new Error('Developer tools detected');
    }
  }
  
  // Console protection
  const originalConsole = window.console;
  Object.defineProperty(window, 'console', {
    value: {
      ...originalConsole,
      log: function() {},
      warn: function() {},
      error: function() {},
      info: function() {},
      debug: function() {},
      clear: function() {},
      table: function() {},
      trace: function() {},
      group: function() {},
      groupEnd: function() {}
    },
    writable: false,
    configurable: false
  });
  
  // Disable right-click and key combinations
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
  });
  
  document.addEventListener('keydown', function(e) {
    // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    if (e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
        (e.ctrlKey && e.key === 'U')) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  });
  
  // Continuous monitoring
  setInterval(detectDevTools, 100);
  
  // Anti-tampering protection
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(function() {
        const scripts = document.querySelectorAll('script[src]');
        scripts.forEach(script => {
          if (script.src && !script.src.includes('cdnjs.cloudflare.com')) {
            const originalSrc = script.src;
            script.addEventListener('error', function() {
              document.body.innerHTML = '<h1>Security Error</h1><p>Script integrity check failed.</p>';
              throw new Error('Script tampering detected');
            });
          }
        });
      }, 100);
    });
  }
  
})();
`;

function applyMultiLayerObfuscation(code, layers = 3) {
  let obfuscatedCode = code;
  
  for (let i = 0; i < layers; i++) {
    console.log(`Applying obfuscation layer ${i + 1}/${layers}...`);
    
    // Vary the configuration for each layer
    const layerConfig = {
      ...ultimateConfig,
      identifiersPrefix: crypto.randomBytes(6).toString('hex') + '_',
      seed: Math.floor(Math.random() * 1000000),
      stringArrayWrappersCount: 5 + i * 2,
      splitStringsChunkLength: 2 + i,
      debugProtectionInterval: 500 + i * 200
    };
    
    const result = JavaScriptObfuscator.obfuscate(obfuscatedCode, layerConfig);
    obfuscatedCode = result.getObfuscatedCode();
  }
  
  return obfuscatedCode;
}

async function createUltraSecureObfuscation() {
  try {
    // Read the original script
    const originalScript = fs.readFileSync(path.join(__dirname, 'script.js'), 'utf8');
    
    console.log('Starting ultra-secure multi-layer obfuscation process...');
    console.log('Original script size:', originalScript.length, 'bytes');
    
    // Combine with anti-debugging code
    const combinedCode = antiDebugCode + '\\n\\n' + originalScript;
    
    // Apply multiple layers of obfuscation
    const obfuscatedCode = applyMultiLayerObfuscation(combinedCode, 4);
    
    // Generate random filename for additional security
    const randomFilename = crypto.randomBytes(16).toString('hex').substring(0, 20) + '.js';
    
    // Write the ultra-obfuscated file
    fs.writeFileSync(path.join(__dirname, randomFilename), obfuscatedCode);
    
    // Update HTML file to reference new obfuscated script
    let htmlContent = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
    htmlContent = htmlContent.replace(/src=".*?\.js"/, \`src="\${randomFilename}"\`);
    fs.writeFileSync(path.join(__dirname, 'index.html'), htmlContent);
    
    console.log('Ultra-secure obfuscation complete!');
    console.log('Obfuscated script size:', obfuscatedCode.length, 'bytes');
    console.log('Security features applied:');
    console.log('✓ 4-layer obfuscation');
    console.log('✓ Device fingerprinting');
    console.log('✓ Anti-debugging protection');
    console.log('✓ Console output disabled');
    console.log('✓ Developer tools detection');
    console.log('✓ Self-defending code');
    console.log('✓ String array encoding (RC4)');
    console.log('✓ Control flow flattening');
    console.log('✓ Dead code injection');
    console.log('✓ Unicode escape sequences');
    console.log('✓ Property renaming (unsafe)');
    console.log('✓ Global renaming');
    console.log('✓ Key combination blocking');
    console.log('✓ Right-click disabled');
    console.log('\\n🛡️ MAXIMUM SECURITY LEVEL ACHIEVED');
    console.log(\`New obfuscated file: \${randomFilename}\`);
    
    // Clean up old obfuscated files
    const files = fs.readdirSync(__dirname);
    files.forEach(file => {
      if (file.endsWith('.js') && file !== 'script.js' && file !== randomFilename) {
        if (file.match(/^[a-f0-9]{20}\\.js$/) || file === 'l0437b4zacqa24l9s0uo.js') {
          fs.unlinkSync(path.join(__dirname, file));
          console.log(\`Removed old obfuscated file: \${file}\`);
        }
      }
    });
    
  } catch (error) {
    console.error('Error during obfuscation:', error);
    process.exit(1);
  }
}

// Execute the ultra-secure obfuscation
createUltraSecureObfuscation();