# Blogsley Apollo :moon: :sunny:

## Description

Blogsley Server using Apollo, TypeORM & TypeGraphQL

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn start
```

## Pushing the Schema to the [Apollo Registry](https://www.apollographql.com/)

```bash
npx apollo service:push --endpoint=http://localhost:5000
```

## Loading fixtures

```bash
fixtures ./fixtures --config ./typeorm.config.ts --sync --require=ts-node/register --require=tsconfig-paths/register
```