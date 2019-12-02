const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    msg: 'hi koa2 ejs...',
    name: 'James Gosling',
    isMe: true,
    blogs: [
      {
        id: 1, 
        title: 'koa2项目实战'
      },
      {
        id: 2,
        title: 'Node.js监控实战'
      },
      {
        id: 3,
        title: 'SSR从入门到放弃'
      }
    ]
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
