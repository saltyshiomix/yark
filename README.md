## Development on MacOS

```zsh
# install and setup postgresql@11
$ brew install postgresql@11
$ brew services start postgresql@11
$ createuser -P yarkuser
$ createdb yarkdb -O yarkuser

# install and setup yark
$ git clone git@github.com:saltyshiomix/yark.git
$ cd yark
$ yarn
$ cp prisma/.env.example prisma/.env
$ yarn prisma2 generate
$ yarn prisma2 migrate up --experimental
$ yarn seed
$ yarn dev
```

Enter `test@test.com` / `testpass`, and you will see `You are now logged in!`.
