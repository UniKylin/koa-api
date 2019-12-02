const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

// 测试获取 query params
router.get('/profile/:userName', async (ctx, next) => {
  const { userName } = ctx.params
  ctx.body = {
    userName,
  }
})

// 测试多参数获取
router.get('/profile/:userName/:page', async (ctx, next) => {
  const { userName, page } = ctx.params
  ctx.body = {
    userName,
    page,
  }
})

router.post('/login', async (ctx) => {
  const { username, password } = ctx.request.body
  ctx.body = {
    code: 0,
    data: {
      username,
      password,
      city: '上海'
    }
  }
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
