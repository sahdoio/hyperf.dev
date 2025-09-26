module.exports = {
  apps: [{
    name: 'hyperf.dev',
    cwd: '/home/forge/hyperf.dev',      // ← update if your path is different
    script: '.output/server/index.mjs', // nuxt/nitro entry
    exec_mode: 'fork',                  // keep it simple (1 process)
    instances: 1,
    watch: false,
    autorestart: true,
    env: {
      NODE_ENV: 'production',
      HOST: '127.0.0.1',
      PORT: '3000'
      // (nuxt also accepts NITRO_HOST/NITRO_PORT if you prefer)
    }
  }]
}