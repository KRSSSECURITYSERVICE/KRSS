// Run: node scripts/hash-password.js
// Enter a unique password when prompted. The password is never written to disk.
const crypto = require('crypto');
const readline = require('readline');
const rl = readline.createInterface({input:process.stdin,output:process.stdout,terminal:true});
rl.question('Create a strong KRSS CEO/admin password: ', password => {
  rl.close();
  if (!password || password.length < 12) {
    console.error('Use at least 12 characters. No hash generated.');
    process.exitCode = 1;
    return;
  }
  const salt = crypto.randomBytes(16).toString('hex');
  crypto.scrypt(password, salt, 64, {N:16384,r:8,p:1}, (err, key) => {
    if (err) { console.error('Could not generate hash.'); process.exitCode=1; return; }
    console.log('ADMIN_PASSWORD_HASH=scrypt$'+salt+'$'+key.toString('hex'));
  });
});
